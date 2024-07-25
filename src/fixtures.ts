import { test as base, expect } from '@playwright/test';

type TestFixtures = {
    theme: string;
  };

const test = base.extend<TestFixtures>({
  theme: ['light', { scope: 'worker' }],
});

test.beforeEach(async ({ page, theme }) => {
  
  await page.goto('https://playwright.dev/');

  if (theme === 'light') {
    const themeToggleButton = page.locator('svg.lightToggleIcon_pyhR');
    await expect(themeToggleButton).toBeVisible();
    await themeToggleButton.click();
    await page.waitForTimeout(2000); 
  }
});

test.afterEach(async ({ page }) => {
  });

export { test, expect };