const categories = {
  FOOD: "Food",
  DRINKS: "Drinks",
  ART: "Art",
  NATURE: "Nature",
  EVENTS: "Events"
};

var articles = [
  {
    title: "Food one",
    subtitle:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.",
    category: categories.FOOD,
    date: "12/12/2012",
    author: "John Green",
    featured: true,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Vulputate ut pharetra sit amet aliquam id diam. Arcu cursus vitae congue mauris. In est ante in nibh. Neque convallis a cras semper. Urna cursus eget nunc scelerisque viverra mauris in. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Nisl condimentum id venenatis a. Sit amet dictum sit amet justo donec enim diam vulputate. \n Tellus mauris a diam maecenas sed. Nunc vel risus commodo viverra maecenas accumsan. Sed cras ornare arcu dui. Nunc lobortis mattis aliquam faucibus purus in. In pellentesque massa placerat duis ultricies lacus. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Enim lobortis scelerisque fermentum dui faucibus in ornare. Adipiscing commodo elit at imperdiet dui. Aliquet nec ullamcorper sit amet. Massa ultricies mi quis hendrerit dolor. In cursus turpis massa tincidunt dui. Turpis massa tincidunt dui ut ornare lectus sit amet est. Diam volutpat commodo sed egestas egestas fringilla. Purus semper eget duis at. In ante metus dictum at tempor commodo ullamcorper. At auctor urna nunc id cursus metus aliquam eleifend. Aenean euismod elementum nisi quis eleifend. \n Lacinia quis vel eros donec. Ut eu sem integer vitae justo. Amet est placerat in egestas erat imperdiet sed euismod. Suspendisse ultrices gravida dictum fusce ut placerat orci. Ultrices vitae auctor eu augue ut lectus arcu. Donec adipiscing tristique risus nec feugiat. Mollis nunc sed id semper risus. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Eget magna fermentum iaculis eu non diam. Non odio euismod lacinia at quis risus sed. Id eu nisl nunc mi ipsum faucibus. \n Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Congue mauris rhoncus aenean vel elit scelerisque. Quisque sagittis purus sit amet volutpat. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Euismod nisi porta lorem mollis. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Eu augue ut lectus arcu bibendum. Et malesuada fames ac turpis. Nisi porta lorem mollis aliquam ut porttitor leo a diam. \n Morbi non arcu risus quis. Metus aliquam eleifend mi in nulla posuere sollicitudin. Interdum varius sit amet mattis vulputate enim nulla. Feugiat scelerisque varius morbi enim. Eu turpis egestas pretium aenean. In ante metus dictum at tempor commodo ullamcorper. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Molestie ac feugiat sed lectus vestibulum mattis. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Lorem sed risus ultricies tristique nulla aliquet enim. Tempor orci dapibus ultrices in iaculis nunc sed. Tempus egestas sed sed risus pretium. Faucibus nisl tincidunt eget nullam non nisi est sit. Blandit cursus risus at ultrices mi tempus imperdiet nulla."
  },
  {
    title: "Drinks one",
    subtitle:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.",
    category: categories.DRINKS,
    date: "12/12/2012",
    author: "John Green",
    featured: true,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Vulputate ut pharetra sit amet aliquam id diam. Arcu cursus vitae congue mauris. In est ante in nibh. Neque convallis a cras semper. Urna cursus eget nunc scelerisque viverra mauris in. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Nisl condimentum id venenatis a. Sit amet dictum sit amet justo donec enim diam vulputate. \n Tellus mauris a diam maecenas sed. Nunc vel risus commodo viverra maecenas accumsan. Sed cras ornare arcu dui. Nunc lobortis mattis aliquam faucibus purus in. In pellentesque massa placerat duis ultricies lacus. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Enim lobortis scelerisque fermentum dui faucibus in ornare. Adipiscing commodo elit at imperdiet dui. Aliquet nec ullamcorper sit amet. Massa ultricies mi quis hendrerit dolor. In cursus turpis massa tincidunt dui. Turpis massa tincidunt dui ut ornare lectus sit amet est. Diam volutpat commodo sed egestas egestas fringilla. Purus semper eget duis at. In ante metus dictum at tempor commodo ullamcorper. At auctor urna nunc id cursus metus aliquam eleifend. Aenean euismod elementum nisi quis eleifend. \n Lacinia quis vel eros donec. Ut eu sem integer vitae justo. Amet est placerat in egestas erat imperdiet sed euismod. Suspendisse ultrices gravida dictum fusce ut placerat orci. Ultrices vitae auctor eu augue ut lectus arcu. Donec adipiscing tristique risus nec feugiat. Mollis nunc sed id semper risus. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Eget magna fermentum iaculis eu non diam. Non odio euismod lacinia at quis risus sed. Id eu nisl nunc mi ipsum faucibus. \n Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Congue mauris rhoncus aenean vel elit scelerisque. Quisque sagittis purus sit amet volutpat. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Euismod nisi porta lorem mollis. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Eu augue ut lectus arcu bibendum. Et malesuada fames ac turpis. Nisi porta lorem mollis aliquam ut porttitor leo a diam. \n Morbi non arcu risus quis. Metus aliquam eleifend mi in nulla posuere sollicitudin. Interdum varius sit amet mattis vulputate enim nulla. Feugiat scelerisque varius morbi enim. Eu turpis egestas pretium aenean. In ante metus dictum at tempor commodo ullamcorper. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Molestie ac feugiat sed lectus vestibulum mattis. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Lorem sed risus ultricies tristique nulla aliquet enim. Tempor orci dapibus ultrices in iaculis nunc sed. Tempus egestas sed sed risus pretium. Faucibus nisl tincidunt eget nullam non nisi est sit. Blandit cursus risus at ultrices mi tempus imperdiet nulla."
  },
  {
    title: "Art one",
    subtitle:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.",
    category: categories.ART,
    date: "12/12/2012",
    author: "John Green",
    featured: true,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Vulputate ut pharetra sit amet aliquam id diam. Arcu cursus vitae congue mauris. In est ante in nibh. Neque convallis a cras semper. Urna cursus eget nunc scelerisque viverra mauris in. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Nisl condimentum id venenatis a. Sit amet dictum sit amet justo donec enim diam vulputate. \n Tellus mauris a diam maecenas sed. Nunc vel risus commodo viverra maecenas accumsan. Sed cras ornare arcu dui. Nunc lobortis mattis aliquam faucibus purus in. In pellentesque massa placerat duis ultricies lacus. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Enim lobortis scelerisque fermentum dui faucibus in ornare. Adipiscing commodo elit at imperdiet dui. Aliquet nec ullamcorper sit amet. Massa ultricies mi quis hendrerit dolor. In cursus turpis massa tincidunt dui. Turpis massa tincidunt dui ut ornare lectus sit amet est. Diam volutpat commodo sed egestas egestas fringilla. Purus semper eget duis at. In ante metus dictum at tempor commodo ullamcorper. At auctor urna nunc id cursus metus aliquam eleifend. Aenean euismod elementum nisi quis eleifend. \n Lacinia quis vel eros donec. Ut eu sem integer vitae justo. Amet est placerat in egestas erat imperdiet sed euismod. Suspendisse ultrices gravida dictum fusce ut placerat orci. Ultrices vitae auctor eu augue ut lectus arcu. Donec adipiscing tristique risus nec feugiat. Mollis nunc sed id semper risus. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Eget magna fermentum iaculis eu non diam. Non odio euismod lacinia at quis risus sed. Id eu nisl nunc mi ipsum faucibus. \n Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Congue mauris rhoncus aenean vel elit scelerisque. Quisque sagittis purus sit amet volutpat. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Euismod nisi porta lorem mollis. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Eu augue ut lectus arcu bibendum. Et malesuada fames ac turpis. Nisi porta lorem mollis aliquam ut porttitor leo a diam. \n Morbi non arcu risus quis. Metus aliquam eleifend mi in nulla posuere sollicitudin. Interdum varius sit amet mattis vulputate enim nulla. Feugiat scelerisque varius morbi enim. Eu turpis egestas pretium aenean. In ante metus dictum at tempor commodo ullamcorper. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Molestie ac feugiat sed lectus vestibulum mattis. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Lorem sed risus ultricies tristique nulla aliquet enim. Tempor orci dapibus ultrices in iaculis nunc sed. Tempus egestas sed sed risus pretium. Faucibus nisl tincidunt eget nullam non nisi est sit. Blandit cursus risus at ultrices mi tempus imperdiet nulla."
  },
  {
    title: "Nature one",
    subtitle:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.",
    category: categories.NATURE,
    date: "12/12/2012",
    author: "John Green",
    featured: false,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Vulputate ut pharetra sit amet aliquam id diam. Arcu cursus vitae congue mauris. In est ante in nibh. Neque convallis a cras semper. Urna cursus eget nunc scelerisque viverra mauris in. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Nisl condimentum id venenatis a. Sit amet dictum sit amet justo donec enim diam vulputate. \n Tellus mauris a diam maecenas sed. Nunc vel risus commodo viverra maecenas accumsan. Sed cras ornare arcu dui. Nunc lobortis mattis aliquam faucibus purus in. In pellentesque massa placerat duis ultricies lacus. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Enim lobortis scelerisque fermentum dui faucibus in ornare. Adipiscing commodo elit at imperdiet dui. Aliquet nec ullamcorper sit amet. Massa ultricies mi quis hendrerit dolor. In cursus turpis massa tincidunt dui. Turpis massa tincidunt dui ut ornare lectus sit amet est. Diam volutpat commodo sed egestas egestas fringilla. Purus semper eget duis at. In ante metus dictum at tempor commodo ullamcorper. At auctor urna nunc id cursus metus aliquam eleifend. Aenean euismod elementum nisi quis eleifend. \n Lacinia quis vel eros donec. Ut eu sem integer vitae justo. Amet est placerat in egestas erat imperdiet sed euismod. Suspendisse ultrices gravida dictum fusce ut placerat orci. Ultrices vitae auctor eu augue ut lectus arcu. Donec adipiscing tristique risus nec feugiat. Mollis nunc sed id semper risus. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Eget magna fermentum iaculis eu non diam. Non odio euismod lacinia at quis risus sed. Id eu nisl nunc mi ipsum faucibus. \n Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Congue mauris rhoncus aenean vel elit scelerisque. Quisque sagittis purus sit amet volutpat. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Euismod nisi porta lorem mollis. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Eu augue ut lectus arcu bibendum. Et malesuada fames ac turpis. Nisi porta lorem mollis aliquam ut porttitor leo a diam. \n Morbi non arcu risus quis. Metus aliquam eleifend mi in nulla posuere sollicitudin. Interdum varius sit amet mattis vulputate enim nulla. Feugiat scelerisque varius morbi enim. Eu turpis egestas pretium aenean. In ante metus dictum at tempor commodo ullamcorper. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Molestie ac feugiat sed lectus vestibulum mattis. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Lorem sed risus ultricies tristique nulla aliquet enim. Tempor orci dapibus ultrices in iaculis nunc sed. Tempus egestas sed sed risus pretium. Faucibus nisl tincidunt eget nullam non nisi est sit. Blandit cursus risus at ultrices mi tempus imperdiet nulla."
  },
  {
    title: "Events one",
    subtitle:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.",
    category: categories.EVENTS,
    date: "12/12/2012",
    author: "John Green",
    featured: false,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Vulputate ut pharetra sit amet aliquam id diam. Arcu cursus vitae congue mauris. In est ante in nibh. Neque convallis a cras semper. Urna cursus eget nunc scelerisque viverra mauris in. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Nisl condimentum id venenatis a. Sit amet dictum sit amet justo donec enim diam vulputate. \n Tellus mauris a diam maecenas sed. Nunc vel risus commodo viverra maecenas accumsan. Sed cras ornare arcu dui. Nunc lobortis mattis aliquam faucibus purus in. In pellentesque massa placerat duis ultricies lacus. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Enim lobortis scelerisque fermentum dui faucibus in ornare. Adipiscing commodo elit at imperdiet dui. Aliquet nec ullamcorper sit amet. Massa ultricies mi quis hendrerit dolor. In cursus turpis massa tincidunt dui. Turpis massa tincidunt dui ut ornare lectus sit amet est. Diam volutpat commodo sed egestas egestas fringilla. Purus semper eget duis at. In ante metus dictum at tempor commodo ullamcorper. At auctor urna nunc id cursus metus aliquam eleifend. Aenean euismod elementum nisi quis eleifend. \n Lacinia quis vel eros donec. Ut eu sem integer vitae justo. Amet est placerat in egestas erat imperdiet sed euismod. Suspendisse ultrices gravida dictum fusce ut placerat orci. Ultrices vitae auctor eu augue ut lectus arcu. Donec adipiscing tristique risus nec feugiat. Mollis nunc sed id semper risus. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Eget magna fermentum iaculis eu non diam. Non odio euismod lacinia at quis risus sed. Id eu nisl nunc mi ipsum faucibus. \n Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Congue mauris rhoncus aenean vel elit scelerisque. Quisque sagittis purus sit amet volutpat. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Euismod nisi porta lorem mollis. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Eu augue ut lectus arcu bibendum. Et malesuada fames ac turpis. Nisi porta lorem mollis aliquam ut porttitor leo a diam. \n Morbi non arcu risus quis. Metus aliquam eleifend mi in nulla posuere sollicitudin. Interdum varius sit amet mattis vulputate enim nulla. Feugiat scelerisque varius morbi enim. Eu turpis egestas pretium aenean. In ante metus dictum at tempor commodo ullamcorper. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Molestie ac feugiat sed lectus vestibulum mattis. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Lorem sed risus ultricies tristique nulla aliquet enim. Tempor orci dapibus ultrices in iaculis nunc sed. Tempus egestas sed sed risus pretium. Faucibus nisl tincidunt eget nullam non nisi est sit. Blandit cursus risus at ultrices mi tempus imperdiet nulla."
  },
  {
    title: "Events two",
    subtitle:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.",
    category: categories.EVENTS,
    date: "12/12/2012",
    author: "John Green",
    featured: false,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Vulputate ut pharetra sit amet aliquam id diam. Arcu cursus vitae congue mauris. In est ante in nibh. Neque convallis a cras semper. Urna cursus eget nunc scelerisque viverra mauris in. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Nisl condimentum id venenatis a. Sit amet dictum sit amet justo donec enim diam vulputate. \n Tellus mauris a diam maecenas sed. Nunc vel risus commodo viverra maecenas accumsan. Sed cras ornare arcu dui. Nunc lobortis mattis aliquam faucibus purus in. In pellentesque massa placerat duis ultricies lacus. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Enim lobortis scelerisque fermentum dui faucibus in ornare. Adipiscing commodo elit at imperdiet dui. Aliquet nec ullamcorper sit amet. Massa ultricies mi quis hendrerit dolor. In cursus turpis massa tincidunt dui. Turpis massa tincidunt dui ut ornare lectus sit amet est. Diam volutpat commodo sed egestas egestas fringilla. Purus semper eget duis at. In ante metus dictum at tempor commodo ullamcorper. At auctor urna nunc id cursus metus aliquam eleifend. Aenean euismod elementum nisi quis eleifend. \n Lacinia quis vel eros donec. Ut eu sem integer vitae justo. Amet est placerat in egestas erat imperdiet sed euismod. Suspendisse ultrices gravida dictum fusce ut placerat orci. Ultrices vitae auctor eu augue ut lectus arcu. Donec adipiscing tristique risus nec feugiat. Mollis nunc sed id semper risus. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Eget magna fermentum iaculis eu non diam. Non odio euismod lacinia at quis risus sed. Id eu nisl nunc mi ipsum faucibus. \n Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Congue mauris rhoncus aenean vel elit scelerisque. Quisque sagittis purus sit amet volutpat. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Euismod nisi porta lorem mollis. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Eu augue ut lectus arcu bibendum. Et malesuada fames ac turpis. Nisi porta lorem mollis aliquam ut porttitor leo a diam. \n Morbi non arcu risus quis. Metus aliquam eleifend mi in nulla posuere sollicitudin. Interdum varius sit amet mattis vulputate enim nulla. Feugiat scelerisque varius morbi enim. Eu turpis egestas pretium aenean. In ante metus dictum at tempor commodo ullamcorper. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Molestie ac feugiat sed lectus vestibulum mattis. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Lorem sed risus ultricies tristique nulla aliquet enim. Tempor orci dapibus ultrices in iaculis nunc sed. Tempus egestas sed sed risus pretium. Faucibus nisl tincidunt eget nullam non nisi est sit. Blandit cursus risus at ultrices mi tempus imperdiet nulla."
  },
  {
    title: "Drinks two",
    subtitle:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.",
    category: categories.DRINKS,
    date: "12/12/2012",
    author: "John Green",
    featured: false,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Vulputate ut pharetra sit amet aliquam id diam. Arcu cursus vitae congue mauris. In est ante in nibh. Neque convallis a cras semper. Urna cursus eget nunc scelerisque viverra mauris in. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Nisl condimentum id venenatis a. Sit amet dictum sit amet justo donec enim diam vulputate. \n Tellus mauris a diam maecenas sed. Nunc vel risus commodo viverra maecenas accumsan. Sed cras ornare arcu dui. Nunc lobortis mattis aliquam faucibus purus in. In pellentesque massa placerat duis ultricies lacus. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Enim lobortis scelerisque fermentum dui faucibus in ornare. Adipiscing commodo elit at imperdiet dui. Aliquet nec ullamcorper sit amet. Massa ultricies mi quis hendrerit dolor. In cursus turpis massa tincidunt dui. Turpis massa tincidunt dui ut ornare lectus sit amet est. Diam volutpat commodo sed egestas egestas fringilla. Purus semper eget duis at. In ante metus dictum at tempor commodo ullamcorper. At auctor urna nunc id cursus metus aliquam eleifend. Aenean euismod elementum nisi quis eleifend. \n Lacinia quis vel eros donec. Ut eu sem integer vitae justo. Amet est placerat in egestas erat imperdiet sed euismod. Suspendisse ultrices gravida dictum fusce ut placerat orci. Ultrices vitae auctor eu augue ut lectus arcu. Donec adipiscing tristique risus nec feugiat. Mollis nunc sed id semper risus. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Eget magna fermentum iaculis eu non diam. Non odio euismod lacinia at quis risus sed. Id eu nisl nunc mi ipsum faucibus. \n Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Congue mauris rhoncus aenean vel elit scelerisque. Quisque sagittis purus sit amet volutpat. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Euismod nisi porta lorem mollis. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Eu augue ut lectus arcu bibendum. Et malesuada fames ac turpis. Nisi porta lorem mollis aliquam ut porttitor leo a diam. \n Morbi non arcu risus quis. Metus aliquam eleifend mi in nulla posuere sollicitudin. Interdum varius sit amet mattis vulputate enim nulla. Feugiat scelerisque varius morbi enim. Eu turpis egestas pretium aenean. In ante metus dictum at tempor commodo ullamcorper. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Molestie ac feugiat sed lectus vestibulum mattis. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Lorem sed risus ultricies tristique nulla aliquet enim. Tempor orci dapibus ultrices in iaculis nunc sed. Tempus egestas sed sed risus pretium. Faucibus nisl tincidunt eget nullam non nisi est sit. Blandit cursus risus at ultrices mi tempus imperdiet nulla."
  },
  {
    title: "Art 2",
    subtitle:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.",
    category: categories.ART,
    date: "12/12/2012",
    author: "John Green",
    featured: false,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Vulputate ut pharetra sit amet aliquam id diam. Arcu cursus vitae congue mauris. In est ante in nibh. Neque convallis a cras semper. Urna cursus eget nunc scelerisque viverra mauris in. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Nisl condimentum id venenatis a. Sit amet dictum sit amet justo donec enim diam vulputate. \n Tellus mauris a diam maecenas sed. Nunc vel risus commodo viverra maecenas accumsan. Sed cras ornare arcu dui. Nunc lobortis mattis aliquam faucibus purus in. In pellentesque massa placerat duis ultricies lacus. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Enim lobortis scelerisque fermentum dui faucibus in ornare. Adipiscing commodo elit at imperdiet dui. Aliquet nec ullamcorper sit amet. Massa ultricies mi quis hendrerit dolor. In cursus turpis massa tincidunt dui. Turpis massa tincidunt dui ut ornare lectus sit amet est. Diam volutpat commodo sed egestas egestas fringilla. Purus semper eget duis at. In ante metus dictum at tempor commodo ullamcorper. At auctor urna nunc id cursus metus aliquam eleifend. Aenean euismod elementum nisi quis eleifend. \n Lacinia quis vel eros donec. Ut eu sem integer vitae justo. Amet est placerat in egestas erat imperdiet sed euismod. Suspendisse ultrices gravida dictum fusce ut placerat orci. Ultrices vitae auctor eu augue ut lectus arcu. Donec adipiscing tristique risus nec feugiat. Mollis nunc sed id semper risus. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Eget magna fermentum iaculis eu non diam. Non odio euismod lacinia at quis risus sed. Id eu nisl nunc mi ipsum faucibus. \n Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Congue mauris rhoncus aenean vel elit scelerisque. Quisque sagittis purus sit amet volutpat. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Euismod nisi porta lorem mollis. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Eu augue ut lectus arcu bibendum. Et malesuada fames ac turpis. Nisi porta lorem mollis aliquam ut porttitor leo a diam. \n Morbi non arcu risus quis. Metus aliquam eleifend mi in nulla posuere sollicitudin. Interdum varius sit amet mattis vulputate enim nulla. Feugiat scelerisque varius morbi enim. Eu turpis egestas pretium aenean. In ante metus dictum at tempor commodo ullamcorper. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Molestie ac feugiat sed lectus vestibulum mattis. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Lorem sed risus ultricies tristique nulla aliquet enim. Tempor orci dapibus ultrices in iaculis nunc sed. Tempus egestas sed sed risus pretium. Faucibus nisl tincidunt eget nullam non nisi est sit. Blandit cursus risus at ultrices mi tempus imperdiet nulla."
  },
  {
    title: "Art 3",
    subtitle:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.",
    category: categories.ART,
    date: "12/12/2012",
    author: "John Green",
    featured: false,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Vulputate ut pharetra sit amet aliquam id diam. Arcu cursus vitae congue mauris. In est ante in nibh. Neque convallis a cras semper. Urna cursus eget nunc scelerisque viverra mauris in. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Nisl condimentum id venenatis a. Sit amet dictum sit amet justo donec enim diam vulputate. \n Tellus mauris a diam maecenas sed. Nunc vel risus commodo viverra maecenas accumsan. Sed cras ornare arcu dui. Nunc lobortis mattis aliquam faucibus purus in. In pellentesque massa placerat duis ultricies lacus. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Enim lobortis scelerisque fermentum dui faucibus in ornare. Adipiscing commodo elit at imperdiet dui. Aliquet nec ullamcorper sit amet. Massa ultricies mi quis hendrerit dolor. In cursus turpis massa tincidunt dui. Turpis massa tincidunt dui ut ornare lectus sit amet est. Diam volutpat commodo sed egestas egestas fringilla. Purus semper eget duis at. In ante metus dictum at tempor commodo ullamcorper. At auctor urna nunc id cursus metus aliquam eleifend. Aenean euismod elementum nisi quis eleifend. \n Lacinia quis vel eros donec. Ut eu sem integer vitae justo. Amet est placerat in egestas erat imperdiet sed euismod. Suspendisse ultrices gravida dictum fusce ut placerat orci. Ultrices vitae auctor eu augue ut lectus arcu. Donec adipiscing tristique risus nec feugiat. Mollis nunc sed id semper risus. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Eget magna fermentum iaculis eu non diam. Non odio euismod lacinia at quis risus sed. Id eu nisl nunc mi ipsum faucibus. \n Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Congue mauris rhoncus aenean vel elit scelerisque. Quisque sagittis purus sit amet volutpat. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Euismod nisi porta lorem mollis. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Eu augue ut lectus arcu bibendum. Et malesuada fames ac turpis. Nisi porta lorem mollis aliquam ut porttitor leo a diam. \n Morbi non arcu risus quis. Metus aliquam eleifend mi in nulla posuere sollicitudin. Interdum varius sit amet mattis vulputate enim nulla. Feugiat scelerisque varius morbi enim. Eu turpis egestas pretium aenean. In ante metus dictum at tempor commodo ullamcorper. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Molestie ac feugiat sed lectus vestibulum mattis. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Lorem sed risus ultricies tristique nulla aliquet enim. Tempor orci dapibus ultrices in iaculis nunc sed. Tempus egestas sed sed risus pretium. Faucibus nisl tincidunt eget nullam non nisi est sit. Blandit cursus risus at ultrices mi tempus imperdiet nulla."
  }
];
