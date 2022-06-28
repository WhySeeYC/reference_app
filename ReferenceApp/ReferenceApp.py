#%%
# Import Relevant libraries
import pandas as pd # this library organises data frame 
import openpyxl # this library open excel file
import webbrowser # this library use to open web browser, not needed
import requests 
from bs4 import BeautifulSoup as bs
from urllib.parse import urlencode
import lxml


# %%
# read in excel list of publications, store as journal data frame and abstract data frame
journal_df = pd.read_excel('/Users/yi-chunwang/OneDrive - Perspectum Ltd/Work_Repo/ReferenceApp/Perspectum Publications Tracker.xlsx', sheet_name = 0, header=0)

abstract_df = pd.read_excel('/Users/yi-chunwang/OneDrive - Perspectum Ltd/Work_Repo/ReferenceApp/Perspectum Publications Tracker.xlsx', sheet_name=1, header=0)


# %%
# Explore the journal paper data frame
journal_df.info()

# %%
# Explore the abstract paper data frame
abstract_df.info()

# %%
# the type of the DOI column is pandas series
type(journal_df.DOI)

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
pd.DataFrame(weird_doi)








# %%
# TODO: scrap out the citation detail 
# https://stackoverflow.com/questions/69428700/how-to-scrape-full-paper-citation-from-google-scholar-search-results-python
# https://medium.com/@nandinisaini021/scraping-publications-of-aerial-image-research-papers-on-google-scholar-using-python-a0dee9744728

headers  = {'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36'}
url = 'https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=https%3A%2F%2Fwww.journal-of-hepatology.eu%2Farticle%2FS0168-8278%2813%2900650-8%2Ffulltext&btnG='

response = requests.get(url, headers=headers)

soup = bs(response.content, features='lxml')
print(soup)

main_div = soup.find_all('div', {'id': 'gs_res_ccl_mid'}) # empty list
divs = main_div.find_all('div', {'class': 'gs_r gs_or gs_scl'}) # AttributeError: ResultSet object has no attribute 'find_all'. You're probably treating a list of elements like a single element. Did you call find_all() when you meant to call find()?




















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

def google_scholar(query, n)
