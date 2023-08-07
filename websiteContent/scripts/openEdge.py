from selenium import webdriver
from webdriver_manager.microsoft import EdgeChromiumDriverManager
import time
import json
options = webdriver.EdgeOptions()
options.use_chromium = True
options.add_argument('--disable-blink-features=AutomationControlled')

# Specify the path to your Edge profile
# Replace 'path_to_your_edge_profile' with the actual path
options.add_argument('user-data-dir=/Users/piyushjaiswal/Library/Application Support/Microsoft Edge/Profile 1')

driver = webdriver.Edge(options=options)

cookies = driver.get_cookies()
with open('cookies.txt', 'w') as f:
    f.write(json.dumps(cookies))

# Load the cookies from the file
with open('cookies.txt', 'r') as f:
    cookies = json.loads(f.read())

driver = webdriver.Edge(options=options)

# Load the cookies into the driver
for cookie in cookies:
    driver.add_cookie(cookie)

# Now you can navigate to the website without having to login
driver.get('https://chat.openai.com/?model=gpt-4')
time.sleep(1000)