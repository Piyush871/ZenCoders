from django.shortcuts import render,HttpResponse
from ..models import Question, Approach, Line, Topic
from django.db.models import Q
from django.http import JsonResponse
# def allEquipments_api(request):
#     search = request.GET.get('search', '')
#     print(search)

def question_table_view(request):
    search = request.GET.get('search', '')
    if search:
        queryset = Question.objects.filter(
            Q(name__icontains=search) |
            Q(description__icontains=search) |
            Q(topic__name__icontains=search) |
            Q(last_visited__icontains=search)
        )
    else:
        queryset = Question.objects.all().order_by(
            '-last_visited')
        
    data = []
    for item in queryset:
        row = [
            f'<a href="/questionDnD/{item.id}" target="_blank">{item.name}</a>',
            f'<a href="/questionDnD/{item.id}" target="_blank">Open</a>',
            item.last_visited.strftime('%Y-%m-%d') if item.last_visited else '',
            item.topic.name if item.topic else '',
            f'<input type="checkbox" class="user-checkbox" data-id="{item.id}" value="{item.important}" />',
            f'<button class="btn btn-sm addApproach_button" data-id="{item.id}" style="color: blue;">Add approach</button>'
        ]
        data.append(row)
    print(data)
    return JsonResponse({'data': data})
        
        

