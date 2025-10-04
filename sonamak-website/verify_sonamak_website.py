from playwright.sync_api import sync_playwright, expect

def run_verification(page):
    base_url = "http://127.0.0.1:8000"

    # --- English Homepage Verification ---
    print("Navigating to English Home page...")
    page.goto(base_url, timeout=60000)

    # Check for Hero section content
    expect(page.get_by_role("heading", name="Clinic Management ERP for Multi‑Branch Practices")).to_be_visible()
    expect(page.locator("p")).to_contain_text("Operating since January 2019 in the Middle East and since January 2025 in the USA")

    # Take screenshot
    page.screenshot(path="jules-scratch/verification_en.png")
    print("English homepage screenshot captured.")

    # --- Arabic Homepage Verification ---
    print("Switching to Arabic...")
    page.get_by_role("link", name="AR").click()

    # Wait for navigation and check for RTL attribute
    page.wait_for_url(f"{base_url}/ar")
    expect(page.locator("html")).to_have_attribute("dir", "rtl")

    # Check for translated Hero section content
    expect(page.get_by_role("heading", name="منصة إدارة عيادات (ERP) للمنشآت متعددة الفروع")).to_be_visible()

    # Take screenshot
    page.screenshot(path="jules-scratch/verification_ar.png")
    print("Arabic homepage screenshot captured.")

    print("Verification successful.")

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        run_verification(page)
        browser.close()

if __name__ == "__main__":
    main()