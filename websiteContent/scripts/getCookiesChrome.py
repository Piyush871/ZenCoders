from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
import os
import json

# Path to your downloaded ChromeDriver
chromedriver_path = "/Users/piyushjaiswal/Downloads/chromedriver-mac-arm64/chromedriver"

# Setup webdriver
webdriver_service = Service(chromedriver_path)

options = Options()
options.add_argument('--disable-blink-features=AutomationControlled')

# Specify the path to the Chrome binary
options.binary_location = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

driver = webdriver.Chrome(service=webdriver_service, options=options)

# Navigate to the website
driver.get("http://www.google.com")

# Wait for the user to manually log in
input("Press Enter after you have logged in...")

# Get the cookies and save them to a file
cookies = driver.get_cookies()
with open("cookies.json", "w") as file:
    json.dump(cookies, file)

driver.quit()
