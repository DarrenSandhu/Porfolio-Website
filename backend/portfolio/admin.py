from django.contrib import admin

# Register your models here.
from .models import Category, CustomUser, Education, Experience, Programming, Project, Skill

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name','description']

@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'bio', 'github', 'date_of_birth', 'cv', 'image', 'get_skills']

    def get_skills(self, obj):
        return ", ".join([skill.name for skill in obj.skills.all()])
    get_skills.short_description = 'Skills'  # Display name in admin panel

@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ['school','degree','degree_level','a_level','a_level_subjects_and_grades','year_start','year_end','description','logo']

@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ['title','company','year_start','year_end','description','logo']

@admin.register(Programming)
class ProgrammingAdmin(admin.ModelAdmin):
    list_display = ['name','description']

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title','description','get_categories','get_programming_languages','image','url','repo','repoID']

    def get_programming_languages(self, obj): # ManyToMany field
        return ", ".join([programming.name for programming in obj.programming_language.all()])
    
    def get_categories(self, obj): # ManyToMany field
        return ", ".join([category.name for category in obj.category.all()])
    get_categories.short_description = 'Categories'
    get_programming_languages.short_description = 'Programming Languages'

