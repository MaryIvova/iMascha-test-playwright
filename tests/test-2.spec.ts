import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://kms-qa-07.lighthouse-cloud.com/kms/lh/login');
  await page.getByText('Username', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('cm');
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('Kighhouse@cm123');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Username' }).dblclick();
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('group', { name: 'Login' }).click();
  await page.getByText('Password', { exact: true }).click();
  await page.getByRole('group', { name: 'Login' }).click();
  await page.getByText('Password', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Lighthouse@admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('cm');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Lighthouse@cm123');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('cm');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.goto('https://kms-qa-08.lighthouse-cloud.com/kms/lh/login');
  await page.getByText('Username', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('cmv');
  await page.getByText('Password', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Lighthouse@cm123');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('group', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('cm');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Manager' }).click();
  await page.getByRole('listbox').getByRole('option', { name: 'Content Manager' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Folder 5 [0]' }).click({
    button: 'right',
  });
  await page.getByRole('button', { name: 'Folder 5 [0]' }).click({
    button: 'right',
  });
  await page.getByRole('button', { name: 'Folder 5 [0]' }).click({
    button: 'right',
  });
  await page.getByText('General').first().click();
  await page.getByRole('button', { name: 'Create item' }).click();
  await page
    .locator('iframe[name="itemscope"]')
    .contentFrame()
    .getByRole('heading', { name: 'New Item' })
    .click();
  await page
    .locator('iframe[name="itemscope"]')
    .contentFrame()
    .locator('input[name="inplace_value"]')
    .fill('ggg');
  await page
    .locator('iframe[name="itemscope"]')
    .contentFrame()
    .getByText('Template: General')
    .click();
  await page
    .locator('iframe[name="itemscope"]')
    .contentFrame()
    .locator('div')
    .filter({ hasText: /^Offline$/ })
    .first()
    .click();
  await page
    .locator('iframe[name="itemscope"]')
    .contentFrame()
    .getByRole('option', { name: 'Online' })
    .locator('span')
    .nth(1)
    .click();
});
