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

<!-- slide data-notes="3 skills, writing, programming, presenting. Motivation: ISMRM, white paper, SciComm" -->
## Technical Writing for Sustainable Documentation
Yi-Chun Wang

<!-- slide align="left" data-notes: different types of output, some industry- motivated standards and rules. Then the next two topics I am going to touch on are focusing on how to efficiently produce quality output. I will also briefly draw the line between the tools to  produce software docs and hardware docs. Afterwards, I will quickly talk about the good practice that I learned when practising technical writing. Last but not least, to understand the key metrics you can use to evaluate the quality of the documentation, I will try and provide some examples. The goal is to share with you a general overview of this profession and skill set and the umbrella  -->

## Outline
Types of Technical Writing Output\
Style Guides & Rules\
Single-Source/Multi-Channel Publishing\
Tools for Production Efficiency\
Tech Writing Approach\
Evaluation of Docs\
Resources\

<!-- slide data-notes="There are 3 man types of technical documentations.  "-->
## Types of Technical Writing Output
- UI Docs
    - software/hardware user manuals
- Developer (API) Docs
    - instructions to interact with an app
- Deployment Docs
    - instructions to ship a software product live

<!-- slide data-notes: . "The first one is easy, the UI documentation gives instructions of how to use a tool. The one on the left is an example of hardware documentation, this is the instructions of the different markers on a phantom which will then referred by MR technologist to scan the phantom. The examples on the right is the software user interface of 3 different vendors' scanning console." -->
## UI Docs\
![hardwareDoc](/TechWriting/HardwareDoc_Example.png){ width=26% }
![softwareDoc](/TechWriting/Software_Doc_Three_Vendor_Example.png){ width=65% }


<!-- slide data-background-image="https://paligo.net/docs/en/image/uuid-df6e91dd-519f-a4a8-2813-525ad933aae8.png" data-background-size="contain" data-notes: "The next one is API documentation. Application Programming Interface is a gate way for the user to interact with the backend or database of a software. A very common use case is when one want to audit or do some statistical analysis of the resources stored when using the software. So API documentation is designed for encoding simple and complex search expressions and parameters in URLs. Usually you will have provide instructions for different query languages"-->
## Developer (API) Docs

<!-- slide  data-background-image="https://docs.docker.com/engine/images/architecture.svg" data-background-size="contain" data-notes="The last one is deployment documentation, this is when a software developers completed an app and would like to ship or deploy a feature of the software or the whole software." -->
## Deployment Docs


<!-- slide data-notes="
Writing technical instructions is very different from academic writing. One of the very good resources that I experienced was the GitHub Docs writing test. In this test, they dissect writing task in to four simple steps. Conceptual, procedural, reference, review with compassionate tones.
Then the next three, MS writing style, GitHub Markdown, and Python PEP are all diving into the detail suggestions such as should you use an underscore or camel case when writing variable names; use first tense or not; whether it is suggested to add emoji in the docs.
The last one is related to information architecture, DITA stands for the Darwin Information Typing Architecture (DITA) specification defines a set of document types for authoring and organizing topic-oriented information. It also has a set of mechanisms for combining, extending, and constraining document types. Nowadays, if you are writing software documentation, most engine will have DITA as a rule to validate the structure of your written documentation. The idea is to make sure the structure is stable and also allow further API expressions to efficiently find resources." -->
## Style Guides & Rules
- GitHub Docs Team writing test
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

<!-- slide data-notes="In this section, let's talk about the concept single-source/Multi-channel publishing. The idea is to write everything in one place, manage all resources in one place (organise base on function though), you spend a lot of time upfront preparing for raw ingredients and serve only relevant information to relevant people. And this comes with experience, what we can do during this process of PhD training, is to develop a good understand of the different roles different people play.
Next are some of the good practices. You might find it very different from academic writing. When writing a paper to submit to journal, we mostly want to be very specific of the methods we talk about, tools we use. But in technical communication, you want to try and do these 3 things. 
Reduce dependencies so that you can reuse many times and no need to worry about the order of the topics.
Topic-based means it is self-contained, and will be ready/sufficient as it is. One good example will be this presentation"
Make the text very generic so that you can reuse many times. 
Again this is a skill that comes with practice and experience so don't kill yourself if you don't necessarily do it.-->
## Single-Source/Multi-channel Publishing
> Write everything in one place, use tools to show for different purposes

- reduce dependencies <!-- .element: class="fragment" data-fragment-index="1" -->
- reuse topic-based content <!-- .element: class="fragment" data-fragment-index="2" -->
- recycle generic content<!-- .element: class="fragment" data-fragment-index="3" -->
![](/TechWriting/MakeGeneric.png)
- 💡writing in Markdown also makes the file independent on systems <!-- .element: class="fragment" data-fragment-index="4" -->


