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
