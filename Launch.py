#!/usr/bin/env python
from selenium import webdriver
#from tkinter import *
import os
from selenium.webdriver.common.keys import Keys
from mmap import mmap,ACCESS_READ
from xlrd import open_workbook
signal = 0
options = webdriver.ChromeOptions();
options.add_argument("--start-maximized");
chrome_path = os.path.abspath("chromedriver")
print "------chrome_path",chrome_path
driver = webdriver.Chrome(chrome_path,chrome_options = options)
print "========2"
html_path = os.path.abspath("Saved Files/master/rokad.html")
html_path = "file:///"+ html_path 
driver.get(html_path)
wb = open_workbook('Saved Files/master/master.xls')
for s in wb.sheets():
    value_cell = []
    for col in range(s.ncols):
        for row in range(s.nrows):
            value_cell.append(s.cell(row,col).value)
        driver.execute_script("return load_data(arguments[0],arguments[1])",value_cell,signal)
        signal = signal+1
print ("Launching a new Rokad")
# window = Tk()
# window.title("Rokad Panel")
# window.geometry("170x100")
# window.geometry('+1050+0')
# window.wm_attributes("-topmost", 1)
# window.wm_iconbitmap("Money-Symbol.ico")
# old_btn = Button(window,text="Open Existing Rokad")
# old_btn.place(x=10,y=5,height=20,width=150)
# new_btn = Button(window,text="Create New Rokad",command=class_object.launch_new,width = "50")
# new_btn.place(x=10,y=35,height=20,width=150)
# new_btn1 = Button(window,text="Switch Test",command=switch,width = "50")
# new_btn1.place(x=10,y=65,height=20,width=150)
# window.mainloop()
