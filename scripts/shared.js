var dateOptions = { year: "numeric", month: "short", day: "numeric" };

// GET PARAMETERS FROM URL
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// CATEGORY NAMES IN NAV BAR
function categoryNavigation() {
  // Retrieve the template data from the HTML
  let template = $("#tmpl-categories-list").html();

  // Create the context
  let context = {
    categories: Object.values(categories).map(function(x) {
      return { name: x, link:  "categories.html?name=" + x.toLowerCase()};
    })
  };

  // Compile the template data into a function
  let templateScript = Handlebars.compile(template);
  let html = templateScript(context);

  $("#categories-list").append(html);
}