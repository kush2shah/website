"""Real CDP touch regression tests; run against dev or production preview."""
import asyncio
import json
import os
from pathlib import Path
import tempfile
from playwright.async_api import async_playwright

BASE = os.getenv('REWARDS_TEST_URL', 'http://127.0.0.1:4321/friends/rewards-map/')
OUT = Path(os.getenv('REWARDS_TEST_OUTPUT', tempfile.mkdtemp(prefix='rewards-touch-')))
CHROME = os.getenv('CHROME_PATH', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome')


async def check(browser, width):
    page = await browser.new_page(viewport={'width': width, 'height': 844}, is_mobile=True, has_touch=True, device_scale_factor=2)
    errors = []; page.on('pageerror', lambda e: errors.append(str(e)))
    await page.goto(BASE, wait_until='networkidle')
    await page.get_by_role('button', name='Full network', exact=True).click()
    await page.locator('#graph').scroll_into_view_if_needed()
    box = await page.locator('#graph').bounding_box(); assert box['width'] == width, box
    async def read(): return list(map(float, (await page.locator('#graph').get_attribute('viewBox')).split()))
    cdp = await page.context.new_cdp_session(page)
    async def touch(kind, pts):
        await cdp.send('Input.dispatchTouchEvent', {'type': kind, 'touchPoints': [{'x': x, 'y': y, 'id': i, 'radiusX': 3, 'radiusY': 3} for i, x, y in pts]})
    initial = await read(); y = box['y'] + box['height'] * .45
    await touch('touchStart', [(0, 290, y)])
    for x in [260, 230, 200, 170, 140, 110]: await touch('touchMove', [(0, x, y)])
    await touch('touchEnd', [])
    dragged = await read(); assert dragged[0] > initial[0] + 100, (initial, dragged)
    # Height-only browser chrome resize must not reset pan.
    await page.set_viewport_size({'width': width, 'height': 900}); await page.wait_for_timeout(100)
    assert await read() == dragged
    await page.set_viewport_size({'width': width, 'height': 844}); await page.wait_for_timeout(100)
    assert await read() == dragged
    await touch('touchStart', [(0, 130, y), (1, 250, y)])
    for a, b in [(120, 260), (110, 270), (100, 280), (90, 290)]: await touch('touchMove', [(0, a, y), (1, b, y)])
    await touch('touchEnd', [])
    pinched = await read(); assert pinched[2] < dragged[2] * .8
    await page.get_by_role('button', name='Fit', exact=True).click(); assert await read() == initial
    node = await page.locator('#graph .node').first.bounding_box(); sx = node['x'] + node['width']/2; sy = node['y'] + node['height']/2
    await touch('touchStart', [(0, sx, sy)])
    for dx in [10, 20, 35, 50, 65]: await touch('touchMove', [(0, sx + dx, sy)])
    await touch('touchEnd', [])
    assert abs((await read())[0] - initial[0]) > 50
    assert await page.evaluate('window.__graphState.focus') == ''
    # Cancellation releases all gesture state; next gesture remains usable.
    await touch('touchStart', [(0, 200, y)]); await touch('touchCancel', [])
    assert await page.evaluate('graphPointers.size') == 0
    await page.get_by_role('button', name='Fit', exact=True).click()
    await page.wait_for_timeout(400)
    node = await page.locator('#graph .node').first.bounding_box(); sx = node['x'] + node['width']/2; sy = node['y'] + node['height']/2
    await touch('touchStart', [(0, sx, sy)]); await touch('touchEnd', [])
    assert await page.evaluate('window.__graphState.focus') == 'chase'
    assert await page.evaluate('document.documentElement.scrollWidth === innerWidth')
    await page.screenshot(path=str(OUT / f'touch-{width}.png'))
    assert not errors, errors
    await page.close()
    return {'width': width, 'drag': True, 'pinch': True, 'nodeOriginDrag': True, 'tap': True, 'fit': True, 'heightResize': True, 'cancel': True, 'errors': errors}


async def main():
    OUT.mkdir(parents=True, exist_ok=True)
    async with async_playwright() as p:
        browser = await p.chromium.launch(executable_path=CHROME, headless=True)
        print(json.dumps([await check(browser, w) for w in (390, 430)]))
        await browser.close()


if __name__ == '__main__': asyncio.run(main())
