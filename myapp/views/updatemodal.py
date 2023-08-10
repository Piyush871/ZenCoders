from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from ..models import Question, Approach, Line, Topic
from .utilityViews import *

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import ObjectDoesNotExist
import json
from django.views import View

@csrf_exempt
def add_approach_view(request, id):
    if request.method == 'POST':
        # Parse the body of the request as JSON
        data = json.loads(request.body)

        # Get the question with the provided id
        try:
            question = Question.objects.get(id=id)
        except ObjectDoesNotExist:
            return JsonResponse({'message': 'Question with provided id does not exist'}, status=404)

        # Extract approach data from the request body
        #get the number of the approaches to this quesiton 
        sequence = question.approach_set.count() + 1
        name = data.get('name')
        content = data.get('content')
        description = data.get('description')

        # Create and save the Approach instance
        approach = Approach(sequence=sequence, name=name, content=content, description=description, question=question)
        approach.save()
        approach_to_lines(approach)
        #add every line of the appraoch content to the line table
    

        # Return a success response
        return JsonResponse({'message': 'Approach created successfully'}, status=201)
    else:
        return JsonResponse({'message': 'Invalid request method'}, status=400)


def question_add_note_view(request,id):
    if request.method=="POST":
        data = json.loads(request.body)
    
    note = data.get("note")
    #get the question 
    try:
        question = Question.objects.get(id=id)
    except ObjectDoesNotExist:
        return JsonResponse({'message': 'Question with provided id does not exist'}, status=404)

    question.note=note
    question.save()
    return JsonResponse ({'message': 'Note added successfully'}, status=201)
    

def get_question_note_view(request,id):
    if request.method=="GET":
        try:
            question = Question.objects.get(id=id)
        except ObjectDoesNotExist:
            return JsonResponse({'message': 'Question with provided id does not exist'}, status=404)
        note = question.note
        return JsonResponse({'note': note}, status=200)
    

def delete_question_view(request):
    if request.method=="POST":
        data = json.loads(request.body)
        ids = data.get('ids')
        if(len(ids)==0):
            return JsonResponse({'message': 'No ids provided'}, status=400)
        if(len(ids)>5):
            return JsonResponse({'message': 'Cannot delete more than 5 question at a time '}, status=400)
        for id in ids:
            try :
                question = Question.objects.get(id=id)
            except ObjectDoesNotExist:
                return JsonResponse({'message': 'Question with provided id does not exist'}, status=404)
        for id in ids:
            question = Question.objects.get(id=id)
            question.delete()
        return JsonResponse({'message': 'Questions deleted successfully'}, status=200)

def question_important_view(request,id):
    if request.method=="POST":
        data = json.loads(request.body)
        
        try:
            question = Question.objects.get(id=id)
        except ObjectDoesNotExist:
            return JsonResponse({'message': 'Question with provided id does not exist'}, status=404)
        
        important = data.get("important")
        if(important):
            important=True
        else:
            important=False
        
        question.important=important
        question.save()
        return JsonResponse ({'message': 'Question important status changed successfully'}, status=201)

def question_done_view(request,id):
    if request.method =="POST":
        data = json.loads(request.body)

        try:
            question = Question.objects.get(id=id)
        except ObjectDoesNotExist:
            return JsonResponse({'message': 'Question with provided id does not exist'}, status=404)
        
        done=data.get("done")
        
        if(done):
            done=True
        else:
            done=False

        question.done=done
        question.save()
        return JsonResponse ({'message': 'Question done status changed successfully'}, status=201)

    else:
        return JsonResponse({'message': 'Invalid request method'}, status=400)
            
class AddQuestionView(View):
    def post(self, request, *args, **kwargs):
        
        topic = self.kwargs.get('topic')
        data = json.loads(request.body.decode('utf-8'))
        name=data.get('name', None)
        description = data.get('description', None)
        done = data.get('done', False)
        important = data.get('important', False)
        last_visited = data.get('last_visited', None)
        topic_obj=Topic.objects.get(name=topic)
        question = Question(
            name=name,
            description=description,
            topic=topic_obj,
            done=done,
            important=important,
            last_visited=last_visited
        )
        question.save()
        return JsonResponse({'message': 'Question added successfully','id':id,}, status=201)