from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import os
import sys
import django
import time
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.keys import Keys
import selenium
from ScriptUtilities import *
print(selenium.__version__)

project_path = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(project_path)

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ZenCoders.settings")
django.setup()

from websiteContent.finalScript.ScriptUtilities import *
from websiteContent.finalScript.createWModels import *
from websiteContent.finalScript.getData import *

chromedriver_path = "/Users/piyushjaiswal/Downloads/chromedriver-mac-arm64 2/chromedriver"
webdriver_service = Service(chromedriver_path)

options = Options()
options.add_argument("user-data-dir=/Users/piyushjaiswal/Library/Application Support/Google/Chrome/newProfile")
options.add_argument('--disable-blink-features=AutomationControlled')
options.add_experimental_option("excludeSwitches", ["enable-automation"])
options.add_experimental_option('useAutomationExtension', False)
options.binary_location = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

driver = webdriver.Chrome(service=webdriver_service, options=options)


try:
    driver.get("https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/")
    time.sleep(2)
    try:    
        topics = driver.find_elements(By.CSS_SELECTOR, "details.top-level")
        count = 0
        list = 'List1'
        for i, topic in enumerate(topics):
            #for request from striver farzi 
            if(i==len(topics)-1):
                continue
            topic_text = trimTopics(topic.text)
            #get the table inside the topic element
            tables = topic.find_elements(By.CSS_SELECTOR, "table")
            for table in tables:
                #get the rows inside the table
                rows = table.find_elements(By.CSS_SELECTOR, "tbody tr")
                #get the data from the rows
                for row in rows:
                    tds = getTDs(row,driver)
                    data = getDataFromRow(row,driver)
                    if(len(data) == 0):
                        continue
                    count = count + 1
                    print(data)
                    #insert data into the database
                    insertData(data,topic_text,list)
            
        print("Total topics: "+str(count)) 
            
    except NoSuchElementException:
        print("No such element")
except Exception as e:
    print("An exception occurred: ", e)

finally:
    driver.quit()











# from selenium.webdriver.common.by import By

# # ✅ Locate a single element (New API)

# find_element(By.ID, "id")
# find_element(By.NAME, "name")
# find_element(By.XPATH, "xpath")
# find_element(By.LINK_TEXT, "link text")
# find_element(By.PARTIAL_LINK_TEXT, "partial link text")
# find_element(By.TAG_NAME, "tag name")
# find_element(By.CLASS_NAME, "class name")
# find_element(By.CSS_SELECTOR, "css selector")

# # ✅ Locate multiple elements (New API)
# find_elements(By.XPATH, '//button')
