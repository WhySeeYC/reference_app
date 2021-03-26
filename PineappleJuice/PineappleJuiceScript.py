
# %%
import pandas as pd
from pandas import DataFrame 
import matplotlib.pyplot as plt
import scipy
from scipy import stats
import numpy as np
import dataframe_image as dfi
import statsmodels.api as sm

# %%
# read file into pandas dataframe
# drop the columns with N/A values
file = "Please use the csv file in the Pineapple juice investigation folder"
read_file = pd.read_csv(file, delimiter = ",", header= 0)
read_file


# %%
# Change the upper and lower reference range of cT1 from integer to float numbers
read_file["cT1 Ref Int Lower"] = read_file["cT1 Ref Int Lower"].astype(float)
read_file["cT1 Ref Int Upper"] = read_file["cT1 Ref Int Upper"].astype(float)


# %%
# See the detail of the dataframe 'read_file'
read_file.info()


# %%
# drop the NaN columns
drop_columns = read_file.drop(labels = None, axis = 1, columns = ["Unnamed: 5", "Unnamed: 6", "Unnamed: 7"]) 
drop_columns


# %%
#drop the rows with NaN  #axis = 0 means to drop rows which contain missing values
drop_row = drop_columns.dropna(axis = 0)
drop_row
drop_row.to_csv(r"Write into a csv you want.csv")


# %%
#slice out the value section
val_sec = drop_row.iloc[0: , 5:]
val_sec


# %%
# check the data type of the value section see if it is object. -> need to convert to float
# if we read the file with the header specified as the file, then the data type will automatically be detected 
val_sec.info() 


# %%
# Do a simple scatter matrix to see the relationship between the variables
pd.plotting.scatter_matrix(drop_row, alpha = 0.5, figsize = (12,10))

#This is an extremely busy plot with all the variables plotting against each other 


# %%
# this gives cumulated values
df = drop_row.cumsum() 
df.plot()


# %%
# To plot multiple column groups in a single axes, repeat plot method specifying target ax. It is recommended to specify color and label keywords to distinguish each groups.
pnum = len(drop_row["Record Id"])
xlabel = np.arange(1,pnum+1)
plt.scatter(drop_row["Record Id"], drop_row["cT1 (Pre PJ)"], color = "Red")
plt.scatter(drop_row["Record Id"], drop_row["cT1 (Post PJ)"], color = "Blue")
plt.xticks(np.arange(pnum), xlabel)
plt.ylabel("cT1")


# %%
# plot bar comparison for cT1
cT1_color = ["lightcoral", "mediumseagreen"]
ax = drop_row[["cT1 (Pre PJ)","cT1 (Post PJ)"]].plot(kind = "bar", title = "cT1 Comparison", figsize = (10,8), color = cT1_color)
ax.set_xlabel("Person")
ax.set_ylabel("cT1 (ms)")
plt.savefig("cT1 bar comparison.png")


# %%
# plot bar comparison for Iron
ax2 = drop_row[["Iron (Pre PJ)","Iron (Post PJ)"]].plot(kind = "bar", title = "Iron Comparison", figsize = (10,8), colormap = "Paired")
ax2.set_xlabel("Person")
ax2.set_ylabel("Iron (mg/g dry liver)")
plt.savefig("Iron bar comparison.png")


# %%
# plot bar comparison for PDFF
ax3 = drop_row[["PDFF (Pre PJ)","PDFF (Post PJ)"]].plot(kind = "bar", title = "PDFF Comparison", figsize = (10,8), colormap = "flag")
ax3.set_xlabel("Person")
ax3.set_ylabel("PDFF (%)")
plt.savefig("PDFF bar comparison.png")


# %%
# stacked bar plot wouldn't work to see the differences
cT1_color = ["lightcoral", "mediumseagreen"]
ax = drop_row[["cT1 (Pre PJ)","cT1 (Post PJ)"]].plot(kind = "bar", stacked = True, title = "cT1 Comparison", figsize = (10,8), color = cT1_color)
ax.set_xlabel("Person")
ax.set_ylabel("cT1 (ms)")


