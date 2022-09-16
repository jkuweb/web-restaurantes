const hamburger = document.querySelector('#menuToggle');
const navLinks = document.querySelector('.nav');
const close = document.querySelector('.hamburger .line');
const links = document.querySelectorAll('.nav li');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
// video
const video = document.getElementById("bg-video");
video.playbackRate = .5;
// text animation
const text = document.querySelector(".search__heading");
const stringText = text.textContent;
const splitText = stringText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span class='text-animation'>" + splitText[i] + "</span>";
}
let char = 0;
let timer = setInterval(onTick, 50);
function onTick() {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}
function complete() {
  clearInterval(timer);
  timer = null;
}
