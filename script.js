// SHARED
var dateOptions = { year: "numeric", month: "short", day: "numeric" };

// CATEGORY NAMES IN NAV BAR
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

// BIG FEATURED ARTICLE
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

// SMALL FEATURED ARTICLES
{
  // Retrieve the template data from the HTML
  let template = $("#tmpl-small-featured-posts").html();

  // Get the second and third featured posts
  let featuredPosts = articles
    .filter(function(x) {
      return x.featured;
    })
    .map(x => {
      return {
        title: x.title,
        subtitle: x.subtitle,
        date: x.date.toLocaleDateString("en-US", dateOptions),
        category: x.category
      };
    });

  featuredPosts.shift();
  if (featuredPosts.length > 2) {
    featuredPosts.length = 2;
  }

  // Create the context
  let context = {
    featuredPosts: featuredPosts
  };

  // Compile the template data into a function
  let templateScript = Handlebars.compile(template);
  let html = templateScript(context);

  $("#small-featured-posts").append(html);
}

// ARCHIVES
{
  // Retrieve the template data from the HTML
  let template = $("#tmpl-archives").html();

  // Get the second and third featured posts
  let allMonths = Array.from(
    new Set(
      articles.map(x => {
        return x.date.toLocaleDateString("en-US", {
          month: "long",
          year: "numeric"
        });
      })
    )
  ).map(x => {
    return { month: x };
  });

  // Create the context
  let context = {
    months: allMonths
  };

  // Compile the template data into a function
  let templateScript = Handlebars.compile(template);
  let html = templateScript(context);

  $("#archives").append(html);
}

// RECENT POSTS
var recentPostsPage = 1;
{
  // Retrieve the template data from the HTML
  let template = $("#tmpl-recent-posts").html();

  let recentPosts = [];
  if (articles.length > (recentPostsPage - 1) * 5) {
    // Get the second and third featured posts
    recentPosts = articles.sort(function(first, second) {
      if (first.date > second.date) return -1;
      else if (first.date < second.date) return 1;
      else return 0;
    });

    for (let i = 0; i < (recentPostsPage - 1) * 5; i++) {
      recentPosts.shift();
    }

    if (recentPosts.length > 5) {
      recentPosts.length = 5;
    }
  }

  recentPosts = recentPosts.map(x => {
    return {
      title: x.title,
      subtitle: x.content.substring(0, 490) + "...",
      author: x.author,
      date: x.date.toLocaleDateString("en-US", dateOptions),
      category: x.category
    }
  });

  // Create the context
  let context = {
    recentPosts: recentPosts
  };

  // Compile the template data into a function
  let templateScript = Handlebars.compile(template);
  let html = templateScript(context);

  $("#recent-posts").append(html);
}