# %%
# Plor box plot to see the distributiont of the paried values.
# After removing the NaN rows and columns, there are still some outliers.
# By judging on the median (not assuming normal distribution), the cT1 values seems to increse after pineaple juice administration, the iron concentration seems to decrease, and the PDFF value seems to decrease after pineaple juice administration.
fig, axes = plt.subplots(nrows = 1, ncols = 3, figsize = (14,8))
fontsize = 10
drop_row[["cT1 (Pre PJ)","cT1 (Post PJ)"]].plot.box(ax = axes[0], grid = True, title = "cT1 Comparison", ylabel = "cT1 (ms)" , fontsize = fontsize, patch_artist = True, notch = True)

drop_row[["Iron (Pre PJ)","Iron (Post PJ)"]].plot.box(ax = axes[1],grid = True, title = "Iron Comparison", ylabel = "Iron (mg/g dry liver)" , fontsize = fontsize, patch_artist = True, notch = True, color = "red")

drop_row[["PDFF (Pre PJ)","PDFF (Post PJ)"]].plot.box(ax = axes[2],grid = True, title = "PDFF Comparison", ylabel = "PDFF (%)" , fontsize = fontsize, patch_artist = True, notch = True, color = "green")

plt.savefig("Box comparison.png")


# %%
fig, axes = plt.subplots(nrows = 1, ncols = 3, figsize = (14,8))
fig.suptitle("Pre vs Post", fontsize = 20)

cT1_range = [600,1000]
Iron_range = [0.6, 3]
PDFF_range = [2, 20]

axes[0].scatter(drop_row["cT1 (Pre PJ)"], drop_row["cT1 (Post PJ)"])
axes[0].plot(cT1_range, cT1_range, c = "black")
axes[0].set_xlabel("cT1 Pre PJ")
axes[0].set_ylabel("cT1 Post PJ")

axes[1].scatter(drop_row["Iron (Pre PJ)"], drop_row["Iron (Post PJ)"], c = "red")
axes[1].plot(Iron_range, Iron_range, c = "black")
axes[1].set_xlabel("Iron Pre PJ")
axes[1].set_ylabel("Iron Post PJ")

axes[2].scatter(drop_row["PDFF (Pre PJ)"], drop_row["PDFF (Post PJ)"], c = "green")
axes[2].plot(PDFF_range, PDFF_range, c = "black")
axes[2].set_xlabel("PDFF Pre PJ")
axes[2].set_ylabel("PDFF Post PJ")

plt.savefig("Scatter Comparison.png")


# %%
# Get a summary of descriptive statistics before removing the outliers
table1 = drop_row.describe()
dfi.export(table1, "Descriptive Statistics with outliers.png")


# %%
# Get rid of outliers
stats.zscore(drop_row["cT1 (Pre PJ)"]) #calculate the z-score for the column cT1 (Pre PJ)
abs(stats.zscore(drop_row["cT1 (Pre PJ)"])) # get the absolute value of the z scores, because the direction doesn't matter
#we can see there is one outlier, i.e., the z score is more that 3 standard deviation away. (3.17536447)


# %%
# we can use boonlean to easily find the outlier
abs(stats.zscore(drop_row["cT1 (Pre PJ)"]))<3


# %%
# remove the row that has the outlier in cT1 (Pre PJ)
rm_ct1outlier = drop_row[(np.abs(stats.zscore(drop_row["cT1 (Pre PJ)"]))<3)]
rm_ct1outlier.info() # now that there are only 29 rows of values


# %%
# Remove all the rows that has outliers.
abs(stats.zscore(drop_row[["cT1 (Pre PJ)", "Iron (Pre PJ)",	"PDFF (Pre PJ)","cT1 (Post PJ)", "Iron (Post PJ)", "PDFF (Post PJ)"]])) < 3 

