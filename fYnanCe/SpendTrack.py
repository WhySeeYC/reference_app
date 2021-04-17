# 11 April 2020 
# End goal: being able to concatanate the spending to Payslip

# Import necessary libraries
import pandas as pd

# Read csv file as pandas DataFrame
file = '/Users/YC/Work_Repo/fYnanCe/DemoMonzoExtract.csv'
f1 = pd.read_csv(file)
f1.info()
#type(f1.category)
#type(f1['category'])

# Calculate total month expenses
#f1['amount out '].sum()

# Calculate total month income
#f1.columns[2] # use this to find out the name of the column
#f1['amount in'].sum()

# Change column 1 name to the Out, column 2 name to In. Assign it to f2
f2 = f1.rename(columns = {'amount out ': 'Out', 'amount in': 'In'})

#f2.head()

#f2['Out'].value_counts() #check how many sets of expense is there

# Work out how much each category is in total and return in absolute value
grouped = f2.groupby('category') 
f3 = abs(grouped.sum())

# Take out the subset only cares about expenses
f4 = f3.iloc[0:, 0:1] 

# transpose and write into horizontal long dataframe
f5 = f4.transpose()
#f5.head()

# Test Concatenate to payslip dataframe ----------------------------
file2 = '/Users/YC/Work_Repo/fYnanCe/CollectPayslip.csv'
f6 = pd.read_csv(file2)
Money = pd.concat([f6,f5], axis = 1)
Money.head()
Money.info()
# Need to take month into account --------------------------------

# Add an extra column that only holds the Month 
f2.Date[0].split('-')[1] # >> return the str 12
Month = []
for i in range(len(f2.Date)):
    Month.append(f2.Date[i].split('-')[1])
f2['Month'] = Month
f2.info()

# Group by 2 coluns: category and Month
f8 = f2.groupby(['category', 'Month']).sum()

# Add Month as concatenation of the transposed dataframe, this is less computation intense than making  the concatenation at the complete expanse dataframe
f5['Month'] = f2.Date[0].split('-')[1]
f5.head() 