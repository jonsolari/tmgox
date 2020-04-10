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

    total = []

    if nope != []:
        return 'Nope'
    else:
        # total.append(h3)
        total.append(span[1:])
        total.append(href)
        return total


# TODO loop over list of releases to search for, update JSON / remove things no longer available 

# make sure account for plain black pressings of BPT and MCB
releaselist = [(1, "mountain goats zopilote machine lp"), (2, "mountain goats sweden lp"),  (3, "mountain goats nothing for juice lp"), (4, "mountain goats full force galesburg lp"),  (5, "mountain goats coroner's gambit lp"), (6, "mountain goats new asian cinema"),  (7, "mountain goats isopanisad radio hour"), (8, "mountain goats devil in the shortwave"), (9,"mountain goats black pear tree"), (10, "mountain goats satanic messiah"), (11, "mountain goats moon colony bloodbath"), (12, "mountain goats taboo cassette"), (13, "mountain goats come come to the sunset tree"), (14, "mountain goats on juhu beach"), (15, "mountain goats black pear tree yellow"),  (16, "mountain goats moon colony bloodbath green"), (17, "beatles please please me parlophone first pressing lp")]
ebaydata = {}


def getdata(release):
    search = release.replace(" ", "+")
    url = 'https://www.ebay.com/sch/176985/i.html?_from=R40&_nkw={}&LH_TitleDesc=0&_sop=15'.format(search)
    return get_detail_data(get_page(url))

for i in releaselist:
    ebaydata[i[0]] = getdata(i[1])






discogsurls = [(1, 'https://api.discogs.com/releases/1601354'), (2, 'https://api.discogs.com/releases/1191772'), (3, 'https://api.discogs.com/releases/744810'), (4, 'https://api.discogs.com/releases/523351'), (5, 'https://api.discogs.com/releases/1217804'), (6, 'https://api.discogs.com/releases/1625208'), (7, 'https://api.discogs.com/releases/1625203'), (8, 'https://api.discogs.com/releases/1210894'), (9, 'https://api.discogs.com/releases/1526609'), (10, 'https://api.discogs.com/releases/1516102'), (11, 'https://api.discogs.com/releases/1763341'), (12, 'https://api.discogs.com/releases/2767923'), (13, 'https://api.discogs.com/releases/769960'), (14, 'https://api.discogs.com/releases/2873969'), (15, 'https://api.discogs.com/releases/4880289'), (16, 'https://api.discogs.com/releases/5118937'), (17, 'https://api.discogs.com/releases/1350468')]

print(ebaydata)