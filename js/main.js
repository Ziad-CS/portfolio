let open = document.querySelector(".mobile");
let close = document.querySelector(".close");
let menu = document.getElementById("nav");
let body = document.getElementsByTagName("body");

// console.log([...document.querySelectorAll('*')].filter(el => el.getBoundingClientRect().right > window.innerWidth || el.getBoundingClientRect().left < 0))


open.addEventListener("click", function () {
  open.classList.add("none")
  close.classList.remove("none")
  menu.classList.add("show");
  menu.classList.remove("hide");
  body[0].classList.add("stop-move");
});
close.addEventListener("click", function () {
  close.classList.add("none");
  open.classList.remove("none");
  menu.classList.add("hide");
  menu.classList.remove("show");
  body[0].classList.remove("stop-move");
});

const inscreen = new IntersectionObserver(function (obj) {
  obj.forEach( function (one) {
    if(one.isIntersecting || ( one.boundingClientRect.bottom >= -100 && one.boundingClientRect.bottom <= 0)) {
      one.target.classList.add("back");
    }
    if(!one.isIntersecting) {
      // if (one.boundingClientRect.top <= -200 || one.boundingClientRect.top > 100) {
        one.target.classList.remove("back");
      // }
    }
  });
}, { rootMargin: "200px 0px 50px 0px" });
document.querySelectorAll(".up, .down, .left, .right, .small, .up2")
  .forEach(ele => inscreen.observe(ele));



window.scrollTo(top);