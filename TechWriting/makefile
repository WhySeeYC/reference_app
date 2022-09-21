BUILDDIR=build
FILENAME=Tutorials

# define python command and pandoc command, if they are not in path, specify them here
PY=python
PANDOC_COMMON_OPT=-F pandoc-crossref --citeproc

# OS specific part
# for *nix, use below
# no need to change code page
OS_OPTION=echo nothing

# since powershell need the double quote, have to add this too
# simple rm -f quote *.pdf cannot delete it
# add -f to omit error messages
RM_CMD_HEAD=bash -c "rm -f

BASEDIR=/Users/yi-chunwang/OneDrive - Perspectum Ltd/Work_Repo/TechWriting
RMTEX=rm -rf tex2pdf*

# define image files path
IMAGEDIR=/Users/yi-chunwang/OneDrive - Perspectum Ltd/Work_Repo/TechWriting

# define style files directory
# Pandoc can use both / and \ to find files, no need to change path separator
REF_STYLE=$(STYLEDIR)/apa.csl
#    STYLEDIR=$(BASEDIR)/style
#    TEX_TEMPLATE=$(STYLEDIR)/template.tex
#    TEX_HEAD=$(STYLEDIR)/preamble.tex
#    HTML_TEMPLATE=$(STYLEDIR)/template.html
#    BEAMER_HEAD=$(STYLEDIR)/preamble_beamer.tex

pdf: 
	pandoc $(FILENAME).md \
	--o $(FILENAME).pdf \
	$(PANDOC_COMMON_OPT) \
	--pdf-engine=xelatex \
	--verbose
	
html: 
	pandoc $(FILENAME).md \
	--o $(FILENAME).html \
	--self-contained

word:
	pandoc $(FILENAME).md \
	--o $(FILENAME).docx \
