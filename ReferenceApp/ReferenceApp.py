#%%
# Import Relevant libraries
from textwrap import indent
import pandas as pd # this library organises data frame 
import openpyxl # this library open excel file
import requests 
from bs4 import BeautifulSoup as bs
import lxml
import json
import docx # this package get text form word document
import re
from docx import Document
from docx.shared import RGBColor
from docx.shared import Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from datetime import date

#%%
pd.set_option('display.max_row', None)
pd.set_option('display.max_column', None)
pd.set_option('display.width', 1000)

# %%
# read in excel list of publications, store as journal data frame and abstract data frame
journal_df = pd.read_excel('/Users/yi-chunwang/OneDrive - Perspectum Ltd/Work_Repo/ReferenceApp/Perspectum Publications Tracker.xlsx', sheet_name = 0, header=0)

# %% 
abstract_df = pd.read_excel('/Users/yi-chunwang/OneDrive - Perspectum Ltd/Work_Repo/ReferenceApp/Perspectum Publications Tracker.xlsx', sheet_name=1, header=0)

#%%
# Add the summary paragrph into publication tracker. https://python-docx.readthedocs.io/en/latest/ 

word_master = docx.Document('/Users/yi-chunwang/OneDrive - Perspectum Ltd/Work_Repo/ReferenceApp/Perspectum Publications List Master - LATEST.docx')
all_paragraphs = word_master.paragraphs

try:
    from xml.etree.cElementTree import XML
except ImportError:
    from xml.etree.ElementTree import XML
import zipfile
import io
import requests    

def get_docx_text(path):
    """Take the path of a docx file as argument, return the text in unicode."""

    WORD_NAMESPACE = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
    PARA = WORD_NAMESPACE + 'p'
    TEXT = WORD_NAMESPACE + 't'

    document = zipfile.ZipFile(path)
    xml_content = document.read('word/document.xml')
    document.close()
    tree = XML(xml_content)

    paragraphs = []
    for paragraph in tree.iter(PARA):
        texts = [n.text for n in paragraph.iter(TEXT) if n.text]
        if texts:
            paragraphs.append(''.join(texts))

    return '\n\n'.join(paragraphs)

para_list = get_docx_text('/Users/yi-chunwang/OneDrive - Perspectum Ltd/Work_Repo/ReferenceApp/Perspectum Publications List Master - LATEST.docx').split('\n\n')

for para in para_list:
    if para.startswith('http'):
        index = para_list.index(para)
        para_list[index-1] = para_list[index-1]+para_list[index]
        para_list.remove(para_list[index-1])
# print(para_list)




#%%
summary_dict = {'ref':[], 'summary':[]}

for para in para_list:
    if re.search(r'(2\d{3})', para) != None:
        summary_dict['ref'].append(para)
    else:
        if para == " ":
            continue
        else:
            summary_dict['summary'].append(para)
summary_df = pd.DataFrame(summary_dict)




#%%
# create anchor to merge summary dataframe with journal dataframe

Starttitle = []
for item in summary_df['ref']:
    index = item.find(').')
    slice = item[index+2: index+2+60].lstrip() # slice out a section that is more than 50 characters and cut the white space at the begining
    Starttitle.append(slice[0:50].lower().replace('-', ' ').replace('/', ' ').replace(',', ' ').replace('–', ' ')) # store the first 50 character into the Starttitle column
summary_df['Starttitle'] = Starttitle

Starttitle2 = []
for item in journal_df['Title']:
    if type(item) is float:
        Starttitle2.append(item)
    else:
        Starttitle2.append(item.lstrip()[0:50].lower().replace('-', ' ').replace('/', ' ').replace(',', ' ').replace('–', ' '))
journal_df['Starttitle'] = Starttitle2

# merge two dataframes based on the anchor "Starttitle"
new_journal_df = journal_df.merge(summary_df, how='outer')
# new_journal_df.to_excel('Published and Accepted Studies with Summary.xlsx', sheet_name='To fix match')


 
# %%
# Scrap out the citation detail 
# https://stackoverflow.com/questions/69428700/how-to-scrape-full-paper-citation-from-google-scholar-search-results-python
# https://medium.com/@nandinisaini021/scraping-publications-of-aerial-image-research-papers-on-google-scholar-using-python-a0dee9744728
# https://stackoverflow.com/questions/62414552/scraping-citation-text-from-pubmed-search-results-with-beautifulsoup-and-python
# https://nexus.od.nih.gov/all/2015/08/31/pmid-vs-pmcid-whats-the-difference/

