import { expect, FrameLocator, type Locator, type Page } from '@playwright/test';
export class ItemView {
  private readonly page: Page;
  private readonly itemName: Locator;
  private readonly title: Locator;
  private readonly itemStatus: Locator;
  private readonly itemSave: Locator;
  private readonly frameLocator: FrameLocator;
  private readonly onlineStatus: Locator;
  constructor(page: Page) {
    this.page = page;
    this.frameLocator = page.locator('#itemscope').contentFrame();
    this.itemName = this.frameLocator.locator('#itemTitleForEdit');
    this.title = this.frameLocator
      .locator('iframe[name="itemscope"]')
      .contentFrame()
      .locator('div')
      .filter({ hasText: /^Offline$/ })
      .first();
    this.itemStatus = this.frameLocator.locator('.iw-dropdown-value-container');
    this.onlineStatus = this.frameLocator
      .getByRole('option', { name: 'Online' })
      .locator('span')
      .nth(1);
    this.itemSave = this.frameLocator.locator('#kms-action-bar-button-Save');
  }
  async changeItemTitle(itemName: string) {
    await this.itemName.click();
    await this.title.click();
    await this.title.fill(itemName);
  }
  async changeStatus(option: string) {
    await this.itemStatus.click();
    await this.itemStatus.click();
    expect(this.onlineStatus).toBeVisible;
    await this.onlineStatus.click();
  }
  async saveItem() {
    await this.itemSave.click();
  }
}
