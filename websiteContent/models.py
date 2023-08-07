from django.db import models

# Create your models here.

class WList(models.Model):
    name=models.CharField(max_length=200,unique=True)

class WTopic(models.Model):
    name = models.CharField(max_length=200, primary_key=True)
    description = models.TextField()
    list = models.ForeignKey(WList,on_delete=models.CASCADE,null=True,default='List1',blank=True)

class WQuestion(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True,null=True)
    topic = models.ForeignKey(WTopic,on_delete=models.CASCADE,default='',null=True,blank=True)

    def __str__(self):
        return self.name
    
class WQLinks(models.Model):
    question = models.ForeignKey(WQuestion,on_delete=models.CASCADE,primary_key=True)
    youtube_link = models.CharField(max_length=200,null=True,blank=True)
    striver_link = models.CharField(max_length=200,null=True,blank=True)
    leetcode_link = models.CharField(max_length=200,null=True,blank=True)
    other_link = models.CharField(max_length=200,null=True,blank=True)
    gfg_link = models.CharField(max_length=200,null=True,blank=True)
    
    def __str__(self):
        return self.question.name
    
class WApproach(models.Model):
    question = models.ForeignKey(WQuestion,on_delete=models.CASCADE)
    sequence = models.PositiveIntegerField()
    content = models.TextField()
    description = models.TextField()
    name = models.CharField(max_length=200)
    
class WLine(models.Model):
    line_number = models.IntegerField()
    content = models.TextField(blank=True)
    blank = models.BooleanField(default=False)
    approach = models.ForeignKey(WApproach, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('line_number', 'approach')

    def __str__(self):
        return f'{self.line_number}: {self.content}'