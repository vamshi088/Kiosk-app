from rest_framework import serializers
from .models import question

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = question
        fields = ('queID' ,'queText', 'ratingType')