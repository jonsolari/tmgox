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

    total = { 'price': 0, 'url' : '' }

    if nope != []:
        return None
    else:
        total['price'] = span[1:]
        total['url'] = href
        return total


# TODO loop over list of releases to search for, update JSON / remove things no longer available 

# make sure account for plain black pressings of BPT and MCB
releaselist = ["mountain goats zopilote machine lp", "mountain goats sweden lp", "mountain goats nothing for juice lp", "mountain goats full force galesburg lp", "mountain goats coroner's gambit lp", "mountain goats new asian cinema", "mountain goats isopanisad radio hour", "mountain goats devil in the shortwave", "mountain goats black pear tree", "mountain goats satanic messiah", "mountain goats moon colony bloodbath", "mountain goats taboo cassette", "mountain goats come come to the sunset tree", "mountain goats on juhu beach", "mountain goats black pear tree yellow", "mountain goats moon colony bloodbath green", "beatles please please me parlophone pmc 1202 first"]

discogsurls = ['https://api.discogs.com/releases/1601354', 'https://api.discogs.com/releases/1191772', 'https://api.discogs.com/releases/744810', 'https://api.discogs.com/releases/523351', 'https://api.discogs.com/releases/1217804', 'https://api.discogs.com/releases/1625208', 'https://api.discogs.com/releases/1625203', 'https://api.discogs.com/releases/1210894', 'https://api.discogs.com/releases/1526609', 'https://api.discogs.com/releases/1516102','https://api.discogs.com/releases/1763341', 'https://api.discogs.com/releases/2767923', 'https://api.discogs.com/releases/769960', 'https://api.discogs.com/releases/2873969', 'https://api.discogs.com/releases/4880289', 'https://api.discogs.com/releases/5118937', 'https://api.discogs.com/releases/1350468']

ebaydata = {}
discogsdata= {}


def ebayget(release):
    search = release.replace(" ", "+")
    url = 'https://www.ebay.com/sch/176985/i.html?_from=R40&_nkw={}&LH_TitleDesc=0&_sop=15'.format(search)
    return get_detail_data(get_page(url))

def discogsget(release):
    r = requests.get(release).json()
    return r['lowest_price']

for i in releaselist:
    ebaydata[i] = ebayget(i)

print(ebaydata)
