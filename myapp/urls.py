#import path 
from django.urls import path,include
from myapp.views import startupViews,tableViews,renderingTemplates,checkViews,otherApis,updatemodal
from myapp.views.otherApis import TopicsView
urlpatterns = [
    #startupViews
    path('',startupViews.home_view,name='home'),
    #TableView
    path('api/questions_table/',tableViews.question_table_view,name='questions_table'),
    #renderingTemplates
    path('questionDnD/<int:id>/',renderingTemplates.questionDnD_view,name='questionDnD'),
    path('api/check_submit/<int:id>/',checkViews.check_submit_view,name='check_submit'),
    path('api/get_approach_lines/<int:id>', otherApis.get_approach_lines),
    path('api/addApproach/<int:id>', updatemodal.add_approach_view),
    #To be implemented
    # path('api/updateApproach/<int:id>', updatemodal.update_approach_view),
    path('api/addQuestion/<str:topic>/', updatemodal.AddQuestionView.as_view(), name='add_question'),
     path('api/topics/', TopicsView.as_view(), name='topics'),
    
]