# Use this criteria to index the dataframe. The .all(axis = 1) ensures that for each row, all column satisfy the constraint
rm_outlier = drop_row[(abs(stats.zscore(drop_row[["cT1 (Pre PJ)", "Iron (Pre PJ)",	"PDFF (Pre PJ)","cT1 (Post PJ)", "Iron (Post PJ)", "PDFF (Post PJ)"]])) < 3 ).all(axis = 1)]
rm_outlier.info()


# %%
# Get the descriptive statistics of the data that removed the outliers
table2 = rm_outlier.describe()
type(table2)


# %%
table2


# %%
# Use the datafram_image library to save the descriptive statistics
dfi.export(table2, "Descriptive Statistics without outliers.png")


# %%
# Deduct the value of Post and Pre PJ
cT1_dif = rm_outlier["cT1 (Post PJ)"] - rm_outlier["cT1 (Pre PJ)"]
Iron_dif = rm_outlier["Iron (Post PJ)"] - rm_outlier["Iron (Pre PJ)"]
PDFF_dif = rm_outlier["PDFF (Post PJ)"] - rm_outlier["PDFF (Pre PJ)"]


# %%
# Expand the dataframe with the differences
rm_outlier["cT1 Dif"] = cT1_dif
rm_outlier["Iron Dif"] = Iron_dif
rm_outlier["PDFF Dif"] = PDFF_dif


# %%
fig, axes = plt.subplots(nrows = 1, ncols = 3, figsize = (14,8))

rm_outlier["cT1 Dif"].plot.bar(ax =axes[0], title = "cT1 Delta" , color = "blue", ylabel = "cT1 (ms)")

rm_outlier["Iron Dif"].plot.bar(ax =axes[1], title = "Iron Delta", color = "maroon", ylabel = "Iron (mg/g dry liver)")

rm_outlier["PDFF Dif"].plot.bar(ax =axes[2], title = "PDFF Delta", color = "darkgreen", ylabel = "PDFF (%)")

plt.savefig("Delta between Pre and Post PJ.png")

#From the trend, it seems 


# %%
#plot the delta with drop_row

cT1_dif  = drop_row["cT1 (Post PJ)"] -  drop_row["cT1 (Pre PJ)"]
Iron_dif = drop_row["Iron (Post PJ)"] - drop_row["Iron (Pre PJ)"]
PDFF_dif = drop_row["PDFF (Post PJ)"] - drop_row["PDFF (Pre PJ)"]

drop_row["cT1 Dif"] = cT1_dif
drop_row["Iron Dif"] = Iron_dif
drop_row["PDFF Dif"] = PDFF_dif

fig, axes = plt.subplots(nrows = 1, ncols = 3, figsize = (14,8))

drop_row["cT1 Dif"].plot.bar(ax =axes[0], title = "cT1 (Post-Pre)" , color = "blue", ylabel = "cT1 (ms)")

drop_row["Iron Dif"].plot.bar(ax =axes[1], title = "Iron (Post-Pre)", color = "maroon", ylabel = "Iron (mg/g dry liver)")

drop_row["PDFF Dif"].plot.bar(ax =axes[2], title = "PDFF (Post-Pre)", color = "darkgreen", ylabel = "PDFF (%)")
plt.savefig("Bar Plot Comparison")


# %%
#If the columns are not numbered, but have a name instead, something like d[3] will fail. You would then need to select the column by its index, i.e., set the iloc
# https://stackoverflow.com/questions/45263070/key-error3-while-using-for-to-plot-using-matplotlib-pyplot-scatter


Pre = rm_outlier["cT1 (Pre PJ)"]
Post = rm_outlier["cT1 (Post PJ)"]

for i in range(len(Pre)):
    plt.plot( [0,1], [Pre.iloc[i], Post.iloc[i]], color = "maroon")


