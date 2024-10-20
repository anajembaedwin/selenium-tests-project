import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

class TestContactPage(unittest.TestCase):
    def setUp(self):
        # Set up the WebDriver before each test
        self.driver = webdriver.Chrome()  # Ensure chromedriver is in your PATH

    def test_contact_page(self):
        # Open the contact page
        self.driver.get("http://localhost:3000/contact")

        # Find the input field and submit the form
        input_field = self.driver.find_element(By.NAME, 'name')
        input_field.send_keys('John Doe')
        input_field.send_keys(Keys.RETURN)

        # # Wait for the success message to appear
        # WebDriverWait(self.driver, 10).until(
        #     EC.presence_of_element_located((By.XPATH, "//div[contains(text(), 'Thank you for contacting us!')]"))
        # )

        # Wait for the success message to appear
        WebDriverWait(self.driver, 10).until(
            EC.presence_of_element_located((By.XPATH, "//p[text()='Thank you for contacting us!']"))
        )

        # Check for the success message
        self.assertIn("Thank you for contacting us!", self.driver.page_source)


    def tearDown(self):
        # Close the WebDriver after each test
        self.driver.quit()

if __name__ == "__main__":
    unittest.main()
