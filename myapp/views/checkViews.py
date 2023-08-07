#import the check views 
from django.http import HttpResponse
from django.shortcuts import render
from django.http import JsonResponse
from ..models import Question, Approach, Line, Topic
import json
from .utilityViews import *

def check_submit_view(request,id):
    print("check submit view")
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    data = body 
    if id is None:
        return JsonResponse({"message": "Invalid request, no ID found"},status=400)
    try:
        approach = Approach.objects.get(id=id)
    except Approach.DoesNotExist:
        return JsonResponse({"message": "Approach not found"}, status=404)

    ans =checkSubmit(approach, data)
    print(ans)
    if(ans):
        return JsonResponse({"message": "Your answer is correct","ans":"True"},status=200)
    else:
        return JsonResponse({"message": "Your answer is incorrect","ans":"False"},status=200)
    
   
    
    