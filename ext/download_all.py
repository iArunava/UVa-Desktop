# A script to download all UVa pdfs
# Author: Arunava (@iArunava)
# Created on: 7 August, 2017
# Last Updated on: 10 August, 2017

"""
Helper Arguments
================

"--no-logs" -> as first argument to print no logs
"--logs" -> as first argument to print logs

"/path/to/download/" -> as second argument to set the download location
                       for the PDFs, by default it is downloaded to 
                       "../PDFs/"
                       and so it is not recommended to run the script in
                       /home directory of the user
"""

import sys
import urllib2
import subprocess

def generator (start_range, close_range):

    base_url = "https://uva.onlinejudge.org/external/"

    for i in range (start_range, close_range):
        for j in range (0, 100):
            
            # Volume 132 holds 40 programs as of 7 Aug, 2017
            # Volume 17 holds 60 programs as of 7 Aug, 2017
            if i == 132 and j > 40: break
            if i == 17 and j > 60: break

            if j < 10:
                pdf_num = str(i) + "0" + str(j)
            else: pdf_num = str(i) + str (j)

            pdf_link = base_url + str(i) + "/" + pdf_num + ".pdf"
            download_pdf (pdf_link, pdf_num)

def download_pdf (pdf_link, pdf_id):
    
    logs = True
    try:
        if sys.argv [1] == "--no-logs": logs = False
        elif sys.argv [1] == "--logs": logs = True
        else: 
            print ("Invalid argument.")
            print ("Exitting process...")
            exit()
    except:
        pass
    
    download_location = "../PDFs/"
    try:
        download_location = sys.argv [2]
    except:
        pass

    if logs: print ("Starting to download " + str(pdf_id) + ".pdf ...")
    if logs: print ("Fetching file...")
    response = urllib2.urlopen (pdf_link)
    if logs: print ("Creating " + str(pdf_id) + " in local directory...")
    fopen = open (download_location + str(pdf_id) + ".pdf", "w")
    if logs: print ("Writing to file...")
    fopen.write (response.read())
    fopen.close()
    if logs: print ("Downloaded and written successfully for " + 
                        str (pdf_id) + ".pdf !!")
    if logs: print ("Creating HTML from PDF...");
    subprocess.call ("pdf2htmlEX --fit-width 780 --fit-height 1600 ../PDFs/" +
        str(pdf_id) + ".pdf ../uva/" + str (pdf_id) + ".html", shell=True)
    if logs: print ("Created HTML successfully!!");
    if logs: print ("Process completed successfully for " + str (pdf_id) + 
                    "\n")

def main ():
    
    print ("Do you want to download all PDFs from UVa?\n" + 
            "Press y(yes) to continue or any other key to exit")
    cond = raw_input()
    if cond == 'y' or cond == 'Y' or cond == 'yes' or cond == 'Yes':
        pass
    else: 
        print ("Exitting process...")
        exit()

    generator (1, 18)
    generator (100, 133)
    # TODO Remove below check function call
    #download_pdf ("https://uva.onlinejudge.org/external/115/11577.pdf", 11577)

if __name__ == "__main__":
    main()
