import unittest
from selenium import webdriver

class TestHomePage(unittest.TestCase):
    def setUp(self):
        # Set up the WebDriver
        self.driver = webdriver.Chrome()  # Make sure chromedriver is in your PATH

    def test_home_page(self):
        # Open the home page
        self.driver.get("http://localhost:3000")  # Ensure your Next.js app is running

        # Assert that the expected text is present in the page source
        self.assertIn("Welcome to My Next.js App", self.driver.page_source)

    def tearDown(self):
        # Close the WebDriver
        self.driver.quit()

if __name__ == "__main__":
    unittest.main()
