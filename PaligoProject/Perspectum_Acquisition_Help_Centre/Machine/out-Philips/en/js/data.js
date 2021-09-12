store['en'] = {};


        $(document).ready(function () {
        
            
            indexDict['en']  = lunr(function () {

            

                this.field('title', {boost: 10});
                this.field('body');
                this.ref('id');
            

        
this.add({id:1, 
title:"LMS Patient Acquisition Manual for Philips Scanners", 
body:" lms patient acquisition manual philips scanners download pdf 2020 perspectum. all rights reserved. no publication reproduced, transmitted, transcribed, stored retrieval translated any language language, form means, electronic, mechanical, magnetic, optical, chemical, manual otherwise, prior written permission perspectum. logos products mentioned registered trademarks copyrights perspectum, and are used informational purposes only. use limitation this manual intended used reference guide acquisition images using philips 1.5t 3t mri with cardiacquant . perspectum shall held liable improper installation, operation, maintenance circumstances procedures specifications set manual followed correctly. it essential therefore, follow specifications, procedures, recommendations outlined manual. disclaimer except required law, perspectum makes representations warranties, expressed implied, with respect contents hereof. every effort ensure reliability accuracy information contained manual time going print.  however, specifications procedures subject change constant endeavours meet customer requirements, maintain research development process continuous improvement products. consequently, reserves right make changes any notice.  you check first sure version referring latest version. unauthorised use means user assumes liability use. to maximum extent permitted event shall liable damages for, limitation, loss profits, business, revenue, use, time, data, reputation, opportunity, goodwill, savings, inconvenience, incidental, indirect consequential damages, arising failure strictly prescribed herein. " });
this.add({id:2, 
title:"Glossary", 
body:" glossary term description a-p anterior-posterior arrt the american registry radiologic technologists b0 main magnetic field ce continuing education dicom digital imaging and communications in medicine dob date of birth ecg electrocardiogram f-h feet-head ffe fast field echo gre gradient recalled echo ideal iterative decomposition water fat with echo asymmetry least-squares estimation id identifier lms livermultiscan lsn liver surface nodularity molli modified look locker inversion recovery most magnitude only thin-slice t2* mre magnetic resonance elastography mri magnetic resonance imaging mr magnetic resonance nolli non-molli t1 mapping pacs picture archiving communication system pg peripheral gating pii personally identifiable information ppu peripheral pulse unit r-l right-left rf radio frequency ris radiology information system s-i superior-inferior sar specific absorption rate snr signal-to-noise ratio ssfp steady state free precession wip work in progress db\/dt time varying gradient tantanh tangent hyperbolic " });
this.add({id:3, 
title:"Introduction", 
body:" introduction " });
this.add({id:4, 
title:"Scope", 
body:" scope this manual intended describe correct procedure perform perspectum set protocol mr operator philips scanners. please use document reference guide performing protocol acquisitions. the manual divided main sections: preparation, acquisition data export. " });
this.add({id:5, 
title:"Continuing Education", 
body:" continuing education in territories, usa, training eligible continuing education ( ce ) credit. the ce sponsored by perspectum and will presented member imaging applications team. the presenter’s name, date, and attendees written staff training checklist time training; form kept in perspectum’s records site training activities electronic copy sent site.   in order qualify ce ,  document,  multiparametric liver mri applications training – mra1157, provided with training. this document includes post-activity evaluations completed award credit. " });
this.add({id:6, 
title:"Compatibility and Requirements", 
body:" compatibility requirements all sequences described manual require scanner hardware software compliant with manufacturer’s specifications, especially gradient performance, eddy current compensation, magnetic field ( b0 ) homogeneity stability.  the protocols utilized scanners outside manufacturer’s service specifications calibration schedules.  do use phased-array coils with failed elements snr checks passed. " });
this.add({id:7, 
title:"T2* and Proton Density Fat Fraction Mapping Requirement", 
body:" t 2 * proton density fat fraction mapping requirement the multi-echo gradient-echo package available. this offered product philips scanners need additional license. " });
this.add({id:8, 
title:"T1 Mapping Requirement", 
body:" t1 mapping requirement t1 mapping protocols require manufacturer's clinically approved software product cardiacquant . " });
this.add({id:9, 
title:"Preparation", 
body:" preparation " });
this.add({id:10, 
title:"Patient Registration", 
body:" patient registration ensure subject registered new mr study. the minimum required information registering patient follows: registration id : <use agreed subject id naming scheme> patient name: <use agreed subject naming scheme> date birth ( dob ): <use agreed dob scheme> study comments: operator <operator initials> (example: ab) the patient's height (when available), weight sex subject naming scheme :  if scan performed research study clinical trial, ensure personally identifiable information ( pii ) entered. the study provided a patient id unique subject. if local rules prohibit scanning real name, registration populated ris , scanning remove pii dicom files send to perspectum. the data export section patient de-identification manual instructions.  if scan performed clinical aid diagnosis, pii acceptable patient registration. date birth ( dob ) scheme:  if pii allowed, patient's date birth dob used.  otherwise, use 01-jan, correct year birth. please note mri technician\/radiographer performs patient acquisition undergone training either: (a) authorised perspectum imaging applications specialists (b) previously trained site personnel authorised perform internal training a record internal training must be provided to perspectum with appropriate imaging staff training checklist. " });
this.add({id:11, 
title:"Breath-hold Instructions", 
body:" breath-hold instructions breath-holding explained practised required variations depth subject’s breathing markedly alter image quality consistency abdomen position acquisitions. end-expiration breath-hold chosen repeatable process. this patient: 'the scans better hold breath comfortably.' the following instructions given patient ahead scan:  breathe in.  breathe out. stop hold breath there. breathe away resume breathing (after data acquired). " });
this.add({id:12, 
title:"Patient preparation", 
body:" patient preparation lms requires end-expiration breath-hold and requires phased-array receiver coils. lms requires cardiac gating, end-expiration breath-hold phased-array receiver coils. please prepare patient following steps: explain demonstrate breath-hold instructions above. position patient supine position. set cardiac trace input (gating simulator) check signal clear r-wave triggering. select correct trigger source gating window. patient arms positioned sides, head acceptable subject does easily fit bore. use spine array torso\/body phased-array coil. scanner laser landmarked the xiphisternum of patient. " });
this.add({id:13, 
title:"Cardiac Trace Input", 
body:" cardiac trace input some pulse sequences require cardiac triggering\/gating. this input patient trace simulator. both methods outlined below. " });
this.add({id:14, 
title:"Cardiac Trace Simulator", 
body:" cardiac trace simulator this feature available access gyrotest, mrservice mrresearch account possible. right click protocol window select <control parameter editor>. under <general tab> select <yes> <physiology simulation>. set number rr intervals 1 . set first rr interval 1000 . click <apply>. under <patient information> tag enter 60 <entered heartrate>. the simulated heartbeat highlighted with red box. " });
this.add({id:15, 
title:"Cardiac Gating", 
body:" cardiac gating use ecg pulse oximeter set patient's cardiac gating. select correct trigger source gating window (physiology monitoring window) confirm signal clear r-wave. after regular heartbeat picked ecg leads pulse oximeter, double click second number right automatically update current heart rate. in case figure 2 , current heart rate 60, expected 65. update expected heart rate. 65 rate set radiographer 60 actual patient detected scanner. it important maintain expected heart rate higher than real account fluctuations. " });
this.add({id:16, 
title:"Cardiac Trace Simulator", 
body:" cardiac trace simulator this feature available access gyrotest, mrservice mrresearch account possible. right click protocol window select <control parameter editor>. under <general tab> select <yes> <physiology simulation>. set number rr intervals 1 . set first rr interval 1000 . click <apply>. under <patient information> tag enter 60 <entered heartrate>. the simulated heartbeat highlighted with red box. " });
this.add({id:17, 
title:"Cardiac Gating", 
body:" cardiac gating use ecg pulse oximeter set patient's cardiac gating. select correct trigger source gating window (physiology monitoring window) confirm signal clear r-wave. after regular heartbeat picked ecg leads pulse oximeter, double click second number right automatically update current heart rate. in case figure 4 , current heart rate 60, expected 65. update expected heart rate. 65 rate set radiographer 60 actual patient detected scanner. it important maintain expected heart rate higher than real account fluctuations. " });
this.add({id:18, 
title:"Acquisition", 
body:" acquisition please note that: all protocols acquired before any contrast agent injection. note contrast agents necessary any the acquisitions. all scans performed end-expiration breath-hold, including survey scan. protocol parameters changed. any changes specifically covered instructions risk corrupting resultant cause data rejection perspectum ltd. please not inject any contrast agent prior acquisition lms protocol. this result erroneous parameter quantification. " });
this.add({id:19, 
title:"Localization Protocols", 
body:" localization protocols " });
this.add({id:20, 
title:"Three-plane Survey", 
body:" three-plane survey a three-plane survey run end-expiration breath-hold produce sagittal, coronal transversal view abdomen. check the phased-array coil positioned good snr entire liver. reposition coil patient necessary. low image snr adversely impacts quality resulting parameter estimates. " });
this.add({id:21, 
title:"Additional Localizers (optional)", 
body:" additional localizers (optional) additional localizers may be run acquire axial\/transversal slices to right view subsequent lms slice positioning. " });
this.add({id:22, 
title:"Liver LMS Imaging Location", 
body:" liver lms imaging location " });
this.add({id:23, 
title:"Base Slice Positioning", 
body:" base slice positioning this slice location used the centre majority sequences. hence it is imperative to position correctly. the base positioned intersects porta hepatis, display liver, spleen, contain stomach.  if lungs visible transverse slice, shift image lower patient’s abdomen cause susceptibility artefacts. please refer localizer images in figure 5 positioning transverse slice. three-plane survey view abdomen coronal, sagittal, transversal (axial) plane. the base slice location lms protocol indicated orange shim volume red. " });
this.add({id:24, 
title:"Shimming", 
body:" shimming the shim volume should centred shown in  figure 5 . the f-h direction should cover entire stack of slices remained protocol. in r-l a-p directions, the shim volume adapted until the liver is fully covered, excluding air possible. please exclude subcutaneous fat obese patients. shim adjustments than described manual corrupt parameter mapping. susceptibility artefacts magnetic susceptibility artefacts appear to: poor shim, proximity lungs, bowel gas metallic implants. susceptibility liver preclude accurate parameter estimation areas affected shown figure 6 . susceptibility artefacts appear dark, distorted areas, lms molli banding artefact. to mitigate susceptibility artefacts: 1. ensure centre multi-slice at isocentre and make sure the  shim volume positioned shown in  figure 5 .   2. force re-shim by : postproc tab > set preparation phases method “full” > run the sequence again. 3. re-acquire data. " });
this.add({id:25, 
title:"Liver LMS IDEAL", 
body:" liver lms ideal this 5-slice multi-echo sequence performed end-expiration breath-hold. the breath-hold lasts approximately 9 seconds. used generate pdff map liver. 1. prescribe slice stack so 3rd (middle slice) intersects porta hepatis. 2. the shim volume centered slice stack r-l a-p directions adapted ensure entire abdomen included transverse view liver spleen completely covered shown figure 5 . 3. the (f>>h) shim volume thickness manually adjusted '90mm'. " });
this.add({id:26, 
title:"Liver LMS MOST", 
body:" liver lms most this is a single -slice multi-echo gradient-echo sequence performed end-expiration breath-hold. the breath-hold lasts approximately 11 seconds. this sequence used generate t2* map liver. set centre slice shim volume identical lms ideal (same geo name). make sure shim volume thickness 20mm. repositioning adjust required. give breathing instruction, \" breath \", \" breath \", \" hold breath \" run sequence. once acquisition complete, tell patient \" resume breathing \" " });
this.add({id:27, 
title:"Liver LMS T2STAR DIXON", 
body:" liver lms t2star dixon this is a single-slice multi-echo gradient-echo sequence performed end-expiration breath-hold. the breath-hold lasts approximately 10 seconds. this sequence used generate t2* map liver. 1. set centre slice shim volume identical lms most (same geo name). " });
this.add({id:28, 
title:"Liver LMS MOLLI", 
body:" liver lms molli this multi-slice, multi-breath-hold, cardiac-gated acquisition performed end-expiration breath-hold. scan acquires 5 transverse slices, slice each breath-hold lasts approximately 9-12 seconds. sequence used generate t1 map liver. after slice acquired operator prompted breathing instruction the next slice. during scan, imperative monitor physiological recording trace check heartbeats missed system’s triggering algorithm. 1. set lms molli slice centre lms ideal ensuring geo name. 2. the slice stack and shim volume should positioned shown figure 5 . " });
this.add({id:29, 
title:"Data export", 
body:" data export if patient registration contains personally identifiable information ( pii ), refer patient de-identification manual help removing pii preserving private dicom tags necessary describing image acquisition. private dicom tags special added manufacturer describe mri sequence. they not refer private information, pii. many anonymization tools option remove tags. do tags exporting data. private dicom tags preserved any data export. private pii tags. removed scan research purposes. these instructions cover exporting data scanner transfer. if site unable export directly transfers pacs use pacs export save dicom images. it preferable compress folder exported dicoms submit single compressed file portal. on windows : right click folder windows explorer select <send to> <compress (zipped) folder>.  if resides cd dvd, need copy location saved to. on mac : hold ctrl click folder, select <compress>. upload compressed file portal. for additional instruction using portal, see qas portal customer instruction - pdm077 website. " });
this.add({id:30, 
title:"Saving DICOM Images for Transfer", 
body:" saving dicom images transfer to export data philips mri scanner directly, <patient> menu pick <administration> open patient administrator. click administration patients tab export data. the source database device chosen top-left corner. default <local patient database>. select data want export. exporting data cd dvd: please select dvd destination patient administration window. exporting data specific location file with usb stick external hard drive: please export data following steps: in <patient administration> select appropriate subject folder. click <disk files> icon open <export pop-up window. browse destination. this external usb stick hard drive. select format <classic dicom >. confirm with proceed. do not select <suppress patient data> <anonymize>. to check status data transfer, select <queue manager> <system> main menu <patient administration> window. data export options. " });
this.add({id:31, 
title:"Acquisition Checklist", 
body:" acquisition checklist step task patient information patient name: use agreed patient naming scheme registration id: use agreed patient id naming scheme date birth: use agreed scheme correct sex, height, weight exam date study comments: input initial operator. patient position: select appropriate position. leave rest fields empty. localiser (one breath-hold) run localiser expiration lms ideal (one breath-hold) place slice stack (5 slices) so middle (third slice) intersect porta hepatis. position shim volume centred slice stack. adjust shim volume r-l a-p directions patient's dimensions so abdomen included transverse view. scan sequence end expiration. check image quality, motion artefacts re-acquire sequence. lms most (one breath-hold) position single with centre lms ideal, intersecting porta hepatis. position shim volume centred slice ; shim volume thicker than slice . adjust shim volume r-l a-p direction patient's dimensions so abdomen included transverse view. scan sequence end expiration. check image quality, motion artefacts re-acquire sequence. lms t2star dixon (one breath-hold) position slice with centre lms most, intersecting porta hepatis. position shim volume centred slice. thicker than slice thickness. adjust shim volume r-l a-p direction patient's dimensions so abdomen included transverse view. scan sequence end expiration. check image quality, motion artefacts re-acquire sequence. lms molli (5 breath-holds) position slice stack with centre lms ideal. make sure shim volume centred slice stack adjust shim volume r-l a-p direction so abdomen included transverse view. exclude subcutaneous fat possible. check image quality slice; artefacts? if so, re-acquire sequence. " });
this.add({id:32, 
title:"Issue Control", 
body:" issue control issue details date initial 4.0 conversion paligo; sign-off april 2019 fsn 5.0 updated acquisition sequences added cardiac trace simulator july 2020 fsn " });
this.add({id:33, 
title:"Approvals", 
body:" approvals head imaging solutions dr. alex smith head imaging applications andrea borghetto " });
this.add({id:34, 
title:"Hepatica MD Patient Acquisition Manual for Philips Scanners", 
body:" hepatica md patient acquisition manual philips scanners download pdf 2020 perspectum. all rights reserved. no publication reproduced, transmitted, transcribed, stored retrieval translated any language language, form means, electronic, mechanical, magnetic, optical, chemical, manual otherwise, prior written permission perspectum. logos products mentioned registered trademarks copyrights perspectum, and are used informational purposes only. use limitation this manual intended used reference guide acquisition images using philips 1.5t 3t mri with cardiacquant . perspectum shall held liable improper installation, operation, maintenance circumstances procedures specifications set manual followed correctly. it essential therefore, follow specifications, procedures, recommendations outlined manual. disclaimer except required law, perspectum makes representations warranties, expressed implied, with respect contents hereof. every effort ensure reliability accuracy information contained manual time going print.  however, specifications procedures subject change constant endeavours meet customer requirements, maintain research development process continuous improvement products. consequently, reserves right make changes any notice.  you check first sure version referring latest version. unauthorised use means user assumes liability use. to maximum extent permitted event shall liable damages for, limitation, loss profits, business, revenue, use, time, data, reputation, opportunity, goodwill, savings, inconvenience, incidental, indirect consequential damages, arising failure strictly prescribed herein. " });
this.add({id:35, 
title:"Glossary", 
body:" glossary term description a-p anterior-posterior arrt the american registry radiologic technologists b0 main magnetic field ce continuing education clear constant level appearance dicom digital imaging and communications in medicine dob date of birth ecg electrocardiogram f-h feet-head ffe fast field echo gre gradient recalled echo ideal iterative decomposition water fat with echo asymmetry least-squares estimation id identifier lms livermultiscan molli modified look locker inversion recovery most magnitude only thin-slice t2* mr magnetic resonance mri magnetic resonance imaging pacs picture archiving communication system pg peripheral gating pii personally identifiable information ppu peripheral pulse unit r-l right-left rf radio frequency ris radiology information system s-i superior-inferior sar specific absorption rate snr signal-to-noise ratio ssfp steady state free precession shmolli shortened-modified look locker inversion recovery thrive t1-weighted highresolution isotropic volume examination db\/dt time varying gradient " });
this.add({id:36, 
title:"Introduction", 
body:" introduction " });
this.add({id:37, 
title:"Scope", 
body:" scope this manual intended describe correct procedure perform perspectum set protocol mr operator philips scanners. please use document reference guide performing protocol acquisitions. the manual divided main sections: preparation, acquisition data export. " });
this.add({id:38, 
title:"Continuing Education", 
body:" continuing education in territories, usa, training eligible continuing education ( ce ) credit. the ce sponsored by perspectum and will presented member imaging applications team. the presenter’s name, date, and attendees written staff training checklist time training; form kept in perspectum’s records site training activities electronic copy sent site.   in order qualify ce ,  document,  multiparametric liver mri applications training – mra1157, provided with training. this document includes post-activity evaluations completed award credit. " });
this.add({id:39, 
title:"Compatibility and Requirements", 
body:" compatibility requirements all sequences described manual require scanner hardware software compliant with manufacturer’s specifications, especially gradient performance, eddy current compensation, magnetic field ( b0 ) homogeneity stability.  the protocols utilized scanners outside manufacturer’s service specifications calibration schedules.  do use phased-array coils with failed elements snr checks passed. " });
this.add({id:40, 
title:"Volume requirement", 
body:" volume requirement the 3d t1 thrive sequences available. this allow three-dimensional spoiled gradient echo pulse sequence. a multi-echo variant sequence with water-fat separation 3d t1 mdixon thrive  is preferred. the latter allows acquiring in-phase out-of-phase images single acquisition, calculate water-only fat-only images. " });
this.add({id:41, 
title:"T1 Mapping Requirement", 
body:" t1 mapping requirement t1 mapping protocols require manufacturer's clinically approved software product cardiacquant . " });
this.add({id:42, 
title:"T2* and Proton Density Fat Fraction Mapping Requirement", 
body:" t 2 * proton density fat fraction mapping requirement the multi-echo gradient-echo package available. this offered product philips scanners need additional license. " });
this.add({id:43, 
title:"References", 
body:" references hepatica supported mr systems – pdm0384 image acquisition protocols - mra0671 " });
this.add({id:44, 
title:"Preparation", 
body:" preparation " });
this.add({id:45, 
title:"Patient Registration", 
body:" patient registration ensure subject registered new mr study. the minimum required information registering patient follows: registration id : <use agreed subject id naming scheme> patient name: <use agreed subject naming scheme> date birth ( dob ): <use agreed dob scheme> study comments: operator <operator initials> (example: ab) the patient's height (when available), weight sex subject naming scheme :  if scan performed research study clinical trial, ensure personally identifiable information ( pii ) entered. the study provided a patient id unique subject. if local rules prohibit scanning real name, registration populated ris , scanning remove pii dicom files send to perspectum. the data export section patient de-identification manual instructions.  if scan performed clinical aid diagnosis, pii acceptable patient registration. date birth ( dob ) scheme:  if pii allowed, patient's date birth dob used.  otherwise, use 01-jan, correct year birth. please note mri technician\/radiographer performs patient acquisition undergone training either: (a) authorised perspectum imaging applications specialists (b) previously trained site personnel authorised perform internal training a record internal training must be provided to perspectum with appropriate imaging staff training checklist. " });
this.add({id:46, 
title:"Breath-hold Instructions", 
body:" breath-hold instructions breath-holding explained practised required variations depth subject’s breathing markedly alter image quality consistency abdomen position acquisitions. end-expiration breath-hold chosen repeatable process. this patient: 'the scans better hold breath comfortably.' the following instructions given patient ahead scan:  breathe in.  breathe out. stop hold breath there. breathe away resume breathing (after data acquired). " });
this.add({id:47, 
title:"Patient preparation", 
body:" patient preparation lms requires end-expiration breath-hold and requires phased-array receiver coils. lms requires cardiac gating, end-expiration breath-hold phased-array receiver coils. please prepare patient following steps: explain demonstrate breath-hold instructions above. position patient supine position. set cardiac trace input (gating simulator) check signal clear r-wave triggering. select correct trigger source gating window. patient arms positioned sides, head acceptable subject does easily fit bore. use spine array torso\/body phased-array coil. scanner laser landmarked the xiphisternum of patient. " });
this.add({id:48, 
title:"Cardiac Trace Input", 
body:" cardiac trace input some pulse sequences require cardiac triggering\/gating. this input patient trace simulator. both methods outlined below. " });
this.add({id:49, 
title:"Cardiac Trace Simulator", 
body:" cardiac trace simulator this feature available access gyrotest, mrservice mrresearch account possible. right click protocol window select <control parameter editor>. under <general tab> select <yes> <physiology simulation>. set number rr intervals 1 . set first rr interval 1000 . click <apply>. under <patient information> tag enter 60 <entered heartrate>. the simulated heartbeat highlighted with red box. " });
this.add({id:50, 
title:"Cardiac Gating", 
body:" cardiac gating use ecg pulse oximeter set patient's cardiac gating. select correct trigger source gating window (physiology monitoring window) confirm signal clear r-wave. after regular heartbeat picked ecg leads pulse oximeter, double click second number right automatically update current heart rate. in case figure 10 , current heart rate 60, expected 65. update expected heart rate. 65 rate set radiographer 60 actual patient detected scanner. it important maintain expected heart rate higher than real account fluctuations. " });
this.add({id:51, 
title:"Acquisition", 
body:" acquisition please note that: all protocols acquired before any contrast agent injection. note contrast agents necessary any the acquisitions. all scans performed end-expiration breath-hold, including survey scan. protocol parameters changed. any changes specifically covered instructions risk corrupting resultant cause data rejection perspectum ltd. please not inject any contrast agent prior acquisition lms protocol. this result erroneous parameter quantification. " });
this.add({id:52, 
title:"Localization Protocols", 
body:" localization protocols " });
this.add({id:53, 
title:"Three-plane Survey", 
body:" three-plane survey a three-plane survey run end-expiration breath-hold produce sagittal, coronal transversal view abdomen. check the phased-array coil positioned good snr entire liver. reposition coil patient necessary. low image snr adversely impacts quality resulting parameter estimates. " });
this.add({id:54, 
title:"Additional Localizers (optional)", 
body:" additional localizers (optional) additional localizers may be run acquire axial\/transversal slices to right view subsequent lms slice positioning. " });
this.add({id:55, 
title:"Volume Acquisition", 
body:" volume acquisition lms volume: this acquisition thrive sequence with coverage entire liver volume. this volumetric scan requires breath-hold approximately 15 seconds cardiac-gated. alter centre image volume so entire craniocaudal extent liver spleen captured. if mdixon option available scanner, make sure selected scan. position the centre of image volume so entire craniocaudal ( h-f ) extent liver spleen captured. the number slices increased cover entire craniocaudal slice thickness remain same. example region scanned with lms volume acquisition motion breathing : the lms volume image need re-acquired motion artefact breathing shown figure 12 . if lms volume image shows motion artefacts breathing, re-acquire image. fov coverage : if acquired image doesn't cover liver, example shown figure 13 , increase number slices ensure entire craniocaudal extent liver covered. the slice thickness changed. the dome liver excluded acquisition, re-acquire image with correct fov positioning increase number slices necessary. do change slice thickness. " });
this.add({id:56, 
title:"Liver LMS Imaging Location", 
body:" liver lms imaging location " });
this.add({id:57, 
title:"Base Slice Positioning", 
body:" base slice positioning this slice location used the centre majority sequences. hence it is imperative to position correctly. the base positioned intersects porta hepatis, display liver, spleen, contain stomach.  if lungs visible transverse slice, shift image lower patient’s abdomen cause susceptibility artefacts. please refer localizer images in figure 14 positioning transverse slice. three-plane survey view abdomen coronal, sagittal, transversal (axial) plane. the base slice location lms protocol indicated orange shim volume red. " });
this.add({id:58, 
title:"Shimming", 
body:" shimming the shim volume should centred shown in  figure 5 . the f-h direction should cover entire stack of slices remained protocol. in r-l a-p directions, the shim volume adapted until the liver is fully covered, excluding air possible. please exclude subcutaneous fat obese patients. shim adjustments than described manual corrupt parameter mapping. susceptibility artefacts magnetic susceptibility artefacts appear to: poor shim, proximity lungs, bowel gas metallic implants. susceptibility liver preclude accurate parameter estimation areas affected shown figure 15 . susceptibility artefacts appear dark, distorted areas, lms molli banding artefact. to mitigate susceptibility artefacts: 1. ensure centre multi-slice at isocentre and make sure the  shim volume positioned shown in  figure 5 .   2. force re-shim by : postproc tab > set preparation phases method “full” > run the sequence again. 3. re-acquire data. " });
this.add({id:59, 
title:"Liver LMS IDEAL", 
body:" liver lms ideal this 5-slice multi-echo sequence performed end-expiration breath-hold. the breath-hold lasts approximately 9 seconds. used generate pdff map liver. 1. prescribe slice stack so 3rd (middle slice) intersects porta hepatis. 2. the shim volume centered slice stack r-l a-p directions adapted ensure entire abdomen included transverse view liver spleen completely covered shown figure 5 . 3. the (f>>h) shim volume thickness manually adjusted '90mm'. " });
this.add({id:60, 
title:"Liver LMS MOST", 
body:" liver lms most this is a single -slice multi-echo gradient-echo sequence performed end-expiration breath-hold. the breath-hold lasts approximately 11 seconds. this sequence used generate t2* map liver. set centre slice shim volume identical lms ideal (same geo name). make sure shim volume thickness 20mm. repositioning adjust required. give breathing instruction, \" breath \", \" breath \", \" hold breath \" run sequence. once acquisition complete, tell patient \" resume breathing \" " });
this.add({id:61, 
title:"Liver LMS T2STAR DIXON", 
body:" liver lms t2star dixon this is a single-slice multi-echo gradient-echo sequence performed end-expiration breath-hold. the breath-hold lasts approximately 10 seconds. this sequence used generate t2* map liver. 1. set centre slice shim volume identical lms most (same geo name). " });
this.add({id:62, 
title:"Liver LMS MOLLI", 
body:" liver lms molli this multi-slice, multi-breath-hold, cardiac-gated acquisition performed end-expiration breath-hold. scan acquires 5 transverse slices, slice each breath-hold lasts approximately 9-12 seconds. sequence used generate t1 map liver. after slice acquired operator prompted breathing instruction the next slice. during scan, imperative monitor physiological recording trace check heartbeats missed system’s triggering algorithm. 1. set lms molli slice centre lms ideal ensuring geo name. 2. the slice stack and shim volume should positioned shown figure 5 . " });
this.add({id:63, 
title:"Data Export", 
body:" data export upload single compressed file please compress sets data patient file proceed with upload. please follow arrangement personally identifiable information ( pii ) agreed site, removal pii necessary site. if patient registration contains pii , refer patient de-identification manual help removing pii preserving private dicom tags necessary describing image acquisition. private dicom tags special added manufacturer describe mri sequence. they not refer private information, pii . many dicom anonymization tools option remove private tags. do tags exporting data. private dicom tags preserved any data export. private dicom tags pii tags. these instructions cover exporting data philips scanner transfer. if site unable export directly transfers data pacs use pacs export save dicom images. it preferable compress folder exported dicoms submit single compressed file portal. on windows : right click folder windows explorer select <send to> <compress (zipped) folder>.  if resides cd dvd, need copy location saved to. on mac : hold ctrl click folder, select <compress>. upload compressed file perspectum portal. for additional instruction using portal, see portal customer user guide - pdm0077 website. " });
this.add({id:64, 
title:"Saving DICOM Images for Transfer", 
body:" saving dicom images transfer to export data philips mri scanner directly, <patient> menu pick <administration> open patient administrator. click administration patients tab export data. the source database device chosen top-left corner. default <local patient database>. select data want export. exporting data cd dvd: please select dvd destination patient administration window. exporting data specific location file with usb stick external hard drive: please export data following steps: in <patient administration> select appropriate subject folder. click <disk files> icon open <export pop-up window. browse destination. this external usb stick hard drive. select format <classic dicom >. confirm with proceed. do not select <suppress patient data> <anonymize>. to check status data transfer, select <queue manager> <system> main menu <patient administration> window. data export options. " });
this.add({id:65, 
title:"Acquisition Checklist", 
body:" acquisition checklist step task patient information patient name: use agreed patient naming scheme registration id: use agreed patient id naming scheme date birth: use agreed scheme correct sex, height, weight exam date study comments: input initial operator. patient position: select appropriate position. leave rest fields empty. localiser (one breath-hold) run localiser expiration lms volume (one breath-hold) place fov cover entire craniocaudal extent liver scan sequence end expiration check image quality, motion artefacts liver isn't fully covered, re-acquire sequence. lms ideal (one breath-hold) place slice stack (5 slices) so middle (third slice) intersect porta hepatis. position shim volume centred slice stack. adjust shim volume r-l a-p directions patient's dimensions so abdomen included transverse view. scan sequence end expiration. check image quality, motion artefacts re-acquire sequence. lms most (one breath-hold) position single with centre lms ideal, intersecting porta hepatis. position shim volume centred slice ; shim volume thicker than slice . adjust shim volume r-l a-p direction patient's dimensions so abdomen included transverse view. scan sequence end expiration. check image quality, motion artefacts re-acquire sequence. lms t2star dixon (one breath-hold) position slice with centre lms most, intersecting porta hepatis. position shim volume centred slice. thicker than slice thickness. adjust shim volume r-l a-p direction patient's dimensions so abdomen included transverse view. scan sequence end expiration. check image quality, motion artefacts re-acquire sequence. lms molli (5 breath-holds) position slice stack with centre lms ideal. make sure shim volume centred slice stack adjust shim volume r-l a-p direction so abdomen included transverse view. exclude subcutaneous fat possible. check image quality slice; artefacts? if so, re-acquire sequence. " });
this.add({id:66, 
title:"Issue control", 
body:" issue control issue details date initial 1.0 new document oct 26, 2020 fsn 2.0 correct molli slice number aug 20, 2021 fsn " });
this.add({id:67, 
title:"Approvals", 
body:" approvals job title name signature chief operating officer dr. rexford newbould chief technical officer prof. matthew robson chief quality and regulatory compliance officer dr. jaco jacobs product manager dr. sean pollock " });
this.add({id:68, 
title:"CoverScan MD Patient Acquisition Manual for Philips Scanners", 
body:" coverscan md patient acquisition manual philips scanners download pdf 2021 perspectum ltd. all rights reserved. no publication reproduced, transmitted, transcribed, stored retrieval translated any language language, form means, electronic, mechanical, magnetic, optical, chemical, manual otherwise, prior written permission perspectum ltd. logos products mentioned registered trademarks copyrights perspectum ltd, and are used informational purposes only. use limitation this manual intended used reference guide acquisition images using philips 1.5t mri system. perspectum ltd. shall held liable improper installation, operation, maintenance circumstances procedures specifications set manual followed correctly. it essential therefore, follow specifications, procedures, recommendations outlined manual. disclaimer except required law, perspectum ltd. makes representations warranties, expressed implied, with respect contents hereof. every effort ensure reliability accuracy information contained manual time going print.  however, specifications procedures subject change constant endeavours meet customer requirements, maintain research development process continuous improvement products. consequently, reserves right make changes any notice.  you check first sure version referring latest version. unauthorised use means user assumes liability use. to maximum extent permitted event shall liable damages for, limitation, loss profits, business, revenue, use, time, data, reputation, opportunity, goodwill, savings, inconvenience, incidental, indirect consequential damages, arising failure strictly prescribed herein. " });
this.add({id:69, 
title:"Glossary", 
body:" glossary adiab. adiabatic vat visceral adipose tissue flash fast low angle shot nolli non-molli lmm lean muscle mass fse bb black blood fast spin echo fisp fast imaging with steady-tate free precession fiesta fast imaging employing steady-state acquisition zip zero interpolation filling edr extended dynamic range caipirinha controlled aliasing parallel imaging results higher acceleration scic surface coil intensity correction pure phased-array uniformity enhancement grappa generalized autocalibrating partial parallel acquisition arc autocalibrating reconstruction cartesian imaging tfe turbo field echo asset array coil spatial sensitivity encoding technique sense sensitivity encoding ipat integrated parallel acquisition technique rbw readout bandwidth fa flip angle cd cystic duct cbd common bile duct mip maximum intensity projection 2d 2-dimensional 3d 3-dimensional a-p anterior-posterior arrt the american registry radiologic technologists b0 main magnetic field ce continuing education dicom digital imaging communications medicine db\/dt time-varying gradient dob date of birth f-h feet-head ffe fast field echo gre gradient recalled echo id identifier ideal iterative decomposition water fat with echo asymmetry least-squares estimation lms livermultiscan molli modified look locker inversion recovery most magnitude only thin-slice t2* mr magnetic resonance mre magnetic resonance elastography mri magnetic resonance imaging pacs picture archiving communication system pg peripheral gating pii personally identifiable information ppu peripheral pulse unit rf radio frequency ris radiology information system r-l right-left sar specific absorption rate s-i superior-inferior ssfp steady-state free precession snr signal-to-noise ratio wip work in progress cnr contrast noise ratio fov field view fse fast spin echo haste half-fourier acquisition single-shot turbo spin echo mrcp magnetic resonance cholangiopancreatography tse turbo spin echo vibe volumetric interpolated breath-hold examination lava liver acquisition with volume thrive t1w high resolution isotropic volume examination fda food drug administration lto leeds test objects pdff proton density fat fraction qc quality check s-i superior-inferior lsn liver surface nodularity ss ct1 superstandardised corrected t1 clear constant level appearance scic surface coil intensity correction shmolli shortened-modified look locker inversion recovery tantanh tangent hyperbolic bold blood oxygen level dependent bp blood pressure co cardiac output ctm continuous table movement dwi diffusion weighted imaging hr heart rate pa pulmonary artery tpr total peripheral resistance aobp aortic blood pressure aopp aortic pulse pressure aug index augmentation index aug press augmentation pressure map mean arterial pressure pwa pulse wave analysis sevr subendocardia; viability ratio sv stroke volume tps transaction processing system hla horizontal long axis vla vertical long axis lvot left ventricular outflow track av groove atrioventricular groove ssfse single shot fast spin echo te echo time tr repetition time lcd liquid crystal display se-ir spin echo inversion recovery hfs head first supine hfp head first prone ecg electrocardiogram pmu phasor measurement unit " });
this.add({id:70, 
title:"Introduction", 
body:" introduction " });
this.add({id:71, 
title:"Scope", 
body:" scope this manual intended describe correct procedure perform perspectum ltd. set protocol mr operator philips scanners. please use document reference guide performing protocol acquisitions. the manual divided main sections: preparation, acquisition data export. acquisition section details following sequences: localizer (1 breath-hold, 3-plane abdomen) liver kidney coverscan mdixon thrive (1 breath-hold, 3d acquisition covering liver kidney) liver lms t2star dixon (1 breath-hold 1 slice liver) liver lms ideal (1 breath-hold, 5 slices liver) liver lms most (1 breath-hold, single slice liver) liver lms molli (2 breath-holds, 2 slices liver) pancreas coverscan molli (1 breath-hold, 1 slice pancreas) pancreas coverscan ideal (1 breath-hold, 5 slices pancreas) kidneys coverscan molli (1 breath-hold, 1 slice kidneys) cardiac planning localizer (1 breath-hold, 3 planes heart) 2 chamber (1 breath-hold, 1 slice heart) 4 chamber (1 breath-hold, 1 slice heart) short axis stack (1 breath-hold, multi-slice heart) cardiac cine (hla, vla, short axis stack heart) cardiac t1 map (base, mid, apex heart) cardiac t2 map (base, mid, apex heart) lung planning localizer (1 breath-hold, 3 planes lungs) lung imaging (consistent normal breathing lungs) lung imaging (deep inspiration expiration lungs) " });
this.add({id:72, 
title:"Continuing Education", 
body:" continuing education in territories, usa, training eligible continuing education ( ce ) credit. the ce sponsored by perspectum and will presented member imaging applications team. the presenter’s name, date, and attendees written staff training checklist time training; form kept in perspectum’s records site training activities electronic copy sent site.   in order qualify ce ,  document,  multiparametric liver mri applications training – mra1157, provided with training. this document includes post-activity evaluations completed award credit. " });
this.add({id:73, 
title:"Compatibility and Requirements", 
body:" compatibility requirements all sequences described manual require scanner hardware software compliant with manufacturer’s specifications, especially gradient performance, eddy current compensation, magnetic field ( b0 ) homogeneity stability.  the protocols utilized scanners outside manufacturer’s service specifications calibration schedules.  do use phased-array coils with failed elements snr checks passed. " });
this.add({id:74, 
title:"T1 Mapping and Cardiac Imaging Requirement", 
body:" t1 mapping cardiac imaging requirement t1 mapping cardiac imaging protocols require manufacturer's clinically approved software product cardiacquant . " });
this.add({id:75, 
title:"T2* and Proton Density Fat Fraction Mapping Requirement", 
body:" t 2 * proton density fat fraction mapping requirement the multi-echo gradient-echo package available. this offered product philips scanners need additional license. " });
this.add({id:76, 
title:"Volume requirement", 
body:" volume requirement the 3d t1 thrive sequences available. this allow three-dimensional spoiled gradient echo pulse sequence. a multi-echo variant sequence with water-fat separation 3d t1 mdixon thrive  is preferred. the latter allows acquiring in-phase out-of-phase images single acquisition, calculate water-only fat-only images. " });
this.add({id:77, 
title:"Coil requirement", 
body:" coil requirement integrated spine array coil flex array coil(s) placed chest\/abdomen. ensure flex coil covers lung lower pole kidneys. sufficient coverage depend patient size length. if does cover region showed figure 18 use multiple flex array coils. please note coils available, acquiring liver, kidney pancreas images, it's imperative coil upward cover lungs heart (please see cardiac trace simulator off and coil coverage adjustment ). sufficient flex array coil coverage apex lungs lower poles kidneys. " });
this.add({id:78, 
title:"Cardiac trace simulator Requirement", 
body:" cardiac trace simulator requirement a cardiac trace simulator used acquire t1 mapping sequences ( molli ). if available scanner patient's ecg signal used instead. " });
this.add({id:79, 
title:"Cardiac trace input Requirement", 
body:" cardiac trace input requirement the scanner ecg gating required perform cardiac acquisitions. the mr safe ecg electrodes sensor connected patient's chest scan session. " });
this.add({id:80, 
title:"Patient Registration", 
body:" patient registration ensure subject registered new mr study. the minimum required information registering patient follows: registration id : <use agreed subject id naming scheme> patient name: <use agreed subject naming scheme> date birth ( dob ): <use agreed dob scheme> study comments: operator <operator initials> (example: ab) the patient's height (when available), weight sex subject naming scheme :  if scan performed research study clinical trial, ensure personally identifiable information ( pii ) entered. the study provided a patient id unique subject. if local rules prohibit scanning real name, registration populated ris , scanning remove pii dicom files send to perspectum. the data export section patient de-identification manual instructions.  if scan performed clinical aid diagnosis, pii acceptable patient registration. date birth ( dob ) scheme:  if pii allowed, patient's date birth dob used.  otherwise, use 01-jan, correct year birth. please note mri technician\/radiographer performs patient acquisition undergone training either: (a) authorised perspectum imaging applications specialists (b) previously trained site personnel authorised perform internal training a record internal training must be provided to perspectum with appropriate imaging staff training checklist. " });
this.add({id:81, 
title:"Pre-Scan Preparation", 
body:" pre-scan preparation " });
this.add({id:82, 
title:"Patient positioning", 
body:" patient positioning patient positioned head-first supine with arms side. scanner isocenter landmarked xiphisternum patient. setup ecg gating with electrodes sensor. check signal clear r-wave triggering. " });
this.add({id:83, 
title:"Breathing Instructions", 
body:" breathing instructions breath-holding explained practiced any data acquisition variations depth subject’s breathing markedly alter image quality consistency abdomen position acquisitions. end-expiration breath-hold chosen, consistent process. this patient: 'the scans better hold breath comfortably.' the following instructions given patient ahead scan:  breathe in.  breathe out. stop hold breath there. breathe away resume breathing (after data acquired). some sequences cardiac-gated, so the gradient pulse sounds irregular. therefore, extremely important advise patient hold breath instruct breathe away regardless scanner noise. some gradient pulse sounds irregular. it extremely important advise patient hold breath instruct breathe away regardless scanner noise. " });
this.add({id:84, 
title:"Acquisition guide", 
body:" acquisition guide please note that: all protocols acquired any contrast agent injection. note agents necessary acquisitions all scans performed end-expiration breath-hold, including survey scan. protocol parameters changed. any changes specifically covered instructions risk corrupting resultant cause data rejection perspectum ltd. prior scanning, cardiac trace simulator (if available) set follows. if simulation available proceed scan using patient's input. " });
this.add({id:85, 
title:"Cardiac Trace Simulator", 
body:" cardiac trace simulator this feature available access gyrotest, mrservice mrresearch account possible. right click protocol window select <control parameter editor>. under <general tab> select <yes> <physiology simulation>. set number rr intervals 1 . set first rr interval 1000 . click <apply>. under <patient information> tag enter 60 <entered heartrate>. the simulated heartbeat highlighted with red box. " });
this.add({id:86, 
title:"Three-plane Survey", 
body:" three-plane survey a three-plane survey run expiration breath-hold produce sagittal, coronal transverse view abdomen. " });
this.add({id:87, 
title:"Liver to Kidney CoverScan mDIXON THRIVE", 
body:" liver kidney coverscan mdixon thrive this 3d spoiled gradient echo acquisition performed end-expiration breath-hold lasts approximately 15 seconds. this used measure length and\/or volume liver kidney. use localizer images planning prescribe axial mdixon thrive slab cover liver domes lower poles kidneys shown figure 20 . set shim volume coverage fov make sure cover entire liver kidneys allow superior inferior margins. liver kidney coverscan mdixon thrive slice stack positioning. " });
this.add({id:88, 
title:"Liver LMS Sequences", 
body:" liver lms sequences liver lms ideal (5 slices) : prescribe slice stack 3rd (middle slice) intersects porta hepatis. it display liver, spleen, contain stomach. the shim volume adapted r-l a-p directions long entire liver spleen covered shown figure 21 . in f-h direction, shim thickness centred thicker than acquired slices. the volume left set protocol (90mm). liver lms most (one slice) : prescribe slice with geo lms ideal . the shim volume adapted r-l a-p directions long entire liver spleen completely covered. give breathing instruction, \" breath \", \" breath \", \" hold breath \" run sequence. then tell pateint resume breathing \"\n liver lms t2star dixon (one slice) : prescribe slice with geo lms ideal. the shim volume adapted r-l a-p directions long entire liver spleen completely covered. liver lms molli (slice 1): prescribe slice with geo lms ideal. the shim volume adapted r-l a-p directions long entire liver spleen completely covered. liver lms molli (slice 2): prescribe slice lms molli 1 (caudal direction). this location 4th ideal craniocaudal direction. use 3-point planscan prescribe slice. the shim volume adapted r-l a-p directions long entire liver spleen completely covered. slice prescription lms ideal slice stack intersects porta hepatis, display liver spleen. make sure shim volume 90mm f-h direction. " });
this.add({id:89, 
title:"Pancreas MOLLI", 
body:" pancreas molli this single slice acquisition performed end-expiration breath-hold lasts approximately 14 seconds. used generate t1 map pancreas slice. to plan acquisition, use 3-point planscan create axial-oblique plane with following steps: load liver kidney mdixon thrive images planning windows. scroll images stack identify pancreas head, body, tail possible axial planes. select 3-point planscan icon prescribe 3 points clicking cursor pancreas tail, body, head each. this generate slice axial-oblique orientation.  please repeat step 2 3 orientation appears coronal oblique. adjust shim volume mimic axial-oblique plane orientation adjust size cover just pancreas shown figure 22 . aim prescribe slice axial-oblique plane possible. if resultant appears overly coronal, repeat steps 2 3. if axial-oblique plane hard obtain and\/or sequence parameters change imaging angle, original setting prescribe straight axial image largest volume pancreas identified plane. prescribing pancreas molli sequence using 3-point planscan tool. " });
this.add({id:90, 
title:"Pancreas CoverScan IDEAL", 
body:" pancreas coverscan ideal this multi-slice, multi-echo gradient echo acquisition performed end-expiration breath-hold lasts approximately 15 seconds. used generate pdff map pancreas. run pancreas coverscan ideal sequence with geo molli. make sure shim volume thickness covers entire slice stack. (please refer figure 23 planning) pancreas coverscan ideal prescription, make sure shim box f-h covers entire stack slices (60 mm recommended) " });
this.add({id:91, 
title:"Kidneys MOLLI", 
body:" kidneys molli this single slice acquisition performed end-expiration breath-hold lasts approximately 14 seconds. used generate t1 map kidneys. load liver kidney mdixon thrive images localizer coronal image planning images. prescribe imaging slice intersect middle kidneys axial view. a. on coronal view, centre acquisition fov level kidneys, avoiding aorta included acquisition fov possible (please refer figure 24 planning) adjust shim volume cover slice kidneys. kidneys molli prescription " });
this.add({id:92, 
title:"Cardiac Trace Simulator Off and Coil Coverage Adjustment", 
body:" cardiac trace simulator off coil coverage adjustment the sequences require cardiac trace input. make sure turn heart simulator prior acquiring sequences. if cardiac simulation available site turned step using following instructions: right click protocol window select <control parameter editor>. under <general tab> select <no> <physiology simulation>. click <apply>. make sure patient heart trace displayed than simulated trace. coil coverage: the sequences require sufficient coil coverage lungs heart. if flex array used does cover apex heart, make sure re-position prior scanning following sequences. " });
this.add({id:93, 
title:"Cardiac Planning Localizer", 
body:" cardiac planning localizer the localizers acquired used planning cardiac imaging expiration breath-hold. position localizer so heart centre planes. cardiac planning localizer prescription " });
this.add({id:94, 
title:"Two Chamber", 
body:" two chamber this ecg gated balanced steady-state free precession sequence (bright blood preferred). 1. prescribe slice shown figure 26 make sure slice is: parallel interventricular septum cutting mid-point mitral valve cutting left ventricular apex 2. set shim volume covers heart. the remain cardiac sequences. 3. ensure acquisition performed end-expiration breath-hold acquired late diastole phase cardiac cycle possible. two chamber localizer slice prescription. " });
this.add({id:95, 
title:"Four Chamber", 
body:" four chamber this ecg gated balanced steady-state free precession sequence (bright blood preferred). 1. plan sequence using chamber acquisition shown figure 27 make sure slice is: cutting mid-point mitral valve cutting left ventricular apex 2. ensure acquisition performed end-expiration breath-hold late diastole phase cardiac cycle possible. four chamber localizer slice prescription. " });
this.add({id:96, 
title:"Short Axis Stack", 
body:" short axis stack this ecg gated balanced steady-state free precession sequence (bright blood preferred). 1. plan sequence using chamber acquisitions shown figure 28 make sure slice: covers mid atrium apex ventricles entirely. parallel atrioventricular groove (av groove) 2. ensure acquisition performed end-expiration breath-hold late diastole phase cardiac cycle possible. short axis stack localizer prescription please acquire mid point atirums, i.e., slice cover av groove. this allow left ventricular outflow track (lvot) present better planning later hla cine acquisition. " });
this.add({id:97, 
title:"Cine acquisitions", 
body:" cine acquisitions these acquisitions using retrospective ecg gating expiration breath-hold. prospective ecg gating used difficult ecg traces. ensure shim box covers heart acquisitions. " });
this.add({id:98, 
title:"HLA (Horizontal Long Axis) Cine", 
body:" hla (horizontal long axis) cine 1. plan sequence using chamber short axis stack acquisitions shown figure 29 , ensure: the positioning maximum lateral dimensions ventricles avoid left ventricular outflow tract ( lvot ) shown tip cut mid-point mitral valves cut left ventricular apex use late diastole frame possible 2. adjust shim volume cover heart (usually 150 mm a-p, r-l, f-h directions sufficient).\n hla cine prescription. when planning slice, avoid cutting left ventricular outflow tract ( lvot ). " });
this.add({id:99, 
title:"VLA (Vertical Long Axis) Cine", 
body:" vla (vertical long axis) cine 1. plan sequence using hla cine short axis stack images shown figure 30 , make sure: the positioning maximum dimensions left ventricle, approximately parallel interventricular septum insertion points right ventricle cut mid-point mitral valve cut left ventricular apex use late diastole frame possible \n2. adjust shim volume cover heart (usually 150 mm a-p, r-l, f-h directions sufficient).\n\n vla cine prescription " });
this.add({id:100, 
title:"Short Axis Stack Cine", 
body:" short axis stack cine 1. plan sequence using hla vla cine acquisitions shown figure 31 make sure: use late diastole frame hla vla cine images plan basal slice atrioventricular groove ( av groove ) cover entire ventricles running multi-slice stack base apex ventricles. allow margin beyond apex ventricles. 2. adjust shim volume covers heart (usually 150 mm a-p, r-l, f-h directions sufficient). short axis stack cine prescription " });
this.add({id:101, 
title:"Cardiac T1 Map", 
body:" cardiac t1 map t1 mapping acquired different levels left ventricle: basal, mid, apex. make sure acquisitions cardiac phase. note trigger delay acquisition window changed strictly necessary. ideally, acquire sequences late diastole. in cases with fast heart rates, systole considered. please see suggested steps planning base t1 map , mid t1 map , apex t1 map acquisitions. scroll slice stack acquired short axis stack cine, finding best base slice location, click 3-point planscan icon . then click times different points slice. make sure shim box covers entire heart shown figure 32 . run sequence check acquisition properly triggered. for mid apex t1 map, repeat step 1 2 with correspond \"mid\" \"apex\" positions. if any mis-triggering occurs, adjust trigger delay acquisition window reacquire. please label new acquisition repeat. base t1 map planning. use short axis stack cine sequence cardiac map planning " });
this.add({id:102, 
title:"Cardiac T2 Map", 
body:" cardiac t2 map t2 mapping acquisitions resemble locations cardiac t1 map: basal, mid apex slices. make sure acquired cardiac phase. note trigger delay acquisition window changed strictly necessary. ideally, acquire sequences late diastole. in cases with fast heart rates, systole considered. please see suggested steps planning base t2 map , mid t2 map , apex t2 map acquisitions. " });
this.add({id:103, 
title:"Lung Planning Localizer", 
body:" lung planning localizer the localizers acquired used planning lung imaging expiration breath-hold. position sagittal coronal centred apex so largest dimension visualized. lung planning localizer prescription " });
this.add({id:104, 
title:"Lung Imaging", 
body:" lung imaging this acquisition lasts approximately 30 seconds aims acquire dynamic coronal views lungs deep inspiration expiration. prior starting acquisition, instruct patient \"continuously breathe deeply steady pace scan\" coronal view slice prescription: ensure fov covers entire bilateral lung volumes (both s-i l-r directions). when centring fov, accommodate change diaphragm locations deep breathing. the image slice cut apex lungs keeping coronal (please angle slice) shown figure 34 . lung imaging prescription " });
this.add({id:105, 
title:"Data Export", 
body:" data export upload single compressed file please compress sets data patient file proceed with upload. please follow arrangement personally identifiable information ( pii ) agreed site, removal pii necessary site. if patient registration contains pii , refer patient de-identification manual help removing pii preserving private dicom tags necessary describing image acquisition. private dicom tags special added manufacturer describe mri sequence. they not refer private information, pii . many dicom anonymization tools option remove private tags. do tags exporting data. private dicom tags preserved any data export. private dicom tags pii tags. these instructions cover exporting data philips scanner transfer. if site unable export directly transfers data pacs use pacs export save dicom images. it preferable compress folder exported dicoms submit single compressed file portal. on windows : right click folder windows explorer select <send to> <compress (zipped) folder>.  if resides cd dvd, need copy location saved to. on mac : hold ctrl click folder, select <compress>. upload compressed file perspectum portal. for additional instruction using portal, see portal customer user guide - pdm0077 website. " });
this.add({id:106, 
title:"Saving DICOM Images for Transfer", 
body:" saving dicom images transfer to export data philips mri scanner directly, <patient> menu pick <administration> open patient administrator. click administration patients tab export data. the source database device chosen top-left corner. default <local patient database>. select data want export. exporting data cd dvd: please select dvd destination patient administration window. exporting data specific location file with usb stick external hard drive: please export data following steps: in <patient administration> select appropriate subject folder. click <disk files> icon open <export pop-up window. browse destination. this external usb stick hard drive. select format <classic dicom >. confirm with proceed. do not select <suppress patient data> <anonymize>. to check status data transfer, select <queue manager> <system> main menu <patient administration> window. data export options. " });
this.add({id:107, 
title:"Acquisition checklist", 
body:" acquisition checklist prior scan attach ecg triggering device patient list sequences set cardiac trace simulator whole body survey liver kidney coverscan mdixon thrive liver lms ideal liver lms most liver lms t2star dixon liver lms molli 1st slice liver lms molli 2nd slice pancreas coverscan molli pancreas coverscan ideal kidneys coverscan molli turn cardiac trace simulator use patient's heart with ecg change coil position cover lungs heart coverage sufficient apex cardiac planning localizer 2 chamber 4 chamber short axis stack hla cine vla cine short axis stack cine cardiac t1 map: base cardiac t1 map: mid cardiac t1 map: apex cardiac t2 map: base cardiac t2 map: mid cardiac t2 map: apex lung planning localizer lung imaging: consistent free breathing lung imaging: consistent deep inspiration expiration data export upload portal " });
this.add({id:108, 
title:"Approvals", 
body:" approvals head imaging solutions dr. alex smith head imaging applications andrea borghetto " });
this.add({id:109, 
title:"Patient De-Identification Manual for Philips Scanners", 
body:" patient de-identification manual philips scanners download pdf mra0252 2021 perspectum ltd all rights reserved. no publication reproduced, transmitted, transcribed, stored retrieval translated any language language, form means, electronic, mechanical, magnetic, optical, chemical, manual otherwise, prior written permission perspectum ltd. logos products mentioned registered trademarks copyrights perspectum ltd, and are used informational purposes only. use limitation this manual intended used reference guide acquisition images using philips 1.5t mri system. perspectum ltd. shall held liable improper installation, operation, maintenance circumstances procedures specifications set manual followed correctly. it essential therefore, follow specifications, procedures, recommendations outlined manual. disclaimer except required law, perspectum ltd. makes representations warranties, expressed implied, with respect contents hereof. every effort ensure reliability accuracy information contained manual time going print.  however, specifications procedures subject change constant endeavours meet customer requirements, maintain research development process continuous improvement products. consequently, reserves right make changes any notice.  you check first sure version referring latest version. unauthorised use means user assumes liability use. to maximum extent permitted event shall liable damages for, limitation, loss profits, business, revenue, use, time, data, reputation, opportunity, goodwill, savings, inconvenience, incidental, indirect consequential damages, arising failure strictly prescribed herein. " });
this.add({id:110, 
title:"De-Identification Introduction", 
body:" de-identification introduction this document describes correct procedure de-identify patient identifiable information( pii ) philips mri scanners console offline. " });
this.add({id:111, 
title:"Compatibility", 
body:" compatibility the procedures described document compatible with mri-scanners support livermultiscan system requirements – mra001. " });
this.add({id:112, 
title:"De-Identification - On Console", 
body:" de-identification - on console follow steps described edit patient identifiable information. close patient task processes select patient corrected patient administration tab        select modify select presentation mode tick box, change text colour grey black, allowing parameters correct patient information appropriate identifiers described patient registration section project shown figure 37 . patient de-identification philips systems. close patient task processes select patient corrected local db section at data apps tab, click edit patient . correct patient information appropriate identifiers described patient registration section project shown patient de-identification ge systems. " });
this.add({id:113, 
title:"De-Identification - Offline Mac", 
body:" de-identification - offline mac we recommend use open-source programs horos osirix de-identify data. select dicom dataset want de-identify horos osirix loading document data base. click anonymize shown figure 39 left correct patient information appropriate identifiers described patient registration section project shwon figure 39 right. if needed customise additional dicom tags, click plus sign select dicom tag... option. select anonymize correct patient information (left) modify additional dicom tags needed (right). ensure following dicom tags selected exporting dataset. " });
this.add({id:114, 
title:"De-Identification - Offline Windows", 
body:" de-identification - offline windows we recommend use open source program dicomcleaner™ de-identify data. follow steps described below, edit patient information. import dataset de-identify shown figure 40 dicomcleaner de-identification windows system. import data de-identify check replace box in patient’s name, id accession number fields, naming convention described patient registration section image acquisition manuals check remove unreplaced identities , remove patient characteristics boxes press clean button shown figure 41 fill information according agreed naming convention create folder with patient information described patient registration section local hard drive, select proper dataset export, press e xport button, select folder created local hard drive. press choose data exported correct folder shown figure 42 export specific folder with de-identified data " });
this.add({id:115, 
title:"Approvals", 
body:" approvals head imaging solutions dr. alex smith head imaging applications andrea borghetto " });
this.add({id:116, 
title:"Artefact Troubleshooting Center", 
body:" artefact troubleshooting center download pdf imaging artefact trouble shooting if need help regarding image acquisition troubleshooting, contact imaging.applications@perspectum.com customer feedback if like provide any feedback, send feedback@perspectum.com . we appreciate hearing you. " });
this.add({id:117, 
title:"MR Troubleshooting", 
body:" mr troubleshooting " });
this.add({id:118, 
title:"Mistriggering", 
body:" mistriggering if ecg ppu triggering used sequences, acquisition important captured heartbeat corrected representation patient's displayed figure 43 . when trigger points missed captured represent patient's heartbeat correctly, considered mistrigger and resulting parametric-maps affected. if mistrigger occurs, reacquire affected lms molli sequence. if any heartbeat missed triggering, scan re-acquired. mistriggering result erroneous parameter values. correct triggering lms molli acquisition. each heartbeat detected system. " });
this.add({id:119, 
title:"Banding artefact", 
body:" banding artefact banding artefacts appear black bands lms molli sequence high field heterogeneity. an example shown in  figure 44 . if black bands appear in liver, repeat acquisition following adjustments listed the  shimming section. it important check for banding artefacts in liver and repeat acquisition after new shim is forced. banding artefacts in liver can preclude accurate parameter mapping. (a) banding artefact visible image. (b) the shim box reduced (a-p) (r-l) dimensions to cover only the liver which salvaged artefact. " });
this.add({id:120, 
title:"Motion and Breathing Artefact", 
body:" motion breathing artefact motion breathing: the image need re-acquired motion artefact breathing shown figure 45 . if liver spleen volume image shows motion artefacts breathing, re-acquire image. " });
this.add({id:121, 
title:"Susceptibility Artefact", 
body:" susceptibility artefact susceptibility artefacts magnetic susceptibility artefacts appear to: poor shim, proximity lungs, bowel gas metallic implants. susceptibility liver preclude accurate parameter estimation areas affected shown figure 46 . susceptibility artefacts appear dark, distorted areas, lms molli banding artefact. " });
this.add({id:122, 
title:"Cropped FOV", 
body:" cropped fov fov cropped fov coverage : if acquired image doesn't cover liver spleen, example shown figure 47 , increase number slices ensure entire craniocaudal extent liver spleen covered. the slice thickness not changed. the dome liver excluded acquisition, re-acquire image with correct fov positioning increase number slices necessary. do change slice thickness. " });
this.add({id:123, 
title:"MRCP Artefact Trouble Shooting", 
body:" mrcp artefact trouble shooting motion artefact common artefacts acquisition a 3d mrcp series. this caused due incorrect breathing patterns and\/or patient movement scan. motion artefact lead ghosts ducts, ducts with incorrect width (leading duct diameter higher than real values) unreal connections of biliary tree ducts abdominal structures. please check acquisition breathing pattern patient. figure 48  below shows a mip imaged of 3d mrcp acquisition with motion artefact. mip reconstruction 3d mrcp acquisition with motion artefact. cd merged with cbd resulting unreliable biliary tree model. mrcp incorrect field view positioning incorrect field view (fov) positioning lead inaccurate quantification biliary tree. this significant tree included slab acquisition. figure 49 shows example incorrect fov positioning does include biliary tree raw data acquisition. please carefully check localizers\/images available repeat acquisition make sure biliary tree included fov. incorrect field view positioning. coronal mip (left) axial reconstruction (right). placement fov cutting cbd bifurcation included raw data. mrcp poor fat suppression in patients with high fat content, suppression techniques efficient, lead final image contains signal (see figure 50 ). 3d mrcp coronal mip image with poor fat suppression. figure 51 showed schematic spectrum water, fat silicone 1.5t field strength. please verify excitation frequency automatically defined scanner was adjusted water frequency not fat frequency. if not, manually adjust excitation frequency water re-acquire sequence. a schematic spectrum 1.5t water, fat silicone presence breast implants silicone breast implants in patients with silicone breast implants, frequency shift occur close water silicon shown figure 52 . a schematic spectrum 1.5t water, fat silicone. please verify excitation frequency automatically defined scanner was adjusted water frequency not silicone frequency. if not, manually adjust excitation frequency water saline breast implants in patients with saline breast implants shown figure 53 , saline water probably aggregate peak. 3d mrcp coronal mip image patient with saline breast implants please fov lower oblique 3d volume exclude breast implants area rf excitation, biliary tree inside use saturation band(s) implants. " });
this.add({id:124, 
title:"MR Elastography Troubleshooting", 
body:" mr elastography troubleshooting the periphery and\/or central liver blacked confidence map. this caused reasons described following: " });
this.add({id:125, 
title:"Patient Compliance", 
body:" patient compliance the patient followed instructions with regards motion and\/or breath-hold. make sure aware instructions. repeat acquisition necessary. " });
this.add({id:126, 
title:"Incorrect Passive Driver (drum) Placement", 
body:" incorrect passive driver (drum) placement when drum placed incorrectly and\/or insecurely, propagation waves poor thus resulting small usable regions stiffness maps. re-position explained mre passive driver placement re-acquire acquisition. figure 54 displays favourable driver (drum) placement. favourable driver (drum) placement (a) the passive appear mr images (b) body deformation visible axial images. " });
this.add({id:127, 
title:"Technical Issues", 
body:" technical issues confirm receiver coils, drum (passive driver) paddle connected proper working condition. confirm patient felt vibrations drum acquisition. confirm drum secured tightly mre band. confirm mre equipment (active driver) \"on\". check connections drum (passive driver), tubing active driver vibration did occur. if wave images sub-optimal, driver amplitude sufficient patient size.  increase repeat mre scan. " });
this.add({id:128, 
title:"Insufficient SNR", 
body:" insufficient snr the lack signal caused factors.  ensure correct rf receiver coil selected prescription. the patient suffer iron overload liver. if case, acquire data with se based acquisition ( figure 55 ). please make sure use se-epi-mre possible. gre, se se-epi mre acquisition patient with iron overload. note blacked portion image gre-mre column. " });

        store['en'][1]= {
        'title': "LMS Patient Acquisition Manual for Philips Scanners",
        'href': '8809-8809-lms-new-acquisition-manual.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners"
                , 'snippet': "LMS Patient Acquisition Manual for Philips Scanners Download PDF 2020 Perspectum. All rights reserved. No part of this publication may be reproduced, transmitted, transcribed, stored in a retrieval system or translated into any language or computer language, in any form or by any means, electronic, ..."
        };
        
        

        store['en'][2]= {
        'title': "Glossary",
        'href': '8809-8810-lms-glossary.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners \/ Glossary"
                , 'snippet': "Term Description A-P Anterior-Posterior ARRT The American Registry of Radiologic Technologists B0 Main magnetic field CE Continuing Education DICOM Digital Imaging and Communications in Medicine DOB Date Of Birth ECG ElectroCardioGram F-H Feet-Head FFE Fast Field Echo GRE Gradient Recalled Echo IDEA..."
        };
        
        

        store['en'][3]= {
        'title': "Introduction",
        'href': '8809-8811-lms-introduction.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners \/ Introduction"
                , 'snippet': "..."
        };
        
        

        store['en'][4]= {
        'title': "Scope",
        'href': '8809-8812-scope.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners \/ Introduction \/ Scope"
                , 'snippet': "This manual is intended to describe the correct procedure to perform the Perspectum set up protocol to an MR operator on Philips scanners. Please use this document as a reference guide when performing the protocol acquisitions. The manual is divided in three main sections: Preparation, Acquisition a..."
        };
        
        

        store['en'][5]= {
        'title': "Continuing Education",
        'href': '8809-8813-continuing-education.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners \/ Introduction \/ Continuing Education"
                , 'snippet': "In some territories, such as the USA, this training is eligible for continuing education ( CE ) credit. The CE is sponsored by Perspectum and will be presented by a member of the Imaging Applications team. The presenter’s name, date, and attendees will be written on the Imaging Staff Training Checkl..."
        };
        
        

        store['en'][6]= {
        'title': "Compatibility and Requirements",
        'href': '8809-8814-compatibility-and-requirements.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners \/ Introduction \/ Compatibility and Requirements"
                , 'snippet': "All sequences described in this manual require scanner hardware and software to be compliant with all manufacturer’s specifications, especially gradient performance, eddy current compensation, and magnetic field ( B0 ) homogeneity and stability.  The protocols cannot be utilized on scanners outside ..."
        };
        
        

        store['en'][7]= {
        'title': "T2* and Proton Density Fat Fraction Mapping Requirement",
        'href': '8809-8814-compatibility-and-requirements.html#UUID-c95f4310-5023-0df9-4fce-5c5e0ee67ddf'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners \/ Introduction \/ Compatibility and Requirements \/ T2* and Proton Density Fat Fraction Mapping Requirement"
                , 'snippet': "The system should also have the Multi-Echo Gradient-Echo package available. This package is offered as a product on most Philips scanners without the need of additional license...."
        };
        
        

        store['en'][8]= {
        'title': "T1 Mapping Requirement",
        'href': '8809-8814-compatibility-and-requirements.html#UUID-eb6abd9f-f8a7-1176-79db-f929b85d3250'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners \/ Introduction \/ Compatibility and Requirements \/ T1 Mapping Requirement"
                , 'snippet': "T1 mapping protocols require the manufacturer's clinically approved software product CardiacQuant ...."
        };
        
        

        store['en'][9]= {
        'title': "Preparation",
        'href': '8809-8818-preparation.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners \/ Preparation"
                , 'snippet': "..."
        };
        
        

        store['en'][10]= {
        'title': "Patient Registration",
        'href': '8809-8819-patient-registration.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners \/ Preparation \/ Patient Registration"
                , 'snippet': "Ensure the subject is registered to a new MR study. The minimum required information for registering the patient is as follows: Registration ID : <Use agreed on Subject ID Naming Scheme> Patient Name: <Use Agreed Subject Naming Scheme> Date of birth ( DOB ): <Use agreed DOB Scheme> Study Comments: O..."
        };
        
        

        store['en'][11]= {
        'title': "Breath-hold Instructions",
        'href': '8809-8820-breath-hold-instructions.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners \/ Preparation \/ Breath-hold Instructions"
                , 'snippet': "Breath-holding should be explained and practised when required because variations in the depth of a subject’s breathing can markedly alter the image quality and the consistency of the abdomen position between acquisitions. End-expiration breath-hold is chosen because breathing out is a more repeatab..."
        };
        
        

        store['en'][12]= {
        'title': "Patient preparation",
        'href': '8809-8821-patient-preparation.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners \/ Preparation \/ Patient preparation"
                , 'snippet': "LMS requires end-expiration breath-hold and requires phased-array receiver coils. LMS requires cardiac gating, end-expiration breath-hold and phased-array receiver coils. Please prepare the patient following these steps: Explain and demonstrate the breath-hold instructions as above. Position the pat..."
        };
        
        

        store['en'][13]= {
        'title': "Cardiac Trace Input",
        'href': '8809-8823-cardiac-trace-input.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners \/ Preparation \/ Cardiac Trace Input"
                , 'snippet': "Some pulse sequences require cardiac triggering\/gating. This input can be from either the patient or a cardiac trace simulator. Both methods are outlined below...."
        };
        
        

        store['en'][14]= {
        'title': "Cardiac Trace Simulator",
        'href': '8809-8823-cardiac-trace-input.html#UUID-77b44eba-41c0-e626-bb13-93f2cd548c7c_UUID-7620cee6-e901-5e06-c74d-8a942bf5fd3b'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners \/ Preparation \/ Cardiac Trace Input \/ Cardiac Trace Simulator"
                , 'snippet': "This feature is only available when access to either gyrotest, MRService or MRResearch account is possible. Right click the protocol window and select <control parameter editor>. Under the <General Tab> select <Yes> for <Physiology Simulation>. Set the number of RR intervals to 1 . Set the first RR ..."
        };
        
        

        store['en'][15]= {
        'title': "Cardiac Gating",
        'href': '8809-8823-cardiac-trace-input.html#UUID-77b44eba-41c0-e626-bb13-93f2cd548c7c_UUID-b3d67729-a04d-100b-36cd-76d009df5f66'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners \/ Preparation \/ Cardiac Trace Input \/ Cardiac Gating"
                , 'snippet': "Use ECG or pulse oximeter to set up the patient's cardiac gating. select the correct trigger source in the gating window (physiology monitoring window) and confirm the signal has clear R-wave. After a regular heartbeat is picked up by the ECG leads or pulse oximeter, double click on the second numbe..."
        };
        
        

        store['en'][16]= {
        'title': "Cardiac Trace Simulator",
        'href': '8809-8823-cardiac-trace-input.html#UUID-d04c7dcb-03b6-a1d3-8f9b-f5d90146c441'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners \/ Preparation \/ Cardiac Trace Input \/ Cardiac Trace Simulator"
                , 'snippet': "This feature is only available when access to either gyrotest, MRService or MRResearch account is possible. Right click the protocol window and select <control parameter editor>. Under the <General Tab> select <Yes> for <Physiology Simulation>. Set the number of RR intervals to 1 . Set the first RR ..."
        };
        
        

        store['en'][17]= {
        'title': "Cardiac Gating",
        'href': '8809-8823-cardiac-trace-input.html#UUID-f9f89ec8-1235-2e27-6e92-5ebb9353ce7f'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners \/ Preparation \/ Cardiac Trace Input \/ Cardiac Gating"
                , 'snippet': "Use ECG or pulse oximeter to set up the patient's cardiac gating. select the correct trigger source in the gating window (physiology monitoring window) and confirm the signal has clear R-wave. After a regular heartbeat is picked up by the ECG leads or pulse oximeter, double click on the second numbe..."
        };
        
        

        store['en'][18]= {
        'title': "Acquisition",
        'href': '8809-8826-lms-acquisition-instructions.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners \/ Acquisition"
                , 'snippet': "Please note that: All protocols must be acquired before any contrast agent injection. Note that contrast agents are not necessary for any of the acquisitions. All scans are performed during end-expiration breath-hold, including the Survey scan. Protocol parameters should not be changed. Any changes ..."
        };
        
        

        store['en'][19]= {
        'title': "Localization Protocols",
        'href': '8809-8827-localisation-protocols.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners \/ Acquisition \/ Localization Protocols"
                , 'snippet': "..."
        };
        
        

        store['en'][20]= {
        'title': "Three-plane Survey",
        'href': '8809-8827-localisation-protocols.html#UUID-5626ab4d-1b6b-6e90-d3d9-c30b58326bbe'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners \/ Acquisition \/ Localization Protocols \/ Three-plane Survey"
                , 'snippet': "A three-plane Survey should be run at end-expiration breath-hold to produce at least one sagittal, one coronal and one transversal view of the abdomen. Check that the phased-array coil is positioned to give good SNR over the entire liver. Reposition the coil on the patient if necessary. Low image SN..."
        };
        
        

        store['en'][21]= {
        'title': "Additional Localizers (optional)",
        'href': '8809-8827-localisation-protocols.html#UUID-b967cfbf-82b4-57f5-7cbc-f1ef4dd60781'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners \/ Acquisition \/ Localization Protocols \/ Additional Localizers (optional)"
                , 'snippet': "Additional localizers may be run to acquire axial\/transversal slices to find the right view for subsequent LMS slice positioning...."
        };
        
        

        store['en'][22]= {
        'title': "Liver LMS Imaging Location",
        'href': '8809-8830-lms-imaging-location.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners \/ Acquisition \/ Liver LMS Imaging Location"
                , 'snippet': "..."
        };
        
        

        store['en'][23]= {
        'title': "Base Slice Positioning",
        'href': '8809-8830-lms-imaging-location.html#UUID-7a321804-b241-556e-3527-f102172fdecf'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners \/ Acquisition \/ Liver LMS Imaging Location \/ Base Slice Positioning"
                , 'snippet': "This slice location will be used as the centre for the majority of the sequences. Hence it is imperative to position correctly. The base slice should be positioned such that it intersects the porta hepatis, and it should display the liver, spleen, and may also contain the stomach.  If the lungs are ..."
        };
        
        

        store['en'][24]= {
        'title': "Shimming",
        'href': '8809-8830-lms-imaging-location.html#UUID-de8b4fdc-b0cd-8084-c4c0-3f85466ef7cf'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners \/ Acquisition \/ Liver LMS Imaging Location \/ Shimming"
                , 'snippet': "The shim volume should be centred as shown in  Figure 5 . The F-H direction should cover the entire stack of slices and should be remained as in the protocol. In the R-L and A-P directions, the shim volume can be adapted until the liver is fully covered, excluding as much air as possible. Please als..."
        };
        
        

        store['en'][25]= {
        'title': "Liver LMS IDEAL",
        'href': '8809-8833-liver-lms-ideal.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners \/ Acquisition \/ Liver LMS IDEAL"
                , 'snippet': "This is a 5-slice multi-echo sequence performed at end-expiration breath-hold. The breath-hold lasts approximately 9 seconds. This sequence will be used to generate a PDFF map of the liver. 1. Prescribe the slice stack so that the 3rd slice (middle slice) intersects the porta hepatis. 2. The shim vo..."
        };
        
        

        store['en'][26]= {
        'title': "Liver LMS MOST",
        'href': '8809-8834-liver-lms-most.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners \/ Acquisition \/ Liver LMS MOST"
                , 'snippet': "This is a single -slice multi-echo gradient-echo sequence performed at end-expiration breath-hold. The breath-hold lasts approximately 11 seconds. This sequence will be used to generate a T2* map of the liver. Set the centre of the slice and shim volume identical to LMS IDEAL (same GEO name). Make s..."
        };
        
        

        store['en'][27]= {
        'title': "Liver LMS T2STAR DIXON",
        'href': '8809-8835-liver-lms-t2star-dixon-after-lms-most.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners \/ Acquisition \/ Liver LMS T2STAR DIXON"
                , 'snippet': "This is a single-slice multi-echo gradient-echo sequence performed at end-expiration breath-hold. The breath-hold lasts approximately 10 seconds. This sequence will be used to generate a T2* map of the liver. 1. Set the centre of the slice and the shim volume identical to LMS MOST (same GEO name)...."
        };
        
        

        store['en'][28]= {
        'title': "Liver LMS MOLLI",
        'href': '8809-8836-liver-lms-molli.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners \/ Acquisition \/ Liver LMS MOLLI"
                , 'snippet': "This is a multi-slice, multi-breath-hold, cardiac-gated acquisition performed at end-expiration breath-hold. This scan acquires 5 transverse slices, one slice per breath-hold. Each breath-hold lasts approximately 9-12 seconds. This sequence will be used to generate a T1 map of the liver. After each ..."
        };
        
        

        store['en'][29]= {
        'title': "Data export",
        'href': '8809-8842-data-export.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners \/ Data export"
                , 'snippet': "If the patient registration contains personally identifiable information ( PII ), please refer to the Patient de-Identification Manual for help removing the PII but preserving the private DICOM tags necessary for describing the image acquisition. Private DICOM tags are special tags added by the manu..."
        };
        
        

        store['en'][30]= {
        'title': "Saving DICOM Images for Transfer",
        'href': '8809-8842-data-export.html#UUID-4ac48779-5a17-5384-b49e-bfe30b838703_UUID-a129e8f2-a432-27e1-c87d-29b68bffd4d9'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners \/ Data export \/ Saving DICOM Images for Transfer"
                , 'snippet': "To export data from the Philips MRI Scanner directly, from the <Patient> menu pick <Administration> to open the Patient Administrator. Click on Administration from the Patients tab to export data. The source database or device can be chosen from the top-left corner. The default is the <Local Patient..."
        };
        
        

        store['en'][31]= {
        'title': "Acquisition Checklist",
        'href': '8809-8838-acquisition-checklist.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners \/ Acquisition Checklist"
                , 'snippet': "Step Task Patient information Patient name: Use agreed patient naming scheme Registration ID: Use agreed patient ID naming scheme Date of birth: Use agreed scheme Correct sex, height, weight and exam date Study Comments: Input the initial of the operator. Patient Position: Select the appropriate pos..."
        };
        
        

        store['en'][32]= {
        'title': "Issue Control",
        'href': '8809-8843-lms-issue-control.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners \/ Issue Control"
                , 'snippet': "Issue Details Date Initial 4.0 Conversion to Paligo; Sign-off April 2019 FSN 5.0 Updated the acquisition sequences and added cardiac trace simulator July 2020 FSN..."
        };
        
        

        store['en'][33]= {
        'title': "Approvals",
        'href': '8809-8844-approvals.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ LMS Patient Acquisition Manual for Philips Scanners \/ Approvals"
                , 'snippet': "Head of Imaging Solutions Dr. Alex Smith Head of Imaging Applications Andrea Borghetto..."
        };
        
        

        store['en'][34]= {
        'title': "Hepatica MD Patient Acquisition Manual for Philips Scanners",
        'href': '11157-11157-medical-device-lms-v4-patient-acquisition-manual.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners"
                , 'snippet': "Hepatica MD Patient Acquisition Manual for Philips Scanners Download PDF 2020 Perspectum. All rights reserved. No part of this publication may be reproduced, transmitted, transcribed, stored in a retrieval system or translated into any language or computer language, in any form or by any means, elec..."
        };
        
        

        store['en'][35]= {
        'title': "Glossary",
        'href': '11157-11253-lms-glossary-for-hepatica.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Glossary"
                , 'snippet': "Term Description A-P Anterior-Posterior ARRT The American Registry of Radiologic Technologists B0 Main magnetic field CE Continuing Education CLEAR Constant LEvel AppeaRance DICOM Digital Imaging and Communications in Medicine DOB Date Of Birth ECG ElectroCardioGram F-H Feet-Head FFE Fast Field Echo..."
        };
        
        

        store['en'][36]= {
        'title': "Introduction",
        'href': '11157-11159-lms-introduction.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Introduction"
                , 'snippet': "..."
        };
        
        

        store['en'][37]= {
        'title': "Scope",
        'href': '11157-11160-scope.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Introduction \/ Scope"
                , 'snippet': "This manual is intended to describe the correct procedure to perform the Perspectum set up protocol to an MR operator on Philips scanners. Please use this document as a reference guide when performing the protocol acquisitions. The manual is divided in three main sections: Preparation, Acquisition a..."
        };
        
        

        store['en'][38]= {
        'title': "Continuing Education",
        'href': '11157-11161-continuing-education.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Introduction \/ Continuing Education"
                , 'snippet': "In some territories, such as the USA, this training is eligible for continuing education ( CE ) credit. The CE is sponsored by Perspectum and will be presented by a member of the Imaging Applications team. The presenter’s name, date, and attendees will be written on the Imaging Staff Training Checkl..."
        };
        
        

        store['en'][39]= {
        'title': "Compatibility and Requirements",
        'href': '11157-11162-compatibility-and-requirements.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Introduction \/ Compatibility and Requirements"
                , 'snippet': "All sequences described in this manual require scanner hardware and software to be compliant with all manufacturer’s specifications, especially gradient performance, eddy current compensation, and magnetic field ( B0 ) homogeneity and stability.  The protocols cannot be utilized on scanners outside ..."
        };
        
        

        store['en'][40]= {
        'title': "Volume requirement",
        'href': '11157-11162-compatibility-and-requirements.html#UUID-f0b0723e-26c1-a7cb-15c9-1e1983e24c70'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Introduction \/ Compatibility and Requirements \/ Volume requirement"
                , 'snippet': "The system should have 3D T1 THRIVE sequences available. This will allow a three-dimensional spoiled gradient echo pulse sequence. A multi-echo variant of this sequence with a water-fat separation 3D T1 mDIXON THRIVE  is preferred. The latter allows acquiring in-phase and out-of-phase images in one ..."
        };
        
        

        store['en'][41]= {
        'title': "T1 Mapping Requirement",
        'href': '11157-11162-compatibility-and-requirements.html#UUID-9dbac383-b43b-e2dd-8a23-cedb441eb9cc'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Introduction \/ Compatibility and Requirements \/ T1 Mapping Requirement"
                , 'snippet': "T1 mapping protocols require the manufacturer's clinically approved software product CardiacQuant ...."
        };
        
        

        store['en'][42]= {
        'title': "T2* and Proton Density Fat Fraction Mapping Requirement",
        'href': '11157-11162-compatibility-and-requirements.html#UUID-ef849c84-a821-b768-a9ac-41cc1cfe5d8d'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Introduction \/ Compatibility and Requirements \/ T2* and Proton Density Fat Fraction Mapping Requirement"
                , 'snippet': "The system should also have the Multi-Echo Gradient-Echo package available. This package is offered as a product on most Philips scanners without the need of additional license...."
        };
        
        

        store['en'][43]= {
        'title': "References",
        'href': '11157-11196-references-hepatica.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Introduction \/ References"
                , 'snippet': "Hepatica Supported MR Systems – PDM0384 Image Acquisition Protocols - MRA0671..."
        };
        
        

        store['en'][44]= {
        'title': "Preparation",
        'href': '11157-11166-preparation.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Preparation"
                , 'snippet': "..."
        };
        
        

        store['en'][45]= {
        'title': "Patient Registration",
        'href': '11157-11167-patient-registration.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Preparation \/ Patient Registration"
                , 'snippet': "Ensure the subject is registered to a new MR study. The minimum required information for registering the patient is as follows: Registration ID : <Use agreed on Subject ID Naming Scheme> Patient Name: <Use Agreed Subject Naming Scheme> Date of birth ( DOB ): <Use agreed DOB Scheme> Study Comments: O..."
        };
        
        

        store['en'][46]= {
        'title': "Breath-hold Instructions",
        'href': '11157-11168-breath-hold-instructions.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Preparation \/ Breath-hold Instructions"
                , 'snippet': "Breath-holding should be explained and practised when required because variations in the depth of a subject’s breathing can markedly alter the image quality and the consistency of the abdomen position between acquisitions. End-expiration breath-hold is chosen because breathing out is a more repeatab..."
        };
        
        

        store['en'][47]= {
        'title': "Patient preparation",
        'href': '11157-11169-patient-preparation.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Preparation \/ Patient preparation"
                , 'snippet': "LMS requires end-expiration breath-hold and requires phased-array receiver coils. LMS requires cardiac gating, end-expiration breath-hold and phased-array receiver coils. Please prepare the patient following these steps: Explain and demonstrate the breath-hold instructions as above. Position the pat..."
        };
        
        

        store['en'][48]= {
        'title': "Cardiac Trace Input",
        'href': '11157-11171-cardiac-trace-input.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Preparation \/ Cardiac Trace Input"
                , 'snippet': "Some pulse sequences require cardiac triggering\/gating. This input can be from either the patient or a cardiac trace simulator. Both methods are outlined below...."
        };
        
        

        store['en'][49]= {
        'title': "Cardiac Trace Simulator",
        'href': '11157-11171-cardiac-trace-input.html#UUID-d195d12b-b648-c005-3c21-f5ab956c99d8_UUID-7620cee6-e901-5e06-c74d-8a942bf5fd3b'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Preparation \/ Cardiac Trace Input \/ Cardiac Trace Simulator"
                , 'snippet': "This feature is only available when access to either gyrotest, MRService or MRResearch account is possible. Right click the protocol window and select <control parameter editor>. Under the <General Tab> select <Yes> for <Physiology Simulation>. Set the number of RR intervals to 1 . Set the first RR ..."
        };
        
        

        store['en'][50]= {
        'title': "Cardiac Gating",
        'href': '11157-11171-cardiac-trace-input.html#UUID-d195d12b-b648-c005-3c21-f5ab956c99d8_UUID-b3d67729-a04d-100b-36cd-76d009df5f66'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Preparation \/ Cardiac Trace Input \/ Cardiac Gating"
                , 'snippet': "Use ECG or pulse oximeter to set up the patient's cardiac gating. select the correct trigger source in the gating window (physiology monitoring window) and confirm the signal has clear R-wave. After a regular heartbeat is picked up by the ECG leads or pulse oximeter, double click on the second numbe..."
        };
        
        

        store['en'][51]= {
        'title': "Acquisition",
        'href': '11157-11174-lms-acquisition-instructions.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Acquisition"
                , 'snippet': "Please note that: All protocols must be acquired before any contrast agent injection. Note that contrast agents are not necessary for any of the acquisitions. All scans are performed during end-expiration breath-hold, including the Survey scan. Protocol parameters should not be changed. Any changes ..."
        };
        
        

        store['en'][52]= {
        'title': "Localization Protocols",
        'href': '11157-11175-localisation-protocols.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Acquisition \/ Localization Protocols"
                , 'snippet': "..."
        };
        
        

        store['en'][53]= {
        'title': "Three-plane Survey",
        'href': '11157-11175-localisation-protocols.html#UUID-e834073b-f0b1-3ed6-6730-5921de7a8248'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Acquisition \/ Localization Protocols \/ Three-plane Survey"
                , 'snippet': "A three-plane Survey should be run at end-expiration breath-hold to produce at least one sagittal, one coronal and one transversal view of the abdomen. Check that the phased-array coil is positioned to give good SNR over the entire liver. Reposition the coil on the patient if necessary. Low image SN..."
        };
        
        

        store['en'][54]= {
        'title': "Additional Localizers (optional)",
        'href': '11157-11175-localisation-protocols.html#UUID-cbd466de-fb8b-df3d-e6dc-0cf8e94bc3a2'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Acquisition \/ Localization Protocols \/ Additional Localizers (optional)"
                , 'snippet': "Additional localizers may be run to acquire axial\/transversal slices to find the right view for subsequent LMS slice positioning...."
        };
        
        

        store['en'][55]= {
        'title': "Volume Acquisition",
        'href': '11157-11197-volume-acquisition.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Acquisition \/ Volume Acquisition"
                , 'snippet': "LMS Volume: This acquisition is a THRIVE sequence with full coverage of the entire liver volume. This volumetric scan requires a breath-hold of approximately 15 seconds and is not cardiac-gated. Alter the centre of the image volume so that the entire craniocaudal extent of the liver and spleen is ca..."
        };
        
        

        store['en'][56]= {
        'title': "Liver LMS Imaging Location",
        'href': '11157-11178-lms-imaging-location.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Acquisition \/ Liver LMS Imaging Location"
                , 'snippet': "..."
        };
        
        

        store['en'][57]= {
        'title': "Base Slice Positioning",
        'href': '11157-11178-lms-imaging-location.html#UUID-488ead34-ba2e-a663-ab29-07d5498bccaa'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Acquisition \/ Liver LMS Imaging Location \/ Base Slice Positioning"
                , 'snippet': "This slice location will be used as the centre for the majority of the sequences. Hence it is imperative to position correctly. The base slice should be positioned such that it intersects the porta hepatis, and it should display the liver, spleen, and may also contain the stomach.  If the lungs are ..."
        };
        
        

        store['en'][58]= {
        'title': "Shimming",
        'href': '11157-11178-lms-imaging-location.html#UUID-f0d80850-abe7-8cd5-e87c-d94cc442d593'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Acquisition \/ Liver LMS Imaging Location \/ Shimming"
                , 'snippet': "The shim volume should be centred as shown in  Figure 5 . The F-H direction should cover the entire stack of slices and should be remained as in the protocol. In the R-L and A-P directions, the shim volume can be adapted until the liver is fully covered, excluding as much air as possible. Please als..."
        };
        
        

        store['en'][59]= {
        'title': "Liver LMS IDEAL",
        'href': '11157-11181-liver-lms-ideal.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Acquisition \/ Liver LMS IDEAL"
                , 'snippet': "This is a 5-slice multi-echo sequence performed at end-expiration breath-hold. The breath-hold lasts approximately 9 seconds. This sequence will be used to generate a PDFF map of the liver. 1. Prescribe the slice stack so that the 3rd slice (middle slice) intersects the porta hepatis. 2. The shim vo..."
        };
        
        

        store['en'][60]= {
        'title': "Liver LMS MOST",
        'href': '11157-11182-liver-lms-most.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Acquisition \/ Liver LMS MOST"
                , 'snippet': "This is a single -slice multi-echo gradient-echo sequence performed at end-expiration breath-hold. The breath-hold lasts approximately 11 seconds. This sequence will be used to generate a T2* map of the liver. Set the centre of the slice and shim volume identical to LMS IDEAL (same GEO name). Make s..."
        };
        
        

        store['en'][61]= {
        'title': "Liver LMS T2STAR DIXON",
        'href': '11157-11183-liver-lms-t2star-dixon-after-lms-most.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Acquisition \/ Liver LMS T2STAR DIXON"
                , 'snippet': "This is a single-slice multi-echo gradient-echo sequence performed at end-expiration breath-hold. The breath-hold lasts approximately 10 seconds. This sequence will be used to generate a T2* map of the liver. 1. Set the centre of the slice and the shim volume identical to LMS MOST (same GEO name)...."
        };
        
        

        store['en'][62]= {
        'title': "Liver LMS MOLLI",
        'href': '11157-11184-liver-lms-molli.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Acquisition \/ Liver LMS MOLLI"
                , 'snippet': "This is a multi-slice, multi-breath-hold, cardiac-gated acquisition performed at end-expiration breath-hold. This scan acquires 5 transverse slices, one slice per breath-hold. Each breath-hold lasts approximately 9-12 seconds. This sequence will be used to generate a T1 map of the liver. After each ..."
        };
        
        

        store['en'][63]= {
        'title': "Data Export",
        'href': '11157-11185-data-export.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Data Export"
                , 'snippet': "Upload Single Compressed File Please compress all sets of data for the same patient into one file and proceed with the upload. Please follow the arrangement for personally identifiable information ( PII ) as agreed for your site, as the removal of PII may not be necessary for your site. If the patie..."
        };
        
        

        store['en'][64]= {
        'title': "Saving DICOM Images for Transfer",
        'href': '11157-11185-data-export.html#UUID-a8e69848-d343-f85b-36ae-4be6851fb166_UUID-a129e8f2-a432-27e1-c87d-29b68bffd4d9'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Data Export \/ Saving DICOM Images for Transfer"
                , 'snippet': "To export data from the Philips MRI Scanner directly, from the <Patient> menu pick <Administration> to open the Patient Administrator. Click on Administration from the Patients tab to export data. The source database or device can be chosen from the top-left corner. The default is the <Local Patient..."
        };
        
        

        store['en'][65]= {
        'title': "Acquisition Checklist",
        'href': '11157-11251-acquisition-checklist.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Acquisition Checklist"
                , 'snippet': "Step Task Patient information Patient name: Use agreed patient naming scheme Registration ID: Use agreed patient ID naming scheme Date of birth: Use agreed scheme Correct sex, height, weight and exam date Study Comments: Input the initial of the operator. Patient Position: Select the appropriate pos..."
        };
        
        

        store['en'][66]= {
        'title': "Issue control",
        'href': '11157-11966-issue-control-hepatica-md.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Issue control"
                , 'snippet': "Issue Details Date Initial 1.0 New document Oct 26, 2020 FSN 2.0 Correct MOLLI slice number Aug 20, 2021 FSN..."
        };
        
        

        store['en'][67]= {
        'title': "Approvals",
        'href': '11157-11188-approvals-lms-md-v4.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Hepatica MD Patient Acquisition Manual for Philips Scanners \/ Approvals"
                , 'snippet': "Job title Name Signature Chief Operating Officer Dr. Rexford Newbould Chief Technical Officer Prof. Matthew Robson Chief Quality and Regulatory Compliance Officer Dr. Jaco Jacobs Product Manager Dr. Sean Pollock..."
        };
        
        

        store['en'][68]= {
        'title': "CoverScan MD Patient Acquisition Manual for Philips Scanners",
        'href': '10960-10960-coverscan-patient-acquisition-manual-for-scanners.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners"
                , 'snippet': "CoverScan MD Patient Acquisition Manual for Philips Scanners Download PDF 2021 Perspectum Ltd. All rights reserved. No part of this publication may be reproduced, transmitted, transcribed, stored in a retrieval system or translated into any language or computer language, in any form or by any means,..."
        };
        
        

        store['en'][69]= {
        'title': "Glossary",
        'href': '10960-14021-glossary.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Glossary"
                , 'snippet': "adiab. adiabatic VAT Visceral Adipose Tissue FLASH Fast Low Angle SHot NOLLI Non-MOLLI LMM Lean Muscle Mass FSE BB Black Blood Fast Spin Echo FISP Fast Imaging with Steady-tate free Precession FIESTA Fast Imaging Employing STeady-state Acquisition ZIP Zero Interpolation Filling EDR Extended Dynamic ..."
        };
        
        

        store['en'][70]= {
        'title': "Introduction",
        'href': '10960-14145-lms-introduction.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Introduction"
                , 'snippet': "..."
        };
        
        

        store['en'][71]= {
        'title': "Scope",
        'href': '10960-14112-scope.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Introduction \/ Scope"
                , 'snippet': "This manual is intended to describe the correct procedure to perform the Perspectum Ltd. set up protocol to an MR operator on Philips scanners. Please use this document as a reference guide when performing the protocol acquisitions. The manual is divided in three main sections: Preparation, Acquisit..."
        };
        
        

        store['en'][72]= {
        'title': "Continuing Education",
        'href': '10960-14373-continuing-education.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Introduction \/ Continuing Education"
                , 'snippet': "In some territories, such as the USA, this training is eligible for continuing education ( CE ) credit. The CE is sponsored by Perspectum and will be presented by a member of the Imaging Applications team. The presenter’s name, date, and attendees will be written on the Imaging Staff Training Checkl..."
        };
        
        

        store['en'][73]= {
        'title': "Compatibility and Requirements",
        'href': '10960-11121-compatibility-and-requirements.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Introduction \/ Compatibility and Requirements"
                , 'snippet': "All sequences described in this manual require scanner hardware and software to be compliant with all manufacturer’s specifications, especially gradient performance, eddy current compensation, and magnetic field ( B0 ) homogeneity and stability.  The protocols cannot be utilized on scanners outside ..."
        };
        
        

        store['en'][74]= {
        'title': "T1 Mapping and Cardiac Imaging Requirement",
        'href': '10960-11121-compatibility-and-requirements.html#UUID-8baa30c4-a35d-06db-b801-7654a31ace6f'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Introduction \/ Compatibility and Requirements \/ T1 Mapping and Cardiac Imaging Requirement"
                , 'snippet': "T1 mapping and cardiac imaging protocols require the manufacturer's clinically approved software product CardiacQuant ...."
        };
        
        

        store['en'][75]= {
        'title': "T2* and Proton Density Fat Fraction Mapping Requirement",
        'href': '10960-11121-compatibility-and-requirements.html#UUID-38a1dc0a-4384-818b-6816-7233a8eea3d3'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Introduction \/ Compatibility and Requirements \/ T2* and Proton Density Fat Fraction Mapping Requirement"
                , 'snippet': "The system should also have the Multi-Echo Gradient-Echo package available. This package is offered as a product on most Philips scanners without the need of additional license...."
        };
        
        

        store['en'][76]= {
        'title': "Volume requirement",
        'href': '10960-11121-compatibility-and-requirements.html#UUID-da20bcce-d385-534a-2f25-55ef2834f14f'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Introduction \/ Compatibility and Requirements \/ Volume requirement"
                , 'snippet': "The system should have 3D T1 THRIVE sequences available. This will allow a three-dimensional spoiled gradient echo pulse sequence. A multi-echo variant of this sequence with a water-fat separation 3D T1 mDIXON THRIVE  is preferred. The latter allows acquiring in-phase and out-of-phase images in one ..."
        };
        
        

        store['en'][77]= {
        'title': "Coil requirement",
        'href': '10960-11121-compatibility-and-requirements.html#UUID-555c4222-02f2-67cd-e933-03b54cf111a1'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Introduction \/ Compatibility and Requirements \/ Coil requirement"
                , 'snippet': "Integrated spine array coil Flex array coil(s) placed on the chest\/abdomen. Ensure the flex array coil covers from the top of the lung to the lower pole of the kidneys. Sufficient coverage will depend on the patient size and the coil length. If one coil does not cover the region of interest as showe..."
        };
        
        

        store['en'][78]= {
        'title': "Cardiac trace simulator Requirement",
        'href': '10960-11121-compatibility-and-requirements.html#UUID-07caa486-4a67-dfa4-3857-faea48993be8'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Introduction \/ Compatibility and Requirements \/ Cardiac trace simulator Requirement"
                , 'snippet': "A cardiac trace simulator is used to acquire the T1 mapping sequences ( MOLLI ). If this is not available at the scanner the patient's ECG signal can be used instead...."
        };
        
        

        store['en'][79]= {
        'title': "Cardiac trace input Requirement",
        'href': '10960-11121-compatibility-and-requirements.html#UUID-61b750f3-2dd8-398c-a9f8-f423da850354'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Introduction \/ Compatibility and Requirements \/ Cardiac trace input Requirement"
                , 'snippet': "The scanner ECG gating is required to perform the cardiac acquisitions. The MR safe ECG electrodes and sensor will be connected to the patient's chest during the scan session...."
        };
        
        

        store['en'][80]= {
        'title': "Patient Registration",
        'href': '10960-10969-patient-registration.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Patient Registration"
                , 'snippet': "Ensure the subject is registered to a new MR study. The minimum required information for registering the patient is as follows: Registration ID : <Use agreed on Subject ID Naming Scheme> Patient Name: <Use Agreed Subject Naming Scheme> Date of birth ( DOB ): <Use agreed DOB Scheme> Study Comments: O..."
        };
        
        

        store['en'][81]= {
        'title': "Pre-Scan Preparation",
        'href': '10960-10970-pre-scan-preparation.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Pre-Scan Preparation"
                , 'snippet': "..."
        };
        
        

        store['en'][82]= {
        'title': "Patient positioning",
        'href': '10960-11108-patient-positioning.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Pre-Scan Preparation \/ Patient positioning"
                , 'snippet': "Patient should be positioned head-first supine with both arms by their side. Scanner isocenter should be landmarked on the xiphisternum of the patient. Setup ECG gating with the electrodes and sensor. Check that the signal has a clear R-wave triggering...."
        };
        
        

        store['en'][83]= {
        'title': "Breathing Instructions",
        'href': '10960-10972-breathing-instructions.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Pre-Scan Preparation \/ Breathing Instructions"
                , 'snippet': "Breath-holding should be explained and practiced before any data acquisition since variations in the depth of a subject’s breathing can markedly alter the image quality and the consistency of the abdomen position between acquisitions. End-expiration breath-hold is chosen, as breathing out is a more ..."
        };
        
        

        store['en'][84]= {
        'title': "Acquisition guide",
        'href': '10960-11109-acquisition-guide.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Acquisition guide"
                , 'snippet': "Please note that: All protocols must be acquired before any contrast agent injection. Note that contrast agents are not necessary for any of the acquisitions All scans are performed during end-expiration breath-hold, including the Survey scan. Protocol parameters should not be changed. Any changes n..."
        };
        
        

        store['en'][85]= {
        'title': "Cardiac Trace Simulator",
        'href': '10960-11109-acquisition-guide.html#UUID-2b3a064e-5dd0-f56c-0bfa-34ab704e22bd_UUID-7620cee6-e901-5e06-c74d-8a942bf5fd3b'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Acquisition guide \/ Cardiac Trace Simulator"
                , 'snippet': "This feature is only available when access to either gyrotest, MRService or MRResearch account is possible. Right click the protocol window and select <control parameter editor>. Under the <General Tab> select <Yes> for <Physiology Simulation>. Set the number of RR intervals to 1 . Set the first RR ..."
        };
        
        

        store['en'][86]= {
        'title': "Three-plane Survey",
        'href': '10960-11128-three-plane.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Acquisition guide \/ Three-plane Survey"
                , 'snippet': "A three-plane Survey should be run in expiration breath-hold to produce at least one sagittal, one coronal and one transverse view of the abdomen...."
        };
        
        

        store['en'][87]= {
        'title': "Liver to Kidney CoverScan mDIXON THRIVE",
        'href': '10960-13979-liver-to-kidney.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Acquisition guide \/ Liver to Kidney CoverScan mDIXON THRIVE"
                , 'snippet': "This is a 3D spoiled gradient echo acquisition performed at end-expiration breath-hold and lasts approximately 15 seconds. This acquisition will be used to measure the length and\/or volume of the liver and kidney. Use the localizer images as the planning images Prescribe the axial mDIXON THRIVE slab..."
        };
        
        

        store['en'][88]= {
        'title': "Liver LMS Sequences",
        'href': '10960-10976-liver-lms-sequences.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Acquisition guide \/ Liver LMS Sequences"
                , 'snippet': "Liver LMS IDEAL (5 slices) : Prescribe the slice stack such that the 3rd slice (middle slice) of the stack intersects the porta hepatis. It should display the liver, spleen, and may also contain the stomach. The shim volume can be adapted in the R-L and A-P directions as long as the entire liver and..."
        };
        
        

        store['en'][89]= {
        'title': "Pancreas MOLLI",
        'href': '10960-13991-pancreas-molli.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Acquisition guide \/ Pancreas MOLLI"
                , 'snippet': "This is a single slice acquisition performed at end-expiration breath-hold and lasts approximately 14 seconds. This acquisition will be used to generate a T1 map of the pancreas slice. To plan this acquisition, use the 3-Point Planscan to create an axial-oblique plane with the following steps: Load ..."
        };
        
        

        store['en'][90]= {
        'title': "Pancreas CoverScan IDEAL",
        'href': '10960-14003-pancreas-ideal.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Acquisition guide \/ Pancreas CoverScan IDEAL"
                , 'snippet': "This is multi-slice, multi-echo gradient echo acquisition performed during end-expiration breath-hold and lasts approximately 15 seconds. This acquisition will be used to generate a PDFF map of the pancreas. Run the Pancreas CoverScan IDEAL sequence with the same GEO name as the Pancreas CoverScan M..."
        };
        
        

        store['en'][91]= {
        'title': "Kidneys MOLLI",
        'href': '10960-11024-kidneys-molli.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Acquisition guide \/ Kidneys MOLLI"
                , 'snippet': "This is a single slice acquisition performed at end-expiration breath-hold and lasts approximately 14 seconds. This acquisition will be used to generate a T1 map of the kidneys. Load the Liver to Kidney mDIXON THRIVE images and the localizer coronal image as the planning images. Prescribe the imagin..."
        };
        
        

        store['en'][92]= {
        'title': "Cardiac Trace Simulator Off and Coil Coverage Adjustment",
        'href': '10960-11155-cardiac-trace-simulator-off-and-coil-coverage-adjustment.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Acquisition guide \/ Cardiac Trace Simulator Off and Coil Coverage Adjustment"
                , 'snippet': "The sequences from now on will require the cardiac trace input. Make sure to turn off the heart trace simulator prior to acquiring these sequences. If cardiac simulation is available at the site it should be turned off at this step using the following instructions: Right click the protocol window an..."
        };
        
        

        store['en'][93]= {
        'title': "Cardiac Planning Localizer",
        'href': '10960-10984-cardiac-planning-localiser.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Acquisition guide \/ Cardiac Planning Localizer"
                , 'snippet': "The localizers acquired here will be used for planning the cardiac imaging and is acquired during expiration breath-hold. Position this localizer so that the heart is at the centre of all three imaging planes. Cardiac planning localizer prescription..."
        };
        
        

        store['en'][94]= {
        'title': "Two Chamber",
        'href': '10960-10985-two-chamber-localiser--vertical-long-axis---vla-.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Acquisition guide \/ Two Chamber"
                , 'snippet': "This is an ECG gated balanced steady-state free precession sequence (bright blood is preferred). 1. Prescribe the slice as shown in Figure 26 and make sure the slice is: Parallel to the interventricular septum Cutting through the mid-point of the mitral valve Cutting through the left ventricular ape..."
        };
        
        

        store['en'][95]= {
        'title': "Four Chamber",
        'href': '10960-10986-four-chamber-localiser--horizontal-long-axis---hla-.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Acquisition guide \/ Four Chamber"
                , 'snippet': "This is an ECG gated balanced steady-state free precession sequence (bright blood is preferred). 1. Plan this sequence using the two chamber acquisition as shown in Figure 27 and make sure the slice is: Cutting through the mid-point of the mitral valve Cutting through the left ventricular apex 2. En..."
        };
        
        

        store['en'][96]= {
        'title': "Short Axis Stack",
        'href': '10960-10987-short-axis-stack-localiser.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Acquisition guide \/ Short Axis Stack"
                , 'snippet': "This is an ECG gated balanced steady-state free precession sequence (bright blood is preferred). 1. Plan this sequence using the two chamber and four chamber acquisitions as shown in Figure 28 and make sure the slice: Covers from the mid atrium to the apex of both ventricles entirely. Parallel to th..."
        };
        
        

        store['en'][97]= {
        'title': "Cine acquisitions",
        'href': '10960-14347-cine-acquisitions.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Acquisition guide \/ Cine acquisitions"
                , 'snippet': "These acquisitions are done using retrospective ECG gating and expiration breath-hold. Prospective ECG gating can also be used for difficult ECG traces. Ensure the shim box only covers the heart for all these acquisitions...."
        };
        
        

        store['en'][98]= {
        'title': "HLA (Horizontal Long Axis) Cine",
        'href': '10960-14347-cine-acquisitions.html#UUID-a9a4d123-a3df-1e8e-e8f0-52ead0d1e9ce'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Acquisition guide \/ Cine acquisitions \/ HLA (Horizontal Long Axis) Cine"
                , 'snippet': "1. Plan this sequence using the two chamber and the short axis stack acquisitions as shown in Figure 29, and ensure: The positioning is through the maximum lateral dimensions of both ventricles Avoid the left ventricular outflow tract ( LVOT ) as shown in the Tip below Cut through the mid-point of t..."
        };
        
        

        store['en'][99]= {
        'title': "VLA (Vertical Long Axis) Cine",
        'href': '10960-14347-cine-acquisitions.html#UUID-3d9c5616-a353-2a48-ec0c-674a8edcd8fa'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Acquisition guide \/ Cine acquisitions \/ VLA (Vertical Long Axis) Cine"
                , 'snippet': "1. Plan this sequence using the HLA cine and short axis stack images as shown in Figure 30, and make sure: The positioning is through the maximum dimensions of the left ventricle, approximately parallel to the interventricular septum and to the insertion points of the right ventricle Cut through the..."
        };
        
        

        store['en'][100]= {
        'title': "Short Axis Stack Cine",
        'href': '10960-14347-cine-acquisitions.html#UUID-0e998dcd-b56e-308f-d10c-5fdf3524a0e9'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Acquisition guide \/ Cine acquisitions \/ Short Axis Stack Cine"
                , 'snippet': "1. Plan this sequence using the HLA and VLA cine acquisitions as shown in Figure 31 make sure: Use a late diastole frame on both HLA and VLA cine images Plan the basal slice through the atrioventricular groove ( AV groove ) Cover the entire ventricles by running a multi-slice stack from base to apex..."
        };
        
        

        store['en'][101]= {
        'title': "Cardiac T1 Map",
        'href': '10960-10992-cardiac-t1-map.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Acquisition guide \/ Cardiac T1 Map"
                , 'snippet': "T1 mapping will be acquired at three different levels along the left ventricle: basal, mid, and apex. Make sure all three acquisitions are acquired at the same cardiac phase. Note that trigger delay and acquisition window should not be changed if not strictly necessary. Ideally, acquire the sequence..."
        };
        
        

        store['en'][102]= {
        'title': "Cardiac T2 Map",
        'href': '10960-14057-cardiac-t2-map.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Acquisition guide \/ Cardiac T2 Map"
                , 'snippet': "T2 mapping acquisitions should resemble the locations as per Cardiac T1 Map: basal, mid and apex slices. Make sure all three acquisitions are acquired at the same cardiac phase. Note that trigger delay and acquisition window should not be changed if not strictly necessary. Ideally, acquire the seque..."
        };
        
        

        store['en'][103]= {
        'title': "Lung Planning Localizer",
        'href': '10960-14422-lung-planning-localiser.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Acquisition guide \/ Lung Planning Localizer"
                , 'snippet': "The localizers acquired here will be used for planning the lung imaging and are acquired during expiration breath-hold. Position the sagittal and coronal localizers centred at the apex of the lung so that the largest dimension of the lung can be visualized. Lung planning localizer prescription..."
        };
        
        

        store['en'][104]= {
        'title': "Lung Imaging",
        'href': '10960-14123-lung-imaging.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Acquisition guide \/ Lung Imaging"
                , 'snippet': "This acquisition lasts approximately 30 seconds and aims to acquire the dynamic coronal views of both lungs in deep inspiration and deep expiration. Prior to starting the acquisition, instruct the patient to \"continuously breathe deeply in and out at a steady pace during the scan\" Coronal view slice..."
        };
        
        

        store['en'][105]= {
        'title': "Data Export",
        'href': '10960-11106-data-export.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Data Export"
                , 'snippet': "Upload Single Compressed File Please compress all sets of data for the same patient into one file and proceed with the upload. Please follow the arrangement for personally identifiable information ( PII ) as agreed for your site, as the removal of PII may not be necessary for your site. If the patie..."
        };
        
        

        store['en'][106]= {
        'title': "Saving DICOM Images for Transfer",
        'href': '10960-11106-data-export.html#UUID-39462f19-1576-2e01-a079-a02a619c0a1d_UUID-a129e8f2-a432-27e1-c87d-29b68bffd4d9'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Data Export \/ Saving DICOM Images for Transfer"
                , 'snippet': "To export data from the Philips MRI Scanner directly, from the <Patient> menu pick <Administration> to open the Patient Administrator. Click on Administration from the Patients tab to export data. The source database or device can be chosen from the top-left corner. The default is the <Local Patient..."
        };
        
        

        store['en'][107]= {
        'title': "Acquisition checklist",
        'href': '10960-11070-acquisition-checklist.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Acquisition checklist"
                , 'snippet': "Prior to scan Attach ECG triggering device to the patient List of sequences Set up cardiac trace simulator Whole body Survey Liver to Kidney CoverScan mDIXON THRIVE Liver LMS IDEAL Liver LMS MOST Liver LMS T2STAR DIXON Liver LMS MOLLI 1st Slice Liver LMS MOLLI 2nd Slice Pancreas CoverScan MOLLI Panc..."
        };
        
        

        store['en'][108]= {
        'title': "Approvals",
        'href': '10960-10997-approvals.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ CoverScan MD Patient Acquisition Manual for Philips Scanners \/ Approvals"
                , 'snippet': "Head of Imaging Solutions Dr. Alex Smith Head of Imaging Applications Andrea Borghetto..."
        };
        
        

        store['en'][109]= {
        'title': "Patient De-Identification Manual for Philips Scanners",
        'href': '14958-14958-patient-de-identification-manual.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Patient De-Identification Manual for Philips Scanners"
                , 'snippet': "Patient De-Identification Manual for Philips Scanners Download PDF MRA0252 2021 Perspectum Ltd All rights reserved. No part of this publication may be reproduced, transmitted, transcribed, stored in a retrieval system or translated into any language or computer language, in any form or by any means,..."
        };
        
        

        store['en'][110]= {
        'title': "De-Identification Introduction",
        'href': '14958-14959-de-identification-intro.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Patient De-Identification Manual for Philips Scanners \/ De-Identification Introduction"
                , 'snippet': "This document describes the correct procedure to de-identify patient identifiable information( PII ) on Philips MRI scanners on the console and offline...."
        };
        
        

        store['en'][111]= {
        'title': "Compatibility",
        'href': '14958-14960-compatibility.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Patient De-Identification Manual for Philips Scanners \/ Compatibility"
                , 'snippet': "The procedures described in this document are compatible with MRI-scanners support by LiverMultiscan as described in System Requirements – MRA001...."
        };
        
        

        store['en'][112]= {
        'title': "De-Identification - On Console",
        'href': '14958-14961-de-identification---on-console.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Patient De-Identification Manual for Philips Scanners \/ De-Identification - On Console"
                , 'snippet': "Follow the steps described below to edit patient identifiable information. Close the patient in all task and processes Select the patient that is to be corrected from the Patient Administration Tab        Select Modify Select the Presentation Mode tick box, this will change the text colour from grey..."
        };
        
        

        store['en'][113]= {
        'title': "De-Identification - Offline Mac",
        'href': '14958-14962-de-identification---offline-mac.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Patient De-Identification Manual for Philips Scanners \/ De-Identification - Offline Mac"
                , 'snippet': "We recommend the use of open-source programs such as Horos or OsiriX to de-identify data. Select the DICOM dataset you want to de-identify into Horos or OsiriX after loading into Document Data Base. Click Anonymize as shown in Figure 39 left Correct the patient information to the appropriate identif..."
        };
        
        

        store['en'][114]= {
        'title': "De-Identification - Offline Windows",
        'href': '14958-14963-de-identification---offline-windows.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Patient De-Identification Manual for Philips Scanners \/ De-Identification - Offline Windows"
                , 'snippet': "We recommend the use of open source program such as DicomCleaner™ to de-identify data. Follow the steps described below, to edit patient information. Import the dataset to de-identify as shown in Figure 40DicomCleaner de-identification for Windows system. Import data to de-identify Check Replace box..."
        };
        
        

        store['en'][115]= {
        'title': "Approvals",
        'href': '14958-14964-approvals.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Patient De-Identification Manual for Philips Scanners \/ Approvals"
                , 'snippet': "Head of Imaging Solutions Dr. Alex Smith Head of Imaging Applications Andrea Borghetto..."
        };
        
        

        store['en'][116]= {
        'title': "Artefact Troubleshooting Center",
        'href': '17031-17031-image-artefact-troubleshooting.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Artefact Troubleshooting Center"
                , 'snippet': "Artefact Troubleshooting Center Download PDF Imaging Artefact Trouble Shooting If you need help regarding image acquisition troubleshooting, please contact Imaging.Applications@perspectum.com Customer Feedback If you would like to provide any feedback, please send to feedback@perspectum.com . We app..."
        };
        
        

        store['en'][117]= {
        'title': "MR Troubleshooting",
        'href': '17031-18573-mr-troubleshooting.html'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Artefact Troubleshooting Center \/ MR Troubleshooting"
                , 'snippet': "..."
        };
        
        

        store['en'][118]= {
        'title': "Mistriggering",
        'href': '17031-18573-mr-troubleshooting.html#UUID-a1a9588f-85cd-1538-6579-3cbdde11efd1_UUID-372654a3-7cce-b030-5a33-bd365a364e2c'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Artefact Troubleshooting Center \/ MR Troubleshooting \/ Mistriggering"
                , 'snippet': "If ECG or PPU triggering is used for some of the sequences, during the acquisition of these sequences, it is most important that the captured heartbeat is a corrected representation of the patient's heartbeat as displayed in Figure 43. When trigger points are missed or trigger points are captured th..."
        };
        
        

        store['en'][119]= {
        'title': "Banding artefact",
        'href': '17031-18573-mr-troubleshooting.html#UUID-a1a9588f-85cd-1538-6579-3cbdde11efd1_UUID-9287f69a-9b5b-f502-8594-5c11d078f8a4'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Artefact Troubleshooting Center \/ MR Troubleshooting \/ Banding artefact"
                , 'snippet': "Banding artefacts appear as black bands in the LMS MOLLI sequence due to high field heterogeneity. An example is shown in  Figure 44. If black bands appear in the liver, please repeat the acquisition after following the adjustments listed in the  shimming section. It is important to check for bandin..."
        };
        
        

        store['en'][120]= {
        'title': "Motion and Breathing Artefact",
        'href': '17031-18573-mr-troubleshooting.html#UUID-a1a9588f-85cd-1538-6579-3cbdde11efd1_section-idm4565506134940832585741151875'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Artefact Troubleshooting Center \/ MR Troubleshooting \/ Motion and Breathing Artefact"
                , 'snippet': "Motion and breathing: The image will need to be re-acquired if there is a motion artefact due to breathing as shown in Figure 45. If the Liver and Spleen Volume image shows motion artefacts due to breathing, re-acquire the image...."
        };
        
        

        store['en'][121]= {
        'title': "Susceptibility Artefact",
        'href': '17031-18573-mr-troubleshooting.html#UUID-a1a9588f-85cd-1538-6579-3cbdde11efd1_section-idm4536192807734432585738166007'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Artefact Troubleshooting Center \/ MR Troubleshooting \/ Susceptibility Artefact"
                , 'snippet': "Susceptibility Artefacts Magnetic susceptibility artefacts appear due to: poor shim, proximity to the lungs, bowel gas or metallic implants. Susceptibility artefacts in the liver will preclude accurate parameter estimation in the areas affected as shown in Figure 46. Susceptibility artefacts will ap..."
        };
        
        

        store['en'][122]= {
        'title': "Cropped FOV",
        'href': '17031-18573-mr-troubleshooting.html#UUID-a1a9588f-85cd-1538-6579-3cbdde11efd1_section-idm4585051873084832585739575688'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Artefact Troubleshooting Center \/ MR Troubleshooting \/ Cropped FOV"
                , 'snippet': "FOV Cropped FOV coverage : If the acquired image doesn't cover the whole liver or the whole spleen, as an example shown in Figure 47, increase the number of slices and ensure the entire craniocaudal extent of the liver and spleen is covered. The slice thickness should NOT be changed. The Dome of the..."
        };
        
        

        store['en'][123]= {
        'title': "MRCP Artefact Trouble Shooting",
        'href': '17031-18573-mr-troubleshooting.html#UUID-a1a9588f-85cd-1538-6579-3cbdde11efd1_section-idm4599121705856032585690076904'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Artefact Troubleshooting Center \/ MR Troubleshooting \/ MRCP Artefact Trouble Shooting"
                , 'snippet': "Motion artefact is one of the most common artefacts in the acquisition of a 3D MRCP series. This can be caused due to incorrect breathing patterns and\/or patient movement during the scan. Motion artefact can lead to ghosts ducts, ducts with incorrect width (leading to duct diameter higher than the r..."
        };
        
        

        store['en'][124]= {
        'title': "MR Elastography Troubleshooting",
        'href': '17031-18573-mr-troubleshooting.html#UUID-a1a9588f-85cd-1538-6579-3cbdde11efd1_UUID-671fb286-0268-2421-cd99-a87cd4750c73'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Artefact Troubleshooting Center \/ MR Troubleshooting \/ MR Elastography Troubleshooting"
                , 'snippet': "The periphery and\/or the central part of the liver may be blacked out on the confidence map. This could be caused by several reasons which are described as following:..."
        };
        
        

        store['en'][125]= {
        'title': "Patient Compliance",
        'href': '17031-18573-mr-troubleshooting.html#UUID-a1a9588f-85cd-1538-6579-3cbdde11efd1_section-idm4578778849864032575602524751'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Artefact Troubleshooting Center \/ MR Troubleshooting \/ MR Elastography Troubleshooting \/ Patient Compliance"
                , 'snippet': "The patient may not have followed instructions with regards to motion and\/or breath-hold. Make sure the patient is aware of the instructions. Repeat the acquisition if necessary...."
        };
        
        

        store['en'][126]= {
        'title': "Incorrect Passive Driver (drum) Placement",
        'href': '17031-18573-mr-troubleshooting.html#UUID-a1a9588f-85cd-1538-6579-3cbdde11efd1_section-idm4567920414232032575601856331'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Artefact Troubleshooting Center \/ MR Troubleshooting \/ MR Elastography Troubleshooting \/ Incorrect Passive Driver (drum) Placement"
                , 'snippet': "When the drum is placed incorrectly and\/or insecurely, the propagation of waves can be poor and thus resulting in small usable regions on the stiffness maps. Re-position the drum as explained in MRE Passive Driver Placement and re-acquire the acquisition. Figure 54 displays the favourable driver (dr..."
        };
        
        

        store['en'][127]= {
        'title': "Technical Issues",
        'href': '17031-18573-mr-troubleshooting.html#UUID-a1a9588f-85cd-1538-6579-3cbdde11efd1_section-idm4613673220020832575601154457'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Artefact Troubleshooting Center \/ MR Troubleshooting \/ MR Elastography Troubleshooting \/ Technical Issues"
                , 'snippet': "Confirm that all the receiver coils, the drum (passive driver) and the paddle are well connected and in proper working condition. Confirm that the patient felt the vibrations of the drum during acquisition. Confirm that the drum is secured tightly by the MRE band. Confirm that MRE equipment (active ..."
        };
        
        

        store['en'][128]= {
        'title': "Insufficient SNR",
        'href': '17031-18573-mr-troubleshooting.html#UUID-a1a9588f-85cd-1538-6579-3cbdde11efd1_section-idm4567920250217632575599222351'
        
            , 'breadcrumbs': "Philips Acquisition Manuals Center \/ Artefact Troubleshooting Center \/ MR Troubleshooting \/ MR Elastography Troubleshooting \/ Insufficient SNR"
                , 'snippet': "The lack of signal might be caused by several factors.  Ensure the correct RF receiver coil has been selected in the prescription. The patient might suffer from iron overload in the liver. If this is the case, acquire the data with a SE based acquisition ( Figure 55). Please make sure to use SE-EPI-..."
        };
        
        


            });

            $(document).trigger('search.ready');
       }); 

        