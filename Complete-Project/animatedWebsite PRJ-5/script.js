function page1Animaiton() {
  let tl = gsap.timeline();

  tl.from("nav h1, nav h4, nav button", {
    y: -40,
    duration: 0.7,
    opacity: 0,
    delay: 1,
    stagger: 0.15,
  });
  tl.from(".center-part1 h1", {
    x: -300,
    duration: 0.5,
    opacity: 0,
  });
  tl.from(".center-part1 p", {
    x: -100,
    duration: 0.4,
    opacity: 0,
  });
  tl.from(".center-part1 button", {
    duration: 0.4,
    opacity: 0,
  });
  tl.from(".center-part2 img", {
      duration: 0.4,
      opacity: 0,
      x: 200,
    },"-=0.7");
  tl.from(".section1bottom", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.6,
  });
}
page1Animaiton();

let tl2=gsap.timeline({
    scrollTrigger:{
        trigger: ".section2",
        scroller:"body",
        markers:false,
        start:"top 50%",
        scrub:2,
        end:"top 0%"
    }
})

tl2.from(".services",{
    y:30,
    opacity:0,
})
tl2.from(".elem.line1.left",{
    x:-300,
    opacity:0,
    duration:1
},"a")
tl2.from(".elem.line1.right",{
    x:300,
    opacity:0,
    duration:1
},"a")

tl2.from(".elem.line2.left",{
    x:-300,
    opacity:0,
    duration:1
},"b")
tl2.from(".elem.line2.right",{
    x:300,
    opacity:0,
    duration:1
},"b")