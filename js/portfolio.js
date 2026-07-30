let all = document.querySelector("#type1");
let ai = document.querySelector("#type2");
let analysis = document.querySelector("#type3");
let fundamentals = document.querySelector("#type4");
let front = document.querySelector("#type5");

let buttons = document.querySelectorAll(".buttons button");
let length = buttons.length
console.log(buttons);

function showProjects (type) {
  document.querySelectorAll(".project").forEach( (proj) => {
    proj.classList.add("none");
  });
  document.querySelectorAll(type).forEach( (proj) => {
    proj.classList.remove("none");
    proj.classList.remove("back");
    void proj.offsetWidth;
    proj.classList.add("back");
  });
}

buttons.forEach( (ele) => {
  ele.addEventListener( "click", (clicked) => {
    buttons.forEach( (active) => {
      active.classList.remove("use");
      active.classList.add("use-less");
    });
    clicked.target.classList.remove("use-less");
    clicked.target.classList.add("use");
    if (clicked.target.matches("#type1")) {
      document.querySelectorAll(".project").forEach( (proj) => {
        proj.classList.remove("none");
        proj.classList.remove("back");
        void proj.offsetWidth;
        proj.classList.add("back");
      });
    }
    if (clicked.target.matches("#type2")) {
      showProjects(".ai");
    }
    if (clicked.target.matches("#type3")) {
      showProjects(".analysis");
    }
    if (clicked.target.matches("#type4")) {
      showProjects(".fundamentals");
    }
    if (clicked.target.matches("#type5")) {
      showProjects(".front");
    }
  });
});

