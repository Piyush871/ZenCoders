from django.db import models

# Create your models here.
class Topic(models.Model):
    name = models.CharField(max_length=200, primary_key=True)
    description = models.TextField()

class Question(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True,null=True)
    topic = models.ForeignKey(Topic, on_delete=models.SET_NULL,default='',null=True,blank=True)
    done = models.BooleanField(default=False)
    important = models.BooleanField(default=False)
    last_visited = models.DateTimeField(default=None, null=True)
    # Other fields if needed

    def __str__(self):
        return self.name


class Approach(models.Model):
    sequence = models.PositiveIntegerField()
    name = models.CharField(max_length=200)
    content = models.TextField()
    description = models.TextField(null=True, blank=True)
    
    question = models.ForeignKey(Question, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Line(models.Model):
    line_number = models.IntegerField()
    content = models.TextField(blank=True)
    blank = models.BooleanField(default=False)
    approach = models.ForeignKey(Approach, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('line_number', 'approach')

    def __str__(self):
        return f'{self.line_number}: {self.content}'
