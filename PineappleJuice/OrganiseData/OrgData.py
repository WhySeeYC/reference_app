# loop through json files and write stuff into DataFrame
# Intersted info: Portal ID, EXP ID, cT1 median, Iron median, PDFF median


# file = open('/Users/yi-chunwang/OneDrive - Perspectum Diagnostics Ltd/Python/PineappleJuice/report.tex') 
# file.split()
# 
# count = 0
# for line in file:
#     count = count +1
#     # print(line.split()[-1])
# print(count)
# 
# count = 0
# for line in file:
#     if "centering" in line is True:
#         print('find it!')
#         count = count+1
# print(count)
#         #cT1 = line.split()[5][-3:]
#         #cT1_Q1 = line.split()[9]
#         #cT1_Q3 = line.split()[11]
#     else:
#         continue
# print('cT1, cT1_Q1, cT1_Q3')
# 
# 
# a.find('\centering \textbf{\\cT1 (ms)}  \\ Median')
# a



cT1_median = []
Iron_median = [] 
PDFF_median = [] 
cT1_Q1 = []
cT1_Q3 = []
Iron_Q1 = []
Iron_Q3 = []
PDFF_Q1 = []
PDFF_Q3 = []

import pdfplumber
with pdfplumber.open(r'/Users/yi-chunwang/OneDrive - Perspectum Diagnostics Ltd/Python/PineappleJuice/report.pdf') as pdf:
    first_page = pdf.pages[0]
    page1_text = first_page.extract_text()

split_text = page1_text.split()
# '647ms' in split_text # test if it is in the list
start_index = split_text.index('cT1(ms)') # get the index for better slicing

cT1_median.append(float(split_text[start_index + 4][0:3]))
Iron_median.append(float(split_text[start_index + 6][0:3]))
PDFF_median.append(float(split_text[start_index + 8][0:3]))
cT1_Q1.append(float(split_text[start_index + 9][4:7]))
cT1_Q3.append(float(split_text[start_index + 9][8:11]))
Iron_Q1.append(float(split_text[start_index + 10][4:7]))
Iron_Q3.append(float(split_text[start_index + 10][8:11]))
PDFF_Q1.append(float(split_text[start_index + 11][4:7]))
PDFF_Q3.append(float(split_text[start_index + 11][8:11]))

preDataFrame = {}
preDataFrame['cT1_median (Pre PJ)'] = cT1_median
preDataFrame['Iron_median (Pre PJ)'] =Iron_median
preDataFrame['PDFF_median (Pre PJ)'] =PDFF_median
preDataFrame['cT1_Q1 (Pre PJ)'] = cT1_Q1
preDataFrame['cT1_Q3 (Pre PJ)'] = cT1_Q3
preDataFrame['Iron_Q1 (Pre PJ)'] = Iron_Q1
preDataFrame['Iron_Q3 (Pre PJ)'] = Iron_Q3
preDataFrame['PDFF_Q1 (Pre PJ)'] = PDFF_Q1
preDataFrame['PDFF_Q3 (Pre PJ)'] = PDFF_Q3

preDataFrame


# loop through multiple files in a folder

# fsencode will make the str in byte mode----------
directory = os.fsencode('/Users/yi-chunwang/OneDrive - Perspectum Diagnostics Ltd/Python/PineappleJuice/OrganiseData') 
directory

import os
for filename in os.listdir(directory):
    if filename.endswith(b'.pdf'): # with the b, Python reads the filename in bytes mode
        print(os.path.join(directory,filename))
    else:
        continue

# use read mode------------------------
directory2 = r'/Users/yi-chunwang/OneDrive - Perspectum Diagnostics Ltd/Python/PineappleJuice/OrganiseData' # read mode
import os
for filename in os.listdir(directory2):
    if filename.endswith('.pdf'):
        file_to_open = os.path.join(directory2,filename)

    else:
        continue