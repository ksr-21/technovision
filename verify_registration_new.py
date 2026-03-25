import asyncio
import os
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

        # New required field: Payment Screenshot
        # Create a dummy image file for testing
        with open("test_screenshot.png", "wb") as f:
            f.write(b"\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00\x00\x01\x00\x00\x00\x01\x08\x06\x00\x00\x00\x1f\x15\xc4\x89\x00\x00\x00\nIDATx\x9cc\x00\x01\x00\x00\x05\x00\x01\r\n-\xb4\x00\x00\x00\x00IEND\xaeB`\x82")

        await page.set_input_files('input[type="file"]', "test_screenshot.png")

        # Transaction ID is now optional, but let's fill it
        await page.fill('input[name="transactionId"]', "TEST_TXN_123")

        # Take a screenshot before submission
        await page.screenshot(path="before_submit.png")

        # Submit the form
        await page.click('button[type="submit"]')

        # Wait for success message or error
        try:
            # Increased timeout as upload might take time
            await page.wait_for_selector("text=Registration Complete!", timeout=20000)
            print("Registration successful!")
        except Exception as e:
            print(f"Registration failed or success message not found: {e}")
            # Check for error message in UI
            error_exists = await page.is_visible("text=Failed to submit registration")
            if error_exists:
                print("UI displayed a failure message.")

            # Print page content if it fails to help debug
            # content = await page.content()
            # print(content)

        # Take a final screenshot
        await page.screenshot(path="after_submit.png")

        # Cleanup
        if os.path.exists("test_screenshot.png"):
            os.remove("test_screenshot.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
