# consider using wxGlade: https://sourceforge.net/projects/wxglade/
import os
import wx
import pandas as pd

app = wx.App()
frame = wx.Frame(parent = None, id = wx.ID_ANY, title = 'Perspectum Publication Generator', size = (1000, 500), pos = (100, 100))
frame.CreateStatusBar(1)


# create notebook 
nb = wx.Notebook(parent = frame, id = wx.ID_ANY, name = 'Notebook')

# ---- create ImportPanel
ImportPanel = wx.Panel(parent = nb, id = wx.ID_ANY, name = 'Import Panel')

# sub1 = wx.Panel(parent = ImportPanel, id = wx.ID_ANY, name = 'Functions')
sub2 = wx.Panel(parent = ImportPanel, id = wx.ID_ANY, name = 'Status')
sub3 = wx.Panel(parent = ImportPanel, id = wx.ID_ANY, name = 'Technology')
sub4 = wx.Panel(parent = ImportPanel, id = wx.ID_ANY, name = 'Disease')

titleText = wx.StaticText(parent = ImportPanel, id = wx.ID_ANY, label = 'Start from importing')
def importFile(event):
    dirname = ''
    dlg = wx.FileDialog(ImportPanel, 'Import a file', dirname, '', '*.*', wx.FD_OPEN)
    if dlg.ShowModal() == wx.ID_OK:
        filename = dlg.GetFilename()
        dirname = dlg.GetDirectory()
        f_name = os.path.join(dirname, filename)
        global journal_df
        journal_df = pd.read_excel(f_name, sheet_name = 0, header=0)
    print('imported')
filebutton = wx.Button(parent = ImportPanel, id = wx.ID_FILE, label = 'Import Publication Tracker')
filebutton.Bind(wx.EVT_BUTTON, importFile, filebutton) 


def onUpdate(event):
        status_list = journal_df['Status'].fillna('Not specified').str.strip().str.lower().unique().tolist()
        status_rb = wx.RadioBox(sub2, label = 'Select the status:', choices = status_list , majorDimension = 1, style= wx.RA_SPECIFY_COLS)
        status_rb.Bind(event = wx.EVT_RADIOBOX, handler = None, source = status_rb)
        

        technology_list = journal_df['Technology'].fillna('Not specified').str.strip().str.lower().unique().tolist()
        technology_rb = wx.RadioBox(sub3, label = 'Select the technology:', choices = technology_list, majorDimension = 1, style = wx.RA_SPECIFY_COLS)
        technology_rb.Bind(event = wx.EVT_RADIOBOX, handler = None, source = technology_rb)
        

        disease_list = journal_df['Disease'].fillna('Not specified').str.strip().str.lower().unique().tolist()
        disease_rb = wx.RadioBox(sub4, label = 'Select the disease:', choices = disease_list , majorDimension =1,style = wx.RA_SPECIFY_COLS)
        disease_rb.Bind(event = wx.EVT_RADIOBOX, handler = None, source = disease_rb)
        

updateChoiceBtn = wx.Button(parent = ImportPanel, id = wx.ID_ANY, label = 'Update the choices')
updateChoiceBtn.Bind(wx.EVT_BUTTON, onUpdate, updateChoiceBtn)

status_rb = wx.RadioBox(sub2, label = 'Select the status:', choices = [] , majorDimension = 1, style= wx.RA_SPECIFY_COLS)

technology_rb = wx.RadioBox(sub3, label = 'Select the technology:', choices = [], majorDimension = 1, style = wx.RA_SPECIFY_COLS)

disease_rb = wx.RadioBox(sub4, label = 'Select the disease:', choices = [] , majorDimension =1,style = wx.RA_SPECIFY_COLS)



# Use sizers to layout choices
sub1_sizer = wx.BoxSizer(wx.VERTICAL)
sub1_sizer.Add(titleText, 0, wx.ALIGN_CENTER_HORIZONTAL)
sub1_sizer.Add(filebutton, 0, wx.ALIGN_CENTER_HORIZONTAL)
sub1_sizer.Add(updateChoiceBtn, 0, wx.ALIGN_CENTER_HORIZONTAL)

ImportPanel_sizer = wx.BoxSizer(wx.HORIZONTAL)
ImportPanel_sizer.Add(sub1_sizer, 1, wx.ALIGN_TOP)
ImportPanel_sizer.Add(sub2, 1, wx.ALIGN_TOP)
ImportPanel_sizer.Add(sub3, 1, wx.ALIGN_TOP)
ImportPanel_sizer.Add(sub4, 1, wx.ALIGN_TOP)

ImportPanel.SetSizer(ImportPanel_sizer)
ImportPanel.SetAutoLayout(1)
ImportPanel_sizer.Fit(ImportPanel)
ImportPanel.Show()


# ---- Create PreviewPanel
PreviewPanel = wx.Panel(parent = nb, id = wx.ID_ANY, name = 'PreviewPanel')
titleText = wx.StaticText(parent = PreviewPanel, id = wx.ID_ANY, label = 'Start from PreviewPanel')



