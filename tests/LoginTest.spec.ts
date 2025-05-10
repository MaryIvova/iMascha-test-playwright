import { test, expect, BrowserContext } from '@playwright/test';
import { MainPage } from '../pages/mainPage';
import { AsyncLocalStorage } from 'async_hooks';
import { clear } from 'console';
import { Page } from 'playwright-core';
import { Locator } from 'playwright-core';
import { chromium } from 'playwright';
import { ItemView } from '../pages/itemView';
import { LogInPage } from '../pages/loginPage';
import { LayOutPage } from '../pages/layoutPage';

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
    const loginPage = new LogInPage(page);
    await page.goto('https://kms-qa-08.lighthouse-cloud.com/kms/lh/login');
    await loginPage.enterUsername('cm');
    await loginPage.enterPassword('Lighthouse@cm123');
    await loginPage.clickLoging();

    // Layout select part
    const layoutPage = new LayOutPage(page);
    await expect(page).toHaveURL('https://kms-qa-08.lighthouse-cloud.com/kms/lh/');
    await layoutPage.layoutSelect('Content Manager');

    // item create2
    const newItem = page.locator('//*[@class="tree-item-title" and text()="Folder 1" ]');
    const buttonCreate = page.locator('#cmTreeMenu_create');
    const popUpNewItem = page.locator(
      '//*[class="item-create-dialog__title" and text()="New Item"]',
    );
    const searchField = page.locator('.ui-input-input');
    const generalTemplate = page.locator(
      '//*[@class="item-create-dialog-list__item-title" and text()="General"]',
    );
    const itemTitle = page.locator('#itemTitleForEdit');
    await newItem.hover();
    await newItem.click({ button: 'right' });
    await newItem.click({ button: 'right' });
    expect(page.locator("div[contains(@class,'New Item')]")).toBeVisible;
    await buttonCreate.click();
    expect(popUpNewItem).toBeVisible;
    await searchField.click();
    await searchField.fill('General');
    await generalTemplate.click();
    await page.getByRole('button', { name: 'Create item' }).click();
    expect(itemTitle).toBeVisible;

    // itemView
    const itemView = new ItemView(page);
    await itemView.changeItemTitle('Mariia`s');
    await itemView.changeStatus('Online', page);
    await itemView.saveItem();
  });
});
