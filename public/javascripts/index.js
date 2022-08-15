const urlPath = window.location.pathname;

if (urlPath === "/about") {
  document.querySelector("#about").className = "highlight";
}

if (urlPath === "/portfolio") {
  document.querySelector("#portfolio").className = "highlight";
}

if (urlPath === "/contact") {
  document.querySelector("#contact").className = "highlight";
}

// const buttonsWrapper = document.querySelector(".buttons-wrapper");
// const buttons = document.querySelectorAll(".button");
// console.log(buttonsWrapper);
// buttonsWrapper.addEventListener("click", function buttonClicked(event) {
//   console.log(event.target);
//   console.log(buttons);
//   for (let i = 0; i < buttons.length; i++) {
//     buttons[i].classList.add("highlight");
//   }
//   // event.target.classList.add("highlight");
// });
