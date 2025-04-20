import { test, expect, BrowserContext } from '@playwright/test';
import { AsyncLocalStorage } from 'async_hooks';
import { clear } from 'console';
import { Page } from 'playwright-core';
import { Locator } from 'playwright-core';

//test.describe('KMSLogin', () => {
//  test.beforeEach(async ({ page }) => {

//  });

test.skip('LogInKMS2', async ({ page }) => {
  await page.goto('https://kms-qa-08.lighthouse-cloud.com/kms/lh/login');
  const title = page.locator('//*[@id="kms-login-header"]');
  expect(page.locator('//*[@id="kms-login-header"]')).toBeVisible();
  await expect(title).toHaveText('Login');
});

test('EnterUserName', async ({ page }) => {
  await page.goto('https://kms-qa-01.lighthouse-cloud.com/kms/lh/login');
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
  await expect(page).toHaveURL('https://kms-qa-01.lighthouse-cloud.com/kms/lh/');
  await expect(page.locator('//*[@id="kms-choose-layout-header"]')).toBeVisible();
  const LayOutDropDown = 'select#layout';
  const LayOutLoginButton = page.locator('//*[@id="kms-login-to-layout-button"]');
  await page.getByRole('button', { name: 'Manager' }).click();
  await page.getByRole('listbox').getByRole('option', { name: 'Content Manager' }).click();
  // await page.selectOption(LayOutDropDown, { value: 'Content Manager' });
  await LayOutLoginButton.click();
  await expect(page).toHaveURL(
    'https://kms-qa-01.lighthouse-cloud.com/kms/CM/INTERNAL/LAYOUT?item_id=4',
  );
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
