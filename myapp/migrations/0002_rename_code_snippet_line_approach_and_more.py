# Generated by Django 4.2.3 on 2023-07-18 03:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='line',
            old_name='code_snippet',
            new_name='approach',
        ),
        migrations.AlterUniqueTogether(
            name='line',
            unique_together={('line_number', 'approach')},
        ),
    ]