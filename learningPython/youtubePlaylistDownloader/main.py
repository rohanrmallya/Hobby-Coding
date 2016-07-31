'''
Copyright (C) 2016 Rohan Mallya

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

'''

import requests
from bs4 import BeautifulSoup
from selenium import webdriver

url = input("Enter URL\n")
r = requests.get(url)
soup = BeautifulSoup(r.text)
urlNames = soup.find_all('td',class_='pl-video-title')
# urlNames = list(urlNames)
urlNames = BeautifulSoup(str(urlNames))
a_tags = urlNames.find_all('a',href=True)
lst=[]
for i in range(0,len(a_tags),2):
    lst.append((a_tags[i])['href'])

browser = webdriver.Firefox()
for i in range(0,len(lst)):
    print("Opening Browser")
    site = "http://ssyoutube.com"+lst[i]
    browser.get(site)
    browser.implicitly_wait(25)
    link = browser.find_element_by_link_text('Download')
    link.click()
