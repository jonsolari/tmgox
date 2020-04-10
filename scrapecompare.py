import sys
import requests
from bs4 import BeautifulSoup


def get_page(url):
    r = requests.get(url)

    if not r.ok:
        print("Server responded with: ", r.status_code)
    else:
        soup = BeautifulSoup(r.text, 'lxml')
    return soup

def get_detail_data(soup):
    nope = soup.findAll(text='No exact matches found')
    
    h3 = soup.find('h3', class_="s-item__title").text
    span = soup.find('span', class_="s-item__price").text
    href = soup.find('a', class_="s-item__link", href=True).get('href')
    if nope != []:
        return
    else:
        print(h3)
        print(span[1:])
        print(href)


# TODO loop over list of releases to search for, update JSON / remove things no longer available 

releaselist = ["mountain goats zopilote machine lp", "mountain goats sweden lp",  "mountain goats nothing for juice lp",  "mountain goats full force galesburg lp",  "mountain goats coroner's gambit lp",  "mountain goats new asian cinema",  "mountain goats isopanisad radio hour",  "mountain goats devil in the shortwave",  "mountain goats black pear tree",  "mountain goats satanic messiah",  "mountain goats moon colony bloodbath",  "mountain goats taboo cassette",  "mountain goats come come to the sunset tree lp",  "mountain goats on juhu beach",  "mountain goats black pear tree yellow",  "mountain goats moon colony bloodbath green"]
ebaydata = {}


def getdata(release):
    search = release.replace(" ", "+")
    url = 'https://www.ebay.com/sch/176985/i.html?_from=R40&_nkw={}&LH_TitleDesc=0&_sop=15'.format(search)
    get_detail_data(get_page(url))

for i in releaselist:
    print(getdata(i))