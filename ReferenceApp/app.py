# consider using wxGlade: https://sourceforge.net/projects/wxglade/
import os
import wx
import pandas as pd


class MyApp(wx.App):
    def __init__(self):
        super().__init__(clearSigInt = True)
        self.InitFrame() # initiate a frame

    def InitFrame(self):
        frame = MyFrame(parent=None, title = 'Perspectum Publication Generator', size = (200, 100), pos = (100, 100))
        frame.Show()
        


class MyFrame(wx.Frame):
    def __init__(self, parent, title, size, pos):
        super().__init__(parent = parent, title = title, size = size, pos = pos)
        self.CreateStatusBar() # add statusbuar in the bottom of the window
    
        
        # setting up the menu
        filemenu = wx.Menu()

        # wx.ID_ABOUT and wx.ID_EXT are standard IDs provided by wxWidgets
        menuAbout = filemenu.Append(wx.ID_ABOUT, '&About', 'This app is designed to support Perspectum Publication List generation. Click to read the description.')
        menuExit = filemenu.Append(wx.ID_EXIT, 'E&xit', 'Terminate the programme')
        menuFile = filemenu.Append(wx.ID_OPEN, 'Open file', 'Import the input file')


        # Creating the menubar
        menuBar = wx.MenuBar()
        menuBar.Append(filemenu, '&File') # adding the "filemenu" to the menuBar
        self.SetMenuBar(menuBar) # adding the MenuBar to the Frame content

        # set events
        self.Bind(wx.EVT_MENU, self.OnAbout, menuAbout) # call OnAbout class method
        self.Bind(wx.EVT_MENU, self.OnExit, menuExit) # call OnExit class method
        self.Bind(wx.EVT_MENU, self.OnOpen, menuFile) # call OnExit class method


        # Add panels
        ImportPanel = wx.Panel(parent = self)
        self.titleText = wx.StaticText(parent = ImportPanel, id = wx.ID_ANY, label = 'Start from importing', pos = (10, 10)) # ID_ANY means that we don't care about the id    

        
        PreviewPanel = wx.Panel(parent = self)
        self.titleText = wx.StaticText(parent = PreviewPanel, id = wx.ID_ANY, label = 'Preview Studies', pos = (10, 10)) # ID_ANY means that we don't care about the id    

        
        StylePanel = wx.Panel(parent = self)
        self.titleText = wx.StaticText(parent = StylePanel, id = wx.ID_ANY, label = 'Select a template for styling', pos = (10, 10)) # ID_ANY means that we don't care about the id    



        GeneratePanel = wx.Panel(parent = self)
        self.titleText = wx.StaticText(parent = GeneratePanel, id = wx.ID_ANY, label = 'Generating output file', pos = (10, 10)) # ID_ANY means that we don't care about the id    
        

        # Use sizer to layout
        self.sizer = wx.BoxSizer(wx.HORIZONTAL)
        self.sizer.Add(ImportPanel, 1, wx.ALIGN_CENTER) # the 2nd argument is a weight factor which means that this control will be sized in proportion to other ones. 0 means that the sizer will not grow. 
        self.sizer.Add(PreviewPanel, 1, wx.ALIGN_CENTER) # the wx.EXPAND means the panel will be resized when necessary.
        self.sizer.Add(StylePanel, 1, wx.ALIGN_CENTER) # wx.ALIGN_CENTER align both vertically and horizontally
        self.sizer.Add(GeneratePanel, 1, wx.ALIGN_CENTER)

        # Layout sizer
        self.SetSizer(self.sizer)
        self.SetAutoLayout(1)
        self.sizer.Fit(self)
        self.Show()

        
#TODO: 10 Oct: continuw with  Validators in docs: https://wiki.wxpython.org/Getting%20Started

    def OnAbout(self, event):
        dlg = wx.MessageDialog(self, 
                                'This app is designed to support Perspectum Publication List generation. An overview of the workflow will be to import the "Publication Tracker" which includes the summary for each study. Then select the output style template (which is a .docx file).  Finally, the output is written into a Word document for final editing. Please feel free to contact the designer of this app for help.', 
                                'Publication List Generator', 
                                wx.OK)
        dlg.ShowModal() # show the dialogue box
        dlg.Destroy() # destroy the dialogue box when finished.

    def OnExit(self, event):
        self.Close(True) # close the frame

    
    def OnOpen(self, event):
        """open a file"""
        self.dirname = ''
        dlg = wx.FileDialog(self, 'Import a file', self.dirname, '', '*.*', wx.FD_OPEN)
        if dlg.ShowModal() == wx.ID_OK: # "Modal" means that the user cannot do anything on the application until he clicks OK or Cancel.
            self.filename = dlg.GetFilename()
            self.dirname = dlg.GetDirectory()
            f = open(os.path.join(self.dirname, self.filename), 'r')
            self.controlSetValue(f.read())
            f.close()
        dlg.Destroy()



if __name__ == "__main__":
    app = MyApp()
    app.MainLoop()

