// Dynamically create share links to the current page.

$(document).ready(function() {
  // Get the current URL and remove any section IDs from the end of it.
  let shareurl = location.href;
  if (shareurl.includes("#"))
    shareurl = shareurl.slice(0, location.href.indexOf("#"));

  // Now just replace any "$$$" with shareurl for each share-link element.
  let links = $(".share-link");

  for (let i = 0; i < links.length; i++) {
    links[i].href = links[i].href.replace("{$}", shareurl);
    //console.log(links[i].href);
  }
});
