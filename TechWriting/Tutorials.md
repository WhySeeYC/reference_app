---
presentation:
    enableSpeakerNotes: true
    width: 1000
    height: 800
    slideNumber: true
    minScale: 0.2
    maxScale: 1.5
    overview: true
---

<!-- slide data-background-gradient="linear-gradient(to bottom, #283b95, #17b2c3)"-->
## Technical Writing for Sustainable Documentation
Yi-Chun Wang

<!-- slide align="left"-->
## Outline
Types of technical writing output\
Style guides & Rules\
Single-source/Multi-channel publishing\
Tools for production efficiency\
Tech writing approach\
Evaluation of Docs\
Role Models\
Community\

<!-- slide -->
## Types of Technical Writing Output
- UI Docs
    - software/hardware user manuals
- Developer (API) Docs
    - instructions to interact with an app
- Deployment Docs
    - instructions to ship a software product live

<!-- slide -->
## UI Docs\
![hardwareDoc](/TechWriting/HardwareDoc_Example.png){ width=26% }
![softwareDoc](/TechWriting/Software_Doc_Three_Vendor_Example.png){ width=65% }


<!-- slide data-background-image="https://paligo.net/docs/en/image/uuid-df6e91dd-519f-a4a8-2813-525ad933aae8.png" data-background-size="contain" -->
## Developer (API) Docs

<!-- slide  data-background-image="https://docs.docker.com/engine/images/architecture.svg" data-background-size="contain" -->
## Deployment Docs


