import asyncio,os,json
import tempfile
from pathlib import Path
from playwright.async_api import async_playwright
BASE=os.getenv('REWARDS_TEST_URL','http://127.0.0.1:4321/friends/rewards-map/')
OUT=Path(os.getenv('REWARDS_TEST_OUTPUT',tempfile.mkdtemp(prefix='rewards-browser-')))
OUT.mkdir(parents=True,exist_ok=True)
async def main():
 async with async_playwright() as p:
  browser=await p.chromium.launch(executable_path=os.getenv('CHROME_PATH','/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'),headless=True)
  page=await browser.new_page(viewport={'width':390,'height':844},device_scale_factor=2,is_mobile=True,has_touch=True)
  errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
  await page.goto(BASE,wait_until='networkidle')
  assert await page.locator('nav[aria-label="Primary"] a[href="/friends/"]').count()==0
  assert await page.locator('#mobile-explorer').is_visible()
  assert not await page.locator('.rewards-map .layout').is_visible()
  assert await page.locator('.mobile-hub [data-group]').count()==4
  assert await page.locator('.mobile-hub path').count()==4
  assert await page.locator('.mobile-relation').count()<=5
  assert await page.evaluate('document.documentElement.scrollWidth===innerWidth')
  await page.select_option('#mobile-program','marriott')
  assert await page.locator('.mobile-relation').count()==5
  await page.locator('#mobile-more').click()
  assert await page.locator('.mobile-relation').count()>5
  await page.screenshot(path=str(OUT/'mobile-v3-marriott.png'),full_page=False)
  await page.locator('[data-group="everyday"]').click()
  assert await page.locator('.mobile-relation').count()>0
  await page.locator('.mobile-terms summary').first.click()
  assert await page.locator('.mobile-terms').first.locator('a').first.is_visible()
  await page.select_option('#mobile-program','uber')
  await page.locator('[data-group="travel"]').click()
  assert await page.locator('.mobile-relation').count()==1
  assert await page.locator('.mobile-relation').first.inner_text()
  await page.locator('.mobile-other').filter(has_text='Delta').click()
  assert await page.locator('#mobile-program').input_value()=='delta'
  await page.get_by_role('button',name='Full network',exact=True).click()
  assert await page.locator('.rewards-map .layout').is_visible()
  assert await page.locator('#graph .node').count()==await page.evaluate('JSON.parse(document.getElementById("data").textContent).nodes.length')
  await page.get_by_role('button',name='Explore a program',exact=True).click()
  assert not await page.locator('.rewards-map .layout').is_visible()
  await page.set_viewport_size({'width':430,'height':932})
  assert await page.evaluate('document.documentElement.scrollWidth===innerWidth')
  desktop=await browser.new_page(viewport={'width':1440,'height':1000})
  await desktop.goto(BASE,wait_until='networkidle')
  assert not await desktop.locator('#mobile-explorer').is_visible()
  assert await desktop.locator('.rewards-map .layout').is_visible()
  await desktop.screenshot(path=str(OUT/'desktop.png'),full_page=True)
  nojs=await browser.new_context(java_script_enabled=False,viewport={'width':390,'height':844})
  n=await nojs.new_page();await n.goto(BASE,wait_until='networkidle')
  assert await n.locator('#static-map img').is_visible()
  assert await n.locator('#static-map img').evaluate('(img)=>img.complete && img.naturalWidth>0')
  await n.screenshot(path=str(OUT/'no-js.png'),full_page=True)
  await desktop.goto(BASE.replace('/friends/rewards-map/','/friends/'),wait_until='networkidle')
  assert await desktop.get_by_role('heading',name='Friends',exact=True).is_visible()
  await desktop.locator('a.tool').click()
  assert '/friends/rewards-map/' in desktop.url
  await page.set_viewport_size({'width':430,'height':932})
  await page.select_option('#mobile-program','chase')
  await page.screenshot(path=str(OUT/'mobile-430.png'),full_page=True)
  assert not errors,errors
  print(json.dumps({'mobile390':'passed','mobile430':'passed','marriottFourBranchMap':'passed','groupDetailsAndSources':'passed','navigateToDelta':'passed','fullNetwork61Nodes':'passed','desktop':'passed','noJSFallback':'passed','errors':errors}))
  await browser.close()
asyncio.run(main())
