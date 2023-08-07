from websiteContent.models import *



def insertData(data,topic_name,list_name):
    #create a topic
    list = WList.objects.get_or_create(name=list_name)[0]
    topic = WTopic.objects.get_or_create(name=topic_name,list=list)[0]
    #create a question
    question = WQuestion.objects.get_or_create(name=data['question_name'],topic=topic)[0]
    #create a link
    link = WQLinks.objects.get_or_create(question=question)[0]
    link.youtube_link = data['youtube_link']
    link.striver_link = data['striver_link']
    link.leetcode_link = data['leetcode_link']
    link.other_link = data['other_link']
    if(data.__contains__('gfg_link')):
        link.gfg_link = data['gfg_link']
    link.save()
    
    return question



def insertSolution(question,question_description,solution):
    #insert data into the question description
    question.description = question_description
    question.save()
    #insert solution to the approach object
    
    approach = WApproach(question=question)
    approach.content=solution
    #get the number of apporaches connected to the same question
    num_approaches = WApproach.objects.filter(question=question).count()
    approach.sequence = num_approaches+1
    approach.name = 'Approach '+str(num_approaches+1)
    approach.save()
    
    #for each line in the solution, create a line object and insert it into the line contetn
    lines = solution.split('\n')
    for line in lines:
        #get the number of lines for this approach
        line_number = WLine.objects.filter(approach=approach).count()
        line_object = WLine(approach=approach)
        line_object.line_number = line_number+1
        line_object.content = line
        line_object.blank = False
        line_object.save()
    
    
    