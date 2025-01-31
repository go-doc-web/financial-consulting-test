// Cookie pop-up
setTimeout(function () {
  document.querySelector(".cookie-popup").style.display = "block";
}, 5000);

document
  .querySelector(".cookie-popup button")
  .addEventListener("click", function () {
    document.querySelector(".cookie-popup").style.display = "none";
    localStorage.setItem("cookieAccepted", "true");
  });

if (localStorage.getItem("cookieAccepted")) {
  document.querySelector(".cookie-popup").style.display = "none";
}
