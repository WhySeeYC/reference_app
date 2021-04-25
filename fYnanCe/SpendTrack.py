# End goal: being able to concatanate the spending to Payslip

# Import necessary libraries
import pandas as pd

# SpendingTrack function
def SpendOrg():
    file1 = input('Enter your Expense:')
    f1 = pd.read_csv(file1)
    f2 = f1.rename(columns = {'amount out ': 'Out', 'amount in': 'In'})
    f3 = abs(f2.groupby('category').sum())
    Expensefile = f3.iloc[0:, 0:1].transpose()
    Expensefile['Month'] = f2.Date[0].split('-')[1]
    global f4 # define global variable because at MergeSheet function will call it
    f4 = Expensefile

# Create the same hook -> Month at the payslip file
def PayOrg():
    file2 = input('Enter your Payfile:')
    Payfile = pd.read_csv(file2)
    Month = []
    for i in range(len(Payfile['Pay_Date'])):
        Month.append(Payfile['Pay_Date'][i].split('-')[1])
    Payfile['Month'] = Month
    global f5
    f5 = Payfile

# Concatenate dataframes ----------------------------
def MergeSheet():
    SpendOrg()
    PayOrg()
    Moneyflow = f5.merge(f4, on = 'Month', how = 'outer') #Outer Join or Full outer join:To keep all rows from both data frames
    return Moneyflow.info()

MergeSheet()

#Expensefile = '/Users/YC/Work_Repo/fYnanCe/DemoMonzoExtract.csv'
#Payfile = '/Users/YC/Work_Repo/fYnanCe/CollectPayslip.csv'
