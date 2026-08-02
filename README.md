# 🎭 Playwright Automation Framework | SauceDemo

A modern end-to-end test automation framework built with **Playwright** and **TypeScript** for testing the **SauceDemo** web application.

This project demonstrates industry-standard automation practices including Page Object Model (POM), reusable utilities, data-driven testing, cross-browser execution, reporting, and maintainable test architecture.

---

## 📌 Project Overview

The purpose of this project is to automate the critical user journeys of the SauceDemo application while following clean coding practices and scalable test automation design.

The framework is designed to be:

- Scalable
- Maintainable
- Easy to understand
- Beginner-friendly
- CI/CD ready

---

## 🚀 Tech Stack

| Technology | Purpose |
|------------|---------|
| Playwright | Browser Automation |
| TypeScript | Programming Language |
| Node.js | Runtime Environment |
| Playwright Test Runner | Test Execution |
| Page Object Model | Framework Design Pattern |
| HTML Reporter | Test Reporting |

---

# 📂 Project Structure

```
playwright-saucedemo/
│
├── tests/                 # Test Scripts
├── pages/                 # Page Object Classes
├── fixtures/              # Custom Fixtures (if used)
├── utils/                 # Utility Functions
├── test-data/             # Test Data
├── screenshots/           # Failure Screenshots
├── playwright-report/     # HTML Reports
├── test-results/          # Execution Results
├── playwright.config.ts   # Playwright Configuration
├── package.json
└── README.md
```

---

# ✨ Features

- ✅ End-to-End UI Automation
- ✅ Page Object Model (POM)
- ✅ TypeScript Support
- ✅ Cross Browser Testing
- ✅ Auto Waiting
- ✅ Smart Locators
- ✅ Reusable Components
- ✅ HTML Reports
- ✅ Screenshots on Failure
- ✅ Parallel Test Execution
- ✅ Headless & Headed Execution
- ✅ Easy Maintenance

---

# 🧪 Test Scenarios Covered

### Login

- Valid Login
- Invalid Login
- Locked User Login
- Empty Username Validation
- Empty Password Validation

---

### Products

- Verify Product Listing
- Verify Product Details
- Add Product to Cart
- Remove Product from Cart
- Verify Cart Badge

---

### Shopping Cart

- Open Cart
- Verify Added Products
- Remove Product
- Continue Shopping

---

### Checkout

- Checkout Information
- Complete Purchase
- Verify Order Confirmation
- Cancel Checkout

---

### Sorting

- Name (A → Z)
- Name (Z → A)
- Price (Low → High)
- Price (High → Low)

---

### Logout

- Successful Logout

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/playwright-saucedemo.git
```

---

## Navigate to Project

```bash
cd playwright-saucedemo
```

---

## Install Dependencies

```bash
npm install
```

---

## Install Playwright Browsers

```bash
npx playwright install
```

---

# ▶️ Running Tests

## Run All Tests

```bash
npx playwright test
```

---

## Run Specific Test

```bash
npx playwright test tests/login.spec.ts
```

---

## Run in Headed Mode

```bash
npx playwright test --headed
```

---

## Run on Chrome

```bash
npx playwright test --project=chromium
```

---

## Run on Firefox

```bash
npx playwright test --project=firefox
```

---

## Run on WebKit

```bash
npx playwright test --project=webkit
```

---

# 📊 View Test Report

After execution:

```bash
npx playwright show-report
```

An interactive HTML report will open in your browser.

---

# 📸 Screenshots

Failed test screenshots are automatically saved inside:

```
test-results/
```

---

# 📈 Reports

Playwright generates a detailed HTML report including:

- Test Summary
- Execution Time
- Pass / Fail Status
- Screenshots
- Error Logs
- Trace Viewer (if enabled)

---

# 🏗 Framework Design

This project follows the **Page Object Model (POM)** design pattern.

Benefits include:

- Better code organization
- Improved reusability
- Easier maintenance
- Reduced code duplication
- Cleaner test scripts

---

# 🌐 Supported Browsers

- Chromium
- Google Chrome
- Microsoft Edge
- Firefox
- WebKit (Safari)

---

# 🧹 Coding Best Practices

This framework follows automation best practices:

- Separation of Test & Page Logic
- Reusable Methods
- Meaningful Assertions
- Explicit Naming Conventions
- Clean Folder Structure
- DRY (Don't Repeat Yourself)
- Easy Scalability

---

# 📚 Learning Objectives

This project demonstrates knowledge of:

- Playwright Automation
- TypeScript
- UI Testing
- Test Automation Framework Design
- Page Object Model
- Assertions
- Locators
- Test Execution
- Reporting
- Cross Browser Testing

---

# 🔮 Future Improvements

Some enhancements planned for future versions include:

- API Testing
- Data-Driven Testing using JSON/CSV
- Environment Configuration
- Jenkins CI/CD Integration
- GitHub Actions Workflow
- Docker Support
- Allure Reporting
- Visual Testing
- Database Validation

---

# 👨‍💻 About This Project

This project was developed as part of my Automation Testing portfolio to showcase practical experience with **Playwright** and **TypeScript**.

The framework focuses on writing clean, maintainable, and scalable automation tests that align with real-world software testing practices.

---

# ⭐ If You Like This Project

If you found this project helpful, consider giving it a ⭐ on GitHub.

It helps support the project and motivates future improvements.

---

## 📄 License

This project is open-source and available for learning and educational purposes.
