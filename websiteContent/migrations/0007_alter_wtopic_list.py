# Generated by Django 4.1.3 on 2023-07-31 03:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('websiteContent', '0006_alter_wtopic_list'),
    ]

    operations = [
        migrations.AlterField(
            model_name='wtopic',
            name='list',
            field=models.ForeignKey(blank=True, default='List1', null=True, on_delete=django.db.models.deletion.CASCADE, to='websiteContent.wlist'),
        ),
    ]