# %%

#Draw dotline plot
Pre = drop_row["cT1 (Pre PJ)"]
Post = drop_row["cT1 (Post PJ)"]

plt.figure(figsize = (10,8))

plt.scatter(np.zeros(len(Pre)), Pre)
plt.scatter(np.ones(len(Post)), Post)

for i in range(len(Pre)):
    plt.plot( [0,1], [Pre.iloc[i], Post.iloc[i]], color = "k")

plt.plot([0,1], [np.median(Pre), np.median(Post)], color = "red", linewidth = 3.0)
plt.xticks([0,1], ["cT1 Pre PJ", "cT1 Post PJ"])
plt.ylabel("cT1 (ms)")
plt.title("Dotplot comparison")
plt.savefig("cT1 Dotplot comparison.png")


# %%
#subplot the 3 sets of values

fig, axes = plt.subplots(nrows = 1, ncols = 3, figsize = (16,8), sharex = False, sharey = False)


data_length = len(drop_row["cT1 (Pre PJ)"])

#Plot cT1 dotplot
axes[0].scatter(np.zeros(data_length), drop_row["cT1 (Pre PJ)"], color = "blue")
axes[0].scatter(np.ones(data_length), drop_row["cT1 (Post PJ)"], color = "orange")

for i in range(data_length):
    axes[0].plot( [0,1], [drop_row["cT1 (Pre PJ)"].iloc[i], drop_row["cT1 (Post PJ)"].iloc[i]], color = "k")

axes[0].set_xticks([0,1], ["cT1 Pre PJ", "cT1 Post PJ"])
axes[0].set_ylabel("cT1 (ms)")

#Plot Iron dotplot
axes[1].scatter(np.zeros(data_length), drop_row["Iron (Pre PJ)"], color = "blue")
axes[1].scatter(np.ones(data_length), drop_row["Iron (Post PJ)"], color = "orange")

for i in range(data_length):
    axes[1].plot( [0,1], [drop_row["Iron (Pre PJ)"].iloc[i], drop_row["Iron (Post PJ)"].iloc[i]], color = "k")

axes[1].set_xticks([0,1], ["Iron Pre PJ", "Iron Post PJ"])
axes[1].set_ylabel("Iron (mg/g dry liver)")


#Plot PDFF dotplot
axes[2].scatter(np.zeros(data_length), drop_row["PDFF (Pre PJ)"], color = "blue")
axes[2].scatter(np.ones(data_length), drop_row["PDFF (Post PJ)"], color = "orange")

for i in range(data_length):
    axes[2].plot( [0,1], [drop_row["PDFF (Pre PJ)"].iloc[i], drop_row["PDFF (Post PJ)"].iloc[i]], color = "k")

axes[2].set_xticks([0,1], ["PDFF Pre PJ", "PDFF Post PJ"])
axes[2].set_ylabel("PDFF (%)")


# %%
np.median(drop_row["cT1 (Pre PJ)"])


# %%
#define the plotting function
def PrePost(a, b):
    plt.scatter(np.zeros(data_length), a, color = "blue")
    plt.scatter(np.ones(data_length), b, color = "orange")

    for i in range(data_length):
        plt.plot( [0,1], [a.iloc[i], b.iloc[i]], color = "k")
    
    plt.plot([0,1], [np.median(a), np.median(a)], color = "red", linewidth = 3.0)


# %%
#test the plotting function with Iron data
PrePost(drop_row["Iron (Pre PJ)"], drop_row["Iron (Post PJ)"] )


# %%
fig = plt.figure(figsize = (16,8))
fig.suptitle("Dotplot Comparison", fontsize = 20)

data_length = len(drop_row["cT1 (Pre PJ)"])

fig.add_subplot(131)
PrePost(drop_row["cT1 (Pre PJ)"], drop_row["cT1 (Post PJ)"])
plt.xticks([0,1], ["cT1 Pre PJ", "cT1 Post PJ"]) #add the xtick and y label 
plt.ylabel("cT1 (ms)")

