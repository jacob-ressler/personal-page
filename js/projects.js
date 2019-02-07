/* TODO: Instead of using all the DOMs, just create a string for each
project and insert it into the HTML file? */

function createProjectTiles() {
  // Open the JSON file with all the project data.

  let request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      start(request);
    }
  };

  request.open("GET", "../json/projects.json");
  request.send();
}

function start(request) {
  // Parse the JSON file as an array of project objects
  let projects = [];
  projects = JSON.parse(request.responseText);

  for (let i = 0; i < projects.length; i++) {
    // Create the HTML DOM element heirarchy for each project
    let parent = document.getElementsByClassName("project-container");
    let child = newElement("div", "project-item-wrapper");
    parent.appendChild(child);
    parent = child;

    child = newElement("div", "project-item");
    parent.appendChild(child);
    parent = child;

    child = newElement("div", "thumb-container");
    parent.appendChild(child);
    parent = child;
    createThumb(child, projects[i]);

    child = document.createElement("a");

    if (projects[i].github_active) {
      child.setAttribute("href", projects[i].github_link);
    } else {
      child.setAttribute("class", "btn-inactive");
    }

    let child2 = newElement("i", "fab fa-github");
    child.appendChild(child2);
    child.innerHTML = "View on GitHub";
    parent.appendChild(child);

    child = document.createElement("a");
    if (projects[i].download_active) {
      child.setAttribute("href", projects[i].download_link);
    } else {
      child.setAttribute("class", "btn-inactive");
    }

    child2 = document.createElement("i");
    if (projects[i].download_link.includes("play.google")) {
      child2.setAttribute("class", "fab fa-google-play");
    } else {
      child2.setAttribute("class", "fas fa-arrow-alt-cirle-down");
    }
    child.appendChild(child2);
    child.innerHTML = "Download";
  }
}

function createThumb(parent, project) {
  let child = newElement("img", "thumb-img");
  child.setAttribute("src", "img/" + project.img);
  parent.appendChild(child);
  child = newElement("div", "thumb-overlay");
  parent.appendChild(child);
  parent = child;
  child = newElement("div", "thumb-text");
  parent.appendChild(child);
  parent = child;
  child = newElement("img", "lang-icon");
  child.setAttribute("src", "/img/" + project.lang_img);
  parent.appendChild(child);
  child = new Element("h3", "title");
  child.innerHTML = project.name;
  parent.appendChild(child);
  child = newElement("p", "lang");
  child.innerHTML = "Developed with " + project.lang;
  parent.appendChild(child);
  child = newElement("p", "desc");
  child.innerHTML = project.desc;
  parent.appendChild(child);
}

// Helper function to shorten the steps in the for statement
// Params: obj reference, tagname, classname
function newElement(tag, cls) {
  let ref = document.createElement(tag);
  ref.setAttribute("class", cls);
  return ref;
}