# ---- Create Style Panel
StylePanel = wx.Panel(parent = nb, id = wx.ID_ANY, name = 'StylePanel')
titleText = wx.StaticText(parent = StylePanel, id = wx.ID_ANY, label = 'Start from style')


def styleFile(event):
    dirname = ''
    dlg = wx.FileDialog(StylePanel, 'Choose style file', dirname, '', '*.*', wx.FD_OPEN)
    if dlg.ShowModal() == wx.ID_OK:
        filename = dlg.GetFilename()
        dirname = dlg.GetDirectory()
        f_name = os.path.join(dirname, filename)
        global style_template
        style_template = Document(docx = f_name)
    print('Obtained style file')
stylebtn = wx.Button(parent = StylePanel, id = wx.ID_ANY, label = 'Select style template')
filebutton.Bind(wx.EVT_BUTTON, importFile, filebutton) 



# ----- Create Generate Panel
GeneratePanel = wx.Panel(parent = nb, id = wx.ID_ANY, name = 'GeneratePanel')
titleText = wx.StaticText(parent = GeneratePanel, id = wx.ID_ANY, label = 'Start from importing')


# add the panels into the notebook
nb.AddPage(ImportPanel, "Import")
nb.AddPage(PreviewPanel, "Preview")
nb.AddPage(StylePanel, "Style")
nb.AddPage(GeneratePanel, "Generate")

frame.Show(True)
app.MainLoop()


        


    

#     # def InitPanels(self):
#         # Panel_1 = ImportPanel(self)
#         # Panel_2 = PreviewPanel(self)
#         # Panel_3 = StylePanel(self)
#         # Panel_4 = GeneratePanel(self)

#         # # Use sizer to layout
#         # self.sizer = wx.BoxSizer(wx.HORIZONTAL)
#         # self.sizer.Add(Panel_1, 1, wx.ALIGN_TOP) # the 2nd argument is a weight factor which means that this control will be sized in proportion to other ones. 0 means that the sizer will not grow. 
#         # self.sizer.Add(Panel_2, 1, wx.ALIGN_TOP) # the wx.EXPAND means the panel will be resized when necessary.
#         # self.sizer.Add(Panel_3, 1, wx.ALIGN_TOP) # wx.ALIGN_CENTER align both vertically and horizontally
#         # self.sizer.Add(Panel_4, 1, wx.ALIGN_TOP)

#         # # Layout sizer
#         # self.SetSizer(self.sizer)
#         # self.SetAutoLayout(1)
#         # self.sizer.Fit(self)
#         # self.Show()

        



# # Add panels
# class ImportPanel(wx.Panel):
#     def __init__(self, parent):
#         super().__init__(parent = parent)

#         journal_df = None

#         titleText = wx.StaticText(parent = self, id = wx.ID_ANY, label = 'Start from importing')

#         filebutton = wx.Button(parent = self, id = wx.ID_FILE, label = 'Import Publication Tracker')
#         self.Bind(wx.EVT_BUTTON, self.importFile, filebutton)
#         updateChoiceBtn = wx.Button(parent = self, id = wx.ID_ANY, label = 'Update the choices')
#         self.Bind(wx.EVT_BUTTON, self.onUpdate, updateChoiceBtn)
#         forwardbtn = wx.Button(parent = self, id = wx.ID_FORWARD, label = 'Forward')
#         self.Bind(wx.EVT_BUTTON, self.goForward , forwardbtn)
#         backwardbtn = wx.Button(parent = self, id = wx.ID_BACKWARD, label = 'Backward')
#         self.Bind(wx.EVT_BUTTON, self.goBackward , backwardbtn)

#         self.sizer2 = wx.BoxSizer(wx.VERTICAL)
#         self.sizer2.Add(titleText, 0, wx.ALIGN_CENTER_HORIZONTAL)
#         self.sizer2.Add(filebutton, 0, wx.ALIGN_CENTER_HORIZONTAL)
#         self.sizer2.Add(updateChoiceBtn , 0, wx.ALIGN_CENTER_HORIZONTAL)
#         self.sizer2.Add(forwardbtn, 0, wx.ALIGN_CENTER_HORIZONTAL)
#         self.sizer2.Add(backwardbtn, 0, wx.ALIGN_CENTER_HORIZONTAL)


#         # Create radio button, how to use the output from method as the input for button widget
#         self.status_list = ['published', 'accepted', 'submitted'] # <------ continue to use here
#         status_rb = wx.RadioBox(self, label = 'Select the status:', choices = self.status_list , majorDimension = 1, style = wx.RA_SPECIFY_COLS)
#         # self.Bind(event = wx.EVT_RADIOBOX, handler = None, source = status_rb)

#         # technology radio box
#         self.technology_list = ['lms', 'hepatica', 'mrcp+', 'atlas', 'digipath', 'mrcp+, lms'] 
#         technology_rb = wx.RadioBox(self, label = 'Select the technology:', choices = self.technology_list , majorDimension = 1, style = wx.RA_SPECIFY_COLS)
#         self.Bind(event = wx.EVT_RADIOBOX, handler = None, source = technology_rb)
        