fig.add_subplot(132)
PrePost(drop_row["Iron (Pre PJ)"], drop_row["Iron (Post PJ)"])
plt.xticks([0,1], ["Iron Pre PJ", "Iron Post PJ"])
plt.ylabel("Iron (mg/g dry liver)")

fig.add_subplot(133)
PrePost(drop_row["PDFF (Pre PJ)"], drop_row["PDFF (Post PJ)"])
plt.xticks([0,1], ["PDFF Pre PJ", "PDFF Post PJ"])
plt.ylabel("PDFF (%)")
plt.savefig("Dotplot Comparison")


# %%
# Use histogram to see the distribution of cT1 (Pre PJ)
fig = plt.figure(figsize = (20,14))
fig.suptitle("Histogram for Distribution", fontsize = 20)

fig.add_subplot(231)
drop_row["cT1 (Pre PJ)"].plot.hist(bins = 40, title  = "cT1 Pre")
fig.add_subplot(232)
drop_row["Iron (Pre PJ)"].plot.hist(bins = 40, title = "Iron Pre", color = "red")
fig.add_subplot(233)
drop_row["PDFF (Pre PJ)"].plot.hist(bins = 40, title = "PDFF Pre", color = "green")
fig.add_subplot(234)
drop_row["cT1 (Post PJ)"].plot.hist(bins = 40, title  = "cT1 Post")
fig.add_subplot(235)
drop_row["Iron (Post PJ)"].plot.hist(bins = 40, title = "Iron Post", color = "red")
fig.add_subplot(236)
drop_row["PDFF (Post PJ)"].plot.hist(bins = 40, title = "PDFF Post", color = "green")

plt.savefig("Histogram.png")
# The distrobution of the values seems not to be normally distributed


# %%
#make bar plot with the inter quartile range on the top
cT1_Pre_std = np.std(drop_row["cT1 (Pre PJ)"])

drop_row["cT1 (Pre PJ)"].plot.bar(title = "cT1 (Pre PJ) with Ref Interval", yerr = cT1_Pre_std, capsize = 5 , ylabel = "cT1 (ms)", color = "royalblue" ,figsize = (20,8))
drop_row["cT1 Ref Int Upper"].plot.area(color = "lightgreen", alpha = 0.35)
drop_row["cT1 Ref Int Lower"].plot.area(color = "white", linestyle = ":")

plt.savefig("cT1 (Pre PJ) with Individual Error Bar and Reference Rrange")


# %%
cT1_Post_std = np.std(drop_row["cT1 (Post PJ)"])

drop_row["cT1 (Post PJ)"].plot.bar(title = "cT1 (Post PJ) with Ref Interval", yerr = cT1_Post_std, capsize = 5 , ylabel = "cT1 (ms)", color = "cornflowerblue", figsize = (20,8))
drop_row["cT1 Ref Int Upper"].plot.area(color = "lightgreen", alpha = 0.35)
drop_row["cT1 Ref Int Lower"].plot.area(color = "white", linestyle = ":")

plt.savefig("cT1 (Post PJ) with Individual Error Bar and Reference Rrange")


# %%
Iron_Pre_std = np.std(drop_row["Iron (Pre PJ)"])

drop_row["Iron (Pre PJ)"].plot.bar(title = "Iron (Pre PJ) with Ref Interval", yerr = Iron_Pre_std, capsize = 5 , ylabel = "Iron (mg/g dry liver)", color = "brown" ,figsize = (20,8))
drop_row["Iron Ref Int"].plot.area(color = "lightgreen", alpha = 0.35)


plt.savefig("Iron (Pre PJ) with Individual Error Bar and Reference Rrange")


# %%
Iron_Post_std = np.std(drop_row["Iron (Post PJ)"])

