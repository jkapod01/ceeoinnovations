---
layout: post
displayimg: inno_instruct/small_background.jpg 
categories: ["Lesson Plans"] 
authors: []
---
<!--SITE_TITLE creates a title for your webpage----------------->
<div class="site_title" markdown="1">
# Instructions for
# Documenting 
# on CEEO Innovations
</div>

<!--IMAGE_TEXT_OVERLAY creates a image with a text box over it--------------------->
<div class="image_text_overlay" markdown="1">
![my header image](inno_instruct/tuftsceeo.jpg)
# The CEEO Portfolio
## CEEO innovations is a hub for the the CEEO's work
CEEO innovations is a “hub” for all the cool projects going on at the CEEO. “Projects” pages on the site like the one you will make 
will let visitors learn about specific projects going  at the CEEO.
*Think of your page as an “advertisement” or summary of your project.*
</div>

<!--FREE WRITE lets you write any markdown you want (include images, lists, titles, code,etc)
               If something doesn't look how you expect on the page, try adding a linebreak after it--------------------->
<div class="free_write" markdown="1"> 
# Before you start documenting...
## make sure you have

- A few sentences or paragraphs of content summarizing the project 
- At least 2-5 images (give them easy to type names) saved to a folder on your computer
- *This includes a “display” cropped 2:3*

### Optional but not required:

- Any relevant documents or pdfs
- Any relevant videos
- Links to related sites so people can learn more about the project

</div>

<div class="free_write" markdown="1">

# Creating a Page
1. Use **Drag and Drop** to upload a folder of images and documents for your page to **project_assets** on (github)[https://github.com/amoore449/ceeoinnovations] 
2. Go into the **_projects folder** and copy the **SAMPLE-FILE.markdown** to make a new file for your page. Title it how you want your page to appear with “-” dashes instead of spaces
3. **Customize** the sample file with divs and markdown to display the content you want.
4. **Commit** your file and check that it looks how you want it to by refreshing the site (github takes a few minutes to update, you can make this faster by using incognito).
5. Done!

</div>

<!--document creates a grid of documents--------------------->
<div class="document" markdown="1">
# Guides on how to use CEEOInnovations 
["Cheatsheet" For documenting](inno_instruct/cheatsheet.pdf)
[Presentation slides with lesson on documenting](https://docs.google.com/presentation/d/e/2PACX-1vQuVgfNrRipSOYAHUVL6Y9ZKi2BMW7wI95fPlgpEIaGu6yQpx-1VEYMOJpOCQ8sqcJCkL5O3a0ZDf7N/embed?start=false&loop=false&delayms=3000)
[Step by step instructions for documenting](https://docs.google.com/presentation/d/e/2PACX-1vSiyHN0pkL6nAxrFn-ZflAJsobtjKmr8_RYveM7Q2lLKXcMvObQm-EdgSUIfjUJjTsIXpkRGkJq0JxH/embed?start=false&loop=false&delayms=3000)
[Guide to Markdown and Divs](https://docs.google.com/presentation/d/e/2PACX-1vRYPC-Jo3iU7rD1_seS9CQZFMbwctRxy_XQWQ-WJGz8waFeZH0QQwa66DYzZXbPtFb3f65SbYsrJVN0/embed?start=false&loop=false&delayms=3000)
</div>

<div class="free_write" markdown="1">
# Markdown Basics
## CEEO Innovations is made using a modified version of Markdown

Markdown is a "short hand" way of writing html that makes it easy to create web pages. 
Most of the components on this site are made using the **header, subheader, image, and link** attributes, however Markdown offers a wide variety of styling options shown in
the pictured table. These styling options can be used with "free write" div sections of webpages (like this one!)
![Markdown Table 1](inno_instruct/markdown2.png)
![Markdown Table 2](inno instruct/markdown3.png)

Complete documentation for markdown can be found [here](https://www.markdownguide.org/basic-syntax/).
</div>

<div class="free_write" markdown="1">
# Divs on CEEO Innovations
## Divs allow us to customize parts of our page

![divexample0](inno_instruct/divexample0.png)

This and other projects pages on this site on structed into "sections" with different designs. This isn't normally possible with markdown, however using "div" elements we can get these cool sub sections. **Divs are the "building blocks" of a CEEOInnovations project page.**


![Markdown Table 2](inno instruct/divexample1.png)

Divs can be repeated and ordered in any order. If you don't want to use a certain section of a div (such as a title or subtitle) you can just delete it!

### This is the format for a div element

```
<div class=”DIV_NAME” markdown="1">
 ------DIV CONTENT---------
</div>
```

Where "DIV_NAME" can be one of **five** possible sections. Each of these sections has unique formatting and capabilities.
1. site_title
2. image_text_overlay
3. video_text_overlay
4. document 
5. free_write

</div>

<div class="document" markdown="1">
# Give us feedback!
[Feedback form](https://docs.google.com/forms/d/e/1FAIpQLSfa-MQgvEgZVkgYA_vNH_Gq_ybG0fT5YhXLeveJVmmDm9_8jA/viewform?embedded=true)
</div>
