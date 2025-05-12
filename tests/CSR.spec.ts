import { test, expect } from '@playwright/test';
import { Page } from 'playwright-core';
import { chromium } from 'playwright';
import { LogInPage } from '../pages/loginPage';
import { LayOutPage } from '../pages/layoutPage';

test('CSRLogIn', async ({ page }) => {
  await page.goto('https://kms-qa-08.lighthouse-cloud.com/kms/lh/login');
  const layoutPage = new LayOutPage(page);
  const loginPage = new LogInPage(page);
  await loginPage.enterUsername('csr');
  await loginPage.enterPassword('Lighthouse@csr123');
  await loginPage.clickLoging();
  await expect(page).toHaveURL('https://kms-qa-08.lighthouse-cloud.com/kms/lh/');
  await layoutPage.layoutSelectCSR('CSR');

  // search
});
