# Generated by Django 5.0.6 on 2024-05-21 01:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0011_category_remove_project_category_project_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='github',
            field=models.URLField(blank=True),
        ),
    ]