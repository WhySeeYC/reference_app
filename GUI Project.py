 #Create a GUI that allow users to: 1.Read PDF 2.Compare with acceptance criteria 3.Show boxplot for difference
#Essenially, a program is a tool tthat takes some input data, do something and output. 
import tkinter as Tk
from tkinter import *  #The * means import everything
 
root = Tk() #this needs to be created before every Tkinter GUI
#Creat a label widget
myLabel = Label(root, text = 'Acceptence Criteria Checker')
#Shoving it onto the screen
myLabel.pack()  #Pack will keep the label at the deafult position
#How a program runs is that it is conttiuously looping to be able to igure ou what's going on
#The program ends when the loop ends 
root.mainloop()

#Use grid ----------------------------------------------------
import tkinter as tk
from tkinter import *  #The * me ans import everything
 
root = Tk() 
myLabel1 = Label(root, text = "Acceptence Criteria Checker")
myLabel2 = Label(root, text = "Choose File")

myLabel1.grid(row = 0, column = 0)  #grid is like an coordinat. It is relative, tkinter doesn't have default space for grid.
myLabel2.grid(row = 2, column = 2)  
root.mainloop()

#Create Button----------------------------------------------------
import tkinter as tk
from tkinter import *  #The * means import everything
 
root = Tk() 

myButton = Button(root, text = "click to choose file", padx = 50, pady = 30, state=DISABLED)  #If disable the state of the button, when you click it the button won't be clicked.
#padx and pady define the button size
myButton.pack()
root.mainloop()

#Get Button to prompt use to start the checker----------------------------------------------------
import tkinter as tk
from tkinter import *  #The * means import everything
 
root = Tk() 

def click():
    myLabel1 = Label(root, text = "Acceptence Criteria Checker")
    myLabel1.pack()

myButton = Button(root, text = "Start", command=click)  #Notice that here you don't add a () afetr the defined function "click"
myButton.pack()
root.mainloop()

#Change Button foreground(fg) & background(bg) color (PS bg does not work on Mac) --------------------
import tkinter as tk
from tkinter import *  #The * means import everything
 
root = Tk() 

def click():
    myLabel1 = Label(root, text = "Acceptence Criteria Checker")
    myLabel1.pack()

myButton = Button(root, text = "Start", command = click, highlightbackground = 'black', fg = "red")

myButton.pack()
root.mainloop()

#Create Input Box------------------------------------------
import tkinter as tk
from tkinter import *

root = Tk()

Input = Entry(root, width = 50, fg = "purple", borderwidth = 5)
Input.pack()
Input.get() #the get function will get the input information
Input.insert(0, "Enter the reference number: ") #Add the information inside the input box

def Compare():
    myLabel = Label(root, text = "ACT" + Input.get())  #add ACT before the reference number
    myLabel.pack()

myButton = Button(root, text = "Combine", command = Compare)
myButton.pack()

root.mainloop()

#Create a calculator------------------------------------------
import tkinter as tk
from tkinter import *
root = Tk()
root.title("YC calculator")
Input = Entry(root, width = 30, fg = "purple", borderwidth = 5)
Input.grid(row = 0, column = 0, columnspan = 3)  #The columnspan means the input box will span across 3 columns 


def button_click(number):
   #Input.delete(0, END)  #this will clear what is already in the input box. But it won't allow input more than 2 digits number
   current = Input.get()
   Input.delete(0, END)
   Input.insert(0, str(current) + str(number))

def button_add():
    first_number = Input.get()
    global f_num 
    global action
    action = "addition"
    f_num = int(first_number)
    Input.delete(0, END)
    
def button_subtract():
    first_number = Input.get()
    global f_num
    global action
    action = "subtraction"
    f_num = int(first_number)
    Input.delete(0,END)

def button_multiply():
    first_number = Input.get()
    global f_num
    global action
    action = "multiplication"
    f_num = int(first_number)
    Input.delete(0,END)

def button_divide():
    first_number = Input.get()
    global f_num
    global action
    action = "division"
    f_num = int(first_number)
    Input.delete(0,END)

def button_equal():
    second_number = Input.get()
    Input.delete(0, END)

    if action == "addition":
        outcome = f_num + int(second_number)
        Input.insert(0, outcome)

    if action == "subtraction":
        outcome = f_num - int(second_number)
        Input.insert(0, outcome)

    if action == "multiplication":
        outcome = f_num * int(second_number)
        Input.insert(0, outcome)

    if action == "division":
        outcome = f_num / int(second_number)
        Input.insert(0, outcome)
    
def button_clear():
    Input.delete(0,END)

