import { test, expect } from '@playwright/test';

test('Google search test', async ({ browser }) => {
  const context = await browser.newContext({ viewport: null });
  const page = await context.newPage();

  await page.goto('https://www.google.com');

  // Directly search (no popup handling)
  await page.locator('textarea[name="q"]').fill('Playwright automation');
  await page.keyboard.press('Enter');

  //await expect(page).toHaveTitle(/Playwright automation/i);
});
