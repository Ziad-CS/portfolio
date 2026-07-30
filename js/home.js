let jobs = ["Cs student", "Data scientest", "Front-end div"];
let jobsLength = jobs.length;
let speedAdd = 150;
let speedRemove = 75;
let delay = 1500;
let typing = document.getElementById("typingWord");
let courser = document.getElementById("typingCourser");

let jobIndex = 0;
let charIndex = 0;

function remove () {
  if (charIndex >= 0) {
    typing.innerHTML = typing.innerHTML.slice(0, charIndex);
    charIndex--
    setTimeout(remove, speedRemove)
  }
  else {
    charIndex = 0;
    setTimeout(typeWriter, speedRemove);
  }
}
function typeWriter() {
  let word = jobs[jobIndex];
  let length = word.length;
  if (charIndex < length) {
    typing.innerHTML += word.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, speedAdd);
  }
  else {
    jobIndex = (jobIndex + 1) % jobsLength
    setTimeout(remove, delay);
  }
}
// function writeWord (word, wordLength) {
//   if (j < wordLength) {
//     typing.innerHTML += word.charAt(j);
//     j++;
//     setTimeout(writeWord, speed);
//   }
// }
// function remove (length) {
//   if (k >= 0) {
//     typing.innerHTML = typing.innerHTML.slice(0, k);
//     k--;
//     setTimeout(remove, speed / 4);
//   }
// }
// function typeWriter() {
//   for (let i = 0; i < jobsLength; i++) {
//     j = 0;
//     k = jobs[i].length
//     writeWord(jobs[i], k);
//     remove(k);
//     setTimeout(() => {}, speed * 30);
//     if (i === jobsLength - 1)
//     {
//       i = 0
//     }
//   }
// }

typeWriter();