headers  = {'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36'}

# get citation function
def get_citation(query):
    url = 'https://pubmed.ncbi.nlm.nih.gov/?term='+query
    response = requests.get(url, headers=headers)
    soup = bs(response.text, features='lxml') # this return the lxml page of the initial search (search from title)
    redirect = soup.find('div', class_='article-page')
    if redirect != None:
        # For soup2, direct into article
        pmid = redirect['data-article-pmid']
        second_url = 'https://pubmed.ncbi.nlm.nih.gov/'+pmid+'/citations/'
        second_response = requests.get(second_url, headers=headers) # request to get in the paper's Pubmed page
        soup2 = second_response.json() # render the response in json format
        apa_orig = soup2['apa']['orig'] # slice out the apa formatted 
        try:
            start_index = apa_orig.index('.,')  # some studies have single author
            end_index = apa_orig.index('(')
            modify = apa_orig.replace(apa_orig[start_index+3:end_index], 'et al. ') 
            return modify
        except:
            modify = apa_orig
            return modify
    else:
        first_article = soup.find('article', attrs={"class":"full-docsum", "data-rel-pos":"1"})
        if first_article != None:
            # For soup and soup3, match with explanation box available.
            # For soup4, match but no explanation box, get the 1st position article.
            # all of these scenarios, find the 1st position article
            pmid = first_article.find('span', class_='docsum-pmid').get_text()
            #print(pmid)
            # the issue with this logic is that we assume the 1st article is the best match
            second_url = 'https://pubmed.ncbi.nlm.nih.gov/'+pmid+'/citations/'
            second_response = requests.get(second_url, headers=headers) # request to get in the paper's Pubmed page
            soup2 = second_response.json() # render the response in json format
            apa_orig = soup2['apa']['orig'] # slice out the apa formatted 
            try:
                start_index = apa_orig.index('.,')  # some studies have single author
                end_index = apa_orig.index('(')
                modify = apa_orig.replace(apa_orig[start_index+3:end_index], 'et al. ') 
                return modify
            except:
                modify = apa_orig
                return modify
        else:
            # For soup5, no matach at all, try search with DOI
            raise Exception('not searchable. use DOI') # use exception message to allow trying the get_citation_doi() function
            exit()



#%%
# getting citation with DOI function
def get_citation_doi(search_doi):
    url = 'https://pubmed.ncbi.nlm.nih.gov/?term='+search_doi
    response = requests.get(url, headers=headers) # find alternative solution for Imajo paper
    soup = bs(response.text, features='lxml')
    pmid = soup.find('span', class_ = "docsum-pmid").get_text(strip = True)
    second_url = 'https://pubmed.ncbi.nlm.nih.gov/'+pmid+'/citations/' 
    second_response = requests.get(second_url, headers=headers) # request to get in the paper's Pubmed page
    soup2 = second_response.json() # render the response in json format
    apa_orig = soup2['apa']['orig'] # slice out the apa formatted citation
    start_index = apa_orig.index('.,')
    end_index = apa_orig.index('(')
    modify = apa_orig.replace(apa_orig[start_index+3:end_index], 'et al. ') 
    return modify




#%%
# Tested function utility
for i in range(len(new_journal_df['Title'])):
    try: 
        get_citation(new_journal_df['Title'][i].strip()) # strip the space at both end of the tile to reduce conflict
        print(i, 'study found with get_citation function')
    except: 
        search_doi = new_journal_df.DOI[i].replace('https://doi.org/', '')
        get_citation_doi(search_doi)
        print(i, 'study found with get_citation_doi function')

# Test on 5 dataset, represent 5 scenarios
# soup: match, 1 article found. [Multiparametric magnetic resonance for the non-invasive diagnosis of liver disease.]
# soup2: match, directly into article page.[ Sex-specific differences in hepatic fat oxidation and synthesis may explain the higher propensity for NAFLD in men.]
# soup3: match, 2 articel found. [ Characterisation of liver fat in the UK Biobank cohort.]
# soup4: match, no explanation box. [Multiparametric magnetic resonance imaging for early detection of diffuse liver disease.]
# soup5: no match at all. [ The Effect of Multiparametric Magnetic Resonance Imaging in Standard of Care for Non-alcoholic Fatty Liver Disease: Protocol for a Randomised Control Trial.]



