
import os
import pdfplumber

def Extract_Data():
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
    cT1_Ref_Upper = []
    cT1_Ref_Lower = []
    Iron_Ref = []
    PDFF_Ref = []
    # Results_folder = input("Enter the result folder name:")  # need to have path
    for folder_name in os.listdir(Results_folder):
        if folder_name.startswith('E'):
            EXP_number.append(folder_name.split('-')[0])
            Portal_ID.append(folder_name.split('-')[1])
            file_to_open = os.path.join(Results_folder, folder_name,'report.pdf')
            
        try:    # Manage the file does not exist situation
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
                    # get the reference values
                    cT1_Ref_Upper.append(float(split_text[58][0:3]))
                    cT1_Ref_Lower.append(float(split_text[58][4:7]))
                    Iron_Ref.append(float(split_text[60][1:4]))
                    PDFF_Ref.append(float(split_text[62][1:4]))     
        except:
            print('No report in the result folder')
        else:
            continue
    global DataFrame
    DataFrame = pd.DataFrame()
    DataFrame['EXP_number'] = EXP_number
    DataFrame['Portal_ID'] = Portal_ID
    DataFrame['cT1_median'] = cT1_median
    DataFrame['Iron_median'] = Iron_median
    DataFrame['PDFF_median'] = PDFF_median
    DataFrame['cT1_Q1'] = cT1_Q1
    DataFrame['cT1_Q3'] = cT1_Q3
    DataFrame['Iron_Q1'] = Iron_Q1
    DataFrame['Iron_Q3'] = Iron_Q3
    DataFrame['PDFF_Q1'] = PDFF_Q1
    DataFrame['PDFF_Q3'] = PDFF_Q3
    DataFrame['cT1_Ref_Upper'] = cT1_Ref_Upper
    DataFrame['cT1_Ref_Lower'] = cT1_Ref_Lower
    DataFrame['Iron_Ref'] = Iron_Ref
    DataFrame['PDFF_Ref'] = PDFF_Ref


def preDataFrame():
    Extract_Data()
    DataFrame.rename(columns = {
        'cT1 median':'cT1 median (Pre PJ)'
        ,'Iron median':'Iron median (Pre PJ)'
        ,'PDFF median':'PDFF median (Pre PJ)'
        ,'cT1_Q1':'cT1 Q1 (Pre PJ)'
        ,'Iron_Q1':'Iron Q1 (Pre PJ)'
        ,'PDFF_Q1':'PDFF Q1 (Pre PJ)'
        ,'cT1_Q3':'cT1 Q3 (Pre PJ)'
        ,'Iron_Q3':'Iron Q3 (Pre PJ)'
        ,'PDFF_Q3':'PDFF Q3 (Pre PJ)'})
    global preDataFrame
    preDataFrame = DataFrame

def postDataFrame():
    Extract_Data()
    DataFrame.rename(columns = {
        'cT1 median':'cT1 median (post PJ)'
        ,'Iron median':'Iron median (post PJ)'
        ,'PDFF median':'PDFF median (post PJ)'
        ,'cT1_Q1':'cT1 Q1 (post PJ)'
        ,'Iron_Q1':'Iron Q1 (post PJ)'
        ,'PDFF_Q1':'PDFF Q1 (post PJ)'
        ,'cT1_Q3':'cT1 Q3 (post PJ)'
        ,'Iron_Q3':'Iron Q3 (post PJ)'
        ,'PDFF_Q3':'PDFF Q3 (post PJ)'})
    global postDataFrame
    postDataFrame = DataFrame


preDataFrame()
# Write code to manage those files that have only PDFF or only Iron 
# Expand to Post_result

/Users/yi-chunwang/OneDrive - Perspectum Diagnostics Ltd/Python/PineappleJuice/Pre_results # will also be for post