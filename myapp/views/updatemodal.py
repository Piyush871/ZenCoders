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

        return JsonResponse({'message': 'Question added successfully'}, status=201)