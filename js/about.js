/* Handles tab switching in the 'About' section by modifying element classes */

$(document).ready(function() {
  defaultAbout();
});

function defaultAbout() {
  setContent("childhood", document.getElementById("default"));
}

function setContent(name, elmnt) {
  let color = "#e69b10";
  let i, tabcontent, tablinks;
  tabcontent = $(".about-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = $(".about-tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "#4a4a4a";
  }

  let oldactive = $(".active-tab");
  for (i = 0; i < oldactive.length; i++) {
    oldactive[i].className = oldactive[i].className.replace(" active-tab", "");
    //console.log(oldactive[i].className);
  }

  let content = document.getElementById(name);
  content.style.display = "inline-block";
  content.className += " active-tab";

  elmnt.style.backgroundColor = color;

  //console.log(content.id);
}
