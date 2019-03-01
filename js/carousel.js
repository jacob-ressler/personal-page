/* This carousel was taken from W3Schools 
   (https://www.w3schools.com/howto/howto_js_slideshow.asp)
   and modified to better fit my page and be modular in its usability.
   It is able to support each 'About' tab having its own carousel
   that functions independently of the others.
*/

var slideIndex = 1;
$(document).ready(function() {
  showSlides(slideIndex);
});

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = $(".active-tab").find(".mySlides");
  var dots = $(".active-tab").find(".dot");
  //console.log(dots);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
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
