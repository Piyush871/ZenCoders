
from WebDriverSetup import WebDriverSetup
import os

setup = WebDriverSetup()
setup.set_project_path(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))

driver = setup.get_driver()

#get the neccessary imports
from websiteContent.finalScript.ScriptUtilities import *
from websiteContent.models import *
from websiteContent.finalScript.TrimStriverSolutions import trimText

# question = models.ForeignKey(WQuestion,on_delete=models.CASCADE)
#     sequence = models.PositiveIntegerField()
#     content = models.TextField()
#     description = models.TextField()
#     name


javascript_code = """
let arrows = document.querySelectorAll(".arrow-svg")
for (let i = 0; i < arrows.length; i++) {
    var event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
    });
    arrows[i].dispatchEvent(event);
}
"""

def insertData(question,approaches):
    #create a approach model
    for approach in approaches:
        approach =trimText(approach)
        approach_obj = WApproach(question=question)
        approach_obj.sequence = WApproach.objects.filter(question=question).count()+1
        approach_obj.name = 'Approach '+str(WApproach.objects.filter(question=question).count()+1)
        description = ''
        approach_obj.content = approach
        approach_obj.save()
        #insert the lines 
        

def getData(driver,link):
    try:
        driver.get(link)
        time.sleep(5)
        #get the data
        try:
            driver.execute_script(javascript_code)
        except:
            print('error in executing javascript code')
        time.sleep(5)
        approaches=[]
        code_elements=driver.find_elements(By.CSS_SELECTOR,"code[lang=cpp]")
        for code_element in code_elements:
            if(code_element.text==''):
                continue
            approaches.append(trimText(code_element.text))
        return approaches
    except:
        return None


def findLink(link_obj):
    if(link_obj==None):
        return None
    if(link_obj.striver_link!=None and link_obj.striver_link!=''):
        return link_obj.striver_link
    else:
        return None

    
    
def main():
    #get the topics

    for topic in WTopic.objects.all():
        questions = WQuestion.objects.filter(topic=topic)
        for question in questions:
            linkObj = WQLinks.objects.filter(question=question)[0]
            link = findLink(linkObj)
            if(link==None or link==''):
                continue
            approches = getData(driver,link)
            insertData(question,approches)
            
    
    #close the driver
    driver.close()


if __name__ == "__main__":
    main()





    
    