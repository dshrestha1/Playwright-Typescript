import { test,expect } from '../fixtures/testData';
import { ProductSortingPage } from '../pages/ProductSortingPage';

    
test('Sort products', async ({
    loginPage,
    productSortingPage
}) => {
    await loginPage.navigate();
    await loginPage.login();
    await productSortingPage.sortProducts();
});