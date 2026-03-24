from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        context = browser.new_context(record_video_dir="verification/video")
        page = context.new_page()

        # Navigate to registration page
        page.goto("http://localhost:3000/register/aids")
        page.wait_for_timeout(500)

        # Fill the form
        page.fill('input[name="fullName"]', "Final Verification User")
        page.wait_for_timeout(500)
        page.fill('input[name="email"]', "final@example.com")
        page.wait_for_timeout(500)
        page.fill('input[name="phone"]', "9876543210")
        page.wait_for_timeout(500)
        page.fill('input[name="college"]', "Verification College")
        page.wait_for_timeout(500)
        page.fill('input[name="department"]', "Verification Dept")
        page.wait_for_timeout(500)
        page.select_option('select[name="year"]', "SE")
        page.wait_for_timeout(500)
        page.fill('input[name="transactionId"]', "VERIFY_TXN_789")
        page.wait_for_timeout(500)

        # Submit the form
        page.click('button[type="submit"]')

        # Wait for success message
        expect(page.get_by_text("Registration Complete!")).to_be_visible(timeout=10000)
        page.wait_for_timeout(1000)

        # Take a final screenshot
        page.screenshot(path="verification/verification.png")

        context.close()
        browser.close()

if __name__ == "__main__":
    run()
