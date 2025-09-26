import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/');
    
    // Check if the page loads
    await expect(page).toHaveTitle(/Professional Web Design/);
    
    // Check if main sections are present
    await expect(page.locator('h1')).toContainText('Transform Your Vision');
    await expect(page.locator('#about')).toBeVisible();
    await expect(page.locator('#portfolio')).toBeVisible();
    await expect(page.locator('#workflow')).toBeVisible();
    await expect(page.locator('#reviews')).toBeVisible();
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('should have working navigation', async ({ page }) => {
    await page.goto('/');
    
    // Test navigation links
    await page.click('a[href="#about"]');
    await expect(page.locator('#about')).toBeInViewport();
    
    await page.click('a[href="#portfolio"]');
    await expect(page.locator('#portfolio')).toBeInViewport();
    
    await page.click('a[href="#contact"]');
    await expect(page.locator('#contact')).toBeInViewport();
  });

  test('should toggle language', async ({ page }) => {
    await page.goto('/');
    
    // Check initial language (English)
    await expect(page.locator('h1')).toContainText('Transform Your Vision');
    
    // Click language toggle
    await page.click('button[aria-label*="Switch to"]');
    
    // Check if language changed (German)
    await expect(page.locator('h1')).toContainText('Verwandeln Sie Ihre Vision');
  });

  test('should have working contact form', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to contact section
    await page.click('a[href="#contact"]');
    await expect(page.locator('#contact')).toBeInViewport();
    
    // Fill contact form
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('textarea[name="message"]', 'This is a test message');
    
    // Check if form is filled
    await expect(page.locator('input[name="name"]')).toHaveValue('Test User');
    await expect(page.locator('input[name="email"]')).toHaveValue('test@example.com');
    await expect(page.locator('textarea[name="message"]')).toHaveValue('This is a test message');
  });

  test('should be responsive', async ({ page }) => {
    // Test desktop view
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.goto('/');
    await expect(page.locator('nav')).toBeVisible();
    
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload();
    await expect(page.locator('button[aria-label*="mobile menu"]')).toBeVisible();
  });

  test('should have proper accessibility', async ({ page }) => {
    await page.goto('/');
    
    // Check for skip link
    await expect(page.locator('a[href="#main-content"]')).toBeVisible();
    
    // Check for proper heading structure
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
    
    // Check for alt text on images (if any)
    const images = page.locator('img');
    const imageCount = await images.count();
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      expect(alt).toBeTruthy();
    }
  });
});
