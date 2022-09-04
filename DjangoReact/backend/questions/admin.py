from django.contrib import admin
from . models import question
# Register your models here.


admin.site.admin_view
admin.site.register(question)