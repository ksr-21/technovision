import asyncio
import os
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        # Launch browser
        browser = await p.chromium.launch()
        # Create context with video recording
        os.makedirs("/home/jules/verification/video", exist_ok=True)
        context = await browser.new_context(record_video_dir="/home/jules/verification/video")
        page = await context.new_page()

        # Target URL
        url = "http://localhost:3000/admin"
        password = os.getenv("VITE_ADMIN_PASSWORD", "admin123")

        print(f"Navigating to {url}...")
        await page.goto(url)
        await page.wait_for_timeout(500)

        # 1. Login Flow
        print("Attempting to login...")
        # Fill password and authenticate
        await page.fill('input[type="password"]', password)
        await page.wait_for_timeout(500)
        await page.click('button:has-text("AUTHENTICATE")')
        await page.wait_for_timeout(500)

        # Wait for data table or registrations stats to appear
        try:
            await page.wait_for_selector('text=Total Registrations', timeout=10000)
            print("Login successful! Data table visible.")
        except Exception as e:
            print(f"Login failed or dashboard not loaded: {e}")
            await page.screenshot(path="/home/jules/verification/login_failed.png")
            await context.close()
            await browser.close()
            return

        # Take a screenshot of the admin panel
        await page.screenshot(path="/home/jules/verification/admin_panel_auth.png")
        await page.wait_for_timeout(500)

        # 1.1 Test Filtering (Optional check)
        print("Testing event filtering...")
        # Select an event (e.g., 'computer')
        await page.select_option('select', 'computer')
        await page.wait_for_timeout(500)
        await page.screenshot(path="/home/jules/verification/admin_filtered.png")
        print("Filter applied successfully.")

        # 2. Logout Flow
        print("Attempting to logout...")
        await page.click('button:has-text("LOGOUT")')
        await page.wait_for_timeout(500)

        # Confirm return to login screen
        try:
            await page.wait_for_selector('button:has-text("AUTHENTICATE")', timeout=5000)
            print("Logout successful! Returned to login screen.")
        except Exception as e:
            print(f"Logout failed: {e}")
            await page.screenshot(path="/home/jules/verification/logout_failed.png")

        # Take a final screenshot
        await page.screenshot(path="/home/jules/verification/after_logout.png")
        await page.wait_for_timeout(1000)

        await context.close()
        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
