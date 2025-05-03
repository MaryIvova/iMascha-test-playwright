import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://kms-qa-08.lighthouse-cloud.com/kms/lh/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('cm');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Lighthouse@cm123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Manager' }).click();
  await page.getByRole('listbox').getByRole('option', { name: 'Content Manager' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Folder 1 [46]' }).click({
    button: 'right',
  });
  await page.getByRole('button', { name: 'Folder 1 [46]' }).click({
    button: 'right',
  });
  await page
    .getByRole('listitem')
    .filter({ hasText: 'Folder 1[46]Sorted by:' })
    .getByRole('img')
    .click({
      button: 'right',
    });
  await page.getByRole('button', { name: 'Folder 1 [46]' }).click({
    button: 'right',
  });
  await page.locator('span').filter({ hasText: 'Folder 1[46]' }).locator('span').first().click();
  await page.getByRole('button', { name: 'Folder 1 [46]' }).click({
    button: 'right',
  });

  await page.getByRole('link', { name: 'New Item' }).click();
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('general');
  await page.getByText('General').click();
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
    .fill('marrias');
  await page.locator('iframe[name="itemscope"]').contentFrame().locator('nav').click();
  await page.getByRole('listitem', { name: 'Save', exact: true }).getByRole('img').click();
});
