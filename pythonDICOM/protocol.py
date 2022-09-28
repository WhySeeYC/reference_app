
#%% [markdown]
# ## Imprtant Resources: 
# Dumps DICOM header: http://gdcm.sourceforge.net/html/gdcmdump.html\
# Dumps differences of 2 DICOM files: http://gdcm.sourceforge.net/html/gdcmdiff.html\
# Display meta info of the DICOM folder or file: http://gdcm.sourceforge.net/html/gdcminfo.html\
# python-gdcm py-PI: https://pypi.org/project/python-gdcm/\
# Read and dump dicomdir: https://github.com/malaterre/GDCM/blob/master/Examples/Python/ReadAndDumpDICOMDIR.py\
# Solving leading zero in python:  0x for hex, 0o for octal, 0b for binary. : https://stackoverflow.com/questions/63026713/leading-zeros-are-not-allowed-in-python\

#%%
# Import relevant package
# import pydicom
import gdcm



#%%
# set data source
data_dir = '/Users/yi-chunwang/Downloads'
file = 'CMO006/DATA_AN/1701/00010157'
file_name = f'{data_dir}/{file}'
# dcm = pydicom.read_file(f'{data_dir}/{file_name}')
# print(dcm)



# %%
reader = gdcm.Reader() # rememebr to initiate the class(instance and object inside)
reader.SetFileName(filename_native='/Users/yi-chunwang/Downloads/CMO006/DATA_AN/1901/00010018')
if (not reader.Read()):
    print('Unable to read %s' %(file_name))
    quit()
file1 = reader.GetFile()



# %%
# Retrived DICOM-Meta-Informaiton-Header
fileMetaInformation = file1.GetHeader()
print(fileMetaInformation)



#%% 
# Retreive data set 
dataSet = file1.GetDataSet()
print(dataSet) # print out all dicom header



# %%
# find Philip parallel imaging method
tag = gdcm.Tag(0x2005,0x140f) # note that leading zeros are not allowed. Also for tag number that does not starts with zero, add a 0x to properly match.
de = dataSet.FindDataElement(tag)
print(de)

value = str(dataSet.GetDataElement(tag).GetValue())
value



#%%
# TODO: got the chance to retrieve a bunch of value from the tag (0x2005,0x140f), but struggle to get the parallel imaging tag (0018,9078)
tag = gdcm.Tag(0x2005,0x140f) 
# for tags that indented cannot be matched, try to see if it is private tag
de = dataSet.FindDataElement(tag)
print(de)
# private tag have element value in: [0x10,0xff], for instance 0x0009,0x0000 is NOT a private tag
privateTag =gdcm.PrivateTag(0x018,0x9069, "Parallel Reduction Factor In-plane")
print(privateTag)
el1 = gdcm.DataElement( dataSet.GetDataElement( privateTag ) )
print(el1)



# %%
# Iterate through the DICOMDIR data set
iterator = dataSet.GetDES().begin()
while (not iterator.equal(dataSet.GetDES().end())):
    dataElement = iterator.next()

    # check the element tag
    if (dataElement.GetTag() == gdcm.Tag(0x018,0x9069)):


#%% [markdown]
# For Philips, the Echo time in Horos is shown as "Effective echo time" while if `gdcmdump` a dataset, the Effective Echo Time tag (0018,9082) will show each's timing, subtract one echo with the previous one will give effective echo time value as the one in Horos
# When seeing a large portion of meta data in Horos is anonymised, it can be that data had been overly anonymised, this was the case when struggling to find the Repetition time on Philips C-MORE data.


#%%
# It is good to split terminal(cmd+\) in 3 to triple check the parameter for a given protocol. Type gdcmdump itself in terminal to get options for printing more detailed function.