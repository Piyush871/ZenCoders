from selenium import webdriver
from selenium.webdriver.chrome.service import Service

from selenium.webdriver.chrome.options import Options
import time

list =["hello"]


# Path to your downloaded ChromeDriver
chromedriver_path = "/Users/piyushjaiswal/Downloads/chromedriver-mac-arm64/chromedriver"

# Setup webdriver
service = Service(chromedriver_path)

# Specify Chrome binary location
options = Options()
options.add_argument={'user-data-dir':'/Users/piyushjaiswal/Library/Application Support/Google/Chrome/Default'}

options.binary_location = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

driver = webdriver.Chrome(service=service, options=options)

# Open a webpage
driver.get("http://www.google.com")
#wait until the 
time.sleep(10)

# Close the browser
driver.quit()
