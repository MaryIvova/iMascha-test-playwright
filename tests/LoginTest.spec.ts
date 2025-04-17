import { test, expect } from '@playwright/test';

test('LogInKMS', async ({ page }) => {
  await page.goto('https://kms-qa-01.lighthouse-cloud.com/');

  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Login' })).toHaveCSS('font-size', '44px');
  await expect(page.getByRole('heading', { name: 'Login' })).toHaveCSS('font-weight', '111.66');
  // await expect(page.getByText('text', 'username')); //.click({ button: 'right' });
  await page.waitForTimeout(3000);
});

test('LogInKMS2', async ({ page }) => {
  await page.goto('https://kms-qa-08.lighthouse-cloud.com/kms/lh/login');

  await page.getByText('Username', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('cm');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Lighthouse@cm123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Manager' }).click();
  await page.getByRole('listbox').getByRole('option', { name: 'Content Manager' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
});
