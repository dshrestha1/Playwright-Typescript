import { expect, Page } from '@playwright/test'

export class LoginPage {

  constructor(private page: Page) { }
  userName = this.page.getByTestId('username');
  password = this.page.getByTestId('password');
  loginButton = this.page.getByTestId('login-button');

  async navigate() {
    await this.page.goto('/');
  }
  async login() {
    await this.userName.fill(process.env.USERNAME!);
    await this.password.fill(process.env.PASSWORD!);
    await this.loginButton.click();

    await expect(this.page).toHaveURL(/inventory/);
  }
}

export { expect };