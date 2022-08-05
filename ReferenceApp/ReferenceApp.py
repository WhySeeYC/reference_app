#%%
# Import Relevant libraries
import pandas as pd # this library organises data frame 
import openpyxl # this library open excel file
import requests 
from bs4 import BeautifulSoup as bs
import lxml
import json
import docx # this package get text form word document
import re


# %%
# read in excel list of publications, store as journal data frame and abstract data frame
journal_df = pd.read_excel('/Users/yi-chunwang/OneDrive - Perspectum Ltd/Work_Repo/ReferenceApp/Perspectum Publications Tracker.xlsx', sheet_name = 0, header=0)

abstract_df = pd.read_excel('/Users/yi-chunwang/OneDrive - Perspectum Ltd/Work_Repo/ReferenceApp/Perspectum Publications Tracker.xlsx', sheet_name=1, header=0)

#%%
doi_list = journal_df.DOI.tolist()
# %%
# Produce a data frame of failed doi in publication tracker
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
# Add the summary paragrph into publication tracker
# https://python-docx.readthedocs.io/en/latest/ 

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
    for paragraph in tree.getiterator(PARA):
        texts = [n.text for n in paragraph.getiterator(TEXT) if n.text]
        if texts:
            paragraphs.append(''.join(texts))

    return '\n\n'.join(paragraphs)

para_list = get_docx_text('/Users/yi-chunwang/OneDrive - Perspectum Ltd/Work_Repo/ReferenceApp/Perspectum Publications List Master - LATEST.docx').split('\n\n')

for para in para_list:
    if para.startswith('http'):
        index = para_list.index(para)
        para_list[index-1] = para_list[index-1]+para_list[index]
        para_list.remove(para_list[index-1])
#print(para_list)


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
# slice out the shortened author data as a merge anchor
Shortened_Author = []
for item in summary_df['ref']:
    index = item.find('(2')
    Shortened_Author.append(item[:index])
summary_df['Shortened Author'] = Shortened_Author
summary_df


#%%
new_journal_df = journal_df.merge(summary_df, on='Shortened Author')
new_journal_df


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
    soup = bs(response.text, features='lxml')
    first_article = soup.select_one('article', class_ = 'full-docsum')
    pmid = first_article.find('span', class_ = "docsum-pmid").get_text(strip = True)
    second_url = 'https://pubmed.ncbi.nlm.nih.gov/'+pmid+'/citations/' # get the pmid and actually head in the paper's Pubmed page
    second_response = requests.get(second_url, headers=headers)
    soup2 = second_response.json() # render the response in json format
    apa_orig = soup2['apa']['orig']
    start_index = apa_orig.index('.,')
    end_index = apa_orig.index('(')
    modify = apa_orig.replace(apa_orig[start_index+3:end_index], 'et al. ')
    print(modify)
    # print the summary
    

for i in range(len(new_journal_df.Title)):
    query = new_journal_df.Title[i].rstrip().lstrip().replace(' ','+')
    get_citation(query)
    print(new_journal_df['summary'][i])


# TODO: get only published output as the new_journal_df

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
    for i in range(len(authors_tag))
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
