let cursor = document.querySelector("#cursor");
let main = document.querySelector("#main");
let image = document.querySelector("#image");

image.addEventListener("mouseenter",function(){
    cursor.innerHTML="View More";
    gsap.to(cursor,{
        scale:4,
        backgroundColor:"#ffffff8a"
    })
})
image.addEventListener("mouseleave",function(){
    cursor.innerHTML="";
    gsap.to(cursor,{
        scale:1,
        backgroundColor:""
    })
})

main.addEventListener("mousemove",function(e){
    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        duration:0.6,
        ease:"back.out"
    })
})