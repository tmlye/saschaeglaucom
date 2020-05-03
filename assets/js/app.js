window.onscroll = function() {onScroll()}

let navbar = document.getElementById("header")
let sticky = navbar.offsetTop + 30

function onScroll() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed-top")
  } else {
    navbar.classList.remove("fixed-top")
  }
}
