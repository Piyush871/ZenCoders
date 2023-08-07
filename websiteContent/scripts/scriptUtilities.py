from websiteContent.models import *# replace MyModel with your actual model class name

from myapp.models import *
#import primary key exception
from django.db.utils import IntegrityError


def CreateTopics(topics_list):
    for topic in topics_list:
        try:
            WTopic.objects.create(name=topic)
        except IntegrityError:  
            print("Duplicate Entry")
            continue
    return True


def WTopic_to_Topics():
    topics = WTopic.objects.all()
    for topic in topics:
        try:
            Topic.objects.create(name=topic.name, description=topic.description)
        except IntegrityError:
            print("Duplicate Entry")
            continue
    return True

def WQuestions_to_Questions():
    questions = WQuestion.objects.all()
    for question in questions:
        try:
            Question.objects.create(name=question.name, description=question.description, topic=Topic.objects.get(name=question.topic.name))
        except IntegrityError:
            print("Duplicate Entry")
            continue
    return True

def WApproach_to_Approach():
    approaches = WApproach.objects.all()
    for approach in approaches:
        try:
            Approach.objects.create(sequence=approach.sequence, content=approach.content, description=approach.description, name=approach.name, question=Question.objects.get(name=approach.question.name))
        except IntegrityError:
            print("Duplicate Entry")
            continue
    return True