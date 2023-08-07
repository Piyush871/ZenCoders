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


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ZenCoders.settings")
django.setup()



from selenium import webdriver
from bs4 import BeautifulSoup
from myapp.models import WTopic, WQuestion, WQLinks
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By





def scrape_and_populate():
    
    webdriver_service = Service(ChromeDriverManager("114.0.5735.90").install())


    driver = webdriver.Chrome(service=webdriver_service)
    # Change the URL to the URL you want to scrape
    url = "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"

    # Specify the path to the chrome driver executable

    # Fetch the webpage
    driver.get(url)
    soup = BeautifulSoup(driver.page_source, 'html.parser')

    # Close the browser
    driver.quit()

    # Iterate over each top-level details element
    for topic_details in soup.find_all('details', {'class': 'top-level'}):

        # Extract the topic name
        topic_name = topic_details.find('b').text

        # Create a new WTopic instance
        topic = WTopic.objects.create(name=topic_name, description='')

        # Iterate over each table row in the details element
        for tr in topic_details.find_all('tr'):

            # Extract the question name
            question_name = tr.find('td', {'title': ''}).text

            # Create a new WQuestion instance
            question = WQuestion.objects.create(name=question_name, topic=topic)

            # Extract the links
            yt_link = tr.find('td', {'title': 'YouTube Solution'}).find('a')['href']
            striver_link = tr.find('td', {'title': 'CS link'}).find('a')['href']
            leetcode_link = tr.find('td', {'title': 'Leetcode link'}).find('a')['href']

            # Create a new WQLinks instance
            WQLinks.objects.create(
                question=question,
                yt_link=yt_link,
                striver_link=striver_link,
                leetcode_link=leetcode_link,
                gfg_link='',  # Add extraction for gfg_link if it exists
            )

# Call the function
scrape_and_populate()
