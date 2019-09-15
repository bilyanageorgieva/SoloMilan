// SETUP
categoryNavigation();
singleArticle(getParameterByName("name"));

// SINGLE POST PAGE
function singleArticle(singleArticleId) {
  // Retrieve the template data from the HTML
  let template = $("#tmpl-single-article").html();

  let singleArticle = articles.find(x => {
    return x.id === singleArticleId;
  });

  // Create the context
  let context = {
    image: "../img/" + singleArticle.image,
    title: singleArticle.title,
    content: singleArticle.content,
    author: singleArticle.author,
    date: singleArticle.date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }),
    category: singleArticle.category,
    categoryLink: "categories.html?name=" + singleArticle.category,
    hours: singleArticle.hours.map(x => {
      return { hour: x };
    }),
    prices: singleArticle.prices.map(x => {
      return { price: x };
    }),
    website: singleArticle.website,
    maps: singleArticle.maps,
    tripAdvisor: singleArticle.tripAdvisor
  };

  // Compile the template data into a function
  let templateScript = Handlebars.compile(template);
  let html = templateScript(context);

  $("#single-article").html(html);
}
