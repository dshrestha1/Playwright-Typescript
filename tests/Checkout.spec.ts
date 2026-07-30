//import { expect } from '@playwright/test';
import { test,expect } from '../fixtures/testData';

test('Complete checkout flow',
  async ({
    checkoutUser,
    loginPage,
    inventoryPage,
    cartPage,
    checkoutPage }) => {

    // Login
    await loginPage.navigate();
    await loginPage.login();

    // Select an item
    await inventoryPage.selectBackPack();

    // Add item to cart
    await inventoryPage.addItemToCart();
    await inventoryPage.openCart();
    await cartPage.clickCheckout();

    // Fill out checkout information
    await checkoutPage.fillInInformation(checkoutUser);

    

    // Continue to overview
    await checkoutPage.verifyOverview();
   
   
    // Finish checkout and verify completion
    await checkoutPage.finishCheckout();

   
  });



// test('TypeScript practice test', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');

//   await page.getByTestId('username').fill('standard_user');
//   await page.getByTestId('password').fill('secret_sauce');
//   await page.getByTestId('login-button').click();
//   await expect(page).toHaveURL(/inventory/);

//   //Selecting an Item
//   await page.getByTestId('inventory-item-sauce-labs-backpack-img').click()
//   await expect(page.getByTestId('inventory-item-name'))
//     .toHaveText('Sauce Labs Backpack');

//   //Add To Cart
//   await page.getByTestId('add-to-cart').click();
//   await expect(page.getByTestId('shopping-cart-link')).toBeVisible();

//   await page.getByTestId('shopping-cart-link').click();
//   await expect(page).toHaveURL(/cart/);

//   //Checkout flow
//   await expect(page.getByTestId('checkout')).toBeVisible();
//   await page.getByTestId('checkout').click();

//   //Filling out the form for checkout
//   await expect(page.getByTestId('title')).toHaveText('Checkout: Your Information');
//   await page.getByTestId('firstName').fill('Andrew');
//   await page.getByTestId('lastName').fill('Doe');
//   await page.getByTestId('postalCode').fill('17741');

//   await page.getByTestId('continue').click()

//   //Assertiong to verify the final complete page for checkout.
//   await expect(page.getByTestId('title')).toHaveText('Checkout: Overview');
//   await expect(page.getByTestId('payment-info-value')).toHaveText('SauceCard #31337')
//   await expect(page.getByTestId('shipping-info-value')).toHaveText('Free Pony Express Delivery!')
//   await expect(page.getByTestId('finish')).toBeVisible();

//   await page.getByTestId('finish').click();

//   // Verify Checkout has been complete
//   await expect(page.getByTestId('title')).toHaveText('Checkout: Complete!');
//   await expect(page.getByTestId('complete-text')).toBeVisible();
//   //   await expect(page.getByTestId('continue-shopping')).toBeVisible();
//   //   await page.getByTestId('continue-shopping').click();
//});
