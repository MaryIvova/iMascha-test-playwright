import { test, expect } from '@playwright/test';
import { AsyncLocalStorage } from 'async_hooks';
import { Page } from 'playwright-core';
import { Locator } from 'playwright-core';

test.use = { storageState: 'LoginCM.json' };
test('should create a new item', async ({ page }) => {
  await page.getByRole('button', { name: 'Folder 2 [0]' }).click({
    button: 'right',
  });
  await page
    .getByRole('listitem')
    .filter({ hasText: 'Folder 2[0]Sorted by:' })
    .getByRole('img')
    .click({
      button: 'right',
    });
  await page.getByRole('button', { name: 'Folder 2 [0]' }).click();
  await page.getByRole('link', { name: 'New Item' }).click();
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('gen');
  await page.getByText('General').click();
  await page.getByRole('paragraph').click();
  await page.getByText('General').click();
  await page.getByRole('button', { name: 'Create item' }).click();
});
