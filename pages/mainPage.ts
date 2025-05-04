import { type Locator, type Page } from '@playwright/test';
export class MainPage {
  private readonly page: Page;
  private readonly folderFive: Locator;
  private readonly createItem: Locator;
  constructor(page: Page) {
    this.page = page;
    this.folderFive = page.getByTitle('//*[@class="tree-item-title" and text()="Folder 1" ]');
    this.createItem = page.locator('#cmTreeMenu_create');
  }
  async clickFolderFiveButton() {
    await this.folderFive.click({ button: 'right' });
  }
}
