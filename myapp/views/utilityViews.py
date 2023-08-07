
from ..models import *
import random

def saveContentToLines(content, approach):
    lines = content.split('\n')
    num_lines = len(lines)
    blank_lines = set(random.sample(range(2, num_lines-2), 3))
    
    for i, line in enumerate(lines):
        new_line = Line(content=line, approach=approach)
        new_line.sequence = i+1
        new_line.blank = i in blank_lines
        new_line.save()
    #get all teh lines of the approach and return them 
    return approach.line_set.all().order_by('sequence')
        

class LineClass:
    def __init__(self, line_text, is_blank):
        self.line_text = line_text
        self.is_blank = is_blank

def divideContentToLines(content, approach):
    lines = content.split('\n')
    #remove the empty lines 
    lines = [line for line in lines if line.strip()]
    num_lines = len(lines)
    blank_lines = set()
    if num_lines < 7:
        if num_lines >=4:
            blank_lines = set(random.sample(range(1, num_lines-1), 2))
    else:
        blank_lines = set(random.sample(range(2, num_lines-2), 3))
    
    line_objects = []
    
    for i, line in enumerate(lines):
        line = line.rstrip('\n') # remove trailing newlines
        is_blank = i in blank_lines
        line_obj = LineClass(line_text=line, is_blank=is_blank)
        line_objects.append(line_obj)
    
    return line_objects
 
def checkSubmit(approach, Text):
    content = approach.content
    line_objects = divideContentToLines(content, approach)
    for i, line in enumerate(line_objects):
        line_text_stripped = line.line_text.strip('\r\n').strip()
        Text_stripped = Text[i].strip('\r\n').strip()
        if line_text_stripped != Text_stripped:
            print("line.line_text", repr(line_text_stripped))
            print("Text[i]", repr(Text_stripped))
            return False

    return True

def approach_to_lines(approach):
    
    line_objects = divideContentToLines(approach.content, approach)

    for i, line in enumerate(line_objects):
        #create a new line object
        line_obj = Line(content=line.line_text, approach=approach)
        if line.is_blank:
            line_obj.blank = True
        else:
            line_obj.blank = False
        line_obj.line_number=i 
        
        #save the line object
        line_obj.save()
        

            