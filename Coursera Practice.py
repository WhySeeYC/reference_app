#computors are really good at words counting while human being are not
#secondary memory is permanant. The data doesn't get erase, not like main memory
#pythonista
#syntax error means python is lost
#there are reserve words that have to be used specifically for dedicated use for python

print("Hey! Nice to meet you. I am learning Python because I want to be able to master machine learning for my PhD project")
print("Let's finish all the module in this coursera course.")
x = 1
print(x)

x = x+1 
print(x)
exit()

#Expression
#python naming convention: case sensitive
#when choose a variable that is sensible
#remainder operation % in python power operator ** e.g. 2**3 = 2*2*2
#trace back error, is similar to syntax error. The programme after that is stopped. it won't run


#type conversion
print(float(99)+100)
a = float(99)+100
type(a)

#string conversion
sva1 = "123"
type(sva1)
print(sva1+1)
iva1 = int(sva1)
type(iva1)
print(iva1+1)

#User input
methods = input("how do you do automation?") 
#afetr run this, type somethiing in terminal
print("The anwser is ", methods)


#convert elevator floors
inp = input("Europe floor?")
usf = int(inp)+1
print("US floor", usf)
##for example, if we want to convert the time we write down
#at the scanner to the real world time(the scanner time is faser)
#so that we in the future can track the timing and if there is
#specific patient we need to recall, we can use this
scanner_time = input("minutes on scanner")
real_time = int(scanner_time)-7 #we already know that the scanner is 7 min faster
print("The real time should be", real_time)
#we may need the hours 
(scanner_hour,scanner_minute) = input("hour on scanner","minutes on scanner")
real_time = int(scanner_minute)-7 
print("hour on scanner", real_time)
#the previous doesn't work -> python doesn't allow more than one input

#To print strings together 
print("abc"+"123")
#example: CoverScan patient ID with their time point. 
#we put in: 101-0223, and A --> Python will print 101-0223A

#Condition Operators: if
#important: identation is important in Python. Don't use "Tab"
#nested conditional operatrs

#Multi-way-> only one of the statement will be run. No matter using else of elif

#try/except -> used to avoid traceback error -> use to catch error we want to catch
# -> it's like if things work out, do this. Of things don't work out -> do this instead
astr = 'hellow bob' 
try:
    istr = int(astr) #this one doesn't work so it runs the next one. There will be a trace back generated here
except:
    istr = -1        #this one will run
print("First", istr)


astr = '123'
try:
    istr = int(astr) #this one work, will run
except:
    istr = -1
print('second', istr) #this one then won't run



#Write a program to prompt the user for hours 
# and rate per hour using input to compute gross pay. 
# Pay the hourly rate for the hours up to 40 and 
# 1.5 times the hourly rate for all hours worked above 40 hours.
# Use 45 hours and a rate of 10.50 per hour to test the program 
# (the pay should be 498.75). 
# You should use input to read a string and 
# float() to convert the string to a number. 
hrs = input("Enter Hours:")
rph = input("Enter Rate per hour")
h = float(hrs)
r = float(rph)

if h<40:
	Pay = h*r
else:
	Pay =(40)*r+(h-40)*(r*1.5)
print(Pay)


# Write a program to prompt for a score between 0.0 and 1.0. 
# If the score is out of range, print an error. 
# If the score is between 0.0 and 1.0, print a grade using 
# the following table:
# Score Grade
# >= 0.9 A
# >= 0.8 B
# >= 0.7 C
# >= 0.6 D
# < 0.6 F
score = input("Enter Score: ")
score_2 = float(score)

if score_2 < 0.0 or score_2 > 1.0:
    print("Error. The input is out of range")
else:
    if score_2 >= 0.9:
        print("A")
    elif score_2 >= 0.8 and score_2 < 0.9:
        print("B")
    elif score_2 >= 0.7 and score_2 < 0.8:
        print("C")
    elif score_2 >= 0.6 and score_2 < 0.7:
        print("D")
    elif score_2 < 0.6:
        print("F")


#The 4 patterns for code: Sequential, Conditional, Iterations, Store and Reuse def is the keyword used to store a block of code as function, then call it and invoke. The argument is the input
#return values -> does 2 things: 1. Stops 2. Give residual value
#at the end of the function, 
# it is good to return the residual value to feed in for the next fucnction


