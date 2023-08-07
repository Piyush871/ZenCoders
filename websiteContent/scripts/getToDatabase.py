import os
import sys
import django
import pyperclip
import re

# This line is needed to use Django's ORM outside a Django project
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'your_django_project.settings')

# This line checks if the Django project is set up correctly
django.setup()

# Importing models after setup
from your_django_app.models import Topic, Question, Approach

# Function to insert data into database
def insert_data_into_database(topic_name, question_name, question_description, approach_name, approach_content):
    # Create a Topic
    topic, created = Topic.objects.get_or_create(name=topic_name)

    # Create a Question
    question, created = Question.objects.get_or_create(
        name=question_name,
        description=question_description,
        topic=topic
    )

    # Create an Approach
    approach, created = Approach.objects.get_or_create(
        sequence=1,  # I'm assuming the first approach here, modify as needed
        name=approach_name,
        content=approach_content,
        description=question_description,  # Assuming description is same as question, modify as needed
        question=question
    )

def parse_clipboard():
    # Get clipboard data
    data = pyperclip.paste()

    # Parse question name
    question_name = re.search(r'Question:\n(.+)', data).group(1)

    # Parse question description
    question_description = re.search(r'Explanation of the Question:\n([\s\S]*?)Solution:', data).group(1).strip()

    # Parse solution
    solution = re.search(r'Solution:\n```SQL\n([\s\S]*?)\n```', data).group(1).strip()

    return question_name, question_description, solution

# Call the function with parameters from command line arguments
if __name__ == "__main__":
    topic_name = sys.argv[1]
    question_name, question_description, solution = parse_clipboard()
    approach_name = "SQL Approach"

    insert_data_into_database(topic_name, question_name, question_description, approach_name, solution)
