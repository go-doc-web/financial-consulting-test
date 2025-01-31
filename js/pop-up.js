// Cookie pop-up
document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("cookieAccepted")) {
    document.querySelector(".cookie-popup").style.display = "none";
  } else {
    setTimeout(function () {
      document.querySelector(".cookie-popup").style.display = "block";
    }, 5000);
  }

  const cookiePopupButton = document.querySelector(".cookie-popup button");
  if (cookiePopupButton) {
    cookiePopupButton.addEventListener("click", function () {
      document.querySelector(".cookie-popup").style.display = "none";
      localStorage.setItem("cookieAccepted", "true");
    });
  }
});
