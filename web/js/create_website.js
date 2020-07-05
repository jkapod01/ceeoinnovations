/*Creates a Website Page Dynamically From a Markdown File
* Allison Moore
* 6/27/20
*/
function CreateWebMain(){
     console.log("Create Web");
     var mydivs = CollectAllDivs();
     CreateSectionsByDiv(mydivs);
     CreateVideoMain();
}

/*CollectAllDivs
 *Collect an Array of all the divs in the Markdown file
* And return that Array
*/
function CollectAllDivs(){
     var mycontent = document.getElementById("mycontent");
     console.log(mycontent);
     var mydivs =  mycontent.getElementsByTagName("div");
     return mydivs;
}
 /* Create Sections by Div
 * loops though the divs and creates sections in order to be appended
 * to the main document based on div name
 * UPDATE AS NEW SECTIONS ARE MADE
 */
 function CreateSectionsByDiv(mydivs){
      for (var i = 0; i < mydivs.length; i++){
           if ( mydivs[i].classList.contains("site_title")){
                CreateSiteTitle(mydivs[i]);
           } else if ( mydivs[i].classList.contains("image_text_overlay")){
                CreateHeaderImg(mydivs[i]);
           }else if ( mydivs[i].classList.contains("pdf")){
                 console.log(i);
               CreateHeaderPI(mydivs[i]);

           } else {
                console.log("Div does not have a valid value");
           }

      }
}
//CREATE PDF=======================================================
function CreateHeaderPI(mydivsi){
               //initialize values from markdown to ter to header
               var sectionheaderPI = CollectmyHeader(mydivsi);

               var mylinkarrayPI = mydivsi.getElementsByTagName('a');

               var largernewdivPI = CreatenewDiv("largerpdfdatasection", "largerpdfsampledatasection");

               var largerelementPI = document.getElementById("myappendcontent");

               var sectionpdfheader = largernewdivPI.getElementsByClassName('pdfsectiontitle')[0];

               sectionpdfheader.innerHTML = sectionheaderPI.innerHTML;

               //Create new div that copies append here to append pdfs to
               //var pdfcontain = CreatenewDiv("sampleappendherePI row mb-5 no-gutters","sampleappendherePI");
               console.log("PDF CONTAIN")
               var pdfcontain = document.createElement("div");
               pdfcontain.className = "sampleappendherePI row mb-5 no-gutters";
               pdfcontain = CreatePdfGrid(pdfcontain, mydivsi, mylinkarrayPI);

               //create new div that copies all
               largernewdivPI.getElementsByClassName("sampleappendherePI")[0].innerHTML = pdfcontain.innerHTML;

               //Create a third div that copies rows into full section
               var myoverall = document.getElementsByClassName("collectthispdfsection")[0];

               var finalpdfdiv = CreatenewDiv("pdfdatasection page-section clearfix","collectthispdfsection");

               var myfinalappend = finalpdfdiv.getElementsByClassName("largerappendherePI")[0];
               myfinalappend.innerHTML = largernewdivPI.innerHTML;

               //reassignme = pdfcontain;
               //largernewdivPI.getElementsByClassName("sampleappendherePI")[0].innerHTML = reassignme.innerHTML;
               largerelementPI.append(finalpdfdiv);
}
function CreatePdfGrid(pdfcontain, mydivsi, mylinkarrayPI){
     console.log("mylinkarrayPI");
     var i;
     for(i=0;i < (mylinkarrayPI.length); i++){
          //creating a new div with a class name that copies the innerhtml of another div
          if (mylinkarrayPI.length%4==0){
               var newdivPI = CreatenewDiv("col-sm-3 col-md-3 col-lg-3 pdfdatasection", "pdfsampledatasection");
          } else if(mylinkarrayPI.length%3==0){
               var newdivPI = CreatenewDiv("col-sm-4 col-md-4 col-lg-4 pdfdatasection", "pdfsampledatasection");
          } else if(mylinkarrayPI.length%2==0){
               var newdivPI = CreatenewDiv("col-sm-6 col-md-6 col-lg-6 pdfdatasection", "pdfsampledatasection");
          }else if(mylinkarrayPI.length==1){
               var newdivPI = CreatenewDiv("col-sm col-md col-lg pdfdatasection", "pdfsampledatasection");
          } else{
               var newdivPI = CreatenewDiv("col-sm-4 col-md-4 col-lg-4 pdfdatasection", "pdfsampledatasection");
          }

          //copy elements from markdown to new div
          var copythis = document.getElementsByClassName("pdfsampledatasection")[0];
          newdivPI.innerHTML = copythis.innerHTML;

          //copy title to pdfheader
          var mypdftitle = mylinkarrayPI[i].innerHTML;
          newdivPI.getElementsByClassName("pdfheader")[0].innerHTML =mypdftitle;
          //copy link to button and iframe
          AddHrefSRCtoNewDiv_Prepend("mypdf", 0, mylinkarrayPI[i], newdivPI);
          AddHreftoNewDiv_Prepend("click-to-download", 0, mylinkarrayPI[i], newdivPI);

          //Create new div that copies append here to append content to
          pdfcontain.append(newdivPI);

     }
     return pdfcontain;
}