#         # disease radio box
#         self.disease_list = ['cld', 'nafld', 't2d', 'population', 'nash'] 
#         disease_rb = wx.RadioBox(self, label = 'Select the disease:', choices = self.disease_list , majorDimension = 1, style = wx.RA_SPECIFY_COLS)
#         self.Bind(event = wx.EVT_RADIOBOX, handler = None, source = disease_rb)


#         # Use sizer to layout
#         self.sizer = wx.BoxSizer(wx.HORIZONTAL)
#         self.sizer.Add(self.sizer2, 1, wx.ALIGN_TOP) # the 2nd argument is a weight factor which means that this control will be sized in proportion to other ones. 0 means that the sizer will not grow. 
#         self.sizer.Add(status_rb, 1, wx.ALIGN_TOP) # the wx.EXPAND means the panel will be resized when necessary.
#         self.sizer.Add(technology_rb, 1, wx.ALIGN_TOP) # wx.ALIGN_CENTER align both vertically and horizontally
#         self.sizer.Add(disease_rb, 1, wx.ALIGN_TOP)

#         # Layout sizer
#         self.SetSizer(self.sizer)
#         self.SetAutoLayout(1)
#         self.sizer.Fit(self)
#         self.Show()


#     def onUpdate(self, event): # FIXME: update at the right place
#         self.status_list = journal_df['Status'].fillna('Not specified').str.strip().str.lower().unique().tolist()
#         status_rb = wx.RadioBox(self, label = 'Select the status:', choices = self.status_list , majorDimension = 1,style= wx.RA_SPECIFY_COLS)
#         self.Bind(event = wx.EVT_RADIOBOX, handler = None, source = status_rb)
#         self.technology_list = journal_df['Technology'].fillna('Not specified').str.strip().str.lower().unique().tolist()
#         technology_rb = wx.RadioBox(self, label = 'Select the technology:', choices = self.technology_list, majorDimension = 1, style = wx.RA_SPECIFY_COLS)
#         self.Bind(event = wx.EVT_RADIOBOX, handler = None, source = technology_rb)
#         self.disease_list = journal_df['Disease'].fillna('Not specified').str.strip().str.lower().unique().tolist()
#         disease_rb = wx.RadioBox(self, label = 'Select the disease:', choices = self.disease_list , majorDimension =1,style = wx.RA_SPECIFY_COLS)
#         self.Bind(event = wx.EVT_RADIOBOX, handler = None, source = disease_rb)
        
#         # Use sizer to layout
#         self.sizer = wx.BoxSizer(wx.HORIZONTAL)
#         self.sizer.Add(status_rb, 1, wx.ALIGN_TOP) # the wx.EXPAND means the panel will be resized when necessary.
#         self.sizer.Add(technology_rb, 1, wx.ALIGN_TOP) # wx.ALIGN_CENTER align both vertically and horizontally
#         self.sizer.Add(disease_rb, 1, wx.ALIGN_TOP)

#         # Layout sizer
#         self.SetSizer(self.sizer)
#         self.SetAutoLayout(1)
#         self.sizer.Fit(self)
#         self.Show()
            
                
    
#     def goForward(self, event):
#         self.GetParent().GetParent().SetStatusText('Go forward')
#         pass

#     def goBackward(self, event):
#         self.GetParent().GetParent().SetStatusText('Go backward')
#         pass
    
    
#     def None(self, event):
#         # self.logger.AppendText('None: %d\n' % event.GetInt())
#         pass

#     #TODO: 15 Oct: continue with Adding a few more controls in docs: https://wiki.wxpython.org/Getting%20Started     




# class PreviewPanel(wx.Panel):
#     def __init__(self, parent):
#         super().__init__(parent = parent)
#         titleText = wx.StaticText(parent = self, id = wx.ID_ANY, label = 'Preview Studies', pos = (10, 10)) 

# class StylePanel(wx.Panel):
#     def __init__(self, parent):
#         super().__init__(parent = parent)
#         titleText = wx.StaticText(parent = self, id = wx.ID_ANY, label = 'Select a template for styling', pos = (10, 10)) 
#         styleFile = wx.Button(parent = self, id = wx.ID_FILE, label = 'Import style file', pos = (10, 30))
#         # self.Bind(wx.EVT_BUTTON, self.OnOpen, styleFile)
#         # self.addNameDate = wx.TextCtrl(StylePanel, id = wx.ID_ANY, size = (300, 200), pos = (10, 50))



# class GeneratePanel(wx.Panel):
#     def __init__(self, parent):
#         super().__init__(parent = parent)
#         GeneratePanel = wx.Panel(parent = self)
#         titleText = wx.StaticText(parent = self, id = wx.ID_ANY, label = 'Generating output file', pos = (10, 10)) # ID_ANY means that we don't care about the id    
        

# if __name__ == "__main__":
#     app = MyApp()
#     app.MainLoop()

