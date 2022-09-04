from django.urls import URLPattern, path
from . import views


#URL config
urlpatterns = [
    path('questions/',views.QuestionView.as_view())
    
]