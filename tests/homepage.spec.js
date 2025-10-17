import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load homepage successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/realname studio/i);
  });

  test('should display main logo with correct text', async ({ page }) => {
    const logo = page.locator('.logo-card h1');
    await expect(logo).toBeVisible();
    await expect(logo).toContainText('REALNAME');
    await expect(logo).toContainText('STUDIO');
  });

  test('should have working CTA buttons', async ({ page }) => {
    const buildsBtn = page.locator('a.btn-primary');
    const connectBtn = page.locator('a.btn:not(.btn-primary)');

    await expect(buildsBtn).toBeVisible();
    await expect(buildsBtn).toContainText('BUILDS');

    await expect(connectBtn).toBeVisible();
    await expect(connectBtn).toContainText('CONNECT');

    // Test that buttons navigate correctly
    await expect(buildsBtn).toHaveAttribute('href', '#builds');
    await expect(connectBtn).toHaveAttribute('href', '/contact.html');
  });

  test('should display scroll indicator', async ({ page }) => {
    const scrollIndicator = page.locator('.scroll-indicator');
    await expect(scrollIndicator).toBeVisible();
    await expect(scrollIndicator).toContainText('↓');
  });

  test('should scroll to builds section when scroll indicator clicked', async ({ page }) => {
    // Wait for animations to stabilize
    await page.waitForTimeout(2000);

    const scrollIndicator = page.locator('.scroll-indicator');
    await scrollIndicator.click({ force: true });
    await page.waitForTimeout(1500); // Wait for smooth scroll

    const buildsSection = page.locator('#builds');
    await expect(buildsSection).toBeInViewport();
  });

  test('should display builds section', async ({ page }) => {
    const buildsSection = page.locator('.sites-section');
    await expect(buildsSection).toBeVisible();

    const sectionTitle = page.locator('.sites-section .section-title');
    await expect(sectionTitle).toContainText('BUILDS');
  });

  test('should display NYC Sound project', async ({ page }) => {
    const nycSoundCard = page.locator('[data-site="brooklyn"]');
    await expect(nycSoundCard).toBeVisible();

    await expect(nycSoundCard.locator('.site-icon')).toContainText('♪');
    await expect(nycSoundCard.locator('h3')).toContainText('NYC');
    await expect(nycSoundCard.locator('h3')).toContainText('SOUND');
  });

  test('should open NYC Sound modal when clicked', async ({ page }) => {
    await page.locator('[data-site="brooklyn"]').click();

    const modal = page.locator('#siteModal');
    await expect(modal).toHaveClass(/open/);

    await expect(modal).toContainText('NYC Sound');
    await expect(modal).toContainText('Node.js');
    await expect(modal).toContainText('Leaflet');

    const visitBtn = modal.locator('.visit-btn');
    await expect(visitBtn).toBeVisible();
    await expect(visitBtn).toHaveAttribute('href', /sound\.realnamestudio\.com/);
  });

  test('should close modal when X button clicked', async ({ page }) => {
    await page.locator('[data-site="brooklyn"]').click();

    const modal = page.locator('#siteModal');
    await expect(modal).toHaveClass(/open/);

    await page.locator('.site-modal-close').click();
    await expect(modal).not.toHaveClass(/open/);
  });

  test('should close modal when escape key pressed', async ({ page }) => {
    await page.locator('[data-site="brooklyn"]').click();

    const modal = page.locator('#siteModal');
    await expect(modal).toHaveClass(/open/);

    await page.keyboard.press('Escape');
    await expect(modal).not.toHaveClass(/open/);
  });

  test('should display footer with correct content', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    await expect(footer).toContainText('realname studio © 2025');
    await expect(footer).toContainText('made with ♥ in brooklyn');
  });

  test('should display dynamic quote in footer', async ({ page }) => {
    await page.waitForTimeout(2000); // Wait for API call

    const quoteText = page.locator('#quoteText');
    const quoteAuthor = page.locator('#quoteAuthor');

    // Quote should be loaded (either from API or fallback)
    const quoteContent = await quoteText.textContent();
    expect(quoteContent).toBeTruthy();
    expect(quoteContent.length).toBeGreaterThan(10);

    const authorContent = await quoteAuthor.textContent();
    expect(authorContent).toContain('—');
  });

  test('should display HEY floating action button', async ({ page }) => {
    const fab = page.locator('.fab');
    await expect(fab).toBeVisible();
    await expect(fab).toContainText('HEY');
    await expect(fab).toHaveAttribute('href', '/contact.html');
  });

  test('should have working parallax effect on hero shapes', async ({ page }) => {
    const shape = page.locator('.hero-shape').first();

    // Get initial transform
    const initialTransform = await shape.evaluate(el => el.style.transform);

    // Move mouse to trigger parallax
    await page.mouse.move(100, 100);
    await page.waitForTimeout(100);

    // Get transform after mouse move
    const afterTransform = await shape.evaluate(el => el.style.transform);

    // Transform should have changed
    expect(afterTransform).not.toBe(initialTransform);
  });

  test('should be responsive on mobile', async ({ page, isMobile }) => {
    if (!isMobile) {
      test.skip();
    }

    // Check that mobile layout is applied
    const logo = page.locator('.logo-card h1');
    const fontSize = await logo.evaluate(el =>
      window.getComputedStyle(el).fontSize
    );

    // Mobile should have smaller font size (around 48-56px)
    expect(parseInt(fontSize)).toBeLessThan(70);
  });
});

test.describe('Accessibility', () => {
  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');

    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();

    const h2 = page.locator('h2');
    await expect(h2).toBeVisible();
  });

  test('should have alt text for important elements', async ({ page }) => {
    await page.goto('/');

    // No images to test, but verify interactive elements are accessible
    const buttons = page.locator('button, a[role="button"]');
    const count = await buttons.count();

    for (let i = 0; i < count; i++) {
      const button = buttons.nth(i);
      const text = await button.textContent();
      expect(text?.trim()).toBeTruthy();
    }
  });
});

test.describe('Performance', () => {
  test('should load within reasonable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;

    // Should load within 3 seconds
    expect(loadTime).toBeLessThan(3000);
  });
});
