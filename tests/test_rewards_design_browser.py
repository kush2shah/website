"""Rendered design integration: run against a built production preview."""
import asyncio
import json
import os
import tempfile
from pathlib import Path
from urllib.parse import urljoin
from playwright.async_api import async_playwright

BASE = os.getenv('REWARDS_TEST_URL', 'http://127.0.0.1:4321/friends/rewards-map/')
OUT = Path(os.getenv('REWARDS_TEST_OUTPUT', tempfile.mkdtemp(prefix='rewards-design-')))
CHROME = os.getenv('CHROME_PATH', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome')

async def main():
    OUT.mkdir(parents=True, exist_ok=True)
    results = []
    async with async_playwright() as p:
        browser = await p.chromium.launch(executable_path=CHROME, headless=True)
        for theme in ('light', 'dark'):
            for width, height in ((390, 844), (430, 932), (1440, 1000)):
                context = await browser.new_context(viewport={'width': width, 'height': height}, color_scheme=theme, reduced_motion='reduce')
                page = await context.new_page()
                reference = None
                errors = []
                page.on('pageerror', lambda e: errors.append(str(e)))
                for route in ('/projects/', '/', '/friends/', '/friends/rewards-map/'):
                    response = await page.goto(urljoin(BASE, route), wait_until='networkidle')
                    assert response.status == 200
                    assert await page.locator('nav[aria-label="Primary"] a[href^="/friends/"]').count() == 0
                    assert await page.evaluate('document.documentElement.scrollWidth === innerWidth'), (theme, width, route)
                    if route == '/projects/':
                        reference = await page.locator('h1').evaluate('(e)=>{let s=getComputedStyle(e);return [s.fontFamily,s.fontWeight,s.fontSize,s.color]}')
                    if route.startswith('/friends/'):
                        actual = await page.locator('h1').evaluate('(e)=>{let s=getComputedStyle(e);return [s.fontFamily,s.fontWeight,s.fontSize,s.color]}')
                        assert actual == reference, (actual, reference)
                        await page.screenshot(path=str(OUT / f'{theme}-{width}-{"map" if "rewards-map" in route else "friends"}.png'))
                # Explicit computed colors guard against hardcoded dark SVG surfaces in light mode.
                colors = await page.evaluate('''()=>{
                    const root=document.querySelector('.rewards-map'), probe=document.createElement('span');
                    root.append(probe);probe.style.color='var(--text)';const ink=getComputedStyle(probe).color;
                    const bg=getComputedStyle(document.body).backgroundColor;probe.remove();
                    return {ink,bg,label:getComputedStyle(document.querySelector('#graph .nlabel')).fill,
                      node:getComputedStyle(document.querySelector('#graph .node rect')).fill};
                }''')
                assert colors['label'] == colors['ink'], colors
                assert colors['node'] != colors['ink'], colors
                if width < 701:
                    for group, program, title in (('cards', 'marriott', 'Cards & currencies'), ('travel', 'marriott', 'Travel programs'), ('hotels', 'chase', 'Hotel programs'), ('everyday', 'marriott', 'Everyday partners')):
                        await page.select_option('#mobile-program', program)
                        await page.locator(f'[data-group="{group}"]').click()
                        assert await page.locator('.mobile-list-title h2').inner_text() == title
                        assert await page.locator('.mobile-relation').count() > 0
                    await page.locator('.mobile-terms summary').first.click()
                    assert await page.locator('.mobile-terms a').first.is_visible()
                    await page.screenshot(path=str(OUT / f'{theme}-{width}-expanded.png'))
                    await page.get_by_role('button', name='Full network', exact=True).click()
                else:
                    await page.select_option('#focus', 'chase')
                    await page.locator('#details .relation').first.click()
                    assert await page.locator('#details .sources a').count() > 0
                    await page.locator('#search').fill('Hyatt')
                    assert await page.locator('#graph .node').count() > 0
                    await page.get_by_role('button', name='Clear focus', exact=True).click()
                async with page.expect_download() as download_info:
                    await page.get_by_role('button', name='Save SVG', exact=True).click()
                download = await download_info.value
                export_path = OUT / f'{theme}-{width}-network.svg'
                await download.save_as(export_path)
                assert '<svg' in export_path.read_text()
                standalone = await context.new_page()
                await standalone.set_content(export_path.read_text())
                assert await standalone.locator('.nlabel').first.evaluate('(e)=>getComputedStyle(e).fill') == colors['ink']
                assert await standalone.locator('svg > rect').evaluate('(e)=>getComputedStyle(e).fill') == colors['bg'], (await standalone.locator('svg > rect').evaluate('(e)=>getComputedStyle(e).fill'), colors)
                assert await standalone.locator('.edge').first.evaluate('(e)=>getComputedStyle(e).fill') == 'none'
                await standalone.close()
                await page.screenshot(path=str(OUT / f'{theme}-{width}-network.png'))
                guide = page.locator('.breadcrumb a[href="/cc"]')
                assert await guide.is_visible()
                redirect = await context.request.get(urljoin(BASE, '/cc'))
                assert redirect.status == 200
                assert 'https://kushah.notion.site/cc' in await redirect.text()
                await page.locator('.breadcrumb a[href="/friends/"]').click()
                assert page.url.endswith('/friends/')
                await page.locator('a.tool').click()
                assert page.url.endswith('/friends/rewards-map/')
                assert not errors, errors
                results.append({'theme': theme, 'width': width, 'passed': True})
                await context.close()
        await browser.close()
    print(json.dumps(results))

if __name__ == '__main__':
    asyncio.run(main())
