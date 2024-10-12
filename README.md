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

We are done with the basic custom Cursor now its time to add an image and some more extra features.

Step 8:- 
Make a div #img inside main with css  h-30vw, w-70vw. Create one div #overlay and one img tag with src of any image you like. Add the image css property as height and width as 100% and object-fit: cover.


what is div #overlay?
we will see that later before that lets make it like when the mouse enter the #image div the custom cursor scale should increase.

Step 9:- 
Inside script.js make a variable image with query selector with id of cursor.
Using image variable add event "mouseenter" and use the property of gsap.to(cursor) inside that add scale: 2,
using this proporty whenever the cursor comes inside image the custom cursor size increases. Similarly make another event "mouseleave" with gsap scaling down to 1.


You might have noticed something. Whenever the size of the custom cursor increases it reduces even before leaving the image, why?

well its because when the size of custom cursor increases it comes between the image and cursor due to which the the contact between the image and cursor cutdown and size starts decreasing. So how can we fix that?

Heres comes the overlay.
Overlay will be a transparent layer between the image and cursor which will stop the custom cursor to come on between.

so the order will be image in the bottom, custom cursor on the top then comes overlay and cursor being top of all.

Step 10:-
Now the css of overlay will be height and width - 100% background color: transparent. Why? Because it will help us to see whats behind the overlay i.e the original image. We want the positon to be absolute so to make #overlay absolute we need to make its parents #image as postion relative.
Step:- 11 final touch
Make the cursor's z-index 9 and overlay's z-index 10
cur z-i 9
over z-i 10
inside the script.js image "mousenter" you can add cursor.innerHTML = "view more" and adjust cursor css as text will be inside the small circle
and when the mouseleave make cursor.innerHTML = ""
and for final touch add in #cursor css 
font-size: 6px; color: rgb(0, 255, 26); and

in script.js inside "mouseenter" gsap.to you can add backgroundColor and border as backgroundColor: "rgba(180, 172, 172, 0.393)", border: "0.3px solid red",

and in "mouseleave" gsap background color back to white
and your code is ready
