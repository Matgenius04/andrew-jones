window.scrollTo(500, 0);window.scrollTo(500, 0);window.scrollTo(500, 0);window.scrollTo(500, 0);window.scrollTo(500, 0);window.scrollTo(500, 0);window.scrollTo(500, 0);<script>
function scrollWin(x, y) {
    window.scrollBy(x, y);
}
</script><script>
function scrollWin(x, y) {
    window.scrollBy(x, y);
}
</script><script>
function scrollWin(x, y) {
    window.scrollBy(x, y);
}
</script><script>
function scrollWin(x, y) {
    window.scrollBy(x, y);
}
</script><script>
function scrollWin(x, y) {
    window.scrollBy(x, y);
}
</script><script>
function scrollWin(x, y) {
    window.scrollBy(x, y);
}
</script><script>
function scrollWin(x, y) {
    window.scrollBy(x, y);
}
</script><script>
function scrollWin(x, y) {
    window.scrollBy(x, y);
}
</script><script>
function scrollWin(x, y) {
    window.scrollBy(x, y);
}
</script><script>
function scrollWin(x, y) {
    window.scrollBy(x, y);
}
</script><script>
function scrollWin(x, y) {
    window.scrollBy(x, y);
}
</script><script>
function scrollWin(x, y) {
    window.scrollBy(x, y);
}
</script><script>
function scrollWin(x, y) {
    window.scrollBy(x, y);
}
</script>var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function navBarSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
setInterval("navBarSticky();", 33);
setInterval("plusSlides(1)", 15000);