function CollectmyHeader(section_to_check){
     var sectionheaderPI = section_to_check.getElementsByTagName('h1')[0];
     var sectionheaderPI = HeaderCheck(sectionheaderPI,section_to_check,"h2");
     var sectionheaderPI = HeaderCheck(sectionheaderPI,section_to_check,"h3");
     var sectionheaderPI = HeaderCheck(sectionheaderPI,section_to_check,"h4");
     var sectionheaderPI = HeaderCheck(sectionheaderPI,section_to_check,"h5");
     var sectionheaderPI = HeaderCheck(sectionheaderPI,section_to_check,"h6");
     var sectionheaderPI = EmptyHeaderCheck(sectionheaderPI,section_to_check);

     return sectionheaderPI;
}
function HeaderCheck(sectionheaderPI, section_to_check, value_to_check){
     if(typeof(sectionheaderPI) == 'undefined' || sectionheaderPI == 'null'){
          var sectionheaderPI = section_to_check.getElementsByTagName(value_to_check)[0];
     }
     return sectionheaderPI;
}
function EmptyHeaderCheck(sectionheaderPI, section_to_check){
     if(typeof(sectionheaderPI) == 'undefined' || sectionheaderPI == 'null'){
          var sectionheaderPI = document.getElementsByClassName("voidvalue")[0];;
     }
     return sectionheaderPI;
}
function AddHrefSRCtoNewDiv(get_class, at_place, copy_this_data, search_here){
     var copyhere = search_here.getElementsByClassName(get_class)[at_place];
     copyhere.src = copy_this_data.href;
     return copyhere;
}
function AddHreftoNewDiv(get_class, at_place, copy_this_data, search_here){
     var copyhere = search_here.getElementsByClassName(get_class)[at_place];
     copyhere.href = copy_this_data.href;
     return copyhere;
}

function AddHrefSRCtoNewDiv_Prepend(get_class, at_place, copy_this_data, search_here){
     var copyhere = search_here.getElementsByClassName(get_class)[at_place];
     $(copy_this_data).attr('href' , "../web/pdf/" + $(copy_this_data).attr('href'));

     copyhere.src = copy_this_data.href;
     return copyhere;
}
function AddHreftoNewDiv_Prepend(get_class, at_place, copy_this_data, search_here){
     var copyhere = search_here.getElementsByClassName(get_class)[at_place];
     //$(copy_this_data).attr('href' , "../web/pdf/" + $(copy_this_data).attr('href'));

     copyhere.href = copy_this_data.href;
     return copyhere;
}

