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

EXP_number = []
Portal_ID = []
cT1_median = []
Iron_median = [] 
PDFF_median = [] 
cT1_Q1 = []
cT1_Q3 = []
Iron_Q1 = []
Iron_Q3 = []
PDFF_Q1 = []
PDFF_Q3 = []

preDataFrame = {}

import os
import pdfplumber

Pre_results_folder = r'/Users/yi-chunwang/OneDrive - Perspectum Diagnostics Ltd/Python/PineappleJuice/Pre_results'

for folder_name in os.listdir(Pre_results_folder):
    if folder_name.startswith('E'):
        EXP_number.append(folder_name.split('-')[0])
        Portal_ID.append(folder_name.split('-')[1])
        file_to_open = os.path.join(Pre_results_folder, folder_name,'report.pdf')
        preDataFrame['EXP_number'] = EXP_number
        preDataFrame['Portal_ID'] = Portal_ID

        try:
            with pdfplumber.open(file_to_open) as report:
                first_page = report.pages[0]
                page1_text = first_page.extract_text()
                split_text = page1_text.split()
                try:  # Manage the exception that the automatic segmented report is not complete
                    start_index = split_text.index('cT1(ms)')
                except:
                    continue

                    cT1_median.append(float(split_text[start_index + 4][0:3]))
                    Iron_median.append(float(split_text[start_index + 6][0:3]))
                    PDFF_median.append(float(split_text[start_index + 8][0:3]))
                    cT1_Q1.append(float(split_text[start_index + 9][4:7]))
                    cT1_Q3.append(float(split_text[start_index + 9][8:11]))
                    Iron_Q1.append(float(split_text[start_index + 10][4:7]))
                    Iron_Q3.append(float(split_text[start_index + 10][8:11]))
                    PDFF_Q1.append(float(split_text[start_index + 11][4:7]))
                    PDFF_Q3.append(float(split_text[start_index + 11][8:11]))
       
                    preDataFrame['cT1_median (Pre PJ)'] = cT1_median
                    preDataFrame['Iron_median (Pre PJ)'] = Iron_median
                    preDataFrame['PDFF_median (Pre PJ)'] = PDFF_median
                    preDataFrame['cT1_Q1 (Pre PJ)'] = cT1_Q1
                    preDataFrame['cT1_Q3 (Pre PJ)'] = cT1_Q3
                    preDataFrame['Iron_Q1 (Pre PJ)'] = Iron_Q1
                    preDataFrame['Iron_Q3 (Pre PJ)'] = Iron_Q3
                    preDataFrame['PDFF_Q1 (Pre PJ)'] = PDFF_Q1
                    preDataFrame['PDFF_Q3 (Pre PJ)'] = PDFF_Q3
       
                    # get the reference values
                    cT1_Ref_Upper = [float(split_text[58][0:3])]
                    cT1_Ref_Lower = [float(split_text[58][4:7])]
                    Iron_Ref = [float(split_text[60][1:4])]
                    PDFF_Ref = [float(split_text[62][1:4])]
      
                    preDataFrame['cT1_Ref_Upper'] = cT1_Ref_Upper
                    preDataFrame['cT1_Ref_Lower'] = cT1_Ref_Lower
                    preDataFrame['Iron_Ref'] = Iron_Ref
                    preDataFrame['PDFF_Ref'] = PDFF_Ref
        except:
            print('No report in the result folder')

    else:
        continue



preDataFrame

# Write code to manage those files that have only PDFF or only Iron 