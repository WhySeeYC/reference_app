# Creating Gui for fYnance Project
# Got an error: “from: can't read /var/mail/tkinter” ->/usr/bin/env python3  -> see https://stackoverflow.com/questions/16069816/getting-python-error-from-cant-read-var-mail-bio 
# To solve this, select the interpreter to python 3.7

import pandas as pd
import pdfplumber
import unicodedata
import re
from tkinter import *
from tkinter import filedialog

def openPay():
    root.filename = filedialog.askopenfilename(initialdir = '/Users/YC/Work_Repo/fYnanCe', title = 'Select A File', filetypes = (('csv files', '*.csv'), ('pdf files', '*.pdf'), ('all files', '*.*')))
    global payfile
    payfile = root.filename
    payLabel = Label(root, text = payfile).pack()

def PayslipInfo():
    with pdfplumber.open(payfile) as pdf:
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

    holder = {'Employee_ID' : [employ_re.search(PT3).group(1)], 'Employee_Name' : [employ_re.search(PT3).group(2)], 'Company_Name' : [employ_re.search(PT3).group(3)], 'Pay_Date' : [PayDate_re.search(PT3).group(2)], 'Salary' : [Salary_re.search(PT3).group(3)], 'Tax' : [Tax_re.search(PT3).group(3)], 'National_Insurance' : [NI_re.search(PT3).group(3)], 'Ers_NIC_TP' : [ErsNICTP_re.search(PT3).group(2)], 'Ers_NIC_YTD' : [ErsNICYTD_re.search(PT3).group(3)], 'Ers_Pension_TP' : [ErsPensionTP_re.search(PT3).group(3)], 'Ers_Pension_YTD' : [ErsPensionYTD_re.search(PT3).group(3)]}
    
    holder['Month']  = holder['Pay_Date'][0].split('/')[1]

    global PayDF
    PayDF = pd.DataFrame(holder)
    

def openExp():
    root.filename = filedialog.askopenfilename(initialdir = '/Users/YC/Work_Repo/fYnanCe', title = 'Select A File', filetypes = (('csv files', '*.csv'), ('pdf files', '*.pdf'), ('all files', '*.*')))
    f1 = pd.read_csv(root.filename)
    f2 = abs(f1.groupby('Category').sum())
    f3 = f2.iloc[0:, 0:1].transpose()
    f3['Month'] = f1.Date[0].split('/')[1]
    global Expense
    Expense = f3
    ExpLabel = Label(root, text = root.filename).pack()

def MergeSheet():
    global Moneyflow
    Moneyflow = PayDF.merge(Expense, on = 'Month', how = 'outer') 
    MergeLabel = Label(root, text = Moneyflow.info()).pack()


root = Tk() 
root.title('Time to manage your finance') 


payButton = Button(root, text = 'Select payslip file', command = openPay) 
payButton.pack()

payInfoButton = Button(root, text = 'Get payslip info', command = PayslipInfo)
payInfoButton.pack()

expButton = Button(root, text = 'Select expense file', command = openExp)
expButton.pack()

mergeButton = Button(root, text = 'Merge', command = MergeSheet)
mergeButton.pack()

exit_button = Button(root, text = 'Exit App', command = root.destroy)
exit_button.pack()

root.mainloop()







#pop up a window show the merged csv