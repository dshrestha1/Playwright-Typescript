import { expect, Page } from '@playwright/test'


export class InventoryPage {
  constructor(private page: Page) { }

  backPack = this.page.getByTestId('inventory-item-sauce-labs-backpack-img')
  itemName = this.page.getByTestId('inventory-item-name')
  addToCart = this.page.getByTestId('add-to-cart')
  cart = this.page.getByTestId('shopping-cart-link')

  async selectBackPack() {
    await this.backPack.click();
    await expect(this.itemName).toHaveText('Sauce Labs Backpack');
  }

  async addItemToCart() {
    await this.addToCart.click();
    await expect(this.cart).toBeVisible();
  }

  async openCart() {
    await this.cart.click();
    await expect(this.page).toHaveURL(/.*cart.*/);
  }



}

export { expect };

