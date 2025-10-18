import { chromium } from 'playwright';

async function captureScreenshot() {
  const browser = await chromium.launch();

  // Create context with iPhone portrait dimensions (9:19.5 ratio)
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    locale: 'en-US',
  });

  const page = await context.newPage();

  console.log('📸 Navigating to NYC Sound site (iPhone portrait view)...');
  await page.goto('https://sound.realname.studio', {
    waitUntil: 'networkidle',
    timeout: 30000
  });

  // Wait a bit for any animations to settle
  await page.waitForTimeout(2000);

  console.log('📸 Capturing iPhone portrait screenshot...');
  await page.screenshot({
    path: './public/screenshots/nyc-sound-mobile.jpg',
    type: 'jpeg',
    quality: 90,
    fullPage: false
  });

  console.log('✅ iPhone portrait screenshot saved to ./public/screenshots/nyc-sound-mobile.jpg');

  await browser.close();
}

captureScreenshot().catch(error => {
  console.error('❌ Error capturing screenshot:', error);
  process.exit(1);
});
