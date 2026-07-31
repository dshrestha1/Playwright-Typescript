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



