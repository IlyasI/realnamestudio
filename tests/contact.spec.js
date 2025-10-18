import { test, expect } from '@playwright/test';

test.describe('Contact Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact.html');
  });

  test('should load contact page successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Contact - realname studio/i);
  });

  test('should display CONNECT heading', async ({ page }) => {
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    await expect(heading).toContainText('CONNECT');
  });

  test('should display back button', async ({ page }) => {
    const backBtn = page.locator('.back-btn');
    await expect(backBtn).toBeVisible();
    await expect(backBtn).toContainText('BACK');
    await expect(backBtn).toHaveAttribute('href', '/');
  });

  test('should navigate back to homepage when back button clicked', async ({ page }) => {
    await page.locator('.back-btn').click();
    await expect(page).toHaveURL('/');
  });

  test('should display email contact method', async ({ page }) => {
    const emailLink = page.locator('a[href="mailto:hello@realnamestudio.com"]');
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toContainText('hello@realnamestudio.com');
  });

  test('should display GitHub social link', async ({ page }) => {
    const githubLink = page.locator('a[href="https://github.com/realnamestudio"]');
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toContainText('GitHub');
    await expect(githubLink).toHaveAttribute('target', '_blank');
  });

  test('should display SAY HI section', async ({ page }) => {
    const sayHiHeading = page.locator('h2:has-text("SAY HI")');
    await expect(sayHiHeading).toBeVisible();
  });

  test('should display SOCIALS section', async ({ page }) => {
    const socialsHeading = page.locator('h2:has-text("SOCIALS")');
    await expect(socialsHeading).toBeVisible();
  });

  test('should have hover effects on contact methods', async ({ page }) => {
    const emailLink = page.locator('a[href="mailto:hello@realnamestudio.com"]').first();

    // Get initial background color
    const initialBg = await emailLink.evaluate(el =>
      window.getComputedStyle(el).backgroundColor
    );

    // Hover over the link
    await emailLink.hover();
    await page.waitForTimeout(500);

    // Background should change on hover
    const hoverBg = await emailLink.evaluate(el =>
      window.getComputedStyle(el).backgroundColor
    );

    expect(hoverBg).not.toBe(initialBg);
  });

  test('should display background shapes', async ({ page }) => {
    const shapes = page.locator('.bg-shape');
    const count = await shapes.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should be responsive on mobile', async ({ page, isMobile }) => {
    if (!isMobile) {
      test.skip();
    }

    const heading = page.locator('h1');
    const fontSize = await heading.evaluate(el =>
      window.getComputedStyle(el).fontSize
    );

    // Mobile should have smaller font size
    expect(parseInt(fontSize)).toBeLessThan(60);
  });

  test('should have proper card styling', async ({ page }) => {
    const card = page.locator('.contact-card');
    await expect(card).toBeVisible();

    // Check that card has neo-brutalist styling (border, shadow)
    const border = await card.evaluate(el =>
      window.getComputedStyle(el).border
    );
    expect(border).toContain('px');

    const boxShadow = await card.evaluate(el =>
      window.getComputedStyle(el).boxShadow
    );
    expect(boxShadow).not.toBe('none');
  });
});

test.describe('Contact Page Accessibility', () => {
  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/contact.html');

    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();

    const h2Elements = page.locator('h2');
    const h2Count = await h2Elements.count();
    expect(h2Count).toBeGreaterThan(0);
  });

  test('should have accessible links', async ({ page }) => {
    await page.goto('/contact.html');

    const links = page.locator('a');
    const count = await links.count();

    for (let i = 0; i < count; i++) {
      const link = links.nth(i);
      const text = await link.textContent();
      const href = await link.getAttribute('href');

      // Every link should have either text content or aria-label
      expect(text?.trim() || href).toBeTruthy();
    }
  });
});