redirect = soup.find('div', class_='article-page')
if redirect != None:
    # For soup2, direct into article
    pmid = redirect['data-article-pmid']
    print(pmid)
else:
    first_article = soup.find('article', attrs={"class":"full-docsum", "data-rel-pos":"1"})
    if first_article != None:
        # For soup and soup3, match with explanation box available.
        # For soup4, match but no explanation box, get the 1st position article.
        # all of these scenarios, find the 1st position article
        pmid = first_article.find('span', class_='docsum-pmid').get_text()
        print(pmid)
        # the issue with this logic is that we assume the 1st article is the best match
    else:
        # For soup5, no matach at all
        print('not searchable. use DOI')




#%% [markdown]
### There are the 10 studies could not be searched through the get_citation() function.
# It will be useful to split output from interactive window and inspect with web-browser

# Associations Between Quantitative MRI Metrics and Clinical Risk Scores in Children and Young Adults With Autoimmune Liver Disease.\
#  Utility and cost evaluation of multiparametric magnetic resonance imaging for the assessment of non-alcoholic fatty liver disease.\
# These two were solved with modified function
# ```
# tmp = soup.find('button', class_="citation-button citation-dialog-trigger")
# pmid = tmp['data-all-citations-url']
# second_url = 'https://pubmed.ncbi.nlm.nih.gov/'+pmid

# ```
# However, with using the modified function along, the other studies which was able to be found with original functions could not be found with the modified function.

# Another issue is that the `soup.find('span, class_='docsum-pmid')` could match multiple studies' pmid


# Quantitative multiparametric MRI can aid NASH diagnosis in a Japanese cohort.  \ not work with modified 
# The Effect of Multiparametric Magnetic Resonance Imaging in Standard of Care for Non-alcoholic Fatty Liver Disease: Protocol for a Randomised Control Trial.\ not work with modified 
#  Multiparametric magnetic resonance imaging for early detection of diffuse liver disease.\ not work with modified 

# nan\
# nan\
# nan\
# nan\
# nan\

# 27 Sep testing, the function performance gone worst
# 28 Sep testing. There are 3 studies unsearchable with title. The DOIs are attached.
# https://doi.org/10.2196/19189
# https://doi.org/10.3748/wjg.v27.i7.609
# https://doi.org/10.1007/s12072-022-10331-w
# After using exception message to connect two functions in one for loop. The 3 strudies are able to be found with get_citation_doi function.

#%%
# defiine styles functions
def study_style(modify):
    run = document.add_paragraph(style = 'List Number').add_run(modify)
    font = run.font
    font.bold = True
    font.name = 'Proxima Nova'
    # RGB_tuple = input('Please type in the 3 RGB values for the reference paragraph:')
    font.color.rgb = RGBColor(0x01, 0x42, 0x7E) # FIXME: make this chooseable color picker 


def summary_style(modify):
    paragraph = document.add_paragraph()
    paragraph_format = paragraph.paragraph_format
    paragraph_format.left_indent = Cm(0.63) # make the indentation the same as previous one
    run = paragraph.add_run(modify)
    font = run.font
    font.name = 'Proxima Nova'
    font.color.rgb = RGBColor(0x00, 0x00, 0x00)

#%% Write into Doc before formating
#FIXME: sorting descending from dataframe did not work


document = Document()
section = document.sections[0]

# set margin to narrow
section.left_margin, section.right_margin, section.top_margin, section.bottom_margin = Cm(1.77), Cm(1.77), Cm(1.77), Cm(1.77) 

# set header with logo
header = section.header
paragraph = header.paragraphs[0]
paragraph.alignment = WD_ALIGN_PARAGRAPH.RIGHT
logo_run = paragraph.add_run()
# logo_path = input('Please choose a Logo path:')
# logo_run.add_picture(logo_path, width=Cm(6))
logo_run.add_picture('/Users/yi-chunwang/OneDrive - Perspectum Ltd/Work_Repo/ReferenceApp/Logo Perspectum_RGB_NoTM.png', width=Cm(6)) # 

# allow user to put in document title
heading = input('Type in the document title:')
document.add_heading(heading, 0)


problem_entries={'Description':[], 'Entry':[]}

