
from WebDriverSetup import WebDriverSetup
import os

setup = WebDriverSetup()
setup.set_project_path(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))

driver = setup.get_driver()

#get the neccessary imports
from websiteContent.finalScript.ScriptUtilities import *
from websiteContent.models import *
from websiteContent.finalScript.getData import *
from websiteContent.finalScript.createWModels import *




def topicQDSol(topic):
    #get the question of the topic
    questions = WQuestion.objects.filter(topic=topic)
    
    for question in questions:
        linkObj = WQLinks.objects.filter(question=question)[0]
        link = getLink(linkObj)
        if(link==None or link==''):
            continue
        #now we have to get the data 
        #read the file query.txt
        query = open('query.txt','r').read()
        query = query+link
        print(query)
        data = getData(driver,query)
        #now extract the data
        question_description,solution = extractSolution(data)
        #now save the data
        insertSolution(question,question_description,solution)
        #sleep for 120 seconds
        time.sleep(120)
        
        
def main():
    #get the topics

    topic = WTopic.objects.all()[0]
    topicQDSol(topic)
     
    #close the driver
    driver.close()

if __name__ == "__main__":
    main()


        
        
        
    
    
    
    




