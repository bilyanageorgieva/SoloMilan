// VARIABLES
var pagesToShow = 1;
var categoryName = getParameterByName("name");
var categoryArticles = articles
  .filter(art => art.category.toLowerCase() == categoryName)
  .sort((first, second) => {
    if (first.date > second.date) return -1;
    else if (first.date < second.date) return 1;
    else return 0;
  })
  .map(x => {
    return {
      title: x.title,
      image: "img/" + x.image,
      subtitle: x.subtitle,
      author: x.author,
      date: x.date.toLocaleDateString("en-US", dateOptions),
      articleLink: "articles.html?name=" + x.id,
      hours: x.hours.map(x => {
        return { hour: x };
      }),
      prices: x.prices.map(x => {
        return { price: x };
      }),
      website: x.website,
      maps: x.maps,
      tripAdvisor: x.tripAdvisor
    };
  });

// SETUP
categoryNavigation();
showCategoryName();
showCategoryArticles();

function showCategoryName() {
  // Retrieve the template data from the HTML
  let template = $("#tmpl-category-name").html();

  // Create the context
  let context = {
    name: categoryName
  };

  // Compile the template data into a function
  let templateScript = Handlebars.compile(template);
  let html = templateScript(context);

  $("#category-name").html(html);

  setPagingButtonsStatus();
}

// RECENT POSTS
function showCategoryArticles() {
  // Retrieve the template data from the HTML
  let template = $("#tmpl-category-articles").html();

  let newArticles = [];
  let startingIndex = (pagesToShow - 1) * 5;
  for (let i = 0; i < 4; i++) {
    let newIndex = startingIndex + i;
    if (newIndex >= categoryArticles.length) {
      break;
    }
    newArticles.push(categoryArticles[newIndex]);
  }

  // Create the context
  let context = {
    categoryArticles: newArticles
  };

  // Compile the template data into a function
  let templateScript = Handlebars.compile(template);
  let html = templateScript(context);

  $("#category-articles").append(html);

  setPagingButtonsStatus();
}

// OLDER & NEWER BUTTONS - Interactions
function setPagingButtonsStatus() {
  if (categoryArticles.length <= pagesToShow * 5) {
    $("#older-posts-btn").addClass("disabled");
  } else {
    $("#older-posts-btn").removeClass("disabled");
  }
}

$("#older-posts-btn").click(function(event) {
  pagesToShow++;
  showCategoryArticles();
  event.preventDefault();
});
