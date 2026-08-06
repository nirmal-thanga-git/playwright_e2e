import { test, expect } from '@playwright/test';

test('verify the page title', async ({ page }) => {
  
    await page.goto('https://www.testmuai.com/')

    await expect(page).toHaveTitle('TestMu AI (formerly LambdaTest) | Agentic AI Testing Cloud')

    await expect(page).toHaveURL('https://www.testmuai.com/')

    // regular expression to check if the title contains "TestMu AI"
    // regular expression is case-insensitive and matches any characters before or after "TestMu AI"
    await expect(page).toHaveTitle(/TestMu AI/)

});