// Category names in Home Page
{
  // Retrieve the template data from the HTML
  let template = $("#categories-list").html();

  // Create the context
  let context = {
    categories: Object.values(categories).map(function (x) {
      return { name: x };
    })
  };

  // Compile the template data into a function
  let templateScript = Handlebars.compile(template);
  let html = templateScript(context);

  $("nav").append(html);
}