<!-- slide -->
## Style Guides & Rules
- [Microsoft writing style guides](https://docs.microsoft.com/en-us/style-guide/top-10-tips-style-voice)
- [GitHub Markdown syntax style guides](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [Python PEP](https://peps.python.org/pep-0008/#id49)
- [DITA](https://www.oxygenxml.com/dita/styleguide/webhelp-feedback/index.html#Artefact/Graphics_and_Figures/c_Figures_or_Images.html)
```
<fig>
 <title>Charles Darwin</title>
 <desc>
  <cite>Photo: Library of Congress, Prints & Photographs
  Division, [reproduction number, LC-USZ61-104]</cite>
 </desc>
 <image placement="inline" align="right" width="208px" height="320px"
  href="../images/darwin_library_of_congress.jpg">
  <alt>Photo of Charles Darwin: Library of Congress, Prints and
  Photographs Division, [reproduction number, LC-USZ61-104]</alt>
 <image>
</fig>
```

<!-- slide
## Decide production efficiency
- Professional CCMS tools, for industrial level output 
    - (3 sets per week, constant service)
- Doc as code, for less frequent output 
    - (4 times per year) -->

<!-- slide -->
## Single-Source/Multi-channel Publishing
> Write everything in one place, use tools to show for different purposes

- reduce dependencies <!-- .element: class="fragment" data-fragment-index="1" -->
- reuse topic-based content <!-- .element: class="fragment" data-fragment-index="2" -->
- recycle generic content<!-- .element: class="fragment" data-fragment-index="3" -->
![](/TechWriting/MakeGeneric.png)
- 💡writing in Markdown also makes the file independent on systems <!-- .element: class="fragment" data-fragment-index="4" -->

<!-- slide -->
## Tools for Production Efficiency
- Professional (C)CMS tools, good for printable content
- Doc as code, good for software related content, thesis, articles
    <!-- - Integrating documentation into development workflows -->

![](/TechWriting/TechWritingTools.jpeg){ width=50% }
![](/TechWriting/DocToolLearningCurve.png){ width=40% }


<!-- slide -->
## Tech Writing Approach
- Think about target audience
    - Common variables: operating system, company name, product name, sequence techniques ⇒ tables
    - Audience level: public, research, clinical ⇒ PowerPoint Custom Slide Show
![](/TechWriting/PowerPointCustomSlideShow.png)

<!-- slide -->
## Tech Writing Approach
- Think about target platforms (Word, PDF, HTML, Rmarkdown Knitr, Slides)
![](/TechWriting/MakefileDemo.png)


<!-- slide -->
## Evaluation of Docs
- Standardised (following open-source writing style?)
![](/TechWriting/Graphics%20Improvement.png)

<!-- slide -->
## Evaluation of Docs
- Scalable (Communicable? Reduce confusion?)

|Date format| which is better?|
|-----------|-----------------|
|060612     |06 June 2012     |

<!-- slide -->
## Evaluation of Docs
- Sustainable (Using plain-text format? Reused by people?)
![](/TechWriting/ReuseStatistics.png)


<!-- slide align="left" data-background-color="#000000" -->
> Undeniably, many scientific developments rely hugely on technical documentations. A technical writing profession is indeed a subset of science communication.


<!-- slide align="left" -->
## Resources
Amruta Ranade, [Youtube channel](https://www.youtube.com/watch?v=jFyKl7w2XQY&list=PLoynTxuTLXaBwMkqeenVVxngMdUWkZokK)\
Craig Wright, [StrayGoat Writing Service](https://www.straygoat.co.uk/blog/technical-writing-tools-do-you-need-to-know-every-tool)\
Mason Egger, [Building Docs Like Code](https://mason.dev/docs/building-docs.pdf)\
Society for Technical Communication, [STC](https://www.stc.org/education/)


<!-- ## Medical Writing Resources
Vicky Sherwood, Scientific Writing Team Lead at Novartis\
Paula Nixon, Senior Director of Clinical and Regulatory Writing at AstraZeneca\
Gertrude Nonterah, Medical Writer and Creator of TheBoldPhD
AMWA, EMWA,  -->


<!-- slide
## Medical Writing Professional Regulatory Guidelines
GPP, Good Publication Guideline Practice\
ICH E6, International Council for Harmonisation\
GCP, Good Clinical Practice -->

<!-- slide -->
# Thanks for listening


<!-- slide -->
## Paligo Tutorial
- UIs and the functions of Paligo
- Techical Documents Output Strategy
- Reuse and Profiling Mechanism
- Evaluate Documents Production
- Complete Manual Creation Process
- Review and Sign off Process
- Other Tips and Tricks

<!-- slide -->
## UIs and the functions of Paligo
- Admin Menu Bar (Dashboard, Planner etc)
- Content Manager
    - Publication
    - Topics
    - Informa Topics
    - Warnings
    - Variable Spreadsheet
    - Media

<!-- slide -->
## UIs and the functions of Paligo
- Editor
- Side Panels
    - Tool bar
    - Structure menu/bread crum
    - Lnaguage ribbon
    - Element Attribute
    - XML Tree View
    - Reuse text panel
    - Paligo Documentation and Validation(mention DITA)

<!-- slide -->
## UIs and the functions of Paligo
- Structure View
- Editor View
- Review View
- Translator View
- Layout Editor

<!-- slide -->
## Techical Documents and Documentation Output Strategy
- Software and hardware manual
- internal technical documentation
- Pixel workflow

<!-- slide -->
## Reuse and Profiling Mechanism
- Variables (in spreadsheet -> in editor blue text -> previw mode)
- Profiling(go through xinfo: in the element attribute pannel -> show publishing widge)
- Layout configuration (show two taste)

<!-- slide -->
## Evaluate Documents Production
- Sustainable(show most reused topic in structure view and dashboard)
- Scalable(MRA manual count)
- Standardised
- Writing Style Guides 
    - GitHub give very good example of thought process of creating documentation: 
        - conceptual paragraph, 
        - Procedural paragraphse, 
        - reference guides,
        - Provide review
    - (show 3 Vendor Instructions)
- whether the language is consistent,(this is when reuse text is useful) 
    - e.g. if there is any artefact (show global search and replace) 
- Whether the general view is consistent

<!-- slide -->
## Other Tips and Tricks

TODO: cut the recording


 