#Write a program to prompt the user for hours and rate per hour using input to compute gross pay. Pay should be the normal rate for hours up to 40 and time-and-a-half for the hourly rate for all hours worked above 40 hours. Put the logic to do the computation of pay in a function called computepay() and use the function to do the computation. The function should return a value. Use 45 hours and a rate of 10.50 per hour to test the program (the pay should be 498.75). You should use input to read a string and float() to convert the string to a number. Do not worry about error checking the user input unless you want to - you can assume the user types numbers properly. Do not name your variable sum or use the sum() function.
def computepay(h,r):
    if h<40:
	    Pay = h * r
    else:
	    Pay =(40)*r+(h-40)*(r*1.5) 
    return Pay

hrs = input("Enter Hours:")
rph = input("Enter Rate per hour")
h = float(hrs)
r = float(rph)

p = computepay(h,r)
print("Pay",p)

#Loops and iteration -> be careful with the infinite loop
#break statement -> ends the current loop -> get out of the loop
#continue -> skipping to the top of the loop -> goes to the next iteration
# e.g. placing ROI is iteration
#Definite loop -> for loop
MRAs = ["Faezeh", "Roberto", "Andrea", "Sasha", "Jacky", "Karolina", "Izzy", "Liz", "YC"]
for MRA in MRAs:
    i = i+1
    print("Number", i, MRA)
print("Amazing Crew!")
#e.g. we can use loop to find out the vial values being out of the acceptance criteria
#e.g. use a loop to find out which month I spent the mostt money on grocery

#Filtering in a loop -> filter out the months when I spent more money on eating out then groceries
Months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
Month_eatout = [10, 15, 20, 35, 70, 80, 47, 59, 10, 39, 56, 100]
Month_grocery = [58, 20, 10, 26, 50, 38, 10, 26, 40, 72, 59, 25]
i=0
for month in Months:
    if Month_eatout[i] > Month_grocery[i]:
        print(Months[i], "you over spent")
    else:
        print(Months[i],"you are safe")
    i = i+1
print("done") #remember to give an action after the for loop otherwise, the for loop won't print

#find the largest value
largest_so_far = -1
print("before", largest_so_far)
for num in [9,41,12,3,74,15]:
    if num > largest_so_far:
        largest_so_far = num
    print(largest_so_far, num)
print("after", largest_so_far)


# The "is" operator will match both the Type and Value of a variable
#None -> use to represent the absence of a value
if small is None #then small variable is a data type of null variable and the value is none
smallest = None
print("before")
for val in [9,41,12,3,74,15]
    if smallest is None: #this means it's the first time
        smallest = val
    elif val < smallest:
        smallest = val
    print(smallest, val)
print("After")

#this loop will not run
n = 0
while n > 0 :
    print('Lather')
    print('Rinse')
print('Dry off!')


 #Write a program that repeatedly prompts a user for integer numbers until the user enters 'done'. 
 # Once 'done' is entered, print out the largest and smallest of the numbers. 
 # If the user enters anything other than a valid number catch it with a try/except and put out an appropriate message and ignore the number. 
 # Enter 7, 2, bob, 10, and 4 and match the output below.

largest = None
smallest = None
while True:
    snum = input("Enter a number:")
    if snum == "done":
        break
    try:
        fnum = int(snum)          
    except:
        print("Invalid input")
    if largest is None: #this is the first time of the loop 
        largest  = fnum
    elif smallest is None:
        smallest = fnum
    elif fnum > largest:
        largest  = fnum
    elif smallest < fnum < largest:
        continue
    else:
        smallest = fnum   
print("Maximum is", largest)
print("Minimum is", smallest)


#Use the correct method to add multiple items (more_fruits) to the fruits set
fruits = {"apple", "banana", "cherry"}   #this is a set 
more_fruits = ["orange", "mango", "grapes"]
fruits.update(more_fruits)


#Use the get method to print the value of the "model" key of the car dictionary
car =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(car.get("model"))

#Change the "year" value from 1964 to 2020.
car =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
car["year"]=2020

#Add the key/value pair "color" : "red" to the car dictionary.
car =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
car["color"] = "red"

#If you do not know the number of arguments that will be passed into your function, there is a prefix you can add in the function definition, which prefix?
def my_function(*kids):
  print("The youngest child is " + kids[2])

#If you do not know the number of keyword arguments that will be passed into your function, there is a prefix you can add in the function definition, which prefix?
def my_function(**kid):
  print("His last name is " + kid["lname"])

#It is also possible to create anonymous functions (functions not bound to a name), for immediate use in expressions. It is useful when you use that inside a defined function
def myfunc(n):
  return lambda a : a * n

mytripler = myfunc(3)

print(mytripler(11)) #this will print out 33

