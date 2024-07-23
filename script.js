let tl = gsap.timeline();


tl.from(".loading-screen>h2",{
    opacity:0,
    duration:2,
    delay:1
})
tl.from(".loading-screen>p",{
    opacity:0,
    duration:3,
   
})
tl.from(".loading-screen>.signs",{
    opacity:0,
    duration:3,
   
})
tl.to(".loading-screen",{
    opacity:0
})


tl.from("nav>h2",{
    opacity:0,
    duration:1,
    y:-100
})
tl.from("nav>.nav-items",{
    opacity:0,
    duration:1,
    y:-100
})

tl.from(".main>.bhalu",{
    rotate:1040,
    y:600,
    duration:2,
    opacity:0
})

tl.from(".main>.ribbon",{
    opacity:0,
    duration:1.5
})
tl.from(".main>.matter",{
    opacity:0,
    duration:2,
    y:100
})