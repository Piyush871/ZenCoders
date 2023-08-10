from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
import os
import sys
import django
from selenium.common.exceptions import NoSuchElementException


class WebDriverSetup:
    def __init__(self):
        self.driver = None
        self.project_path = None

    def set_project_path(self, path):
        self.project_path = path
        sys.path.append(self.project_path)
        os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ZenCoders.settings")
        django.setup()

    def get_driver(self):
        if self.driver is None:
            chromedriver_path = "/Users/piyushjaiswal/Downloads/chromedriver-mac-arm64 2/chromedriver"
            webdriver_service = Service(chromedriver_path)

            options = Options()
            options.add_argument("user-data-dir=/Users/piyushjaiswal/Library/Application Support/Google/Chrome/newProfile")
            options.add_argument('--disable-blink-features=AutomationControlled')
            #make this go headleass
            options.add_argument("--headless")
            options.add_experimental_option("excludeSwitches", ["enable-automation"])
            options.add_experimental_option('useAutomationExtension', False)
            options.binary_location = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

            self.driver = webdriver.Chrome(service=webdriver_service, options=options)
        return self.driver
