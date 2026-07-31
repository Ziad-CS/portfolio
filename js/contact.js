let form = document.getElementById("contact-form");
let fullName = document.getElementById("fullName");
let email = document.getElementById("mail");
let subject = document.getElementById("subj");
let message = document.getElementById("text");
let submitBtn = document.getElementById("submitBtn");

let firstSection = document.getElementById("input1");
let secSection = document.getElementById("input2");
let thirdSection = document.getElementById("input3");

// reCAPTCHA
let box = false;
let border = document.getElementById("checkboxx");

emailjs.init({publicKey: 'cHZhS615f6P5OsWk0'});

function errorhide(obj, classname) {
  if (obj.classList.contains("no")) {
    obj.classList.remove(classname);
  }
  else {
    obj.classList.add("no");
    setTimeout(errorhide, 500, obj, classname);
  }
}
function errorshow(obj, classname) {
  if (obj.classList.contains("no")) {
    obj.classList.add(classname);
    void obj.offsetWidth;
    obj.classList.remove("no");
  }
  else {
    obj.classList.add("no");
    setTimeout(errorshow, 1, obj, classname);
  }
}
function removeBorder() {
  if (border.classList.contains("border-hide"))
  {
    border.classList.remove("red-border");
    border.classList.remove("border-hide")
  }
  else {
    border.classList.add("border-hide");
    setTimeout(removeBorder, 1000)
  }
}

function onCaptchaSuccess() {
  box = true; 
}
function onCaptchaExpired() {
  box = false;
}


let firstTimer, secTimer, thirdTimer, boxTimer, delayboxTimer, successTimer, delaySuccessTimer;

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //L

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let emailValid = false;
  let subjectValid = false;
  let messageValid = false;

  fullName.value =  fullName.value.trim();

  if (emailRegex.test(email.value.trim())) { //L
    email.value = email.value.trim();
    emailValid = true;
  }
  else {
    clearTimeout(firstTimer);
    // change after contant need
    errorshow(firstSection, "invalid-email");
    firstTimer = setTimeout(errorhide, 5000, firstSection, "invalid-email");
  }

  if (subject.value.trim().length >= 3) {
    subject.value = subject.value.trim();
    subjectValid = true;
  }
  else {
    clearTimeout(secTimer);
    // change after contant need
    errorshow(secSection, "invalid-subject");
    secTimer = setTimeout(errorhide, 5000, secSection, "invalid-subject");
  }

  if (message.value.trim().length > 10) {
    console.log("message");
    message.value = message.value.trim();
    messageValid = true;
  }
  else {
    clearTimeout(thirdTimer);
    // change after contant need
    errorshow(thirdSection, "invalid-message");
    thirdTimer = setTimeout(errorhide, 5000, thirdSection, "invalid-message");
  }

  if (!box) {
    if (submitBtn.classList.contains("success")) {
      clearTimeout(boxTimer);
      clearTimeout(delayboxTimer);
      setTimeout(errorhide, 3000, submitBtn, "success")
      delayboxTimer = setTimeout(errorshow, 4000, border, "invalid-reCAPTCHA");
      // border.classList.add("red-border");

      // boxTimer = setTimeout(removeBorder, 5000);
      boxTimer = setTimeout(errorhide, 9000, border, "invalid-reCAPTCHA");
    }
    else {
      clearTimeout(boxTimer);
      clearTimeout(delayboxTimer);
      errorshow(border, "invalid-reCAPTCHA");
      boxTimer = setTimeout(errorhide, 5000, border, "invalid-reCAPTCHA");
    }
  }

  if (emailValid === true && subjectValid === true && messageValid === true && box === true) {
    console.log("no bug");
    emailjs.sendForm('ziad.saleh.dev', 'template_tvy8a3p', form);
    fullName.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
    errorhide(firstSection, "invalid-email");
    errorhide(secSection, "invalid-subject");
    errorhide(thirdSection, "invalid-message");
    errorhide(border, "invalid-reCAPTCHA")

    clearTimeout(successTimer);
    clearTimeout(delaySuccessTimer);

    delaySuccessTimer = setTimeout(errorshow, 1000, submitBtn, "success");
    successTimer = setTimeout(errorhide, 10000, submitBtn, "success");
  }

});