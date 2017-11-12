var slideIndex = 1;
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
document.querySelector('#layer1').addEventListener('click', function (e) {
<<<<<<< HEAD
document.querySelector('.down-arrow-click').addEventListener('click', function (e) {
=======
>>>>>>> e621c0cd08f40ac7db1b5b76c428dbe59bf591ac
  e.preventDefault();
  window.scrollBy({
    top: 200,
    left: 0,
    behavior: 'smooth'
  });
});