#What is the correct syntax of printing all variables and function names of the "mymodule" module?
import mymodule
print(dir(mymodule))

#Practices using tkinter
import tkinter as tk
class Application(tk.Frame):
    def __init__(self, master=None):
        super().__init__(master)
        self.master = master
        self.pack()
        self.create_widgets()

    def create_widgets(self):
        self.hi_there = tk.Button(self)
        self.hi_there["text"] = "Hello World\n(click me)"
        self.hi_there["command"] = self.say_hi
        self.hi_there.pack(side="top")

        self.quit = tk.Button(self, text="QUIT", fg="red",
                              command=self.master.destroy)
        self.quit.pack(side="bottom")

    def say_hi(self):
        print("hi there, everyone!")

root = tk.Tk()
app = Application(master=root)
app.mainloop()

print(fred.config())
{'relief': ('relief', 'relief', 'Relief', 'raised', 'groove')}

import tkinter as tk

class App(tk.Frame):
    def __init__(self, master):
        super().__init__(master)
        self.pack()

        self.entrythingy = tk.Entry()
        self.entrythingy.pack()

        # Create the application variable.
        self.contents = tk.StringVar()
        # Set it to some value.
        self.contents.set("this is a variable")
        # Tell the entry widget to watch this variable.
        self.entrythingy["textvariable"] = self.contents

        # Define a callback for when the user hits return.
        # It prints the current value of the variable.
        self.entrythingy.bind('<Key-Return>',
                             self.print_contents)

    def print_contents(self, event):
        print("Hi. The current entry content is:",
              self.contents.get())

root = tk.Tk()
myapp = App(root)
myapp.mainloop()

#matplotlib practice not work
import matplotlib.pyplot as plt
import numpy as np
x = linspace(0,20,100)
plt.plot(x, np.sin(x))
plt.show()


#Gantt chart practice not work
import plotly.express as px
import pandas as pd
df = pd.DataFrame([
    dict(Task="Job A", Start='2009-01-01', Finish='2009-02-28'),
    dict(Task="Job B", Start='2009-03-05', Finish='2009-04-15'),
    dict(Task="Job C", Start='2009-02-20', Finish='2009-05-30')
])

fig = px.timeline(df, x_start="Start", x_end="Finish", y="Task")
fig.update_yaxes(autorange="reversed") # otherwise tasks are listed from the bottom up
fig.show()


 #Open the file romeo.txt and read it line by line. For each line, split the line into a list of words using the split() method. The program should build a list of words. For each word on each line check to see if the word is already in the list and if not append it to the list. When the program completes, sort and print the resulting words in alphabetical order


file = open("/Users/yi-chunwang/Desktop/romeo.txt")
lst = []
for line in file:
    nospaceline = line.rstrip()
    wordbreak = nospaceline.split()
    for word in wordbreak:
        if word in lst: 
            continue
        else:
            lst.append(word)
lst.sort()
lst

#Open the file mbox-short.txt and read it line by line. When you find a line that starts with 'From ' like the following line,parse the From line using split() and print out the second word in the line. Then print out a count at the end.

import urllib.request
data = urllib.request.urlopen("http://www.py4e.com/code3/mbox-short.txt") # the url request doesn't really work


file = open("/Users/yi-chunwang/OneDrive - Perspectum Diagnostics Ltd/Python/mbox-short.txt")
count = 0
for line in file:
    if line.startswith("From") is True:
        if line.startswith("From:"):
            continue
        else:
            count = count+1
            extract = line.split()
            print(extract[1])
    
print("There were", count, "lines in the file with From as the first word")

# Write a program to read through the mbox-short.txt and figure out who has sent the greatest number of mail messages. 
# The program looks for 'From ' lines and 
# takes the second word of those lines as the person who sent the mail. 
# The program creates a Python dictionary that maps the sender's mail address to a count of the number of times they appear in the file. 
# After the dictionary is produced, the program reads through the dictionary using a maximum loop to find the most prolific committer.

name = input("Enter file:")


file = open("/Users/yi-chunwang/OneDrive - Perspectum Diagnostics Ltd/Python/mbox-short.txt")
counts = dict()
persons = []
for line in file:
    if line.startswith('From '):
        person = line.split()
        who = person[1]
        persons.append(who)
      
for who in persons:
    counts[who] = counts.get(who,0)+1

whos_max = ""
current_max = 0
for who,count in counts.items():
    if count > current_max:
        current_max = count
        whos_max = who
    else:
        continue
print(whos_max, current_max)

#28 Feb