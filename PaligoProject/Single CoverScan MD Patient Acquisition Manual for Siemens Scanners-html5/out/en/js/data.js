store['en'] = {};


        $(document).ready(function () {
        
            
            indexDict['en']  = lunr(function () {

            

                this.field('title', {boost: 10});
                this.field('body');
                this.ref('id');
            

        
this.add({id:1, 
title:"Glossary", 
body:" glossary adiab. adiabatic vat visceral adipose tissue flash fast low angle shot nolli non-molli lmm lean muscle mass fse bb black blood fast spin echo fisp fast imaging with steady-tate free precession fiesta fast imaging employing steady-state acquisition zip zero interpolation filling edr extended dynamic range caipirinha controlled aliasing parallel imaging results higher acceleration scic surface coil intensity correction pure phased-array uniformity enhancement grappa generalized autocalibrating partial parallel acquisition arc autocalibrating reconstruction cartesian imaging tfe turbo field echo asset array coil spatial sensitivity encoding technique sense sensitivity encoding ipat integrated parallel acquisition technique rbw readout bandwidth fa flip angle cd cystic duct cbd common bile duct mip maximum intensity projection 2d 2-dimensional 3d 3-dimensional a-p anterior-posterior arrt the american registry radiologic technologists b0 main magnetic field ce continuing education dicom digital imaging communications medicine db\/dt time-varying gradient dob date of birth f-h feet-head ffe fast field echo gre gradient recalled echo id identifier ideal iterative decomposition water fat with echo asymmetry least-squares estimation lms livermultiscan molli modified look locker inversion recovery most magnitude only thin-slice t2* mr magnetic resonance mre magnetic resonance elastography mri magnetic resonance imaging pacs picture archiving communication system pg peripheral gating pii personally identifiable information ppu peripheral pulse unit rf radio frequency ris radiology information system r-l right-left sar specific absorption rate s-i superior-inferior ssfp steady-state free precession snr signal-to-noise ratio wip work in progress cnr contrast noise ratio fov field view fse fast spin echo haste half-fourier acquisition single-shot turbo spin echo mrcp magnetic resonance cholangiopancreatography tse turbo spin echo vibe volumetric interpolated breath-hold examination lava liver acquisition with volume thrive t1w high resolution isotropic volume examination fda food drug administration lto leeds test objects pdff proton density fat fraction qc quality check s-i superior-inferior lsn liver surface nodularity ss ct1 superstandardised corrected t1 clear constant level appearance scic surface coil intensity correction shmolli shortened-modified look locker inversion recovery tantanh tangent hyperbolic bold blood oxygen level dependent bp blood pressure co cardiac output ctm continuous table movement dwi diffusion weighted imaging hr heart rate pa pulmonary artery tpr total peripheral resistance aobp aortic blood pressure aopp aortic pulse pressure aug index augmentation index aug press augmentation pressure map mean arterial pressure pwa pulse wave analysis sevr subendocardia; viability ratio sv stroke volume tps transaction processing system hla horizontal long axis vla vertical long axis lvot left ventricular outflow track av groove atrioventricular groove ssfse single shot fast spin echo te echo time tr repetition time lcd liquid crystal display se-ir spin echo inversion recovery hfs head first supine hfp head first prone ecg electrocardiogram pmu phasor measurement unit " });
this.add({id:2, 
title:"Introduction", 
body:" introduction " });
this.add({id:3, 
title:"Scope", 
body:" scope this manual intended describe correct procedure perform perspectum ltd. set protocol mr operator siemens scanners. please use document reference guide performing protocol acquisitions. the manual divided main sections: preparation, acquisition data export. acquisition section details following sequences: localizer (1 breath-hold, 3-plane abdomen) liver kidney coverscan dixon vibe (1 breath-hold, 3d acquisition covering liver kidney) liver lms t2star dixon (1 breath-hold 1 slice liver) liver lms ideal (1 breath-hold, 5 slices liver) liver lms most (1 breath-hold, single slice liver) liver lms molli (2 breath-holds, 2 slices liver) pancreas coverscan molli (1 breath-hold, 1 slice pancreas) pancreas coverscan ideal (1 breath-hold, 5 slices pancreas) kidneys coverscan molli (1 breath-hold, 1 slice kidneys) cardiac planning localizer (1 breath-hold, 3 planes heart) 2 chamber (1 breath-hold, 1 slice heart) 4 chamber (1 breath-hold, 1 slice heart) short axis stack (1 breath-hold, multi-slice heart) cardiac cine (hla, vla, short axis stack heart) cardiac t1 map (base, mid, apex heart) cardiac t2 map (base, mid, apex heart) lung planning localizer (1 breath-hold, 3 planes lungs) lung imaging (deep inspiration expiration lungs) " });
this.add({id:4, 
title:"Continuing Education", 
body:" continuing education in territories, usa, training eligible continuing education ( ce ) credit. the ce sponsored by perspectum and will presented member imaging applications team. the presenter’s name, date, and attendees written staff training checklist time training; form kept in perspectum’s records site training activities electronic copy sent site.   in order qualify ce ,  document,  multiparametric liver mri applications training – mra1157, provided with training. this document includes post-activity evaluations completed award credit. " });
this.add({id:5, 
title:"Compatibility and Requirements", 
body:" compatibility requirements all sequences described manual require scanner hardware software compliant with manufacturer’s specifications, especially gradient performance, eddy current compensation, magnetic field ( b0 ) homogeneity stability.  the protocols utilized scanners outside manufacturer’s service specifications calibration schedules.  do use phased-array coils with failed elements snr checks passed. " });
this.add({id:6, 
title:"T1 Mapping and Cardiac Imaging Requirement", 
body:" t1 mapping cardiac imaging requirement t1 mapping cardiac imaging protocols require manufacturer's clinically approved software product myomaps . " });
this.add({id:7, 
title:"T2* and Proton Density Fat Fraction Mapping Requirement", 
body:" t 2 * proton density fat fraction mapping requirement the multi-echo gradient-echo package available. this offered product siemens scanners need additional license. " });
this.add({id:8, 
title:"Volume requirement", 
body:" volume requirement the 3d t1 vibe sequences available. this allow three-dimensional spoiled gradient echo pulse sequence. a multi-echo variant sequence with water-fat separation 3d t1 dixon vibe  is preferred. the latter allows acquiring in-phase out-of-phase images single acquisition, calculate water-only fat-only images. " });
this.add({id:9, 
title:"Coil requirement", 
body:" coil requirement integrated spine array coil flex array coil(s) placed chest\/abdomen. ensure flex coil covers lung lower pole kidneys. sufficient coverage depend patient size length. if does cover region showed figure 1 use multiple flex array coils. please note coils available, acquiring liver, kidney pancreas images, it's imperative coil upward cover lungs heart (please see cardiac trace simulator off and coil coverage adjustment ). sufficient flex array coil coverage apex lungs lower poles kidneys. " });
this.add({id:10, 
title:"Cardiac trace simulator Requirement", 
body:" cardiac trace simulator requirement a cardiac trace simulator used acquire t1 mapping sequences ( molli ). if available scanner patient's ecg signal used instead. " });
this.add({id:11, 
title:"Cardiac trace input Requirement", 
body:" cardiac trace input requirement the scanner ecg gating required perform cardiac acquisitions. the mr safe ecg electrodes sensor connected patient's chest scan session. " });
this.add({id:12, 
title:"Patient Registration", 
body:" patient registration ensure subject registered new mr study. the minimum required information registering patient follows: patient id : <use agreed subject id naming scheme> patient name: <use agreed subject naming scheme> date birth ( dob ): <use agreed dob scheme> operator: enter your initials the patient's height (when available), weight sex date birth ( dob ) scheme:  if pii allowed, patient's date birth dob used.  otherwise, use 01-jan, correct year birth. please note mri technician\/radiographer performs patient acquisition undergone training either: (a) authorised perspectum imaging applications specialists (b) previously trained site personnel authorised perform internal training a record internal training must be provided to perspectum with appropriate imaging staff training checklist. " });
this.add({id:13, 
title:"Pre-Scan Preparation", 
body:" pre-scan preparation " });
this.add({id:14, 
title:"Patient positioning", 
body:" patient positioning patient positioned head-first supine with arms side. scanner isocenter landmarked xiphisternum patient. setup ecg gating with electrodes sensor. check signal clear r-wave triggering. " });
this.add({id:15, 
title:"Breathing Instructions", 
body:" breathing instructions breath-holding explained practiced any data acquisition variations depth subject’s breathing markedly alter image quality consistency abdomen position acquisitions. end-expiration breath-hold chosen, consistent process. this patient: 'the scans better hold breath comfortably.' the following instructions given patient ahead scan:  breathe in.  breathe out. stop hold breath there. breathe away resume breathing (after data acquired). some sequences cardiac-gated, so the gradient pulse sounds irregular. therefore, extremely important advise patient hold breath instruct breathe away regardless scanner noise. some gradient pulse sounds irregular. it extremely important advise patient hold breath instruct breathe away regardless scanner noise. " });
this.add({id:16, 
title:"Acquisition guide", 
body:" acquisition guide please note that: all protocols acquired any contrast agent injection. note agents necessary acquisitions all scans performed end-expiration breath-hold, including localizer scan. protocol parameters changed. any changes specifically covered instructions risk corrupting resultant cause data rejection perspectum ltd. prior scanning, cardiac trace simulator (if available) set follows. if simulation available proceed scan using patient's input. " });
this.add({id:17, 
title:"Cardiac Trace Simulator", 
body:" cardiac trace simulator to set simulation login advanced user follow steps: open windows menu, on xa version: key combination tab + del + + . note siemens mr keyboard windows modified keyboard. the + key numeric windows keyboard \"send node 1\" siemens mr keyboard. on versions: hold ctrl + esc windows menu appear. select <advanced user> (or medadmin xa versions) – this prompt password. the siemens engineer site staff access hold ctrl + esc bring windows start menu. open terminal window, <command prompt> <run> in <command prompt> type ideacmdtool press enter from ideacmdtool menu select number correspondent <pmu control> option (in general 1 ) then press enter from pmu control menu select <pmu signal simulation> option (in general 1 ) press enter . from menu select <startsignalsimulation> option (in general 4 ) then press enter . to set ecg simulator parameters values (for ve11 xa versions, simply press enter 4 times): ecg-period duration 1000 ms respiration-period duration 3000 ms pulse-period duration 1000 ms external signal period duration 2000 ms the simulated heartbeat appear exam tab shown figure 2 . the simulated heartbeat highlighted with red box. please note, ve11 interface. " });
this.add({id:18, 
title:"Three-plane Localizer", 
body:" three-plane localizer a three-plane localizer run expiration breath-hold produce sagittal, coronal transverse view abdomen. " });
this.add({id:19, 
title:"Liver to Kidney CoverScan DIXON VIBE", 
body:" liver kidney coverscan dixon vibe this 3d spoiled gradient echo acquisition performed end-expiration breath-hold lasts approximately 15 seconds. this used measure length and\/or volume liver kidney. use localizer images planning prescribe axial dixon vibe slab cover liver domes lower poles kidneys shown figure 3 . set shim volume coverage fov make sure cover entire liver kidneys allow superior inferior margins. liver kidney coverscan dixon vibe slice stack positioning. " });
this.add({id:20, 
title:"Liver LMS Sequences", 
body:" liver lms sequences liver lms t2star dixon (one slice) : prescribe single axial slice level porta hepatis. it cover entire liver spleen (it contain stomach) → adjust shim volume's r-l a-p directions imaging exclude subcutaneous fat apply. (please refer figure 4 planning) liver lms most (one slice) : right click liver lms t2tar dixon sequence select \"copy parameters\" → \"center slice saturation regions\". right click liver lms t2tar dixon \"adjust volume\" apply. liver lms molli (1st slice) : right click liver lms t2tar dixon sequence select \"copy parameters\" → \"center slice saturation regions\". \"adjust volume\" apply. liver lms molli (2nd slice) : copy paste previous lms molli scanned (slice 1) click coronal sagittal image localizer press ctrl + 3 slice down. → right click liver lms molli (1st slice) select \"copy parameters\" \"adjust volume\" apply. liver lms ideal (5 slices) : right click liver lms t2tar dixon sequence select \"copy parameters\" → \"center slice saturation regions\" \"adjust volume\". at detail view exam task card, \"system\" \"adjustment volume\" manually change shim volume thickness (f>>h) 90mm apply. example slice prescription porta hepatis. it display liver, spleen, contain stomach. the shim box cover entire liver spleen exclude subcutaneous fat. " });
this.add({id:21, 
title:"Pancreas MOLLI", 
body:" pancreas molli this single slice acquisition performed end-expiration breath-hold lasts approximately 14 seconds. used generate t1 map pancreas slice. to plan acquisition, use 3-point tool create axial-oblique plane with following steps: load liver kidney dixon vibe images planning windows. scroll images stack identify pancreas body, tail head possible axial planes. prescribe 3 points clicking cursor tail, body head pancreas. on e11 software version: select \"tools\" drop-down menu click \"create slice(slab) group 3 points\" shown figure 5 upper row. on xa software version: select \"3-point mode\" toolbar shown figure 5 lower row. this generate slice axial-oblique orientation.  please repeat step 2 3 orientation appears coronal oblique. adjust shim volume mimic axial-oblique plane orientation reduce size cover just pancreas. figure 6 . aim prescribe slice axial-oblique plane possible. if resultant appears overly coronal, repeat steps 2 3. if axial-oblique plane hard obtain and\/or sequence parameters change imaging angle, original setting prescribe straight axial image largest volume pancreas identified plane. prescribing pancreas molli sequence using 3-point tool e11 (upper row) xa (lower software versions pancreas molli planning " });
this.add({id:22, 
title:"Pancreas CoverScan IDEAL", 
body:" pancreas coverscan ideal this multi-slice, multi-echo gradient echo acquisition performed end-expiration breath-hold lasts approximately 15 seconds. used generate pdff map pancreas. right click pancreas coverscan molli sequence select \"copy parameters\" → \"center slice groups saturation regions\" select\"adjust volume\". at \"system\" → \"adjustment volume\", manually change shim volume thickness (f>>h) 60 mm so cover slice stack. (please refer figure 7 planning) pancreas coverscan ideal prescription, make sure shim box f-h covers entire stack slices(60 mm recommended) " });
this.add({id:23, 
title:"Kidneys MOLLI", 
body:" kidneys molli this single slice acquisition performed end-expiration breath-hold lasts approximately 14 seconds. used generate t1 map kidneys. load liver kidney dixon vibe images localizer coronal image planning images. prescribe imaging slice intersect middle kidneys axial view. a. on coronal view, centre acquisition fov level kidneys, avoiding aorta included acquisition fov possible (please refer figure 8 planning) adjust shim volume cover slice kidneys. kidneys molli prescription " });
this.add({id:24, 
title:"Cardiac Trace Simulator Off and Coil Coverage Adjustment", 
body:" cardiac trace simulator off coil coverage adjustment the sequences require cardiac trace input. make sure turn heart simulator prior acquiring sequences. if cardiac simulation available site turned step using following instructions: open windows menu on xa versions: key combination tab + del + + . note siemens mr keyboard windows modified keyboard. the + key numeric windows keyboard \"send node 1\" siemens mr keyboard. on versions: hold ctrl + esc windows menu appear open terminal window, <command prompt> <run> . in <command prompt> type ideacmdtool press enter. from ideacmdtool menu select <pmu control> option. (in general 1 ) press enter from pmu control menu select <pmu signal simulation> option. (in general 1 ) press enter select <stopsignalsimulation> option. (in general 5 ) note closed terminal window immediately select <stopsignalsimulation> pressing 5 press enter the simulated heartbeat disappear exam tab. coil coverage: the sequences require sufficient coil coverage lungs heart. if flex array used does cover apex heart, make sure re-position prior scanning following sequences. " });
this.add({id:25, 
title:"Cardiac Planning Localizer", 
body:" cardiac planning localizer the localizers acquired used planning cardiac imaging expiration breath-hold. position localizer so heart centre planes. cardiac planning localizer prescription " });
this.add({id:26, 
title:"Two Chamber", 
body:" two chamber this ecg gated balanced steady-state free precession sequence (bright blood preferred). 1. prescribe slice shown figure 10 make sure slice is: parallel interventricular septum cutting mid-point mitral valve cutting left ventricular apex 2. set shim volume covers heart. the remain cardiac sequences. 3. ensure acquisition performed end-expiration breath-hold acquired late diastole phase cardiac cycle possible. two chamber localizer slice prescription. " });
this.add({id:27, 
title:"Four Chamber", 
body:" four chamber this ecg gated balanced steady-state free precession sequence (bright blood preferred). 1. plan sequence using chamber acquisition shown figure 11 make sure slice is: cutting mid-point mitral valve cutting left ventricular apex 2. ensure acquisition performed end-expiration breath-hold late diastole phase cardiac cycle possible. four chamber localizer slice prescription. " });
this.add({id:28, 
title:"Short Axis Stack", 
body:" short axis stack this ecg gated balanced steady-state free precession sequence (bright blood preferred). 1. plan sequence using chamber acquisitions shown figure 12 make sure slice: covers mid atrium apex ventricles entirely. parallel atrioventricular groove (av groove) 2. ensure acquisition performed end-expiration breath-hold late diastole phase cardiac cycle possible. short axis stack localizer prescription please acquire mid point atirums, i.e., slice cover av groove. this allow left ventricular outflow track (lvot) present better planning later hla cine acquisition. " });
this.add({id:29, 
title:"Cine acquisitions", 
body:" cine acquisitions these acquisitions using retrospective ecg gating expiration breath-hold. prospective ecg gating used difficult ecg traces. ensure shim box covers heart acquisitions. " });
this.add({id:30, 
title:"HLA (Horizontal Long Axis) Cine", 
body:" hla (horizontal long axis) cine 1. plan sequence using chamber short axis stack acquisitions shown figure 13 , ensure: the positioning maximum lateral dimensions ventricles avoid left ventricular outflow tract ( lvot ) shown tip cut mid-point mitral valves cut left ventricular apex use late diastole frame possible 2. adjust shim volume cover heart (usually 150 mm a-p, r-l, f-h directions sufficient).\n hla cine prescription. when planning slice, avoid cutting left ventricular outflow tract ( lvot ). " });
this.add({id:31, 
title:"VLA (Vertical Long Axis) Cine", 
body:" vla (vertical long axis) cine 1. plan sequence using hla cine short axis stack images shown figure 14 , make sure: the positioning maximum dimensions left ventricle, approximately parallel interventricular septum insertion points right ventricle cut mid-point mitral valve cut left ventricular apex use late diastole frame possible \n2. adjust shim volume cover heart (usually 150 mm a-p, r-l, f-h directions sufficient).\n\n vla cine prescription " });
this.add({id:32, 
title:"Short Axis Stack Cine", 
body:" short axis stack cine 1. plan sequence using hla vla cine acquisitions shown figure 15 make sure: use late diastole frame hla vla cine images plan basal slice atrioventricular groove ( av groove ) cover entire ventricles running multi-slice stack base apex ventricles. allow margin beyond apex ventricles. 2. adjust shim volume covers heart (usually 150 mm a-p, r-l, f-h directions sufficient). short axis stack cine prescription " });
this.add({id:33, 
title:"Cardiac T1 Map", 
body:" cardiac t1 map t1 mapping acquired different levels left ventricle: basal, mid, apex. make sure acquisitions cardiac phase (e.g. late diastole; need press capture cycle). note trigger delay acquisition window changed strictly necessary. in cases with fast heart rates, systole considered. please see suggested steps planning base t1 map , mid t1 map , apex t1 map acquisitions. load short axis stack cine planning images, scroll slice stack appropriate \"base\" position. (tip: use hla vla reference) shown figure 16 right click chosen short axis stack cine image → select \"copy position\" right click short axis stack cine sequence → select \"copy parameters\" \"adjustment volume\" for mid t1 map apex map, repeat steps 1 3 with correspond \"mid\" \"apex\" positions when acquiring cardiac t1 maps, follow criteria below: make sure sequence using longt1 sequence. check average rr participant, based value scan with rr-interval>700 ms rr-interval < 700 ms . if any mistriggering occurs, adjust trigger delay acquisition window reacquire. please label new acquisition repeat. base t1 map planning. use short axis stack cine sequence reference cardiac map example resulting t1 maps. " });
this.add({id:34, 
title:"Cardiac T2 Map", 
body:" cardiac t2 map t2 mapping acquisitions resemble locations cardiac t1 map: basal, mid apex slices. make sure acquired cardiac phase. note trigger delay acquisition window changed strictly necessary. ideally, acquire sequences late diastole. in cases with fast heart rates, systole considered. please see suggested steps planning base t2 map , mid t2 map , apex t2 map acquisitions. double click base t2 map sequence select 'manual' prompt 'scanning assistant'. right click base t1 map sequence, select \"copy parameters\" → \"center slice goups regions\". repeat procedure \"adjustment volume\". make sure shim mode set \"cardiac\". for mid t2 map apex map, repeat steps 1 3 copy parameters t1 map. if any mis-triggering occurs, adjust trigger delay acquisition window re-acquire necessary. please label new acquisition repeat. example base, mid apex t2 maps " });
this.add({id:35, 
title:"Lung Planning Localizer", 
body:" lung planning localizer the localizers acquired used planning lung imaging expiration breath-hold. position sagittal coronal centred apex so largest dimension visualized. lung planning localizer prescription " });
this.add({id:36, 
title:"Lung Imaging", 
body:" lung imaging this acquisition lasts approximately 30 seconds aims acquire dynamic coronal views lungs deep inspiration expiration. prior starting acquisition, instruct patient \"continuously breathe deeply steady pace scan\" coronal view slice prescription: ensure fov covers entire bilateral lung volumes (both s-i l-r directions). when centring fov, accommodate change diaphragm locations deep breathing. the image slice cut apex lungs keeping coronal (please angle slice) shown figure 20 . lung imaging prescription " });
this.add({id:37, 
title:"Data Export", 
body:" data export upload single compressed file please compress sets data patient file proceed with upload. please follow arrangement personally identifiable information ( pii ) agreed site, removal pii necessary site. private dicom tags special added manufacturer describe mri sequence. they not refer private information, pii . many dicom anonymization tools option remove private tags. do tags exporting data. private dicom tags preserved any data export. private dicom tags pii tags. these instructions cover exporting data siemens scanner transfer. if site unable export directly transfers data pacs use pacs export save dicom images. it preferable compress folder exported dicoms submit single compressed file portal. on windows : right click folder windows explorer select <send to> <compress (zipped) folder>.  if resides cd dvd, need copy location saved to. on mac : hold ctrl click folder, select <compress>. upload compressed file perspectum portal . for additional instruction using portal, see portal customer user guide - pdm0077 website. " });
this.add({id:38, 
title:"Saving DICOM Images for Transfer", 
body:" saving dicom images transfer to export data siemens mri scanner directly, save <patient browser> location uploaded perspectum portal. select want export. " });
this.add({id:39, 
title:"Export data to a CD or DVD", 
body:" export data cd dvd in <patient browser> select appropriate subject folder. select <transfer> <export cd-r> in <enter label> enter unique name. for xa software version ensure properties selected \"create dicom file system\" image conversion selected \"interoperability\". " });
this.add({id:40, 
title:"Export data with a USB stick or external hard drive", 
body:" export data with usb stick external hard drive in <patient browser> select appropriate subject folder. select <transfer> <export off-line> select path folder selection list (this usb stick, external hard drive cd). select dicom <select format>. for xa software version, select \" create dicom file system\" select \"interoperability\" image conversion option. do not select <anonymously>. for xa software do not select \" anonymize as...\". confirm with ok. for xa software version click \"export\". " });
this.add({id:41, 
title:"Check the data is transferred completely", 
body:" check data transferred completely select <transfer> → <local job status>. a window pop data transfer status " });
this.add({id:42, 
title:"Acquisition checklist", 
body:" acquisition checklist prior scan attach ecg triggering device patient list sequences set cardiac trace simulator three-plane localizer liver kidney coverscan dixon vibe liver lms t2star dixon liver lms most liver lms molli 1st slice liver lms molli 2nd slice liver lms ideal pancreas coverscan molli pancreas coverscan ideal kidneys coverscan molli turn cardiac trace simulator use patient's heart with ecg change coil position cover lungs heart coverage sufficient apex cardiac planning localizer 2 chamber 4 chamber short axis stack hla cine vla cine short axis stack cine cardiac t1 map: base cardiac t1 map: mid cardiac t1 map: apex cardiac t2 map: base cardiac t2 map: mid cardiac t2 map: apex lung planning localizer lung imaging: consistent deep inspiration expiration data export upload portal " });
this.add({id:43, 
title:"Questionnaire", 
body:" questionnaire customer feedback please spare 5 min provide feedback . we appreciate hearing you. " });
this.add({id:44, 
title:"Issue control", 
body:" issue control issue details date initial 1.0 new document 23 oct 2020 fsn 2.0 protocol changes reflect addition cardiac t2 map lung imaging 25 feb 2021 ycw\/jl 2.1 specify sequence names product\n 16 july 2021 ycw " });
this.add({id:45, 
title:"Approvals", 
body:" approvals head imaging solutions dr. alex smith head imaging applications andrea borghetto " });

        store['en'][1]= {
        'title': "Glossary",
        'href': '10960-14021-glossary.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Glossary"
                , 'snippet': "adiab. adiabatic VAT Visceral Adipose Tissue FLASH Fast Low Angle SHot NOLLI Non-MOLLI LMM Lean Muscle Mass FSE BB Black Blood Fast Spin Echo FISP Fast Imaging with Steady-tate free Precession FIESTA Fast Imaging Employing STeady-state Acquisition ZIP Zero Interpolation Filling EDR Extended Dynamic ..."
        };
        
        

        store['en'][2]= {
        'title': "Introduction",
        'href': '10960-14145-lms-introduction.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Introduction"
                , 'snippet': "..."
        };
        
        

        store['en'][3]= {
        'title': "Scope",
        'href': '10960-14112-scope.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Introduction \/ Scope"
                , 'snippet': "This manual is intended to describe the correct procedure to perform the Perspectum Ltd. set up protocol to an MR operator on Siemens scanners. Please use this document as a reference guide when performing the protocol acquisitions. The manual is divided in three main sections: Preparation, Acquisit..."
        };
        
        

        store['en'][4]= {
        'title': "Continuing Education",
        'href': '10960-14373-continuing-education.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Introduction \/ Continuing Education"
                , 'snippet': "In some territories, such as the USA, this training is eligible for continuing education ( CE ) credit. The CE is sponsored by Perspectum and will be presented by a member of the Imaging Applications team. The presenter’s name, date, and attendees will be written on the Imaging Staff Training Checkl..."
        };
        
        

        store['en'][5]= {
        'title': "Compatibility and Requirements",
        'href': '10960-11121-compatibility-and-requirements.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Introduction \/ Compatibility and Requirements"
                , 'snippet': "All sequences described in this manual require scanner hardware and software to be compliant with all manufacturer’s specifications, especially gradient performance, eddy current compensation, and magnetic field ( B0 ) homogeneity and stability.  The protocols cannot be utilized on scanners outside ..."
        };
        
        

        store['en'][6]= {
        'title': "T1 Mapping and Cardiac Imaging Requirement",
        'href': '10960-11122-t1-mapping-and-cardiac-imaging-requirement.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Introduction \/ Compatibility and Requirements \/ T1 Mapping and Cardiac Imaging Requirement"
                , 'snippet': "T1 mapping and cardiac imaging protocols require the manufacturer's clinically approved software product MyoMaps ...."
        };
        
        

        store['en'][7]= {
        'title': "T2* and Proton Density Fat Fraction Mapping Requirement",
        'href': '10960-11123-t2--and-proton-density-fat-fraction-mapping-requirement.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Introduction \/ Compatibility and Requirements \/ T2* and Proton Density Fat Fraction Mapping Requirement"
                , 'snippet': "The system should also have the Multi-Echo Gradient-Echo package available. This package is offered as a product on most Siemens scanners without the need of additional license...."
        };
        
        

        store['en'][8]= {
        'title': "Volume requirement",
        'href': '10960-11124-volume-requirement.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Introduction \/ Compatibility and Requirements \/ Volume requirement"
                , 'snippet': "The system should have 3D T1 VIBE sequences available. This will allow a three-dimensional spoiled gradient echo pulse sequence. A multi-echo variant of this sequence with a water-fat separation 3D T1 DIXON VIBE  is preferred. The latter allows acquiring in-phase and out-of-phase images in one singl..."
        };
        
        

        store['en'][9]= {
        'title': "Coil requirement",
        'href': '10960-11078-coil-requirement.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Introduction \/ Compatibility and Requirements \/ Coil requirement"
                , 'snippet': "Integrated spine array coil Flex array coil(s) placed on the chest\/abdomen. Ensure the flex array coil covers from the top of the lung to the lower pole of the kidneys. Sufficient coverage will depend on the patient size and the coil length. If one coil does not cover the region of interest as showe..."
        };
        
        

        store['en'][10]= {
        'title': "Cardiac trace simulator Requirement",
        'href': '10960-10967-cardiac-trace-simulator-requirement.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Introduction \/ Compatibility and Requirements \/ Cardiac trace simulator Requirement"
                , 'snippet': "A cardiac trace simulator is used to acquire the T1 mapping sequences ( MOLLI ). If this is not available at the scanner the patient's ECG signal can be used instead...."
        };
        
        

        store['en'][11]= {
        'title': "Cardiac trace input Requirement",
        'href': '10960-11107-cardiac-trace-input-requirement.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Introduction \/ Compatibility and Requirements \/ Cardiac trace input Requirement"
                , 'snippet': "The scanner ECG gating is required to perform the cardiac acquisitions. The MR safe ECG electrodes and sensor will be connected to the patient's chest during the scan session...."
        };
        
        

        store['en'][12]= {
        'title': "Patient Registration",
        'href': '10960-10969-patient-registration.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Patient Registration"
                , 'snippet': "Ensure the subject is registered to a new MR study. The minimum required information for registering the patient is as follows: Patient ID : <Use agreed Subject ID Naming Scheme> Patient Name: <Use Agreed Subject Naming Scheme> Date of birth ( DOB ): <Use agreed DOB Scheme> Operator: Enter Your Init..."
        };
        
        

        store['en'][13]= {
        'title': "Pre-Scan Preparation",
        'href': '10960-10970-pre-scan-preparation.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Pre-Scan Preparation"
                , 'snippet': "..."
        };
        
        

        store['en'][14]= {
        'title': "Patient positioning",
        'href': '10960-11108-patient-positioning.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Pre-Scan Preparation \/ Patient positioning"
                , 'snippet': "Patient should be positioned head-first supine with both arms by their side. Scanner isocenter should be landmarked on the xiphisternum of the patient. Setup ECG gating with the electrodes and sensor. Check that the signal has a clear R-wave triggering...."
        };
        
        

        store['en'][15]= {
        'title': "Breathing Instructions",
        'href': '10960-10972-breathing-instructions.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Pre-Scan Preparation \/ Breathing Instructions"
                , 'snippet': "Breath-holding should be explained and practiced before any data acquisition since variations in the depth of a subject’s breathing can markedly alter the image quality and the consistency of the abdomen position between acquisitions. End-expiration breath-hold is chosen, as breathing out is a more ..."
        };
        
        

        store['en'][16]= {
        'title': "Acquisition guide",
        'href': '10960-11109-acquisition-guide.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Acquisition guide"
                , 'snippet': "Please note that: All protocols must be acquired before any contrast agent injection. Note that contrast agents are not necessary for any of the acquisitions All scans are performed during end-expiration breath-hold, including the Localizer scan. Protocol parameters should not be changed. Any change..."
        };
        
        

        store['en'][17]= {
        'title': "Cardiac Trace Simulator",
        'href': '10960-11109-acquisition-guide.html#UUID-2b3a064e-5dd0-f56c-0bfa-34ab704e22bd_UUID-7620cee6-e901-5e06-c74d-8a942bf5fd3b'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Acquisition guide \/ Cardiac Trace Simulator"
                , 'snippet': "To set up the simulation please login as advanced user and follow these steps: Open Windows menu, On XA version: the key combination is Tab + Del + + . Note that Siemens MR keyboard is Windows modified keyboard. The + key on the numeric side of the Windows keyboard is the \"Send to node 1\" key on Sie..."
        };
        
        

        store['en'][18]= {
        'title': "Three-plane Localizer",
        'href': '10960-11128-three-plane.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Acquisition guide \/ Three-plane Localizer"
                , 'snippet': "A three-plane Localizer should be run in expiration breath-hold to produce at least one sagittal, one coronal and one transverse view of the abdomen...."
        };
        
        

        store['en'][19]= {
        'title': "Liver to Kidney CoverScan DIXON VIBE",
        'href': '10960-13979-liver-to-kidney.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Acquisition guide \/ Liver to Kidney CoverScan DIXON VIBE"
                , 'snippet': "This is a 3D spoiled gradient echo acquisition performed at end-expiration breath-hold and lasts approximately 15 seconds. This acquisition will be used to measure the length and\/or volume of the liver and kidney. Use the localizer images as the planning images Prescribe the axial DIXON VIBE slab to..."
        };
        
        

        store['en'][20]= {
        'title': "Liver LMS Sequences",
        'href': '10960-10976-liver-lms-sequences.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Acquisition guide \/ Liver LMS Sequences"
                , 'snippet': "Liver LMS T2STAR DIXON (one slice) : Prescribe the single axial slice at the level of the porta hepatis. It should cover the entire liver and spleen (it may also contain the stomach) → Adjust the shim volume's R-L and A-P directions to cover the imaging slice and to exclude the subcutaneous fat → Ap..."
        };
        
        

        store['en'][21]= {
        'title': "Pancreas MOLLI",
        'href': '10960-13991-pancreas-molli.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Acquisition guide \/ Pancreas MOLLI"
                , 'snippet': "This is a single slice acquisition performed at end-expiration breath-hold and lasts approximately 14 seconds. This acquisition will be used to generate a T1 map of the pancreas slice. To plan this acquisition, use the 3-Point tool to create an axial-oblique plane with the following steps: Load the ..."
        };
        
        

        store['en'][22]= {
        'title': "Pancreas CoverScan IDEAL",
        'href': '10960-14003-pancreas-ideal.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Acquisition guide \/ Pancreas CoverScan IDEAL"
                , 'snippet': "This is multi-slice, multi-echo gradient echo acquisition performed during end-expiration breath-hold and lasts approximately 15 seconds. This acquisition will be used to generate a PDFF map of the pancreas. Right click the Pancreas CoverScan MOLLI sequence and select \"Copy Parameters\" → select \"Cen..."
        };
        
        

        store['en'][23]= {
        'title': "Kidneys MOLLI",
        'href': '10960-11024-kidneys-molli.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Acquisition guide \/ Kidneys MOLLI"
                , 'snippet': "This is a single slice acquisition performed at end-expiration breath-hold and lasts approximately 14 seconds. This acquisition will be used to generate a T1 map of the kidneys. Load the Liver to Kidney DIXON VIBE images and the localizer coronal image as the planning images. Prescribe the imaging s..."
        };
        
        

        store['en'][24]= {
        'title': "Cardiac Trace Simulator Off and Coil Coverage Adjustment",
        'href': '10960-11155-cardiac-trace-simulator-off-and-coil-coverage-adjustment.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Acquisition guide \/ Cardiac Trace Simulator Off and Coil Coverage Adjustment"
                , 'snippet': "The sequences from now on will require the cardiac trace input. Make sure to turn off the heart trace simulator prior to acquiring these sequences. If cardiac simulation is available at the site it should be turned off at this step using the following instructions: Open Windows menu On XA versions: ..."
        };
        
        

        store['en'][25]= {
        'title': "Cardiac Planning Localizer",
        'href': '10960-10984-cardiac-planning-localiser.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Acquisition guide \/ Cardiac Planning Localizer"
                , 'snippet': "The localizers acquired here will be used for planning the cardiac imaging and is acquired during expiration breath-hold. Position this localizer so that the heart is at the centre of all three imaging planes. Cardiac planning localizer prescription..."
        };
        
        

        store['en'][26]= {
        'title': "Two Chamber",
        'href': '10960-10985-two-chamber-localiser--vertical-long-axis---vla-.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Acquisition guide \/ Two Chamber"
                , 'snippet': "This is an ECG gated balanced steady-state free precession sequence (bright blood is preferred). 1. Prescribe the slice as shown in Figure 10 and make sure the slice is: Parallel to the interventricular septum Cutting through the mid-point of the mitral valve Cutting through the left ventricular ape..."
        };
        
        

        store['en'][27]= {
        'title': "Four Chamber",
        'href': '10960-10986-four-chamber-localiser--horizontal-long-axis---hla-.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Acquisition guide \/ Four Chamber"
                , 'snippet': "This is an ECG gated balanced steady-state free precession sequence (bright blood is preferred). 1. Plan this sequence using the two chamber acquisition as shown in Figure 11 and make sure the slice is: Cutting through the mid-point of the mitral valve Cutting through the left ventricular apex 2. En..."
        };
        
        

        store['en'][28]= {
        'title': "Short Axis Stack",
        'href': '10960-10987-short-axis-stack-localiser.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Acquisition guide \/ Short Axis Stack"
                , 'snippet': "This is an ECG gated balanced steady-state free precession sequence (bright blood is preferred). 1. Plan this sequence using the two chamber and four chamber acquisitions as shown in Figure 12 and make sure the slice: Covers from the mid atrium to the apex of both ventricles entirely. Parallel to th..."
        };
        
        

        store['en'][29]= {
        'title': "Cine acquisitions",
        'href': '10960-14347-cine-acquisitions.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Acquisition guide \/ Cine acquisitions"
                , 'snippet': "These acquisitions are done using retrospective ECG gating and expiration breath-hold. Prospective ECG gating can also be used for difficult ECG traces. Ensure the shim box only covers the heart for all these acquisitions...."
        };
        
        

        store['en'][30]= {
        'title': "HLA (Horizontal Long Axis) Cine",
        'href': '10960-10989-hla-cine.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Acquisition guide \/ Cine acquisitions \/ HLA (Horizontal Long Axis) Cine"
                , 'snippet': "1. Plan this sequence using the two chamber and the short axis stack acquisitions as shown in Figure 13 , and ensure: The positioning is through the maximum lateral dimensions of both ventricles Avoid the left ventricular outflow tract ( LVOT ) as shown in the Tip below Cut through the mid-point of ..."
        };
        
        

        store['en'][31]= {
        'title': "VLA (Vertical Long Axis) Cine",
        'href': '10960-10990-vla-cine.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Acquisition guide \/ Cine acquisitions \/ VLA (Vertical Long Axis) Cine"
                , 'snippet': "1. Plan this sequence using the HLA cine and short axis stack images as shown in Figure 14 , and make sure: The positioning is through the maximum dimensions of the left ventricle, approximately parallel to the interventricular septum and to the insertion points of the right ventricle Cut through th..."
        };
        
        

        store['en'][32]= {
        'title': "Short Axis Stack Cine",
        'href': '10960-10991-short-axis-stack-cine.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Acquisition guide \/ Cine acquisitions \/ Short Axis Stack Cine"
                , 'snippet': "1. Plan this sequence using the HLA and VLA cine acquisitions as shown in Figure 15 make sure: Use a late diastole frame on both HLA and VLA cine images Plan the basal slice through the atrioventricular groove ( AV groove ) Cover the entire ventricles by running a multi-slice stack from base to apex..."
        };
        
        

        store['en'][33]= {
        'title': "Cardiac T1 Map",
        'href': '10960-10992-cardiac-t1-map.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Acquisition guide \/ Cardiac T1 Map"
                , 'snippet': "T1 mapping will be acquired at three different levels along the left ventricle: basal, mid, and apex. Make sure all three acquisitions are acquired at the same cardiac phase (e.g. late diastole; no need to press capture cycle). Note that trigger delay and acquisition window should not be changed if ..."
        };
        
        

        store['en'][34]= {
        'title': "Cardiac T2 Map",
        'href': '10960-14057-cardiac-t2-map.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Acquisition guide \/ Cardiac T2 Map"
                , 'snippet': "T2 mapping acquisitions should resemble the locations as per Cardiac T1 Map: basal, mid and apex slices. Make sure all three acquisitions are acquired at the same cardiac phase. Note that trigger delay and acquisition window should not be changed if not strictly necessary. Ideally, acquire the seque..."
        };
        
        

        store['en'][35]= {
        'title': "Lung Planning Localizer",
        'href': '10960-14422-lung-planning-localiser.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Acquisition guide \/ Lung Planning Localizer"
                , 'snippet': "The localizers acquired here will be used for planning the lung imaging and are acquired during expiration breath-hold. Position the sagittal and coronal localizers centred at the apex of the lung so that the largest dimension of the lung can be visualized. Lung planning localizer prescription..."
        };
        
        

        store['en'][36]= {
        'title': "Lung Imaging",
        'href': '10960-14123-lung-imaging.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Acquisition guide \/ Lung Imaging"
                , 'snippet': "This acquisition lasts approximately 30 seconds and aims to acquire the dynamic coronal views of both lungs in deep inspiration and deep expiration. Prior to starting the acquisition, instruct the patient to \"continuously breathe deeply in and out at a steady pace during the scan\" Coronal view slice..."
        };
        
        

        store['en'][37]= {
        'title': "Data Export",
        'href': '10960-11106-data-export.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Data Export"
                , 'snippet': "Upload Single Compressed File Please compress all sets of data for the same patient into one file and proceed with the upload. Please follow the arrangement for personally identifiable information ( PII ) as agreed for your site, as the removal of PII may not be necessary for your site. Private DICO..."
        };
        
        

        store['en'][38]= {
        'title': "Saving DICOM Images for Transfer",
        'href': '10960-11106-data-export.html#UUID-39462f19-1576-2e01-a079-a02a619c0a1d_UUID-fd8998d5-bd92-1d16-b757-9c09560b076a'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Data Export \/ Saving DICOM Images for Transfer"
                , 'snippet': "To export data from the Siemens MRI Scanner directly, save the data from the <Patient browser> to a location where it can be uploaded to Perspectum portal. Select the data you want to export...."
        };
        
        

        store['en'][39]= {
        'title': "Export data to a CD or DVD",
        'href': '10960-11106-data-export.html#UUID-39462f19-1576-2e01-a079-a02a619c0a1d_section-idm453242153032483258563335686'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Data Export \/ Saving DICOM Images for Transfer \/ Export data to a CD or DVD"
                , 'snippet': "In <Patient Browser> select the appropriate subject folder. Select <Transfer> and then <Export to CD-R> In the <Enter Label> enter a unique name. For XA software version ensure the properties is selected as \"Create DICOM file System\" and Image Conversion is selected as \"Interoperability\"...."
        };
        
        

        store['en'][40]= {
        'title': "Export data with a USB stick or external hard drive",
        'href': '10960-11106-data-export.html#UUID-39462f19-1576-2e01-a079-a02a619c0a1d_section-idm4599121747198432585635428149'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Data Export \/ Saving DICOM Images for Transfer \/ Export data with a USB stick or external hard drive"
                , 'snippet': "In <Patient Browser> select the appropriate subject folder. Select <Transfer> and then <Export to off-line> Select the path and folder from the path selection list (this could be a USB stick, external hard drive or CD). Select DICOM in <Select format>. For XA software version, select \" Create DICOM ..."
        };
        
        

        store['en'][41]= {
        'title': "Check the data is transferred completely",
        'href': '10960-11106-data-export.html#UUID-39462f19-1576-2e01-a079-a02a619c0a1d_section-idm4565502895198432585641921197'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Data Export \/ Saving DICOM Images for Transfer \/ Check the data is transferred completely"
                , 'snippet': "Select <Transfer> → <Local job status>. A window will pop up to show the data transfer status..."
        };
        
        

        store['en'][42]= {
        'title': "Acquisition checklist",
        'href': '10960-11070-acquisition-checklist.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Acquisition checklist"
                , 'snippet': "Prior to scan Attach ECG triggering device to the patient List of sequences Set up cardiac trace simulator Three-plane localizer Liver to Kidney CoverScan DIXON VIBE Liver LMS T2STAR DIXON Liver LMS MOST Liver LMS MOLLI 1st Slice Liver LMS MOLLI 2nd Slice Liver LMS IDEAL Pancreas CoverScan MOLLI Pan..."
        };
        
        

        store['en'][43]= {
        'title': "Questionnaire",
        'href': '10960-18649-questionnaire.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Questionnaire"
                , 'snippet': "Customer Feedback Please spare 5 min to provide some feedback . We appreciate hearing from you...."
        };
        
        

        store['en'][44]= {
        'title': "Issue control",
        'href': '10960-14408-issue-control-coverscan-md.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Issue control"
                , 'snippet': "Issue Details Date Initial 1.0 New document 23 Oct 2020 FSN 2.0 Protocol changes to reflect the addition of cardiac T2 Map and lung imaging 25 Feb 2021 YCW\/JL 2.1 Specify sequence names as per product 16 July 2021 YCW..."
        };
        
        

        store['en'][45]= {
        'title': "Approvals",
        'href': '10960-10997-approvals.html'
        
            , 'breadcrumbs': "CoverScan MD Patient Acquisition Manual for Siemens Scanners \/ Approvals"
                , 'snippet': "Head of Imaging Solutions Dr. Alex Smith Head of Imaging Applications Andrea Borghetto..."
        };
        
        


            });

            $(document).trigger('search.ready');
       }); 

        