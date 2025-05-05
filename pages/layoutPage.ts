import { expect, type Locator, type Page } from '@playwright/test';
export class LayOutPage {
  private readonly page: Page;
  private readonly layOutDropDown: Locator;
  private readonly layOutLoginButton: Locator;
  private readonly layOutField: Locator;
  //   private readonly contentManget: Locator;
  private readonly haeder: Locator;

  constructor(page: Page) {
    this.haeder = page.locator('//*[@id="kms-choose-layout-header"]');
    this.layOutDropDown = page.locator('//select[@name="layout"]');
    this.layOutLoginButton = page.locator('#kms-login-to-layout-button');
    this.layOutField = page.locator('//*[@id="kms-choose-layout-header"]');
    // this.contentManget = page.locator('//select[@name="layout"]');
  }
  async layoutSelect(option: string) {
    expect(this.haeder).toBeVisible();
    await expect(this.layOutField).toBeVisible();
    // this.contentManget.click;
    await this.layOutDropDown.selectOption('Content Manager');
    expect(this.layOutLoginButton).toBeVisible();
    await this.layOutLoginButton.click();
  }
}
