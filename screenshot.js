import { chromium } from 'playwright';

async function captureScreenshot() {
  const browser = await chromium.launch();

  // Create context with square dimensions
  const context = await browser.newContext({
    viewport: { width: 600, height: 600 },
    deviceScaleFactor: 2,
    locale: 'en-US',
  });

  const page = await context.newPage();

  console.log('📸 Navigating to NYC Sound site (square view)...');
  await page.goto('https://sound.realname.studio', {
    waitUntil: 'networkidle',
    timeout: 30000
  });

  // Wait a bit for any animations to settle
  await page.waitForTimeout(2000);

  console.log('📸 Capturing square screenshot...');
  await page.screenshot({
    path: './public/screenshots/nyc-sound-mobile.jpg',
    type: 'jpeg',
    quality: 90,
    fullPage: false
  });

  console.log('✅ Square screenshot saved to ./public/screenshots/nyc-sound-mobile.jpg');

  await browser.close();
}

captureScreenshot().catch(error => {
  console.error('❌ Error capturing screenshot:', error);
  process.exit(1);
});
