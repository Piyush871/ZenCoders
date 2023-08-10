from django.http import HttpResponse
from django.shortcuts import render
from ..models import Question, Approach, Line, Topic
from websiteContent.models import *

from myapp.views.utilityViews import *
def questionDnD_view(request,id):
    #get the question object
    question = Question.objects.get(id=id)
    #get the question with the same name in the websiteContent
    #IF THE OBJECT EXIST 
    w_question = None
    w_links = None
    if WQuestion.objects.filter(name=question.name).exists():
        #get the object
        w_question = WQuestion.objects.get(name=question.name)
    #get the Wlink object
        w_links = WQLinks.objects.get(question=w_question)
    
        
    
    #get the first approach object
    #get all the topics 
    topics = Topic.objects.all()
    approaches = question.approach_set.all().order_by('-sequence')
    #get the number of approaches
    count = question.approach_set.count()
    #get the last approach
    approach = approaches[count-1]
    text = approach.content
    line_objects=divideContentToLines(text, approach)
    #print all the 
    #render the template
    return render(request,'otherTemplates/dragAndDrop.html',{'w_links':w_links,'question':question,'line_objects':line_objects,'topics':topics,'approaches':approaches})
