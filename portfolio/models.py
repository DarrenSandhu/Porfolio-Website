from django.db import models

# Create your models here.
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
