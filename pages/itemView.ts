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
    this.itemStatus = this.frameLocator.locator('.iw-dropdown-value-container');
    this.onlineStatus = this.frameLocator
      .getByRole('option', { name: 'Online' })
      .locator('span')
      .nth(1);
    this.itemSave = page.locator('.action-bar#kms-action-bar-button-Save button');
  }
  async changeItemTitle(itemName: string) {
    await this.itemName.click();
    await this.itemName.type(itemName);
  }
  async changeStatus(option: string, page) {
    await this.itemStatus.click({
      button: 'left', // Specifies which button to click (left, right, middle)
      clickCount: 2, // Number of times to click
      delay: 2000, // Time to wait between mousedown and mouseup in milliseconds}
    });
    expect(this.onlineStatus).toBeVisible;
    await this.onlineStatus.click();
  }
  async saveItem() {
    await this.page.getByRole('listitem', { name: 'Save', exact: true }).getByRole('img').click();
    // await this.itemSave.click();
    // await this.page.pause();
  }
}
