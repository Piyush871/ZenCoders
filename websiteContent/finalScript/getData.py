import time
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
#no such element exception
from selenium.webdriver.common.action_chains import ActionChains
from pynput.keyboard import Key, Controller
from pynput import keyboard
import pyperclip

keyboard = Controller()
cookies=[



{
    "domain": ".openai.com",
    "expirationDate": 1691733026.878186,
    "hostOnly": False,
    "httpOnly": False,
    "name": "_puid",
    "path": "/",
    "sameSite": "Lax",
    "secure": True,
    "session": False,
    "storeId": "0",
    "value": "user-mMFrl00OnNfb91ggJZBZMQNg:1691128226-5fuHscEEX0xT%2FeeWjcJ532hp3Fapew8pyuhCt3h72ec%3D",
    "id": 7
},


]



js_script = """
var textarea = document.getElementById("prompt-textarea");
                textarea.value = arguments[0];

                // Trigger an input event
                var event = new Event("input", { bubbles: True });
                textarea.dispatchEvent(event);

                // Simulate pressing Enter
                var enterEvent = new KeyboardEvent("keydown", {
                  bubbles: true,
                  cancelable: true,
                  keyCode: 13,
                });
                textarea.dispatchEvent(enterEvent);
                textarea.click();
"""

copyButtonSelector="""button.rounded-md rect"""

def getData(driver,query):
    driver.get("https://chat.openai.com/?model=gpt-4-plugins")
    #inject the cokies
    #wai for site to load
    time.sleep(5)
    for cookie in cookies:
        driver.add_cookie(cookie)
    #refresh the page

    time.sleep(6)
    #click the element with id radix-:r45:
    # driver.find_element(By.ID, "radix-:r45:").click()

    actions = ActionChains(driver)
    #insert query in the prompt area 
    try:
        prompt_area = driver.find_element(By.ID, "prompt-textarea")
        driver.execute_script(js_script,query)
        prompt_area.click()

    except NoSuchElementException:
        print("The prompt area element was not found")
        
    with keyboard.pressed(Key.cmd):
        keyboard.press('p')
        keyboard.release('p')

    time.sleep(2)
    keyboard.press(Key.esc)
    keyboard.release(Key.esc)
    
    #wait for 10 seconds 
    time.sleep(2)
    #press the command + a key
    #bring cursor on the prompt area

    keyboard.press(Key.enter)
    keyboard.release(Key.enter)


    time.sleep(60)

    #try every second for 30 seconds 
    #check if the copy button is visible


    seconds = 0
    while seconds < 30:
        if driver.find_element(By.CSS_SELECTOR, copyButtonSelector).is_displayed():
            try:
                driver.find_elements(By.CSS_SELECTOR, copyButtonSelector)[0].click()
                
                #select the last element in the list
                
                break
            except Exception as e:
                print(e)
        else:
            print("Copy button not found")
        time.sleep(1)
        seconds += 1

    #get the text out of the clipboard
    text = pyperclip.paste()
    print('this is the output of the query: ')
    print(text)
    return text
    


# <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
# <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>