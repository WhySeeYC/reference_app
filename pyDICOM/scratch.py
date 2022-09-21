
import pydicom

data_dir = '/Users/yi-chunwang/Downloads/TD127_K/6638740/3001'

file_name = '00570001'

dcm = pydicom.read_file(f'{data_dir}/{file_name}')

print(dcm)

"""
Imprtant Resources: 

Dumps DICOM header: http://gdcm.sourceforge.net/html/gdcmdump.html
Dumps differences of 2 DICOM files: http://gdcm.sourceforge.net/html/gdcmdiff.html
Display meta info of the DICOM folder or file: http://gdcm.sourceforge.net/html/gdcminfo.html


"""