# Writing reference and summary into the document
for i in range(len(new_journal_df.Title)):
    try:
        query = new_journal_df.Title[i].rstrip().lstrip().replace(' ','+') # this prepare the title to be searchable
        try:
            # get citation with get_citation function
            modify = get_citation(query) # define the variable modify again from the returned value of get_citation function
            study_style(modify)
            if pd.notna(new_journal_df['summary'][i]) is True:
                summary_style(new_journal_df['summary'][i])
            else:
                print('no summary for study:', new_journal_df.Title[i])
            print(i, 'written')
        except:
            # get citation with get_citation_doi function
            search_doi = new_journal_df.DOI[i].replace('https://doi.org/', '')
            modify = get_citation_doi(search_doi)
            study_style(modify)
            if pd.notna(new_journal_df['summary'][i]) is True:
                summary_style(new_journal_df['summary'][i])
            else:
                print('no summary for study:', new_journal_df.Title[i])
            print(i, 'written')
    except:
        print('Can not get citation for the study in index:', i)
        if pd.isna(new_journal_df.Title[i]) is True:
            print('There is no title for the study')
        else:
            if (new_journal_df.Status[i].strip() == 'Published') or (new_journal_df.Status[i] == 'Accepted'):
                print('Published but not match with pubmed') # published, not match on pubmed
            else:
                print('Please check the status of the study:', new_journal_df.Status[i]) # not published
        
document.save('demo1.docx')        



#%%
# Test wriiting into Doc

from docx import Document
from docx.shared import RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH # import the python-docx property setting WD_ALIGN_PARAGRAPH
from docx.enum.style import WD_STYLE_TYPE

document = docx.Document(docx = '/Users/yi-chunwang/Work_Repo/ReferenceApp/Publication Template.docx') # use template
style = document.styles 
# lstyle = styles.add_style('List Number', WD_STYLE_TYPE.PARAGRAPH, builtin=True)
"""
To access the style in the template:
from docx.enum.style import WD_STYLE_TYPE
document = docx.Document(docx = '/Users/yi-chunwang/Work_Repo/ReferenceApp/Publication Template.docx') # use template
styles = document.styles
paragraph_styles = [s for s in styles if s.type == WD_STYLE_TYPE.PARAGRAPH]
for style in paragraph_styles:
    print(style.name)
"""
# section = document.sections[0]
# section.left_margin, section.right_margin, section.top_margin, section.bottom_margin = Cm(1.77), Cm(1.77), Cm(1.77), Cm(1.77) # set margin to narrow
# header = section.header
# paragraph = header.paragraphs[0]
# paragraph.alignment = WD_ALIGN_PARAGRAPH.RIGHT
# logo_run = paragraph.add_run()
# logo = logo_run.add_picture('/Users/yi-chunwang/OneDrive - Perspectum Ltd/Work_Repo/ReferenceApp/Logo Perspectum_RGB_NoTM.png', width=Cm(6)) 

# footer = section.footer
# paragraph = footer.paragraphs[0]
# today = datetime.date.today().strftime('%d/%m/%Y')
# contact_info = 'info@perspectum.com | www.perspectum.com | U.S.: (+1) 857 321 8675 | U.K.: (+44) 1865 655343'
# page_num = 'page X of Y'  # paragraph.add_run(style[WD_STYLE.PAGE_NUMBER]) #FIXME: find ways to auto get page number 
# foot_run = paragraph.add_run(today +'\t'+ contact_info + '\t' + page_num) #FIXME: make fotter text smaller https://python-docx.readthedocs.io/en/latest/user/hdrftr.html

# ref_run = document.add_paragraph(style = 'List Number').add_run(modify)
ref_run = document.add_paragraph(style = 'List Paragraph').add_run('reference of the study blabla ')
font = ref_run.font
font.bold = True
font.name = 'Proxima Nova'
font.color.rgb = RGBColor(0x01, 0x42, 0x7E) 

paragraph = document.add_paragraph(style = 'Normal (Web)')
# paragraph_format = paragraph.paragraph_format
# paragraph_format.left_indent = Cm(0.63)
sum_run = paragraph.add_run('summary pojedopvn')
font = sum_run.font
font.name = 'Proxima Nova'


# duplicate
ref_run = document.add_paragraph(style = 'List Paragraph').add_run('reference of the study2')
font = ref_run.font
font.bold = True
font.name = 'Proxima Nova'
font.color.rgb = RGBColor(0x01, 0x42, 0x7E) 

paragraph = document.add_paragraph(style = 'Normal (Web)')
sum_run = paragraph.add_run('summary2')
font = sum_run.font
font.name = 'Proxima Nova'


