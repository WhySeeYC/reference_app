# End goal: being able to concatanate the spending to Payslip

# Import necessary libraries
import pandas as pd

# Read csv file as pandas DataFrame

file = input("Enter your file:")

def SpendOrg(file):
    f1 = pd.read_csv(file)
    # Change column 1 name to the Out, column 2 name to In. Assign it to f2
    f2 = f1.rename(columns = {'amount out ': 'Out', 'amount in': 'In'})
    # Work out how much each category is in total and return in absolute value
    f3 = abs(f2.groupby('category').sum())
    f4 = f3.iloc[0:, 0:1].transpose()
    f4['Month'] = f2.Date[0].split('-')[1]
    print(f4)

SpendOrg(file)





# Test Concatenate to payslip dataframe ----------------------------
# file2 = '/Users/YC/Work_Repo/fYnanCe/CollectPayslip.csv'
# f6 = pd.read_csv(file2)
# Money = pd.concat([f6,f5], axis = 1)
# Money.info()
#file = '/Users/YC/Work_Repo/fYnanCe/DemoMonzoExtract.csv'