//CREATE VIDEO WITH TEXT=======================================================
/*CreateVideoHeader
* Create and allocate a header video section
* collects image link, sub header, header, and description, if existing
*
*/
function CreateHeaderVideo(mydivsi){
     //collect the template for header img
     var sampledatasection  = document.getElementsByClassName('sampledatasectionVO')[0];


     //collect tag elements from div
     var myh1 = CheckifVoidandAssign_Gen("h1", 0, mydivsi);
     var myh2 = CheckifVoidandAssign_Gen("h2", 0, mydivsi);
     var myp = CheckifVoidandAssign_P_Gen(mydivsi);
     var myiframe = CheckifVoidandAssign_Vid_Gen(0, mydivsi);

     //create new div and copy sample data
     var newdiv = document.createElement("div");
     newdiv.innerHTML = sampledatasection.innerHTML;

     //get sections of old div
     var mainheader = newdiv.getElementsByClassName('mainheaderVO')[0];
     var subheader = newdiv.getElementsByClassName('subheaderVO')[0];
     var myparagraph = newdiv.getElementsByClassName('myparagraphVO')[0];
     var mynewiframe = newdiv.getElementsByClassName('myiframehere')[0];

     //reassign with markdown values
     mainheader.innerHTML = myh2.innerHTML;
     subheader.innerHTML = myh1.innerHTML;
     myparagraph.innerHTML = myp.innerHTML;
     mynewiframe.src = myiframe.src;


     //append copy to append image_text_overlay
     var append_div_here = document.getElementById("myappendcontent");
     append_div_here.appendChild(newdiv);


}

//CREATE HEADER IMAGE=======================================================
/*CreateHeaderImg
* Create and allocate a header image section
* collects image link, sub header, header, and description, if existing
*
*/
function CreateHeaderImg(mydivsi){
     //collect the template for header img
     var sampledatasection  = document.getElementsByClassName('sampledatasectionHT')[0];


     //collect tag elements from div
     var myh1 = CheckifVoidandAssign_Gen("h1", 0, mydivsi);
     var myh2 = CheckifVoidandAssign_Gen("h2", 0, mydivsi);
     var myp = CheckifVoidandAssign_P_Gen(mydivsi);
     console.log("Where");
     var myimg = CheckifVoidandAssign_Img_Gen(0, mydivsi);
     $(myimg).attr('src' , "../web/img/" + $(myimg).attr('src'));


     //create new div and copy sample data
     var newdiv = document.createElement("div");
     newdiv.innerHTML = sampledatasection.innerHTML;

     //get sections of old div
     var mainheader = newdiv.getElementsByClassName('mainheaderHT')[0];
     var subheader = newdiv.getElementsByClassName('subheaderHT')[0];
     var myparagraph = newdiv.getElementsByClassName('myparagraphHT')[0];
     var mynewimg = newdiv.getElementsByClassName('myimghereHT')[0];

     //reassign with markdown values
     mainheader.innerHTML = myh2.innerHTML;
     subheader.innerHTML = myh1.innerHTML;
     myparagraph.innerHTML = myp.innerHTML;
     console.log(myimg.src);
     mynewimg.src = myimg.src;

     //append copy to append image_text_overlay
     var append_div_here = document.getElementById("myappendcontent");
     append_div_here.appendChild(newdiv);


}
//CREATE SITE TITLE(S)=======================================================

/* Createsite_title
* Create and allocate a site title element
* Iterates though all markdown elements in the site title div
* and appends
*/
function CreateSiteTitle(mydivsi){
     //try to collect markdownvalues for the header. If they don't
     //exist assign an emoty value
     var headerarray=  mydivsi.getElementsByTagName("*");
     for (var j = 0; j < (headerarray.length); j++){
          var list = CheckifVoidandAssign_Gen("*",j, mydivsi);


          var sampledatasectionMPT  = document.getElementsByClassName('sampledatasectionMPT')[0];
          var newspan = document.createElement("span");
          var sectionformat  = document.getElementsByClassName('headerMPT')[0];

          newspan.innerHTML = list.innerHTML;
          newspan.className = document.getElementById("headerMPT").className;
          newspan.setAttribute("id", "headerMPT");

          var append_span_here = document.getElementById("titleheader");
          append_span_here.appendChild(newspan);
     }

     //make and append a copy of sample data section
     var newdiv = document.createElement("div");
     newdiv.innerHTML = sampledatasectionMPT.innerHTML;
     newdiv.className = "sitetitle datasection sitetitledatasection";
     var append_div_here = document.getElementById("myappendcontent");
     append_div_here.appendChild(newdiv);

}
