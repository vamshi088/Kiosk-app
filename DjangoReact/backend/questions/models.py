from django.db import models

class question(models.Model):
   queID = models.IntegerField()
   queText = models.TextField()
   ratingType = models.TextField()

   def _str_(self):
     return self.title