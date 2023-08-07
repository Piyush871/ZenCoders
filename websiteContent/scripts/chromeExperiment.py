import os
import sys
import django
import time


# Adding the parent directory of the current script to the Python path
project_path = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.append(project_path)


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ZenCoders.settings")
django.setup()
from websiteContent.scripts.scriptUtilities import *


# Get the path of your profile directory
profile_path = os.path.expanduser("~")

# Open the file using your profile path
with open(os.path.join(profile_path, "my_file.txt"), "r") as f:
    contents = f.read()

print(contents)
