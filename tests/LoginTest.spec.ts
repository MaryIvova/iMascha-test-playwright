import { test, expect, BrowserContext } from '@playwright/test';
import { MainPage } from '../pages/mainPage';
import { AsyncLocalStorage } from 'async_hooks';
import { clear } from 'console';
import { Page } from 'playwright-core';
import { Locator } from 'playwright-core';
import { chromium } from 'playwright';

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
    const LayOutLoginButton = page.locator('#kms-login-to-layout-button');
    await expect(page).toHaveURL('https://kms-qa-08.lighthouse-cloud.com/kms/lh/');
    await expect(page.locator('//*[@id="kms-choose-layout-header"]')).toBeVisible();
    await LayOutDropDown.selectOption('Content Manager');
    // await page.waitForSelector('#kms-login-to-layout-button', { state: 'visible' });
    await LayOutLoginButton.click();
    await LayOutLoginButton.click();

    // item create2
    const plusButton = page.locator('//*[@class="tree-item-title" and text()="Folder 1" ]');
    // const createButton = page.locator('//*[@id="cm-tree-item-create-button"]');
    const newItem = page.locator("div[contains(@class,'New Item')]");
    // const createItem = page.locator('div#cmTree li[itemid="11"]');
    await plusButton.click();
    await plusButton.click({ button: 'right' });
    await plusButton.click({ button: 'right' });
    expect(page.locator("div[contains(@class,'New Item')]")).toBeVisible;
    // expect(createItem).toBeVisible;
  });

  // item create2
  // test('ItemCreate', async ({ page }) => {
  //   const folderFive = page.locator('//*[@id="cm-tree-item-create-button"]');
  //   const createItem = page.locator('div#cmTree li[itemid="11"]');
  //   await folderFive.click({ button: 'right' });
  // });
});
