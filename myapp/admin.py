from django.contrib import admin
from .models import Question, Approach, Line, Topic,List

#registering the models
admin.site.register(List)
admin.site.register(Topic)
admin.site.register(Question)
admin.site.register(Approach)
admin.site.register(Line)

