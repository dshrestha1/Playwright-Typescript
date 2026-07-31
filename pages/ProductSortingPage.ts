import { expect, Page } from '@playwright/test'


export class ProductSortingPage {
    constructor(private page: Page) { }
    SortContainer = this.page.getByTestId('product-sort-container');

    async sortProducts() {
        await expect(this.SortContainer).toBeVisible();

        const options = ['az', 'za', 'lohi', 'hilo'];
        for (const option of options) {
            await this.SortContainer.selectOption(option);
        }
    }
}
