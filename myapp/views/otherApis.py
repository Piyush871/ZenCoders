from django.http import JsonResponse
from ..models import Approach , Topic , Question , Line 
from .utilityViews import * 
from django.views.decorators.csrf import csrf_exempt
#import view 
from django.views import View



def get_approach_lines(request, id):
    approach = Approach.objects.get(id=id)
    content = approach.content
    line_objects = divideContentToLines(content,approach)
    line_objects_dicts = [obj.__dict__ for obj in line_objects]
    print(line_objects_dicts)
    return JsonResponse(line_objects_dicts, safe=False)

class TopicsView(View):
    def get(self, request, *args, **kwargs):
        topics = Topic.objects.all()
        topics_list = list(topics.values('name', 'description'))  # or just ('name',) if you only want the names
        return JsonResponse(topics_list, safe=False)