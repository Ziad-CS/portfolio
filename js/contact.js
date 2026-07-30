let form = document.getElementById("contact-form");
let fullName = document.getElementById("fullName");
let email = document.getElementById("mail");
let subject = document.getElementById("subj");
let message = document.getElementById("text");

let firstSection = document.getElementById("input1");
let secSection = document.getElementById("input2");
let thirdSection = document.getElementById("input3");

emailjs.init({publicKey: 'cHZhS615f6P5OsWk0'});

function errorhide(obj, classname) {
  if (obj.classList.contains("no")) {
    obj.classList.remove(classname);
  }
  else {
    obj.classList.add("no");
    setTimeout(errorhide, 1000, obj, classname);
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

let firstTimer, secTimer, thirdTimer;

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //L

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let emailValid = false;
  let subjectValid = false;
  let messageValid = false;

  fullName.value =  fullName.value.trim();

  if (emailRegex.test(email.value.trim())) { //L
    console.log("email");
    email.value = email.value.trim();
    emailValid = true;
  }
  else {
    clearTimeout(firstTimer);
    // change after contant need
    console.log("email bug");
    errorshow(firstSection, "invalid-email");
    firstTimer = setTimeout(errorhide, 10000, firstSection, "invalid-email");
  }
  if (subject.value.trim().length >= 3) {
    console.log("subject");
    subject.value = subject.value.trim();
    subjectValid = true;
  }
  else {
    clearTimeout(secTimer);
    // change after contant need
    console.log("subject bug");
    errorshow(secSection, "invalid-subject");
    secTimer = setTimeout(errorhide, 10000, secSection, "invalid-subject");
  }
  if (message.value.trim().length > 10) {
    console.log("message");
    message.value = message.value.trim();
    messageValid = true;
  }
  else {
    clearTimeout(thirdTimer);
    // change after contant need
    console.log("message bug");
    errorshow(thirdSection, "invalid-message");
    thirdTimer = setTimeout(errorhide, 10000, thirdSection, "invalid-message");
  }

  if (emailValid === true && subjectValid === true && messageValid === true) {
    console.log("no bug");
    emailjs.sendForm('ziad.saleh.dev', 'template_tvy8a3p', form);
    email.value = "";
    subject.value = "";
    message.value = "";
    errorhide(firstSection, "invalid-email");
    errorhide(secSection, "invalid-subject");
    errorhide(thirdSection, "invalid-message");
  }

});