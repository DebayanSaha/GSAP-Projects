function breaktheText() {
  let h1Text = document.querySelector("h1").textContent;
  let split = h1Text.split("");

  let clutter = "";
  let length = split.length/2;

  split.forEach(function (e,id) {
    if(id<length){
        clutter += `<span class="a">${e}</span>`;
    }
    else{
        clutter += `<span class="b">${e}</span>`;
    }
  });

  document.querySelector("h1").innerHTML = clutter;
}
breaktheText();

gsap.from(".a",{
    y:80,
    duration:0.6,
    opacity:0,
    delay:0.5,
    stagger:0.15
})
gsap.from(".b",{
    y:80,
    duration:0.6,
    opacity:0,
    delay:0.5,
    stagger:-0.15
})