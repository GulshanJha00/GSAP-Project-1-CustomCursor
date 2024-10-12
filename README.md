How To Make It?
There's a small documentation given below with step by step approach just follow it.

Step 1:- 
Create html, css, js. Create boiler plate and add GSAP cdn

Step 2:- 
Create a div #cursor with CSS :- h,w-20px, bg-white, border -50%
position fixed  so that it will be on screen even if screen scrolls

Step 3:- 
Create another div #main below #cursor with css h,w-100%, bg-black. Add flex property and do its child center


Step 4:- 
Select #main using query Selector(in script.js) and assign it to var main. Similarly do it for cursor

Step 5:- 
Add event on variable main as mousemove and pass dets as function. you can check using console.log(dets.x) to check the coordinates of cursor in x direction. And dets.y to check coordinates of cursor in y direction

Step 6:-
Now we have the coordinates of x and y while cursor is moving on the screen. Can you think of a property which is used to move any div in any direction? yes gsap.to.
Now, 
make gsap.to (to move element from initial pos to final pos) inside the main addevent fucntion and select variable cursor in gsap.to.

Step 7:- 
Inside the gsap.to(cursor) put the x as dets.x and y as dets.y and add duration for smooth movement while following the cursor

Task:- 
Search for easing to set the animation of the custom cursor which is following you.

We are done with the basic custom Cursor now its time to add an image and some more extra
BASIC CURSOR IS DONE NOW TIME FOR DANGEROUS ANIMATION IN IT


Make img inside main:- h-30vw, w-70vw, bg-red get an image and add it in bg-img url("") bg-size cover 

make a query selector of img and add event in it mouseenter. add gsap for cursor and make it to scale 2. and make mouse leave for scale 1
when enter make the innerhtml to view more

PROBLEM IDENTIFIED:- when hovering the cursor div is coming in between the main and image div due to which it is flickering

now add one overlay tab and below it add one img with src as the background img link. add all the css and make the view more better
Now go to overlay css bg-color red h,w -100% position abs add img div position relative 