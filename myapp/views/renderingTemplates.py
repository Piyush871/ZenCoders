from django.http import HttpResponse
from django.shortcuts import render
from ..models import Question, Approach, Line, Topic

from myapp.views.utilityViews import *
def questionDnD_view(request,id):
    #get the question object
    question = Question.objects.get(id=id)
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
    return render(request,'otherTemplates/dragAndDrop.html',{'question':question,'line_objects':line_objects,'topics':topics,'approaches':approaches})