drop_row["Iron (Post PJ)"].plot.bar(title = "Iron (Post PJ) with Ref Interval", yerr = Iron_Pre_std, capsize = 5 , ylabel = "Iron (mg/g dry liver)", color = "rosybrown" ,figsize = (20,8))
drop_row["Iron Ref Int"].plot.area(color = "lightgreen", alpha = 0.35)


plt.savefig("Iron (Post PJ) with Individual Error Bar and Reference Rrange")


# %%
PDFF_Pre_std = np.std(drop_row["PDFF (Pre PJ)"])

drop_row["PDFF (Pre PJ)"].plot.bar(title = "PDFF (Pre PJ) with Ref Interval", yerr = PDFF_Pre_std, capsize = 5 , ylabel = "PDFF (%))", color = "seagreen" ,figsize = (20,8))
drop_row["PDFF Ref Int"].plot.area(color = "lightgreen", alpha = 0.35)


plt.savefig("PDFF (Pre PJ) with Individual Error Bar and Reference Rrange")


# %%
PDFF_Post_std = np.std(drop_row["PDFF (Post PJ)"])

drop_row["PDFF (Post PJ)"].plot.bar(title = "PDFF (Post PJ) with Ref Interval", yerr = PDFF_Post_std, capsize = 5 , ylabel = "PDFF (%))", color = "mediumseagreen" ,figsize = (20,8))
drop_row["PDFF Ref Int"].plot.area(color = "lightgreen", alpha = 0.35)


plt.savefig("PDFF (Post PJ) with Individual Error Bar and Reference Rrange")


# %%
f, ax = plt.subplots(1, figsize = (30,10))
ax.set_title("cT1 Pre PJ with Q1 and Q3", fontsize = 20)

plt.bar( drop_row["Portal ID LMS0 (pre PJ)"], drop_row["cT1 (Pre PJ)"], color = "royalblue")
plt.plot(drop_row["Portal ID LMS0 (pre PJ)"], drop_row["cT1 Q1 (Pre PJ)"], c = "orange")
plt.plot(drop_row["Portal ID LMS0 (pre PJ)"], drop_row["cT1 Q3 (Pre PJ)"], c = "black")

plt.ylabel("cT1 (Pre PJ) (ms)")


# %%
# Plot the Bar and see the interquartile range

f, ax = plt.subplots(1, figsize = (30,10))
ax.set_title("cT1 Post PJ with Q1 and Q3", fontsize = 20)
plt.bar(drop_row["Portal ID LMS1 (post PJ)"], drop_row["cT1 (Post PJ)"], color = "royalblue")
plt.plot(drop_row["Portal ID LMS1 (post PJ)"], drop_row["cT1 Q1 (Post PJ)"], c = "orange")
plt.plot(drop_row["Portal ID LMS1 (post PJ)"], drop_row["cT1 Q3 (Post PJ)"], c = "black")

plt.ylabel("cT1 Post PJ")


# %%
f, ax = plt.subplots(1, figsize = (30,10))
ax.set_title("Iron Pre PJ with Q1 and Q3", fontsize = 20)
plt.bar(drop_row["Portal ID LMS0 (pre PJ)"], drop_row["Iron (Pre PJ)"], color = "brown")
plt.plot(drop_row["Portal ID LMS0 (pre PJ)"], drop_row["Iron Q1 (Pre PJ)"], c = "green")
plt.plot(drop_row["Portal ID LMS0 (pre PJ)"], drop_row["Iron Q3 (Pre PJ)"], c = "black")
plt.ylabel("Iron (Pre PJ)")


# %%
f, ax = plt.subplots(1, figsize = (30,10))
ax.set_title("Iron Post PJ with Q1 and Q3", fontsize = 20)
plt.bar(drop_row["Portal ID LMS1 (post PJ)"],  drop_row["Iron (Post PJ)"], color = "indianred")
plt.plot(drop_row["Portal ID LMS1 (post PJ)"], drop_row["Iron Q1 (Post PJ)"], c = "lime")
plt.plot(drop_row["Portal ID LMS1 (post PJ)"], drop_row["Iron Q3 (Post PJ)"], c = "black")
plt.ylabel("Iron (Post PJ)")


