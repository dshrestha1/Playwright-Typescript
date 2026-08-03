
import { test, expect } from '../fixtures/testData';
import { HamburgerMenu } from '../pages/components/HamburgerMenu';

test('Log Out from the Web Page', async ({ 
    loginPage,
    hamburgerMenu 
}) => {
  await loginPage.navigate();
  await loginPage.login();
  await hamburgerMenu.clickLogOut();
  

});

