var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");

var image = document.querySelector("#image");

main.addEventListener("mousemove", function(dets) {
    gsap.to(cursor,{
        x: dets.x,
        y:dets.y,
        duration: 0.6,
        ease: "back.out"
    })
});

image.addEventListener("mouseenter", () =>{
    cursor.innerHTML = "View More";
    gsap.to(cursor,{
        scale: 2.5,
        backgroundColor: "rgba(180, 172, 172, 0.393)",
        border: "0.3px solid red",
        
    })
})
image.addEventListener("mouseleave", () =>{
    cursor.innerHTML = "";

    gsap.to(cursor,{
        scale: 1,  
        backgroundColor: "white",      
    })
})