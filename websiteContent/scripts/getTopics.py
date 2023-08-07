import os
import sys
import django
import time


# Adding the parent directory of the current script to the Python path


# Get the path of the parent directory of your Django project
# Get the path of the parent directory of your Django project
project_path = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# Add this path to sys.path
sys.path.append(project_path)



sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ZenCoders.settings")
django.setup()
from websiteContent.scripts.scriptUtilities import *
# ...rest of the script...

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By

# Setup webdriver
webdriver_service = Service(ChromeDriverManager("114.0.5735.90").install())


driver = webdriver.Chrome(service=webdriver_service)

# Your website's URL
url = 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/'
driver.get(url)

#pause for sometime



time.sleep(10) # Sleep for 5 seconds


driver.implicitly_wait(20)

# Locate the elements
summaries = driver.find_elements(By.CSS_SELECTOR, "details.top-level > summary")

print(len(summaries))
print(summaries)
topics_list=[]

# Loop through each summary and print its text
for summary in summaries:
    text = summary.text.split(":")[1].strip() # Splitting by ":" and stripping the resulting string to get the text after ':'
    text = text.split("(")[0].strip() # Splitting by "[" and stripping the resulting string to get the text before '['
    # if text contains "[" then split by "[" and strip the resulting string to get the text before '['"
    if "[" in text:
        text = text.split("[")[0].strip()
    topics_list.append(text)
    #*create the topic here 
CreateTopics(topics_list)
# Don't forget to quit the driver once you're done
driver.quit()
