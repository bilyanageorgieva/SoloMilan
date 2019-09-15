// VARIABLES
var pagesToShow = 1;
var searchCriteria = getParameterByName("name");
var searchResults = articles
  .filter(art => art.title.toLowerCase().includes(searchCriteria.toLowerCase()))
  .sort((first, second) => {
    if (first.date > second.date) return -1;
    else if (first.date < second.date) return 1;
    else return 0;
  })
  .map(x => {
    return {
      title: x.title,
      image: "img/" + x.image,
      category: x.category,
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
showSearchResultsNumber();
showSearchResults();

//SEARCH RESULTS NUMBER
function showSearchResultsNumber() {
  // Retrieve the template data from the HTML
  let template = $("#tmpl-search-results-number").html();

  // Create the context
  let context = {
    numberOfResults: searchResults.length
  };

  // Compile the template data into a function
  let templateScript = Handlebars.compile(template);
  let html = templateScript(context);

  $("#search-results-number").append(html);

  setPagingButtonsStatus();
}

// SEARCH RESULTS
function showSearchResults() {
  // Retrieve the template data from the HTML
  let template = $("#tmpl-search-results").html();

  let newResults = [];
  let startingIndex = (pagesToShow - 1) * 5;
  for (let i = 0; i < 4; i++) {
    let newIndex = startingIndex + i;
    if (newIndex >= searchResults.length) {
      break;
    }
    newResults.push(searchResults[newIndex]);
  }

  // Create the context
  let context = {
    searchResults: newResults
  };

  // Compile the template data into a function
  let templateScript = Handlebars.compile(template);
  let html = templateScript(context);

  $("#search-results").append(html);

  setPagingButtonsStatus();
}

// OLDER & NEWER BUTTONS - Interactions
function setPagingButtonsStatus() {
  if (searchResults.length <= pagesToShow * 5) {
    $("#older-posts-btn").hide();
  } else {
    $("#older-posts-btn").show();
  }
}

$("#older-posts-btn").click(function(event) {
  pagesToShow++;
  showSearchResults();
  event.preventDefault();
});
