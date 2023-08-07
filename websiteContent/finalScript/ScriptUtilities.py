

import os
import sys
import django
import time
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
from pynput.keyboard import Key, Controller
import pyperclip
from selenium.webdriver.common.action_chains import ActionChains

# Adding the parent directory of the current script to the Python path
project_path = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(project_path)
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ZenCoders.settings")
django.setup()

from websiteContent import *
from websiteContent import models




def trimTopics(topic_text):
    if(topic_text.__contains__(":")):
        topic_text = topic_text.split(":", 1)[1]
    if(topic_text.__contains__("(")):
        topic_text = topic_text.split("(",1)[0]
    if(topic_text.__contains__("[")):
        topic_text = topic_text.split("[",1)[0]
    return topic_text.strip()
    
def getRowsFromTable(table,driver):
    rows = table.find_elements(By.CSS_SELECTOR, "tbody tr")
    return rows

def getTDs(row,driver):
    tds = row.find_elements(By.CSS_SELECTOR, "td")
    return tds

def getDataFromRow(row,driver):
    tds = getTDs(row,driver)
    # Extract the data
    # Extract the data

    try:
        question_name = tds[1].get_attribute('textContent')# Get the text of the second td
        if(question_name == ""):
            print("No question name found")
    except NoSuchElementException:
        print("No question name found")
        question_name = None

    try:
        striver_link = tds[1].find_element(By.TAG_NAME, "a").get_attribute("href")  # Get the href attribute of the a tag in the second td
    except NoSuchElementException:
        striver_link = None

    try:
        other_link = tds[2].find_element(By.TAG_NAME, "a").get_attribute("href")  # Get the href attribute of the a tag in the third td
    except NoSuchElementException:
        other_link = None

    try:
        youtube_link = tds[3].find_element(By.TAG_NAME, "img").get_attribute("onclick")  # Get the onclick attribute of the button tag in the fourth td
    except NoSuchElementException:
        youtube_link = None

    try:
        leetcode_link = tds[4].find_element(By.TAG_NAME, "a").get_attribute("href")  # Get the href attribute of the a tag in the fifth td
    except NoSuchElementException:
        leetcode_link = None

    print("Question Name:", question_name)
    print("Striver Link:", striver_link)
    print("Other Link:", other_link)
    print("YouTube Link:", youtube_link)
    print("Leetcode Link:", leetcode_link)
    #create a map
    data = {
        'question_name': question_name,
        'striver_link': striver_link,
        'other_link': other_link,
        'youtube_link': youtube_link,
        'leetcode_link': leetcode_link
    }
    return data

def cleanText(text):
    #if text contains cpp remove it
    text = text.replace("cpp", "")

    #if text contains ``` remove it
    text = text.replace("```", "")
    text=text.replace("'''", "")
    return text 
    
def extractSolution(text):
    text = text.split("description:")[1]
    question_description = text.split("solution:")[0]
    solution=text.split("solution:")[1]
    solution= cleanText(solution)
    #get starting and ending spaces reomved
    solution = solution.strip()
    question_description =question_description.strip()
    return question_description, solution
    
def getLink(approach):
    if(approach.leetcode_link != None):
        return approach.leetcode_link
    if(approach.striver_link != None):
        return approach.striver_link
    if(approach.gfg_link != None):
        return approach.gfg_link
    if(approach.other_link != None):
        return approach.other_link
    else:
        return None
    
def deleteList(list_name):
    #find the element 
    #if the element is not found then print and return
    #else delete all the topics in the List 
    list = models.WList.objects.filter(name=list_name)
    list.delete()
    





