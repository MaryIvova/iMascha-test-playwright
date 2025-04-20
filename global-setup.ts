import { expect } from '@playwright/test';
import { Browser, chromium, Page } from 'playwright';

async function GlobalSetup() {
  // This function is called once before all tests in the project.
  const browser: Browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page: Page = await context.newPage();
  await page.goto('https://kms-qa-01.lighthouse-cloud.com/kms/lh/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  const username = page.locator('//*[@id="login-username"]');
  const password = page.locator('//*[@id="login-password"]');
  const loginButton = page.locator('//*[@id="kms-login-button"]');
  await username.click();
  await username.fill('cm');
  await username.press('Enter');
  await password.click();
  await password.fill('Lighthouse@cm123');
  await loginButton.click();
  // const LayOutDropDown = 'select#layout';
  const LayOutLoginButton = page.locator('//*[@id="kms-login-to-layout-button"]');
  await page.getByRole('button', { name: 'Manager' }).click();
  await page.getByRole('listbox').getByRole('option', { name: 'Content Manager' }).click();
  // await page.selectOption(LayOutDropDown, { value: 'Content Manager' });
  await LayOutLoginButton.click();
  await expect(page).toHaveURL(
    'https://kms-qa-01.lighthouse-cloud.com/kms/CM/INTERNAL/LAYOUT?item_id=4',
  );

  await page.context().storageState({ path: './LoginCM.json' });
  await browser.close();
}

export default GlobalSetup;