# %%
f, ax = plt.subplots(1, figsize = (30,10))
ax.set_title("PDFF Pre PJ with Q1 and Q3", fontsize = 20)
plt.bar(drop_row["Portal ID LMS0 (pre PJ)"],  drop_row["PDFF (Pre PJ)"], color = "green")
plt.plot(drop_row["Portal ID LMS0 (pre PJ)"], drop_row["PDFF Q1 (Pre PJ)"], c = "red")
plt.plot(drop_row["Portal ID LMS0 (pre PJ)"], drop_row["PDFF Q3 (Pre PJ)"], c = "black")
plt.ylabel("PDFF (Pre PJ)")


# %%
f, ax = plt.subplots(1, figsize = (30,10))
ax.set_title("PDFF Post PJ with Q1 and Q3", fontsize = 20)
plt.bar(drop_row["Portal ID LMS1 (post PJ)"],  drop_row["PDFF (Post PJ)"], color = "green")
plt.plot(drop_row["Portal ID LMS1 (post PJ)"], drop_row["PDFF Q1 (Post PJ)"], c = "red")
plt.plot(drop_row["Portal ID LMS1 (post PJ)"], drop_row["PDFF Q3 (Post PJ)"], c = "black")
plt.ylabel("PDFF (Post PJ)")


# %%
# Plot the individual values of pre and post together

f, ax = plt.subplots(1, figsize = (20,8))
drop_row[["cT1 (Pre PJ)", "cT1 (Post PJ)"]].plot(kind = 'bar', ax = ax)
plt.plot(drop_row["Portal ID LMS0 (pre PJ)"], drop_row["cT1 Q1 (Pre PJ)"], color = "slategray")
plt.plot(drop_row["Portal ID LMS0 (pre PJ)"], drop_row["cT1 Q3 (Pre PJ)"], color = "lightsteelblue")
plt.plot(drop_row["Portal ID LMS0 (pre PJ)"], drop_row["cT1 Q1 (Post PJ)"], color = "bisque")
plt.plot(drop_row["Portal ID LMS0 (pre PJ)"], drop_row["cT1 Q3 (Post PJ)"], color = "tan")
plt.ylabel("cT1")


# %%
drop_row.info()


# %%
# Use Shapio- Wilk test to test Normality
# If W is less than one, the dataset is away from being drawn from normal distribution.
# The p value of Shapiro Wilk Test is to test the hyposthesis of the Shapio-Wilk test to reject the null Ho
# Shapiro Wilk test is quite sensitive, sometimes if the data from histigram seems normallt distributed, it can still be test with parametric t test.
# https://www.youtube.com/watch?v=dRAqSsgkCUc&ab_channel=MatthewE.Clapham



a = stats.shapiro(drop_row["cT1 (Pre PJ)"])
b = stats.shapiro(drop_row["Iron (Pre PJ)"])
c = stats.shapiro(drop_row["PDFF (Pre PJ)"])
d = stats.shapiro(drop_row["cT1 (Post PJ)"])
e = stats.shapiro(drop_row["Iron (Post PJ)"])
f = stats.shapiro(drop_row["PDFF (Post PJ)"])

data = {"Biomarkers" : ["cT1 Pre PJ", "Iron (Pre PJ)", "PDFF (Pe PJ)", "cT1 (Post PJ)", "Iron (Post PF)", "PDFF (Post PJ)"], "Shapiro Wilk Test Result (W, p value)": [a, b, c, d, e, f], "Normal Distribution?": ["No", "No", "No", "No", "No", "No"]}
SP = pd.DataFrame(data = data)
SP.style.set_caption("Shapiro Wilk Test for Normality")
dfi.export(SP, "Shapiro Wilk Test for Normality.png")


