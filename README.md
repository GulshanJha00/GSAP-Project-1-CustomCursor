How to Make a Custom Cursor Animation
Follow the step-by-step approach below to create a smooth custom cursor animation using HTML, CSS, JavaScript, and GSAP.

Step 1: Set Up the Project


Create the required files: index.html, style.css, and script.js.


In index.html, set up a basic HTML boilerplate.


Add the GSAP CDN for animations:
html


Copy code:- 
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>



Step 2: Create the Custom Cursor


In the HTML file, create a div with the id #cursor.


In style.css, style the #cursor to make it visible:
css
Copy code


#cursor {
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    position: fixed;
    z-index: 9; /* Ensures it stays above other elements */
}


Width & Height: 20px
Background Color: White
Border Radius: 50% (to make it circular)
Position: Fixed, so it remains on screen even when scrolling.
Step 3: Create the Main Container
Below the cursor div, create another div with the id #main in your HTML file.
Style the #main container:
css
Copy code
#main {
    width: 100%;
    height: 100%;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
}
Width & Height: 100% (to cover the full screen)
Background Color: Black
Flex Properties: Center its child elements horizontally and vertically.
Step 4: Select Elements in JavaScript
In script.js, select the #main and #cursor elements using document.querySelector and assign them to variables:
javascript
Copy code
var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
Step 5: Capture Mouse Movement
Add an event listener to main that listens for the mousemove event:
javascript
Copy code
main.addEventListener("mousemove", function(dets) {
    console.log(dets.clientX, dets.clientY); // Log the X and Y coordinates
});
The dets object (short for "details") contains the cursor’s X and Y coordinates. Use dets.clientX for horizontal movement and dets.clientY for vertical movement.
Step 6: Animate the Cursor Using GSAP
Now that we have the mouse coordinates, use GSAP to move the custom cursor to follow the mouse:
javascript
Copy code
main.addEventListener("mousemove", function(dets) {
    gsap.to(cursor, {
        x: dets.clientX,
        y: dets.clientY,
        duration: 0.1 // Smooth transition
    });
});
gsap.to() is used to animate elements. We move the cursor from its current position to the mouse's X and Y coordinates.
Step 7: Add Easing for Smoother Animation
For smoother movement, you can use easing properties with GSAP:
javascript
Copy code
gsap.to(cursor, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0.1,
    ease: "power2.out" // Adds easing
});
You can explore more easing options from the GSAP documentation to customize the animation behavior further.
Step 8: Add an Image and Overlay
Inside the #main div, add a new div #img for an image. Inside #img, create another div #overlay and an img tag:
html
Copy code
<div id="img">
    <div id="overlay"></div>
    <img src="your-image.jpg" alt="Example Image">
</div>
Style #img, #overlay, and the img tag in style.css:
css
Copy code
#img {
    width: 70vw;
    height: 30vw;
    position: relative; /* Parent must be relative for child to be absolute */
}
#overlay {
    width: 100%;
    height: 100%;
    background-color: transparent;
    position: absolute;
    z-index: 10;
}
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
Step 9: Scale the Cursor on Hover
In script.js, select the #img div and add mouseenter and mouseleave events to scale the cursor:
javascript
Copy code
var img = document.querySelector("#img");

img.addEventListener("mouseenter", function() {
    gsap.to(cursor, {
        scale: 2, 
        backgroundColor: "rgba(180, 172, 172, 0.393)",
        border: "0.3px solid red"
    });
    cursor.innerHTML = "View More"; // Add text inside the cursor
});

img.addEventListener("mouseleave", function() {
    gsap.to(cursor, {
        scale: 1, 
        backgroundColor: "white"
    });
    cursor.innerHTML = ""; // Clear text
});
Step 10: Fix the Cursor Hover Issue with Overlay
When the cursor grows, it might block the hover state over the image. To fix this, add a transparent overlay (#overlay) between the image and the cursor.

Set the #overlay to be above the image but below the cursor with CSS z-index values:

Cursor z-index: 9
Overlay z-index: 10
This allows the cursor to grow without interfering with the image hover.

Step 11: Final Touches
Add text customization for the cursor when hovering over the image:
css
Copy code
#cursor {
    font-size: 6px;
    color: rgb(0, 255, 26);
    display: flex;
    justify-content: center;
    align-items: center;
}
In mouseenter, add custom text and styles. On mouseleave, revert to the original styles.
And that’s it! You’ve now created a fully functional custom cursor with GSAP animations and hover interactions.

