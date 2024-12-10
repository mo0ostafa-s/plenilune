const emailInput = document.querySelector("#floatingInput");
const passInput = document.querySelector("#floatingPassword");
const loginBtn = document.querySelector("#login");
const hintBtn = document.querySelector("#hint");
const vid = document.querySelector("#vid");
const img = document.querySelector("#sad");
const popup = document.querySelector("#popup");
sessionStorage.setItem("counter", 0);
let times = sessionStorage.getItem("counter");

loginBtn.addEventListener("click", (e) => {
  if (times < 3) {
    if ((emailInput.value != "monaayman@website.com" || passInput.value != "meela")) {
      e.preventDefault();
      times++;
      if (times == 1) {
        vid.src = "./assets/audios/wrong.mp3";
        vid.play();
        imgAppear();
      }
      else if (times == 2) {
        vid.src = "./assets/audios/notAlso.mp3";
        vid.play();
        imgAppear();
        times = 0;
        hintBtn.classList.remove("disabled");
      }
    }
  }
});

emailInput.addEventListener("focus", () => {
  vid.src = "./assets/audios/slamo3alekom.mp3";
  if (times == 0) {
    vid.play();
  }
});
passInput.addEventListener("focus", () => {
  vid.src = "./assets/audios/sayPass.mp3";
  if (times == 0) {
    vid.play();
  }
});
emailInput.addEventListener("keyup", () => {
  if(emailInput.value == "monaayman@website.com") {
    emailInput.classList.remove("is-invalid");
    emailInput.classList.add("is-valid");
  }
  else {
    emailInput.classList.add("is-invalid");
    emailInput.classList.remove("is-valid");
  }
});
passInput.addEventListener("keyup", () => {
  if(passInput.value == "meela") {
    passInput.classList.remove("is-invalid");
    passInput.classList.add("is-valid");
  }
  else {
    passInput.classList.add("is-invalid");
    passInput.classList.remove("is-valid");
  }
});

hintBtn.addEventListener("click", () => {
  vid.src = "./assets/audios/a8etona.mp3";
  vid.play();
  popup.classList.remove("opacity-0");
});

function imgAppear () {
  img.classList.add("appear");
  setTimeout(() => {
    img.classList.remove("appear");
  }, 3000);
}