# End goal: being able to concatanate the spending to Payslip

# Import necessary libraries
import pandas as pd

# Read csv file as pandas DataFrame

def SpendOrg(file):
    f1 = pd.read_csv(file)
    # Change column 1 name to the Out, column 2 name to In. Assign it to f2
    f2 = f1.rename(columns = {'amount out ': 'Out', 'amount in': 'In'})
    # Work out how much each category is in total and return in absolute value
    f3 = abs(f2.groupby('category').sum())
    f4 = f3.iloc[0:, 0:1].transpose()
    f4['Month'] = f2.Date[0].split('-')[1]
    return f4 # In Python, functions return None by default if they come to the end of themselves without returning.

file = input("Enter your file:")
temp = SpendOrg(file)
temp



# Test Concatenate to payslip dataframe ----------------------------
file2 = '/Users/YC/Work_Repo/fYnanCe/CollectPayslip.csv'
f5 = pd.read_csv(file2)
f5.head()
Month = []
for i in range(len(f5['Pay_Date'])):
    Month.append(f5['Pay_Date'][i].split('-')[1])
f5['Month'] = Month
f5

# merge on the identical column: Month 
# Outer Join or Full outer join:To keep all rows from both data frames
Money = f5.merge(f4, on = 'Month', how = 'outer')
Money.info()
Money.head()

file = '/Users/YC/Work_Repo/fYnanCe/DemoMonzoExtract.csv'



