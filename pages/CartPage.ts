import { expect, Page } from '@playwright/test'

export class CartPage {
    constructor(private page: Page) { }
    checkout = this.page.getByTestId('checkout')

    async clickCheckout() {
        await expect(this.checkout).toBeVisible();
        await this.checkout.click();
    }

}
export { expect };
