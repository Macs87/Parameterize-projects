import { test, expect } from '../src/fixtures'; 

test.describe('Theme switching tests', () => {
  test('should switch to the specified theme and take screenshot', async ({ page, theme }) => {
    
    await page.screenshot({ path: `screenshot_${theme}_mode.png` });
  });
});