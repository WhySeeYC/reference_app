# To work with PDF, there is also tabula and PyPDF2 librarie
import tabula
tabula.read_pdf('/Users/YC/Work_Repo/fYnanCe/ePayslip20201019.pdf', stream=True)

import PyPDF2 as p2
PDFfile = open("/Users/YC/Work_Repo/fYnanCe/ePayslip20201019.pdf", "rb")  #the rb is to allow editing mode
PDFread = p2.PdfFileReader(PDFfile)
x=PDFread.getPage(1)
data = x.extractText()
data
df= data.DataFrame(data, (7,5)) 
#because the data we have are strings, cannot be reshaped into dataframe