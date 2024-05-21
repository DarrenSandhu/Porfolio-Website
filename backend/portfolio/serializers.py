from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Education, Experience, Project, CustomUser, Skill, Programming, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
class ProgrammingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Programming
        fields = '__all__'
class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'
    
class UserSerializer(serializers.ModelSerializer):
    skills = serializers.SlugRelatedField(many=True, slug_field='name', queryset=Skill.objects.all())
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'name', 'bio', 'image', 'date_of_birth', 'github', 'skills']

    def get_image_url(self, obj):
        request = self.context.get('request')
        return request.build_absolute_uri(obj.image.url)

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    programming_language = serializers.SlugRelatedField(many=True, slug_field='name', queryset=Programming.objects.all())
    category = serializers.SlugRelatedField(many=True, slug_field='name', queryset=Category.objects.all())
    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'category', 'date', 'image', 'url', 'programming_language']
    
    def get_image_url(self, obj):
        request = self.context.get('request')
        return request.build_absolute_uri(obj.image.url)
