gsap.from("#page1 #circle", {
    scale:0,
    dealy:1,
    duration:2,
    rotate:720
})

gsap.from("#page2 #circle", {
    scale:0,
    duration:2,
    rotate:720,
    // scrollTrigger:"#page2 #circle"
    scrollTrigger:{
        trigger:"#page2 #circle",
        scoller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:2
    }
})








