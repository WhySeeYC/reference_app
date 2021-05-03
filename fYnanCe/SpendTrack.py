# End goal: being able to concatanate the spending to Payslip

# Import necessary libraries
import pandas as pd
import pdfplumber
import re
import unicodedata
from collections import namedtuple
from tkinter import *
import matplotlib.pyplot as plt

# Extract information needed from payslip
def PayslipInfo():
    file3 = input("Select your payslip file:")
    with pdfplumber.open(file3) as pdf:
        holder = []
        extractText = pdf.pages[0].extract_text()
        PT2 = unicodedata.normalize("NFKD", extractText)
        PT3 = PT2.replace("\xad", "")

    employ_re = re.compile(r"(SO\S\d+)(.*)(Perspectum*)")
    PayDate_re = re.compile(r"(Date: )(\d{2}/\d{2}/\d{4})")
    Salary_re = re.compile(r"(Salary)(\s)(\d+.\d+)")
    Tax_re = re.compile(r"(Tax)(\s)(\d+.\d+)")
    NI_re = re.compile(r"(National Insurance)(\s)(\d+\d+)")
    ErsNICTP_re = re.compile(r"(Ers NIC TP:)(\d+.\d+)")    
    ErsNICYTD_re = re.compile(r"(Ers NIC YTD:)(\s)(\d+.\d+)")
    ErsPensionTP_re = re.compile(r"(Ers Pension TP:)(\s)(\d+.\d+)")
    ErsPensionYTD_re = re.compile(r"(Ers Pension YTD:)(\s)(\d+.\d+)")
    
    Line = namedtuple("Employment","Employee_ID,Employee_Name, Company_Name, Pay_Date, Salary,Tax, National_Insurance, Ers_NIC_TP, Ers_NIC_YTD,Ers_Pension_TP, Ers_Pension_YTD")
    Employee_ID = employ_re.search(PT3).group(1)
    Employee_Name = employ_re.search(PT3).group(2)
    Company_Name = employ_re.search(PT3).group(3)
    Pay_Date = PayDate_re.search(PT3).group(2)
    Salary = Salary_re.search(PT3).group(3)
    Tax = Tax_re.search(PT3).group(3)
    National_Insurance = NI_re.search(PT3).group(3)
    Ers_NIC_TP = ErsNICTP_re.search(PT3).group(2)
    Ers_NIC_YTD = ErsNICYTD_re.search(PT3).group(3)
    Ers_Pension_TP = ErsPensionTP_re.search(PT3).group(3)
    Ers_Pension_YTD = ErsPensionYTD_re.search(PT3).group(3)

    holder.append(Line(Employee_ID, Employee_Name, Company_Name, Pay_Date, Salary, Tax,National_Insurance, Ers_NIC_TP, Ers_NIC_YTD,Ers_Pension_TP, Ers_Pension_YTD))

    df = pd.DataFrame(holder)

    # df["Pay_Date"] = pd.to_datetime(df["Pay_Date"])
    
    for col in df.columns[4:]:  
        df[col] = pd.to_numeric(df[col], errors="ignore")     

    # Add organising function
    Month = []
    Month.append(df['Pay_Date'][0].split('/')[1])
    df['Month'] = Month
    
    global f5
    f5 = df


# SpendingTrack function
def SpendOrg():
    file1 = input('Enter your Expense:')
    f1 = pd.read_csv(file1)
    f2 = f1.rename(columns = {'amount out ': 'Out', 'amount in': 'In'})
    f3 = abs(f2.groupby('Category').sum())
    Expensefile = f3.iloc[0:, 0:1].transpose()
    Expensefile['Month'] = f2.Date[0].split('/')[1]
    global f4 # define global variable because at MergeSheet function will call it
    f4 = Expensefile

# Concatenate dataframes ----------------------------
def MergeSheet():
    PayslipInfo()
    SpendOrg()
    global Moneyflow
    Moneyflow = f5.merge(f4, on = 'Month', how = 'outer') 
    return Moneyflow.info()

# Update target csv file
def AddToMerge():
    df1 = pd.read_csv(r'/Users/YC/Work_Repo/fYnanCe/Finance Merged Result.csv')
    df2 = pd.concat([df1, Moneyflow], axis = 0)
    df2.to_csv('Finance Merged Result.csv', index = False)
    return df2.info()


MergeSheet()
AddToMerge()


# Start creating Gui for this, please see file fYnanCeApp.py
root = Tk()
payslipLabel = Label(root, text = 'Enter your payslip file')
payslipLabel.pack()

root.mainloop()

# Consider adding rent and bill records from another bank

