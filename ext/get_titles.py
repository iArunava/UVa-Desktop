# Script to get all the names of the programs in UVa
# Created by: Aruanva (@iArunava)
# Created on: 13 August, 2017
# Last Updated on: 16 August, 2017

from bs4 import BeautifulSoup
import urllib2
import re

def get_titles_from(uva_url):
    
    resp = urllib2.urlopen (uva_url);
    html = resp.read()
    soup = BeautifulSoup (html, "html.parser")

    for group in soup.find_all ("tr", class_=re.compile ("sectiontableentry[12]")):
        soup_td = BeautifulSoup (str (group), "html.parser")
        try:
            all_in_title = (soup_td.select ("td > a")[1].string).encode('utf-8').strip()
        except:
            all_in_title = (soup_td.select ("td > a")[0].string).encode('utf-8').strip()
        program_info = re.search ('^(\d+)\xc2\xa0-\xc2\xa0([\s\S]*)$', all_in_title)
        programid = program_info.group (1)
        title = program_info.group (2)
        print (programid + " --> " + title)



def generate ():
    base_uva_url = "https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category="
    categories = [3, 4, 5, 6, 7, 8, 9, 10, 11, 245, 246, 247, 446, 447, 448, 825, 859, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 78, 117, 226, 229, 242, 243, 244, 278, 279, 441, 602, 823, 861, 862, 866, 871, 878]
    for i in categories:
        get_titles_from (base_uva_url + str (i))

def main ():
    generate ()

if __name__ == "__main__":
    main()
