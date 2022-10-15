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
        self.CreateStatusBar(1) # add statusbuar in the bottom of the window, the (1) means we only giving one statusbar item
        self.InitPanels()
    
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
    

    def InitPanels(self):
        Panel_1 = ImportPanel(self)
        Panel_2 = PreviewPanel(self)
        Panel_3 = StylePanel(self)
        Panel_4 = GeneratePanel(self)

        # Use sizer to layout
        self.sizer = wx.BoxSizer(wx.HORIZONTAL)
        self.sizer.Add(Panel_1, 1, wx.ALIGN_TOP) # the 2nd argument is a weight factor which means that this control will be sized in proportion to other ones. 0 means that the sizer will not grow. 
        self.sizer.Add(Panel_2, 1, wx.ALIGN_TOP) # the wx.EXPAND means the panel will be resized when necessary.
        self.sizer.Add(Panel_3, 1, wx.ALIGN_TOP) # wx.ALIGN_CENTER align both vertically and horizontally
        self.sizer.Add(Panel_4, 1, wx.ALIGN_TOP)

        # Layout sizer
        self.SetSizer(self.sizer)
        self.SetAutoLayout(1)
        self.sizer.Fit(self)
        self.Show()

        


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
            self.control.SetValue(f.read())
            f.close()
        dlg.Destroy()



# Add panels
class ImportPanel(wx.Panel):
    def __init__(self, parent):
        super().__init__(parent = parent)
        titleText = wx.StaticText(parent = self, id = wx.ID_ANY, label = 'Start from importing', pos = (10, 10)) # ID_ANY means that we don't care about the id 
        filebutton = wx.Button(parent = self, id = wx.ID_FILE, label = 'Import Publication Tracker', pos = (10, 30))
        self.Bind(wx.EVT_BUTTON, self.importFile, filebutton)

        self.logger = wx.TextCtrl(self, pos = (10, 40), size = (200, 300), style = wx.TE_MULTILINE | wx.TE_READONLY)

        # Create radio button
        self.status_list = [ ] # ------> continue to use here
        # TODO: how to use the output from method as the input for button widget
        status_rb = wx.RadioBox(self, label = 'select the status of the study to include in the output.', pos = (10, 70), choices = self.status_list , majorDimension = 3, style = wx.RA_SPECIFY_COLS)
        self.Bind(event = wx.EVT_RADIOBOX, handler = self.EvtRadioBox, source = status_rb)


    def importFile(self, event):
        self.dirname = ''
        dlg = wx.FileDialog(self, 'Import a file', self.dirname, '', '*.*', wx.FD_OPEN)
        if dlg.ShowModal() == wx.ID_OK: # "Modal" means that the user cannot do anything on the application until he clicks OK or Cancel.
            self.filename = dlg.GetFilename()
            self.dirname = dlg.GetDirectory()
            f_name = os.path.join(self.dirname, self.filename)
            journal_df = pd.read_excel(f_name, sheet_name = 0, header=0)
            # print(journal_df.head())
            self.GetParent().SetStatusText('File imported') # the status bar is only at frame level so Get.Parent() will go up 1 level
            self.status_list = journal_df['Status'].str.strip().str.lower().unique().tolist()
            return self.status_list #  <------ use the output from this list 
        
             
    
    def EvtRadioBox(self, event):
        self.logger.AppendText('EvtRadioBox: %d\n' % event.GetInt())

    #TODO: 11 Oct: continuw with Adding a few more controls in docs: https://wiki.wxpython.org/Getting%20Started     




class PreviewPanel(wx.Panel):
    def __init__(self, parent):
        super().__init__(parent = parent)
        titleText = wx.StaticText(parent = self, id = wx.ID_ANY, label = 'Preview Studies', pos = (10, 10)) # ID_ANY means that we don't care about the id    


class StylePanel(wx.Panel):
    def __init__(self, parent):
        super().__init__(parent = parent)
        titleText = wx.StaticText(parent = self, id = wx.ID_ANY, label = 'Select a template for styling', pos = (10, 10)) # ID_ANY means that we don't care about the id
        styleFile = wx.Button(parent = self, id = wx.ID_FILE, label = 'Import Publication Trkcker', pos = (10, 30))
        # self.Bind(wx.EVT_BUTTON, self.OnOpen, styleFile)
        # self.addNameDate = wx.TextCtrl(StylePanel, id = wx.ID_ANY, size = (300, 200), pos = (10, 50))



class GeneratePanel(wx.Panel):
    def __init__(self, parent):
        super().__init__(parent = parent)
        GeneratePanel = wx.Panel(parent = self)
        titleText = wx.StaticText(parent = self, id = wx.ID_ANY, label = 'Generating output file', pos = (10, 10)) # ID_ANY means that we don't care about the id    
        

if __name__ == "__main__":
    app = MyApp()
    app.MainLoop()