<!-- slide data-notes="In terms of tools, there are way too many tools we can learn and we never have enough time. However, there are many tools in here you have already use anyway, it is just a matter of applying with a different focus which is to produce technical documentation
The top row are three (component) content management system that are widely used in various types of industries. Among which Paligo and MadCap Flare is component-based. These are especially good for hardware documentation which people will need to print out.
In the middle row, these are graphic design tools. I never use Adobe WireFrame and Illustrator, but the former 3 all have the potential to create vector graphics and create template plus spreadsheet to batch export graphics. Kapwing and Camtasia are two common software used to produce video type of tutorials.
In the second last row, these are code editors which can be used for a workflow recently developed called, Docs as Code, and these are certainly requirements to produce software documentations. However, I will say just focus on learning some of them and the rest will be pretty easy to transfer. Overleaf, needless to say, is super common when you write in Letax. Matlab livescript has nice function where you can run a section of code instead of the whole thing. Rmarkdown pluse the knitr function allow you to knitr/export the whole notebook in PDF or HTML. Jupyter notebook is also similar. 
In the last row, Pandoc is a universal document converter and is operated as a command line tool however, it is very powerful because it allows you to convert from ebook, to word to markdown to PDF AND the other way around and you can couple up with Makefile to automate the batch output pipeline. DITA we briefly talked about already. Lastly VS code is just the most powerful editor I have ever user. This presentation is made in VS code.
The graph on the right is the learning curve of documentations tools produced by Mason Egger"-->
## Tools for Production Efficiency
- Professional (C)CMS tools, good for printable content
- Doc as code, good for software related content, thesis, articles
    <!-- - Integrating documentation into development workflows -->

![](/TechWriting/TechWritingTools.jpeg){ width=50% }
![](/TechWriting/DocToolLearningCurve.png){ width=40% }


<!-- slide -->
## Tech Writing Approach
- Think about target platforms (Word, PDF, HTML, Rmarkdown Knitr, Slides)
![](/TechWriting/MakefileDemo.png)


<!-- slide data-notes="At this very moment, I have not come across a tool that has the single-sourcing/Multi-channel publishing concept but PowerPoint has a rather close alternative which is the custom slide show. For example, when working on the pineapple juice project, I could separate the meetings presentation in three different files but instead I use one and custom slide show at the point of presenting. The benefit is that I can centrally manage all contents and create in one go. Recently, I have also found out you can use the `right-click hide slide` function to temporarily not show some slides!"-->
## Tech Writing Approach
- Think about target audience
    - Common variables: operating system, company name, product name, sequence techniques ⇒ tables
    - Audience varies: public, research, clinical ⇒ PowerPoint Custom Slide Show
![](/TechWriting/PowerPointCustomSlideShow.png)


<!-- slide data-notes: to evaluate the quality of technical documentations, you want to look at 3 things and bare in mind this is talking about all output collectively. So it is not just one document, it includes all future versions of the document, the variant of that document. 3 simple things: standardised, scalable and sustainable
For standardised, I am going to refer back to the 4 steps GitHub Docs team's writing approach, if you are in an organisation, there might be branding to consider as well. The image here showed you two consecutive versions of the same topic Axial Tongue SE, you will likely see a conceptual paragraph of what this sequence is about. Then step 2, procedure document, then step 3 references, warning box. Step four, review. I would like to point out for example, the Axial Tongue SE, if you don't write it in one go, it might likely be Tongue Axial SE. 
-->
## Evaluation of Docs
- Standardised (following open-source writing style?)
![](/TechWriting/Graphics%20Improvement.png)

<!-- slide data-notes="The next point is about scalable, one thing that software engineer pointed out is that if you're documentation sucks, the whole project can be abandon by people. Inevitably, we will need to collaborate with people, reduce some confusion and let other tech writer or developer know immediately. 
The right is organised based on type then subject, the left is organised based on project then type. In the case when the next writer want to reuse steps in, they directly go to the steps folder without needing to know what is in the Booking system's project." -->
## Evaluation of Docs
- Scalable (Reduce confusion, organise resources based on function not project)

|Date format| which is better?|
|-----------|-----------------|
|060612     |06 June 2012     |

![](/TechWriting/FunctionalOrganisation.png)


<!-- slide data-notes="Lastly, for the document sustainability, I have not found a way to creatively track software Docs or API Docs, I guess if you go through git history of one file and found that deletion(red) is more than addition(green), then that is probable not a very sustainable writing. But I am sure there are other metrics, if you know, please let me know. As for commercial component content management tools, most of them provide statistics for admins."-->
## Evaluation of Docs
- Sustainable (Using plain-text format? Reused in different occasions?)
![](/TechWriting/ReuseStatistics.png)


<!-- slide align="left" data-background-color="#000000" -->
#### Final Thoughts
> Undeniably, scientific developments rely hugely on technical documentations. A technical writing profession is indeed a subset of science communication.\

> However, technical communication is different from academic writing in terms of level of specification and workflow as well as resource management. 


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
Organise your file functionally
Create your own naming convention: Use Variable names as the last word in the file name


TODO: cut the recording


 