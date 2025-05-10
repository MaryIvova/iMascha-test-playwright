import { expect, FrameLocator, type Locator, type Page } from '@playwright/test';
import { RandomDataGenerator } from '../testData/RandomNameGenerator.ts';
export class ItemView {
  private readonly page: Page;
  private readonly itemName: Locator;
  public readonly articleTitle: string;
  private readonly title: Locator;
  private readonly itemStatus: Locator;
  private readonly itemSave: Locator;
  private readonly frameLocator: FrameLocator;
  private readonly onlineStatus: Locator;
  private readonly nameInTree: Locator;
  constructor(page: Page) {
    this.page = page;
    this.frameLocator = page.locator('#itemscope').contentFrame();
    this.itemName = this.frameLocator.locator('#itemTitleForEdit');
    this.articleTitle = RandomDataGenerator.generateRandomName(12);
    this.itemStatus = this.frameLocator.locator('.iw-dropdown-value-container');
    this.onlineStatus = this.frameLocator
      .getByRole('option', { name: 'Online' })
      .locator('span')
      .nth(1);
    this.itemSave = page.getByRole('listitem', { name: 'Save', exact: true }).getByRole('img');
    this.nameInTree = page.locator('.dynatree-title:has-text("${articleTitle}")');
    // ('//*[@class="tree-item-title" and text()="Mariia`s" ]');
  }
  async changeItemTitle(itemName: string) {
    await this.itemName.click();
    await this.itemName.type(this.articleTitle);
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
    await this.itemSave.click();
    // await this.itemSave.click();
    // await this.page.pause();
  }
  async checkItemTitleIsOnline() {
    const color = await this.nameInTree.evaluate((el) =>
      window.getComputedStyle(el).getPropertyValue('color'),
    );
    expect(color.trim()).toBe('rgb(10, 12, 13)');
  }
}
