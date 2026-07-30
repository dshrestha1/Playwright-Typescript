import { expect, Page } from '@playwright/test'

export class LoginPage {

  constructor(private page: Page) { }
  async navigate() {
   await this.page.goto('/');
  }
  async login() {
    await this.page.getByTestId('username').fill(process.env.USERNAME!);
    await this.page.getByTestId('password').fill(process.env.PASSWORD!);
    await this.page.getByTestId('login-button').click();

    await expect(this.page).toHaveURL(/inventory/);
  }
}

export { expect };