document.save('test.docx')








#%%
#TODO: build app functions
"""
Input:
import csv from publication tracker
Select Technology (multiple choice)
Select Sttatus (multiple choice)

Select:
Preview a DataFrame to the next tab
drop rows from data frame (optional)
Preview final dataframe for the studies to be write into word file

Style:
Input Title
select Logo for the document
Select color for reference paragraph

Output:
Gwnerate

"""


# Create functions to filter columms
import inquirer

status_question = [
    inquirer.List('Status',
                message='What is the status of the article?',
                choices=journal_df['Status'].unique().tolist()
    )
]
# select status filter
selected_status_option = inquirer.prompt(status_question)



#%%
# select technology to "LMS"
technology_option = journal_df["Technology"].unique()
selected_technology_option = input('selected from the list')

# Generate filtered dataframe
selected_filter = ( journal_df['Status'] == selected_status_option & journal_df['Technology'] == selected_technology_option )
selected_df = journal_df[selected_filter]




# %%
# Produce a data frame of failed doi in publication tracker
doi_list = journal_df.DOI.tolist()
weird_doi = {"Study":[], "url":[]}

for url, i in zip(journal_df.DOI, range(len(journal_df.DOI))):
    if type(url) is str:
        if url.startswith('http'):
            continue
        else:
            weird_doi["Study"].append(journal_df['Concatenated'][i])
            weird_doi["url"].append(url)
    else:
        weird_doi["Study"].append(journal_df['Concatenated'][i])
        weird_doi["url"].append(url)
pd.set_option('display.max_colwidth', 400)
Weird_doi_DF = pd.DataFrame(weird_doi)
Weird_doi_DF.dropna(how = 'all')



#%%
# See if biopython will work. Biopython is PubMed's public API

from Bio import Entrez
#%%
# Define the function to perform the search
def search(query):
    Entrez.email = 'yi-chun.wang@perspectum.com'
    handle = Entrez.esearch(db = 'pubmed',
                            sort = 'relevance',
                            retmax = '1',
                            retmode = 'xml',
                            term = query)
    
    global search_results
    search_results = Entrez.read(handle)
    

#%%
# fetch the details for all retrieved articles 

def fetch_details(id_list):
    # ids = ','.join(id_list)
    Entrez.email = 'yi-chun.wang@perspectum.com'
    handle = Entrez.efetch(db = 'pubmed',
                            retmode = 'xml',
                            id = id_list)
    global fetch_results
    fetch_results = Entrez.read(handle)


#%%
import json
print(json.dumps(fetch_results['PubmedArticle'][0], indent=2))


# %%
# define functions for getting information from the web page

def get_paperinfo(paper_url):
    # download the page
    response = requests.get(url, headers = headers)

    # check of successful response
    if response.status_code != 200:
        print('status code:', response.status_code)
        raise Exception('Failed to fetch web page')
    
    # parse using BeautifulSoup to parse HTML content
    paper_doc =  bs(response.text, 'html.parser')

    return paper_doc

# %%
# Extracting Tags
# .select() method which uses the SoupSieve package to run a CSS selector against a parsed document and return all the matching elements.

def get_tags(doc):
    paper_tag = doc.select('[data-lid]')
    cite_tag = doc.select('[title-Cite] + a')
    link_tag = doc.find_all('h3', {'class':'gs_a'})
    author_tag = doc.find_all('div', {'class': 'gs_a'})

    return paper_tag, cite_tag, link_tag, author_tag

#%%
# Extract the title of the paper
def get_papertitle(paper_tag):
    paper_names = []
    for tag in paper_tag:
        paper_names.append(tag.select('h3')[0].get_text())
        return paper_names

#%% 
# Extract citation count
def get_citecount(cite_tag):
    cite_count = []
    cite = i.text
    for i in cite_tag:
        if i is None or cite is None: 
            cite_count.append(0)
        else: 
            tmp = re.search(r'\d+', cite)
            if tmp is None:
                cite_count.append(0)
            else:
                cite_count.append(int(temp.group()))
    return cite_count

#%%
# Extract URL for the paper
def get_link(link_tag):
    links = []
    for i in range(len(link_tag)):
        links.append(link_tag[i].a['href'])
    return links

