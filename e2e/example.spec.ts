import { test, expect } from '@playwright/test';

test('verify the page title', async ({ page }) => {
  
    await page.goto('https://testmuai.com/')

    await expect(page).toHaveTitle('TestMu AI (formerly LambdaTest) | Agentic AI Testing Cloud')
}); 
