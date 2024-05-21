from django.db import models

# Create your models here.

# Programming language model
class Programming(models.Model):
    name = models.CharField(max_length=100)
    logo = models.ImageField(upload_to='uploads/', default='uploads/Python_logo.svg')
    description = models.TextField()

    def __str__(self):
        return self.name

# Skill model
class Skill(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()   

    def __str__(self):
        return self.name 
# Custom user model
class CustomUser(models.Model):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=100)
    bio = models.TextField(blank=True)
    image = models.ImageField(upload_to='uploads/', blank=True)
    skills = models.ManyToManyField(Skill)
    date_of_birth = models.DateField(null=True, blank=True)

class Education(models.Model):
    degree = models.CharField(max_length=100, blank=True)
    degree_level = models.CharField(max_length=100, blank=True)
    a_level = models.CharField(max_length=100, blank=True)
    a_level_subjects_and_grades = models.TextField(blank=True)
    school = models.CharField(max_length=100)
    year_start = models.CharField(max_length=100)
    year_end = models.CharField(max_length=100)
    description = models.TextField()
    logo = models.ImageField(upload_to='uploads/', blank=True)

    def __str__(self):
        return self.school
class Experience(models.Model):
    title = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    year_start = models.CharField(max_length=100)
    year_end = models.CharField(max_length=100)
    description = models.TextField()
    logo = models.ImageField(upload_to='uploads/', blank=True)

    def __str__(self):
        return self.company


class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name
    
class Project(models.Model):
    title = models.CharField(max_length=100)
    date = models.CharField(max_length=100)
    description = models.TextField()
    category = models.ManyToManyField(Category, default='web app')
    image = models.ImageField(upload_to='uploads/')
    url = models.URLField()
    programming_language = models.ManyToManyField(Programming, related_name='projects')

    def __str__(self):
        return self.title
