from WebDriverSetup import WebDriverSetup
import os

setup = WebDriverSetup()
setup.set_project_path(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))

from websiteContent.models import *

def trimApproaches():
    for approach in WApproach.objects.all():
        approach.content = approach.content.strip()
        if(approach.content.__contains__("using namespace std;")):
            approach.content = approach.content.split("using namespace std;")[1]
        if(approach.content.__contains__("int main()")):
            approach.content = approach.content.split("int main()")[0]
        approach.save()
        
def trimText(text):
    text = text.strip()
    if(text.__contains__("using namespace std;")):
        text = text.split("using namespace std;")[1]
    if(text.__contains__("int main()")):
        text = text.split("int main()")[0]
    return text

    
    
def main():
    trimApproaches()

if __name__ == '__main__':
    main()