#create button
button_1 = Button(root, text = "1", padx = 40, pady = 20, command = lambda: button_click(1))
button_2 = Button(root, text = "2", padx = 40, pady = 20, command = lambda: button_click(2))
button_3 = Button(root, text = "3", padx = 40, pady = 20, command = lambda: button_click(3))
button_4 = Button(root, text = "4", padx = 40, pady = 20, command = lambda: button_click(4))
button_5 = Button(root, text = "5", padx = 40, pady = 20, command = lambda: button_click(5))
button_6 = Button(root, text = "6", padx = 40, pady = 20, command = lambda: button_click(6))
button_7 = Button(root, text = "7", padx = 40, pady = 20, command = lambda: button_click(7))
button_8 = Button(root, text = "8", padx = 40, pady = 20, command = lambda: button_click(8))
button_9 = Button(root, text = "9", padx = 40, pady = 20, command =lambda: button_click(9))
button_0 = Button(root, text = "0", padx = 40, pady = 20, command =lambda: button_click(0))

button_add = Button(root, text = "+", padx = 40, pady = 20, command = button_add)
button_clear = Button(root, text = "clear", padx = 76, pady = 20, command = button_clear)
button_equal = Button(root, text = "=", padx = 88, pady = 20, command = button_equal)
button_subtract = Button(root, text = "-", padx = 40, pady = 20, command = button_subtract)
button_mutiply = Button(root, text = "*", padx = 40, pady = 20, command = button_multiply)
button_divide = Button(root, text = "/", padx = 40, pady = 20, command = button_divide)

#arrange button on the screen
button_1.grid(row = 3, column = 0)
button_2.grid(row = 3, column = 1)
button_3.grid(row = 3, column = 2)

button_4.grid(row = 2, column = 0)
button_5.grid(row = 2, column = 1)
button_6.grid(row = 2, column = 2)

button_7.grid(row = 1, column = 0)
button_8.grid(row = 1, column = 1)
button_9.grid(row = 1, column = 2)

button_0.grid(row = 4, column = 0)
button_clear.grid(row = 4, column = 1, columnspan = 2)
button_add.grid(row = 5, column = 0)
button_equal.grid(row = 5, column = 1, columnspan = 2)
button_subtract.grid(row = 6, column = 0)
button_mutiply.grid(row = 6, column = 1)
button_divide.grid(row = 6, column = 2)

root.mainloop()

#Using Icon, Images 1:20
from tkinter import *
root = Tk()
root.title("learn to use icon")
root.iconbitmap('/Users/yi-chunwang/OneDrive - Perspectum Diagnostics Ltd/Paligo/Images/FDA.png')

button_quit = Button(root, text = "Exit Program", command=root.quit) #this will ends the program
button_quit.pack()

root.mainloop()

#Using images. tkinter only su,= sepport 2 type of images but they are old. Use Pillow instead-------------
from tkinter import *
from PIL import ImageTk, Image

root = Tk()
root.title("Adding image")
root.iconbitmap("/Users/yi-chunwang/OneDrive - Perspectum Diagnostics Ltd/Paligo/Images/FDA.png")

my_img = ImageTk.PhotoImage(Image.open("/Users/yi-chunwang/OneDrive - Perspectum Diagnostics Ltd/Employment/burger.PNG"))
my_label = Label(image = my_img)
my_label.pack()

root.mainloop()

#pip3 install is a bash command not a python command

#create a image viewer app
from tkinter import *
from PIL import ImageTk, Image

root = Tk()
root.title("Adding image")
root.iconbitmap("/Users/yi-chunwang/OneDrive - Perspectum Diagnostics Ltd/Paligo/Images/FDA.png")

my_img1 = ImageTk.PhotoImage(Image.open("/Users/yi-chunwang/OneDrive - Perspectum Diagnostics Ltd/Employment/burger.png")) #the image is too big
my_img2 = ImageTk.PhotoImage(Image.open("/Users/yi-chunwang/OneDrive - Perspectum Diagnostics Ltd/Paligo/Images/LQ_Phantom_Example.png")) 
my_img3 = ImageTk.PhotoImage(Image.open("/Users/yi-chunwang/OneDrive - Perspectum Diagnostics Ltd/Paligo/Images/Calimatrix 3 Plane Localiser Volume shim box .png"))
my_img4 = ImageTk.PhotoImage(Image.open("/Users/yi-chunwang/OneDrive - Perspectum Diagnostics Ltd/Paligo/Images/3D T1-weighted VIBE.png"))
my_img5 = ImageTk.PhotoImage(Image.open("/Users/yi-chunwang/OneDrive - Perspectum Diagnostics Ltd/Paligo/Images/3D T1 VIBE Generic.png"))

image_list = [my_img1, my_img2, my_img3, my_img4, my_img5]

my_label = Label(image = my_img1)
my_label.grid(row = 0, column =0, columnspan=3)

def forward(image_number):
    global my_label
    global forward
    global back

    my_label.grid_forget() #Before showing the next image, we need to delete the existing image 


def back():
    return


button_back = Button(root, text = "back", command = lambda:back)
button_exit = Button(root, text = "exit", command = root.quit)
button_forward = Button(root, text = "forward", command = lambda:forward(2)) #if we want to pass the number back to the defined function, use lambda

button_back.grid(row = 1, column =0)
button_exit.grid(row = 1, column =1)
button_forward.grid(row = 1, column =2)

root.mainloop()

#1:38