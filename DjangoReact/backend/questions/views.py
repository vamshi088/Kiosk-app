from django.shortcuts import render
from .serializers import QuestionSerializer 
from rest_framework import viewsets      
from .models import question                 

class QuestionView(viewsets.ModelViewSet):  
    serializer_class = QuestionSerializer   
    queryset = question.objects.all() 