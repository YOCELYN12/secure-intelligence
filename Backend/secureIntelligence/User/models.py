from django.db import models
from django.contrib.auth.models import User

# Create your models here.
# class Usuario(models.Model):
#    username = models.CharField(max_length=255)
  
   
class Usere(models.Model):
   user = models.OneToOneField(User, on_delete=models.CASCADE)