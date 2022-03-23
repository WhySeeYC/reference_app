
import os
import pdfplumber
import pandas as pd

os.getcwd() # check current working directory
os.chdir('/Users/yi-chunwang/OneDrive - Perspectum Diagnostics Ltd/Python/PineappleJuice')  # change current working directory in Python


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
    vendor_model = []
    field_strength = []
    cwd = os.getcwd()
    userfolder = input("Enter the result folder name:")
    Results_folder = cwd + '/' + userfolder
    for folder_name in os.listdir(Results_folder):
        if folder_name.startswith('E'):
            file_to_open = os.path.join(Results_folder, folder_name,'report.pdf')
        try:    # Manage the file does not exist situation
            with pdfplumber.open(file_to_open) as report:
                first_page = report.pages[0]
                page1_text = first_page.extract_text()
                split_text = page1_text.split()
                try:  # Manage the exception that the automatic segmented report is not complete
                    start_index = split_text.index('cT1(ms)')
                    EXP_number.append(folder_name.split('-')[0])
                    Portal_ID.append(folder_name.split('-')[1])
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
                    continue   

                last_page = report.pages[4]
                page4_text = last_page.extract_text()
                scanner = page4_text.split()[15]
                if scanner.endswith('3T'):
                    vendor_model.append(scanner[0:13])
                    field_strength.append(scanner[13:])
                else:
                    vendor_model.append(scanner[0:16])
                    field_strength.append(scanner[17:])
    
        except:
            print('No report in the result folder')
        else:
            continue
    global DataDict
    DataDict = {}
    DataDict['EXP_number'] = EXP_number
    DataDict['Portal_ID'] = Portal_ID
    DataDict['cT1_median'] = cT1_median
    DataDict['Iron_median'] = Iron_median
    DataDict['PDFF_median'] = PDFF_median
    DataDict['cT1_Q1'] = cT1_Q1
    DataDict['cT1_Q3'] = cT1_Q3
    DataDict['Iron_Q1'] = Iron_Q1
    DataDict['Iron_Q3'] = Iron_Q3
    DataDict['PDFF_Q1'] = PDFF_Q1
    DataDict['PDFF_Q3'] = PDFF_Q3
    DataDict['cT1_Ref_Upper'] = cT1_Ref_Upper
    DataDict['cT1_Ref_Lower'] = cT1_Ref_Lower
    DataDict['Iron_Ref'] = Iron_Ref
    DataDict['PDFF_Ref'] = PDFF_Ref
    DataDict['vendor_model'] = vendor_model
    DataDict['field_strength'] = field_strength

def preDataFrame():
    Extract_Data()
    preData = pd.DataFrame(DataDict) # to put dictionary in a dataframe, all arrays mist be the same length
    b = preData.rename(columns = {'EXP_number':'EXP_number (Pre PJ)', 'Portal_ID': 'Portal_ID (Pre PJ)', 'cT1_median':'cT1 median (Pre PJ)','Iron_median':'Iron median (Pre PJ)','PDFF_median':'PDFF median (Pre PJ)','cT1_Q1':'cT1 Q1 (Pre PJ)','Iron_Q1':'Iron Q1 (Pre PJ)','PDFF_Q1':'PDFF Q1 (Pre PJ)','cT1_Q3':'cT1 Q3 (Pre PJ)','Iron_Q3':'Iron Q3 (Pre PJ)','PDFF_Q3':'PDFF Q3 (Pre PJ)', 'vendor_model':'vendor_model (Pre PJ)', 'field_strength': 'field_strength (Pre PJ)'})
    global prePJ
    prePJ = b


def postDataFrame():
    Extract_Data()
    postData = pd.DataFrame(DataDict).rename(columns = {'EXP_number':'EXP_number (Post PJ)', 'Portal_ID': 'Portal_ID (Post PJ)', 'cT1_median':'cT1 median (Post PJ)','Iron_median':'Iron median (Post PJ)','PDFF_median':'PDFF median (Post PJ)','cT1_Q1':'cT1 Q1 (Post PJ)','Iron_Q1':'Iron Q1 (Post PJ)','PDFF_Q1':'PDFF Q1 (Post PJ)','cT1_Q3':'cT1 Q3 (Post PJ)','Iron_Q3':'Iron Q3 (Post PJ)','PDFF_Q3':'PDFF Q3 (Post PJ)', 'vendor_model':'vendor_model (Post PJ)', 'field_strength': 'field_strength (Post PJ)'})
    global postPJ
    postPJ = postData

preDataFrame()
postDataFrame()

# get record ID dataframe
OriginFile = pd.read_csv('/Users/yi-chunwang/OneDrive - Perspectum Diagnostics Ltd/Python/PineappleJuice/Pineapple juice effect.csv')
PreRecord_ID = OriginFile.iloc[0:, :2].rename(columns = {'Portal ID LMS0 (pre PJ)':'Portal_ID (Pre PJ)'})
PostRecord_ID = OriginFile.iloc[0:, [0,3]].rename(columns = {'Portal ID LMS1 (post PJ)':'Portal_ID (Post PJ)'})
# Merge DataFrame 
PreRecord = PreRecord_ID.merge(prePJ, on = ['Portal_ID (Pre PJ)'], how = 'outer')
PostRecord = PostRecord_ID.merge(postPJ, on = ['Portal_ID (Post PJ)'], how = 'outer')

FinalDF = PreRecord.merge(PostRecord, on = ['Record Id'], how = 'outer', copy = False)
FinalDF.to_csv('FinalDF.csv')
