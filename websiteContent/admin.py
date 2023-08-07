from django.contrib import admin

# Register your models here.

from .models import *

admin.site.register(WList)
admin.site.register(WTopic)
admin.site.register(WQuestion)
admin.site.register(WQLinks)
admin.site.register(WApproach)