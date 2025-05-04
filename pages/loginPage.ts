import { expect, type Locator, type Page } from '@playwright/test';
export class LogInPage {
  private readonly page: Page;
  private readonly title: Locator;
  private readonly username: Locator;
  private readonly password: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('//*[@id="kms-login-header"]');
    this.username = page.locator('//*[@id="login-username"]');
    this.password = page.locator('//*[@id="login-password"]');
    this.loginButton = page.locator('//*[@id="kms-login-button"]');
  }
  async loginPage() {
    expect(this.title).toBeVisible();
    await expect(this.title).toHaveText('Login');
  }
  async enterUsername(username: string) {
    await this.username.click();
    await this.username.fill(username);
    await this.username.press('Enter');
    expect(this.username).toHaveValue('cm');
  }
  async enterPassword(password: string) {
    await this.password.click();
    await this.password.fill(password);
  }
  async clickLoging() {
    await this.loginButton.click();
  }
}
