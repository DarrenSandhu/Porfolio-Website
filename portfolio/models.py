from django.db import models
from django.contrib.auth.models import User

# Create your models here.

# Skill model
class Skill(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()


# User model extension
class NewUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    skills = models.ManyToManyField(Skill, related_name='users')
    bio = models.TextField()
    image = models.ImageField(upload_to='uploads/')
class Education(models.Model):
    degree = models.CharField(max_length=100)
    school = models.CharField(max_length=100)
    year = models.IntegerField()
    description = models.TextField()
    ordinal = models.IntegerField()

class Experience(models.Model):
    title = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    year = models.IntegerField()
    description = models.TextField()
    ordinal = models.IntegerField()

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='uploads/')
    url = models.URLField()
    ordinal = models.IntegerField()
