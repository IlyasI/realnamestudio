import { chromium } from 'playwright';

async function captureScreenshot() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Set viewport to a nice desktop size
  await page.setViewportSize({ width: 1200, height: 800 });

  console.log('📸 Navigating to NYC Sound site...');
  await page.goto('https://sound.realname.studio', {
    waitUntil: 'networkidle',
    timeout: 30000
  });

  // Wait a bit for any animations to settle
  await page.waitForTimeout(2000);

  console.log('📸 Capturing screenshot...');
  await page.screenshot({
    path: './public/screenshots/nyc-sound.jpg',
    type: 'jpeg',
    quality: 90,
    fullPage: false
  });

  console.log('✅ Screenshot saved to ./public/screenshots/nyc-sound.jpg');

  await browser.close();
}

captureScreenshot().catch(error => {
  console.error('❌ Error capturing screenshot:', error);
  process.exit(1);
});
