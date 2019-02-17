// Dynamically create share links to the current page.

$(document).ready(function() {
  createShareLinks();
  startTimer(30);
});

// Updates the share links with the correct URL.
function createShareLinks() {
  // Get the current URL and remove any section IDs from the end of it.
  let shareurl = getBaseURL();

  // Now just replace any "$$$" with shareurl for each share-link element.
  let links = $(".share-link");

  for (let i = 0; i < links.length; i++) {
    links[i].href = links[i].href.replace("{$}", shareurl);
    console.log(links[i].href);
  }
}

// Displays a 'contact me' popup after 30 seconds.
// Only happens for first-time visitors
function startTimer(seconds) {
  // check for returning visitor
  if (document.cookie != "") return;
  else {
    // this is the first time this user has visited the page, so set a cookie
    let d = new Date();
    d.setTime(d.getTime() + seconds * 24 * 60 * 60 * 1000);
    document.cookie = "expires=" + d.toUTCString() + "path=/";

    setTimeout(function() {
      // code for popup here
      if (
        confirm(
          "Need to send me a message?\n" +
            "Press OK to head to my contact form."
        )
      ) {
        let newurl = getBaseURL();
        location.href = newurl + "#contact";
      }
    }, seconds * 1000);
  }
}

function getBaseURL() {
  let url = location.href;

  if (url.includes("#")) {
    url = url.slice(0, url.indexOf("#"));
  }

  return url;
}
