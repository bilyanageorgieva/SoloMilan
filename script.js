// Category names in Home Page
{
  // Retrieve the template data from the HTML
  let template = $("#tmpl-categories-list").html();

  // Create the context
  let context = {
    categories: Object.values(categories).map(function(x) {
      return { name: x };
    })
  };

  // Compile the template data into a function
  let templateScript = Handlebars.compile(template);
  let html = templateScript(context);

  $("nav").append(html);
}

// Big featured article
{
  // Retrieve the template data from the HTML
  let template = $("#tmpl-big-featured-post").html();

  // Get the first featured article
  let featured = articles.find(function(x) {
    return x.featured;
  });

  // Create the context
  let context = { title: featured.title, subtitle: featured.subtitle };

  // Compile the template data into a function
  let templateScript = Handlebars.compile(template);
  let html = templateScript(context);

  $("#big-featured-post").prepend(html);
}

// Two small featured articles
{
  
}
