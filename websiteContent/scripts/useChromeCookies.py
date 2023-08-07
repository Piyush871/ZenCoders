from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
import os
import json
import datetime
import time

# Path to your downloaded ChromeDriver
chromedriver_path = "/Users/piyushjaiswal/Downloads/chromedriver-mac-arm64/chromedriver"

# Setup webdriver
webdriver_service = Service(chromedriver_path)

options = Options()

# Specify the path to the Chrome binary
options.binary_location = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

driver = webdriver.Chrome(service=webdriver_service, options=options)

# Load the cookies from the file
with open("cookies.json", "r") as file:
    cookies = json.load(file)

# Group the cookies by domain
cookies_by_domain = {}
for cookie in cookies:
    # Check if the cookie has expired
    if 'expiry' in cookie and datetime.datetime.fromtimestamp(cookie['expiry']) < datetime.datetime.now():
        continue

    domain = cookie['domain']
    if domain not in cookies_by_domain:
        cookies_by_domain[domain] = []
    cookies_by_domain[domain].append(cookie)

# Navigate to each domain and add the cookies for that domain
for domain, domain_cookies in cookies_by_domain.items():
    driver.get("http://" + domain.lstrip('.'))
    for cookie in domain_cookies:
        print(f"Setting cookie: {cookie}")
        try:
            driver.add_cookie(cookie)
        except Exception as e:
            print(f"Failed to set cookie: {e}")

# Now you can navigate to any of the domains and you should be logged in
driver.get("http://www.google.com")
time.sleep(10000)