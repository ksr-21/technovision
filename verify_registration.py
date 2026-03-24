import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Navigate to registration page for a specific event
        await page.goto("http://localhost:3000/register/aids")

        # Wait for the form to load
        await page.wait_for_selector("form")

        # Fill the form
        await page.fill('input[name="fullName"]', "Test User")
        await page.fill('input[name="email"]', "test@example.com")
        await page.fill('input[name="phone"]', "1234567890")
        await page.fill('input[name="college"]', "Test College")
        await page.fill('input[name="department"]', "Test Dept")
        await page.select_option('select[name="year"]', "FE")
        await page.fill('input[name="transactionId"]', "TEST_TXN_123")

        # Take a screenshot before submission
        await page.screenshot(path="before_submit.png")

        # Submit the form
        await page.click('button[type="submit"]')

        # Wait for success message or error
        try:
            await page.wait_for_selector("text=Registration Complete!", timeout=10000)
            print("Registration successful!")
        except Exception as e:
            print(f"Registration failed or success message not found: {e}")
            # Check for error message in UI
            error_exists = await page.is_visible("text=Failed to submit registration")
            if error_exists:
                print("UI displayed a failure message.")

        # Take a final screenshot
        await page.screenshot(path="after_submit.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
