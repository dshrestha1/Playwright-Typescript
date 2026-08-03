import { expect, Page } from '@playwright/test'
import { LoginPage } from '../LoginPage';

export class HamburgerMenu {
    constructor(private page: Page) { }
    private loginPage = new LoginPage(this.page);
    hamburgerMenu = this.page.getByRole('button', { name: /open menu/i });
    logoutButton = this.page.getByTestId('logout-sidebar-link');

    async clickLogOut() {
        await expect(this.hamburgerMenu).toBeVisible();
        await this.hamburgerMenu.click();
        await this.logoutButton.click();
        await expect(this.page).toHaveURL('/');
        await expect(this.loginPage.userName).toBeVisible();
        await expect(this.loginPage.password).toBeVisible();
        await expect(this.loginPage.loginButton).toBeVisible();
    }

}


