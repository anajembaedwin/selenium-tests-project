import unittest
from selenium import webdriver

class TestAboutPage(unittest.TestCase):
    def setUp(self):
        # Set up the WebDriver before each test
        self.driver = webdriver.Chrome()  # Ensure chromedriver is in your PATH

    def test_about_page(self):
        # Open the about page
        self.driver.get("http://localhost:3000/about")  # Ensure your Next.js app is running

        # Assertions to verify the content of the page
        self.assertIn("About Us", self.driver.page_source)
        self.assertIn("We are learning Selenium WebDriver with Python!", self.driver.page_source)

    def tearDown(self):
        # Close the WebDriver after each test
        self.driver.quit()

if __name__ == "__main__":
    unittest.main()
