$(document).ready(function() {
  $(".project-container").hide();
  $.getJSON("../json/projects.json", function(data) {
    createProjectHeirarchy(data);
  });
});

// Sets up the DOM heirarchy for the projects
function createProjectHeirarchy(data) {
  //console.log(data);
  let html = "";
  for (let i = 0; i < data.length; i++) {
    // create a string of all the html for the projects (way easier than DOM manipulation)
    html +=
      "<div class='project-item-wrapper'>" + // item wrapper
      "<div class='project-item'>" + // item container
      "<div class='thumb-container'>" + // thumbnail container
      "<img class='thumb-img' src='img/" +
      data[i].content.imgsrc +
      "' alt='' />" + // thumbnail image
      "<div class='thumb-overlay'>" + // thumbnail overlay container
      "<div class='thumb-text'>" + // thumbnail text container
      "<img class='lang-icon' src='img/" +
      data[i].content.iconsrc +
      "' alt='' />" + // language icon
      "<h3 class='title'>" +
      data[i].content.title +
      "</h3>" + // title
      "<p class='lang'>Developed with " +
      data[i].content.lang +
      "</p>" + // language subtitle
      "<p class='desc'>" +
      data[i].content.desc +
      "</p>" + // description
      "</div></div></div>" + // closing tags for thumbnail
      "<a href='" +
      data[i].github.url +
      "' target='_blank'>" + // github anchor
      "<i class='fab fa-github'></i> View on GitHub</a>" + // github icon and text
      "<a href='" +
      data[i].download.url +
      "' target='_blank'>" + // download anchor
      "<i class='" +
      data[i].download.icon +
      "'></i> Download</a>" + // download icon and text
      "</div></div>"; // final closing tags (for this item, at least...)
  }

  // insert the string of HTML into the project container
  $(".project-container").html(html);
}

/* Toggle the visibility of the project container */
function toggleProjects() {
  // change the button text
  let duration = 150;
  $("#proj-button-text").fadeOut(duration, function() {
    if (
      $(this)
        .text()
        .includes("Show Projects")
    ) {
      $(this)
        .text("Hide Projects")
        .fadeIn(duration);
    } else {
      $(this)
        .text("Show Projects")
        .fadeIn(duration);
    }
  });
  // toggle the visibility of the projects
  $(".project-container").slideToggle();
}
