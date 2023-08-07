
from WebDriverSetup import WebDriverSetup
import os

setup = WebDriverSetup()
setup.set_project_path(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))

from ScriptUtilities import deleteList

def main():
    #get the topics
    deleteList('List1')

if __name__ == "__main__":
    main()
    