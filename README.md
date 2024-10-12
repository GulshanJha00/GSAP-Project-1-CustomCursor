How To Make It?
There's a small documentation given below with step by step approach just follow it.

Step 1:- Create html, css, js. Create boiler plate and add GSAP cdn

Step 2:- Create div name main with css h,w-100%, bg-black. Add flex property and do its child center

Step 3:- Make another div cursor above div :- h,w-20px, bg-white, border -50%
position fixed  so that it will be on screen even if screen scrolls

Select main from dom and save as main and then same as cursor.
add event in main click and check log as clicked and mousemove
pass dets as function and check the cords then go for dets.x and dets.y to check whats happening on x and y


make gsap.to(to move element from initial pos to final pos) inside the eventlistener and select cursor.
Now set x axis as dets.x and y as dets.y add duration for smoothness

Search for easing to set the animation of the cursor background it will smooth everything

BASIC CURSOR IS DONE NOW TIME FOR DANGEROUS ANIMATION IN IT


Make img inside main:- h-30vw, w-70vw, bg-red get an image and add it in bg-img url("") bg-size cover 

make a query selector of img and add event in it mouseenter. add gsap for cursor and make it to scale 2. and make mouse leave for scale 1
when enter make the innerhtml to view more

PROBLEM IDENTIFIED:- when hovering the cursor div is coming in between the main and image div due to which it is flickering

now add one overlay tab and below it add one img with src as the background img link. add all the css and make the view more better
Now go to overlay css bg-color red h,w -100% position abs add img div position relative 