# %%
# Strictly speaking because the cT1 datasets failed Shapiro Wilk test, it is not normallyu distributed however, given the fact that the histogram shows a distributioin similar to normal distribution, we use paired student t tes to see if cT1 Pre and Post difference is significant
# Regarding whether or not using one tailed or 2-tailed, this has to be driven by expectation.  Not by looking at the data!
# https://www.youtube.com/watch?v=AZHh5iGdJUw&list=PLfhL43gLKJ5lBXJw5THlC2V0BZ1FuItuv&index=5&ab_channel=MatthewE.Clapham

j = stats.ttest_rel(drop_row["cT1 (Pre PJ)"], drop_row["cT1 (Post PJ)"])
data2 = {"Biomarker":["cT1"], "Paired T Test (T, p value)":[j]}
TT = pd.DataFrame(data = data2)
TT
dfi.export(TT, "cT1 Paired T test Result.png")


# %%
# Use Wilcoxon signed-rank Test to see if the difference is statistically significant
# pre define alpha value = 0.05
# The critical value of the WIlcoxon singned Rank test (with the numbe of sample being 30) is 137
# if W statistics is < critical value, we reject the H0. This mean that there are significant difference between the median of both samples.

g = stats.wilcoxon(drop_row["cT1 (Pre PJ)"], drop_row["cT1 (Post PJ)"])
h = stats.wilcoxon(drop_row["Iron (Pre PJ)"], drop_row["Iron (Post PJ)"])
i = stats.wilcoxon(drop_row["PDFF (Pre PJ)"], drop_row["PDFF (Post PJ)"])

data3 = {"Biomarkers" : ["cT1", "Iron", "PDFF"], "Wilcoxon signed-rank Test Result": [g, h, i], "W stats < W critical (137)?":["Yes","Yes", "Yes"] ,"Difference is significant?": ["Yes", "No", "Yes"]}

WX = pd.DataFrame(data = data3)
WX
dfi.export(WX, "Wilcoxon signed-rank Test Result.png")


# %%
# Plot Bland Altman plots 
# https://stackoverflow.com/questions/16399279/bland-altman-plot-in-python

f, ax = plt.subplots(nrows = 3, ncols = 1, figsize = (8,14))
sm.graphics.mean_diff_plot(drop_row["cT1 (Pre PJ)"], drop_row["cT1 (Post PJ)"],  ax = ax[0], scatter_kwds = {"color":"blue"})
ax[0].set_ylabel("cT1 (Pre PJ) - cT1 (Post PJ)")

sm.graphics.mean_diff_plot(drop_row["Iron (Pre PJ)"], drop_row["Iron (Post PJ)"], ax = ax[1], scatter_kwds = {"color":"red"})
ax[1].set_ylabel("Iron (Pre PJ) - Iron (Post PJ)")

sm.graphics.mean_diff_plot(drop_row["PDFF (Pre PJ)"], drop_row["PDFF (Post PJ)"], ax = ax[2], scatter_kwds = {"color":"green"})
ax[2].set_ylabel("PDFF (Pre PJ) - PDF (Post PJ)")

plt.savefig("Bland Altman Plot for PJ.png")


# %%
# Check the differences between measurement is Pre - Post or Post - Pre
sm.graphics.mean_diff_plot(drop_row["cT1 (Pre PJ)"], drop_row["cT1 (Post PJ)"], scatter_kwds = {"color":"blue"})
plt.ylabel("cT1 (Pre PJ) - cT1 (Post PJ)")

sm.graphics.mean_diff_plot(drop_row["cT1 (Post PJ)"], drop_row["cT1 (Pre PJ)"], scatter_kwds = {"color":"pink"})
plt.ylabel("cT1 (Post PJ) - cT1 (Pre PJ)")

