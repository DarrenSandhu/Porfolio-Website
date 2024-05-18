from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

# Home page view
def home(request):
    response = HttpResponse("Welcome to my portfolio!")
    return response