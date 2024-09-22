function loadingAnimation(){
    var h5text = document.querySelector("#line1-part1 h5")

var tl = gsap.timeline();
tl.from(".line h1, .line h2",{
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5
})

tl.to(".line h2", {
    animationName:"anime",
    opacity:1
})

tl.from("#line1-part1", {
    opacity:0,
    onStart: function(){
        var grow = 0;
        setInterval(function(){
            if(grow < 100) h5text.innerHTML = grow++
            else h5text.innerHTML = grow 
        },34)
    }
})

tl.from("#loader h4",{
    opacity:0
})

tl.to(".line h2",{
    opacity:0
})

tl.to("#loader", {
    opacity:0,
    duration:1,
    delay:2.6,
})

tl.from("#page1", {
    y:1200,
    opacity:0,
    delay:0.4,
    duration:1,
    ease: "power4.out"
})

tl.to("#loader", {
    display:"none"
})

tl.from("#nav",{
    opacity:0
})

tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero3 h3, #hero4 h1, #hero-num h4",{
    y:140,
    stagger:0.1
})

}
function cursorAnimation(){
    document.addEventListener("mousemove", function(dets){
        gsap.to("#crsr", {
            left:dets.x,
            top:dets.y
        })
    })
    
    Shery.makeMagnet("#nav-part2 h4");
}
loadingAnimation();
cursorAnimation();














