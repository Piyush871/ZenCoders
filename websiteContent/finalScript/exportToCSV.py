
from WebDriverSetup import WebDriverSetup
import csv
import os

setup = WebDriverSetup()
setup.set_project_path(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
from django.http import HttpResponse
from websiteContent.models import *  # replace with your model





def export_list(list_name):
    csv_name = list_name + '.csv'
    with open(csv_name, 'w', newline='') as file:
       writer = csv.writer(file)
       writer.writerow(['Topic_name', 'Question_name', 'Striver_link','leetcode_link','other_link','gfg_link'])  # replace with your field names
       all_rows = listToRows(list_name)
       for row in all_rows:
           writer.writerow(row)

#i want this to create the csv folder and then create the csv file in it



def export_topic(topic_name):
    csv_name = topic_name + '.csv'
    with open('csv_folder/'+csv_name, 'w', newline='') as file:
       writer = csv.writer(file)
       writer.writerow([ 'Question_name', 'Striver_link','leetcode_link','other_link','gfg_link'])
       all_rows = topicToRows(topic_name)
       writer.writerows(all_rows)
       

def topicToRows(topic_name):
    all_rows = []
    for question in WQuestion.objects.filter(topic__name=topic_name):
        for WLink in WQLinks.objects.filter(question=question):
            question_name = question.name
            row = [question_name,WLink.striver_link,WLink.leetcode_link,WLink.other_link,WLink.gfg_link]
        all_rows.append(row)
    return all_rows

def listToRows(list_name):
    all_rows = []
    for topic in WTopic.objects.filter(list__name=list_name):
        for question in WQuestion.objects.filter(topic=topic):
            for WLink in WQLinks.objects.filter(question=question):
                row = [topic.name,question.name,WLink.striver_link,WLink.leetcode_link,WLink.other_link,WLink.gfg_link]
            all_rows.append(row)
    return all_rows

# export_list('List1')

for topic in WTopic.objects.all():
    export_topic(topic.name)

