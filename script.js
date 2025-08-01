
function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}

function navanimation(){
    var nav=document.querySelector("nav")


nav.addEventListener("mouseenter",function(){
  let tl = gsap.timeline()
    tl.to("#nav-bottom",{
    height:"21vh"
   })
    tl.to(".nav-part2 h5",{
        display:"block"
    })
    tl.to(".nav-part2 h5 span",{
        y:0,
        // duration:0.3,
        stagger:{
            amount:0.6
        }
            
        
    })
})


nav.addEventListener("mouseleave",function(){
    let tl = gsap.timeline()
    
      tl.to(".nav-part2 h5 span",{
          y:25,
          duration:0.3,
          stagger:{
            amount:0.2
          } 
      })
      tl.to(".nav-part2 h5",{
        display:"none",
        duration:0.1
      })
      tl.to("#nav-bottom",{
        height:0,
        duration:0.1
      })
  })
}
function page2Animation() {
  var rightElems = document.querySelectorAll(".right-elem")

  rightElems.forEach(function (elem) {
      elem.addEventListener("mouseenter", function () {




          gsap.to(elem.childNodes[3], {
              opacity: 1,
              scale: 1
          })
      })
      elem.addEventListener("mouseleave", function () {
          gsap.to(elem.childNodes[3], {
              opacity: 0,
              scale: 0
          })
      })
      elem.addEventListener("mousemove", function (dets) {

          gsap.to(elem.childNodes[3], {
              x: dets.x - elem.getBoundingClientRect().x - 50,
              y: dets.y - elem.getBoundingClientRect().y - 129
          })
      })
  })
}
function page3VideoAnimation() {
    var page3Center = document.querySelector("#page3-center")
    var video = document.querySelector("#page3 video")

    page3Center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })


    var sections = document.querySelectorAll(".sec-right")

    sections.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()
        })
        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[3].load()
        })
    })

}
function page5(){
    var sections=document.querySelectorAll(".sec-right")
sections.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        elem.childNodes[3].style.opacity=1
        elem.childNodes[3].load()
    })
    elem.addEventListener("mouseleave",function(){
        elem.childNodes[3].style.opacity=0
        elem.childNodes[3].load()
    })
})

}




page5()

navanimation()  

page2Animation()

page3VideoAnimation()

loadingAnimation()