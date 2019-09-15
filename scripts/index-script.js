// SETUP
var dateOptions = { year: "numeric", month: "short", day: "numeric" };
var recentPostsPage = 1;

// START
categoryNavigation();
bigFeaturedArticle();
smallFeaturedArticles();
archives();
recentPosts();

// BIG FEATURED ARTICLE
function bigFeaturedArticle() {
  // Retrieve the template data from the HTML
  let template = $("#tmpl-big-featured-post").html();

  // Get the first featured article
  let featured = articles.find(function(x) {
    return x.featured;
  });

  // Create the context
  let context = {
    title: featured.title,
    subtitle: featured.subtitle,
    image: "img/" + featured.image,
    articleLink: "articles.html?name=" + featured.id
  };

  // Compile the template data into a function
  let templateScript = Handlebars.compile(template);
  let html = templateScript(context);
  $("#big-featured-post").prepend(html);
}

// SMALL FEATURED ARTICLES
function smallFeaturedArticles() {
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
        category: x.category,
        image: "img/" + x.image,
        articleLink: "articles.html?name=" + x.id
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
function archives() {
  // Retrieve the template data from the HTML
  let template = $("#tmpl-archives").html();

  // Get the second and third featured posts
  let allMonths = Array.from(
    new Set(
      articles
        .sort(function(first, second) {
          if (first.date > second.date) return -1;
          else if (first.date < second.date) return 1;
          else return 0;
        })
        .map(x => {
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
function recentPosts() {
  // Retrieve the template data from the HTML
  let template = $("#tmpl-recent-posts").html();

  let recentPosts = [];
  if (articles.length > (recentPostsPage - 1) * 5) {
    // Get the second and third featured posts
    recentPosts = articles
      .sort(function(first, second) {
        if (first.date > second.date) return -1;
        else if (first.date < second.date) return 1;
        else return 0;
      })
      .map(x => {
        return {
          title: x.title,
          subtitle: x.content.substring(0, 490) + "...",
          author: x.author,
          date: x.date.toLocaleDateString("en-US", dateOptions),
          category: x.category,
          articleLink: "articles.html?name=" + x.id,
          categoryLink: "categories.html?name=" + x.category.toLowerCase()
        };
      });

    for (let i = 0; i < (recentPostsPage - 1) * 5; i++) {
      recentPosts.shift();
    }

    if (recentPosts.length > 5) {
      recentPosts.length = 5;
    }
  }

  // Create the context
  let context = {
    recentPosts: recentPosts
  };

  // Compile the template data into a function
  let templateScript = Handlebars.compile(template);
  let html = templateScript(context);

  $("#recent-posts").html(html);

  setPagingButtonsStatus();
}

// OLDER & NEWER BUTTONS - Interactions
function setPagingButtonsStatus() {
  if (recentPostsPage == 1) {
    $("#newer-posts-btn").addClass("disabled");
  } else {
    $("#newer-posts-btn").removeClass("disabled");
  }

  if (articles.length <= recentPostsPage * 5) {
    $("#older-posts-btn").addClass("disabled");
  } else {
    $("#older-posts-btn").removeClass("disabled");
  }
}

function goToPosts() {
  $("html, body").animate(
    {
      scrollTop: $("#recent-posts").offset().top
    },
    500
  );
}

$("#older-posts-btn").click(function(event) {
  recentPostsPage++;
  recentPosts();
  goToPosts();
  event.preventDefault();
});

$("#newer-posts-btn").click(function(event) {
  recentPostsPage--;
  recentPosts();
  goToPosts();
  event.preventDefault();
});