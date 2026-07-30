import { expect, Page } from '@playwright/test'
import type { CheckoutUser } from '../fixtures/testData';
import { info } from 'console';

export class CheckoutPage {
    constructor(private page: Page) { }

    title = this.page.getByTestId('title');
    firstName = this.page.getByTestId('firstName');
    lastName = this.page.getByTestId('lastName');
    postalCode = this.page.getByTestId('postalCode');
    continueButton = this.page.getByTestId('continue');
    paymentInfo = this.page.getByTestId('payment-info-value');
    shippingInfo = this.page.getByTestId('shipping-info-value');
    finishButton = this.page.getByTestId('finish');


    async fillInInformation(user: CheckoutUser) {
      //  await expect(this.title).toHaveText('Checkout: Your Information');

        await expect(this.firstName).toBeVisible();
        await this.firstName.fill(user.firstName);
        await this.lastName.fill(user.lastName);
        await this.postalCode.fill(user.postalCode);
        await expect(this.postalCode).toBeVisible();
        await expect(this.continueButton).toBeVisible();

        await this.continueButton.click();
    }

    async verifyOverview() {

        await expect(this.title).toHaveText('Checkout: Overview');
        await expect(this.paymentInfo).toHaveText('SauceCard #31337');
        await expect(this.shippingInfo).toHaveText('Free Pony Express Delivery!');

        await expect(this.finishButton).toBeVisible();

    }

    async finishCheckout() {
        await this.finishButton.click();

        await expect(this.title).toHaveText('Checkout: Complete!');
    }

}