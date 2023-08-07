
from websiteContent.models import *

def getQuestions(topic_name ):
    try:
        questions = WQuestion.objects.filter(topic__name=topic_name)
        return questions
    except:
        return None

def getTopics(list_name):
    try:
        topics = WTopic.objects.filter(list__name=list_name)
        return topics
    except:
        return None
    
def main():
    topic_name=WTopic.objects.all()[0].name
    questions = getQuestions(topic_name)
    for question in questions:
        Links=WQLinks.objects.filter(question=question)[0]
        link=Links.leetcode_link
        if(link==None or link==''):
            link=Links.striver_link
        if(link==None or link==''):
            link=Links.other_link
        if(link==None or link==''):
            continue
        print(link)

        
    

if __name__ == "__main__":
    main()

    


        
    