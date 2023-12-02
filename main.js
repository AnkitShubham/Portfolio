window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  var scrolled = window.scrollY;

  if (scrolled > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
