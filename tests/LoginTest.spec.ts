import { test, expect, BrowserContext } from '@playwright/test';
import { AsyncLocalStorage } from 'async_hooks';
import { clear } from 'console';
import { Page } from 'playwright-core';
import { Locator } from 'playwright-core';

//test.describe('KMSLogin', () => {
//  test.beforeEach(async ({ page }) => {

//  });
test.describe('ItemCreate', () => {
  test.skip('LogInKMS2', async ({ page }) => {
    await page.goto('https://kms-qa-08.lighthouse-cloud.com/kms/lh/login');
    const title = page.locator('//*[@id="kms-login-header"]');
    expect(page.locator('//*[@id="kms-login-header"]')).toBeVisible();
    await expect(title).toHaveText('Login');
  });

  test('EnterUserName', async ({ page }) => {
    await page.goto('https://kms-qa-08.lighthouse-cloud.com/kms/lh/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    const username = page.locator('//*[@id="login-username"]');
    const password = page.locator('//*[@id="login-password"]');
    const loginButton = page.locator('//*[@id="kms-login-button"]');
    await username.click();
    await username.fill('cm');
    await username.press('Enter');
    expect(page.locator('//*[@id="login-username"]')).toHaveValue('cm');
    await password.click();
    await password.fill('Lighthouse@cm123');
    await loginButton.click();

    // Layout select part
    const LayOutDropDown = page.locator('//select[@name="layout"]');
    const LayOutLoginButton = page.locator('//*[@id="kms-login-to-layout-button"]');
    await expect(page).toHaveURL('https://kms-qa-08.lighthouse-cloud.com/kms/lh/');
    await expect(page.locator('//*[@id="kms-choose-layout-header"]')).toBeVisible();
    await LayOutDropDown.selectOption('Content Manager');
    await LayOutLoginButton.click();
    await expect(page).toHaveURL(
      'https://kms-qa-08.lighthouse-cloud.com/kms/CM/INTERNAL/LAYOUT?item_id=4',
    );

    // item create part
    //   await page.getByRole('button', { name: 'Folder 2 [0]' }).click({
    //     button: 'right',
    //   });
    //   await page
    //     .getByRole('listitem')
    //     .filter({ hasText: 'Folder 2[0]Sorted by:' })
    //     .getByRole('img')
    //     .click({
    //       button: 'right',
    //     });
    //   await page.getByRole('button', { name: 'Folder 2 [0]' }).click();
    //   await page.getByRole('link', { name: 'New Item' }).click();
    //   await page.getByRole('textbox', { name: 'Search' }).click();
    //   await page.getByRole('textbox', { name: 'Search' }).fill('gen');
    //   await page.getByText('General').click();
    //   await page.getByRole('paragraph').click();
    //   await page.getByText('General').click();
    //   await page.getByRole('button', { name: 'Create item' }).click();
    // });
  });
});

// await page.getByRole('textbox', { name: 'Username' }).fill('cm');
// await page.getByRole('textbox', { name: 'Password' }).click();
// await page.getByRole('textbox', { name: 'Password' }).fill('Lighthouse@cm123');
// await page.getByRole('button', { name: 'Login' }).click();
// await page.getByRole('button', { name: 'Manager' }).click();
// await page.getByRole('listbox').getByRole('option', { name: 'Content Manager' }).click();
// await page.getByRole('button', { name: 'Login' }).click();

//});
// test('LayoutSelets', async ({ page }) => {
// }
// id = 'login-username';