#%%
# function for getting author, year, and publication information
def get_author_year_publi_info(authors_tag):
    years = []
    publication = []
    authors = []
    for i in range(len(authors_tag)):
        authortag_text = (author_tag[i].text).split()
        year = int(re.search(r'\d+', authors_tag[i].text).group())
        years.append(year)
        publication.append(authortag_text[-1])
        author= authortag_text[0]+ ''+ re.sub(',', '', authortag_text[1])
        author.append(author)
    return years, publication, authors

#%%
# Compile the data and create a csv file using pandas
# create a dictionary to store the information
paper_dict = {
                    'Paper Title': [],
                    'Year': [],
                    'Author': [],
                    'Citation': [],
                    'Publication': [],
                    'Url of paper': [] }

# add information to the dictionary
def add_in_paper_dict(papername, year, author, cite, publi, link):
    paper_dict['Paper Title'].extend(papername) # extend list by appending elements from the iterable
    paper_dict['Year'].extend(year)
    paper_dict['Author'].extend(author)
    paper_dict['Citation'].extend(cite)
    paper_dict['Publication'].extend(publi)
    paper_dict['Url of paper'].extend(link)

    return pd.DataFrame(paper_dict)

#%%
for i in range(0, 110, 10):
    # get url for the each page
    url = 'https://scholar.google.com/scholar?start={}&q=object+detection+in+aerial+image+&hl=en&as_sdt=0,5'.format(i)
    # function for getting the content of each page
    doc = get_paperinfo(url)
    # function for collecting the tags
    paper_tag,  cite_tag, link_tag, author_tag = get_tags(doc)
    # paper title from each page
    papername = get_papertitle(paper_tag)

    # year, author, publication of the paper
    year, publication, author = get_author_year_publi_info(author_tag) 
    # cite count of the paper
    cite = get_citecount(cite_tag)
    # url of the paper
    link = get_link(link_tag)
    # add in paper dictionary
    final = add_in_paper_dict(papername, year, author, cite, publication,link)
    # use sleep to avoid status code 429
    sleep(30)

#%%
# understand how to parse out APA citation
# structure of a URL: scheme://netloc/path;parameters?query#fragment
# What is percent-encoded queries? Percent-encoding, also known as URL encoding, is a method to encode arbitrary data in a Uniform Resource Identifier (URI) using only the limited US-ASCII characters legal within a URI.

#%%
import urllib2

for i in range(17):
    urllib2.urlopen('https://www.hostelworld.com/')


# %%

name = ' Joanna '
# 'My friend' + name + 'is coming for dinner tonight.'

#'My friend %s is coming for dinner tonight.' % name
"My friend `(name)` is coming for dinner tonight."
# %%


total = 0
for num in range(1,6):
    total+=num
print(total)
# %%


numbers = [num for num in range(5) if 0 < num < 4 ]

count = 0
result = 20

while count < len(numbers):
    result = result - numbers[count]
    count += 1

print(result)
# %%
def process_word(word):
    output = list(word)
    output.reverse()
    new_word = "".join(output)
    print(new_word)

result = process_word('monkey')
# %%
def calc_factorial(n):
    fact = 1
    for num in range(2, n + 1):
        fact *= num
    return fact


def my_function(numbers):
    my_container = []
    for num in numbers:
        my_container.append(calc_factorial(num))
    return my_container[::-1]


result = my_function((1,2,3))
print(result)
# %%

dog_size = int(input('How big is the dog? '))

if dog_size > 75:
    print('That is a big dog')

elif dog_size < 10:
    print('That dog could fit in my pocket')

elif dog_size < 25:
    print('That is a small dog')

else:
    print('That is an average dog')
# %%
my_dict = {
'dog' : 'billy',
'cat' : 'pepe'
}

result = [v.capitalize() for k,v in my_dict.items()]
# %%

my_fruit = {"apple", "banana", "orange"}

my_fruit.pop()

print(my_fruit)
#%%

menu = ('croissant', 'coffee', 'juice')

menu[1] = ['tea', 'juice']
# %%
my_dict = {
'Anita': [
{'Biology': 'A', 'Chemistry': 'A*', 'Physics': 'B'},
{'English': 'B', 'Literature': 'B', 'French': 'C'},
{'PE': 'A', 'Music': 'A', 'Food Tech': 'A'}
]
}

for i in my_dict.keys():
    # result = type(my_dict[i])
    result = set(my_dict[i][2].values())

print(result)
# %%

import requests

response = requests.get('http://api.open-notify.org/astros.json')
data = response.ok()
print(data)
# %%
