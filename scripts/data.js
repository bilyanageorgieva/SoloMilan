const categories = {
  FOOD: "Food",
  DRINKS: "Drinks",
  ART: "Art",
  CULTURE: "Culture",
  NATURE: "Nature",
  EVENTS: "Events"
};

const articles = [
  {
    id: "festa-delle-lanterne",
    title: "Festa Delle Lanterne",
    image: "festa-delle-lanterne.jpg",
    subtitle: "The festival of dragons.",
    category: categories.EVENTS,
    date: new Date("07/22/2019"),
    author: "Bilyana Georgieva",
    hours: ["Changes every year"],
    prices: ["FREE"],
    website: "articles.html?name=festa-delle-lanterne",
    maps: "https://goo.gl/maps/TtEbYMbTTZgqvbBR6",
    tripAdvisor:
      "https://www.tripadvisor.it/Attraction_Review-g187849-d1925887-Reviews-Chinatown-Milan_Lombardy.html",
    featured: true,
    content:
      'In the days of the Chinese New Year, the Paolo Sarpi district is a "mobile party."  Chinatown is colored red with festoons, ribbons and lanterns and parades of acrobats and masks continue all the time.  And then there are also concerts, screenings, fireworks and the ever-present march of dragons.  Also called Spring Festival, the Chun Jie is among the most heartfelt celebrations for the Chinese community of Milan and is spent with family, with gifts and dinner, a bit like our Christmas.  The festivities last about two weeks and culminate with the Lantern Festival when every Chinese lights candles on the windows and walks around the neighborhood holding colorful lanterns to guide benevolent spirits.  Pay attention to the dates: the party follows lunar cycles and varies every year.'
  },
  {
    id: "villa-belgoiojoso-bonaparte",
    title: "Villa Belgoiojoso Bonaparte",
    image: "villa-belgoiojoso-bonaparte.jpg",
    subtitle: "Enchanting world for the small ones",
    category: categories.NATURE,
    date: new Date("01/19/2019"),
    author: "Bilyana Georgieva",
    hours: ["Tuesday-Sunday:  9.00 - 17.00", "Monday: OFF"],
    prices: ["FREE"],
    website: "http://www.gam-milano.com/it/la-villa/",
    maps: "https://goo.gl/maps/A4yoQSLSW4QJnUud9",
    tripAdvisor:
      "https://www.tripadvisor.it/Attraction_Review-g635872-d2369006-Reviews-Villa_Reale-Monza_Province_of_Monza_and_Brianza_Lombardy.html",
    featured: false,
    content:
      "In the garden of Villa Belgiojoso Bonaparte there are small temples, sculptures of modern art, pagodas, ancient ruins and an artificial lake designed so as never to allow a unified view, so as to influence the imagination of the observer.  Admission is restricted to children under 12 and adults in their company."
  },
  {
    id: "villa-necchi-campiglio",
    title: "Villa Necchi Campiglio",
    image: "villa-necchi-campiglio.jpg",
    subtitle: "A Thirties icon in the heart of Milan",
    category: categories.ART,
    date: new Date("12/12/2018"),
    author: "Bilyana Georgieva",
    hours: ["Monday-Sunday:  10.00 - 18.00"],
    prices: ["FREE with FAI subscription"],
    website: "https://www.fondoambiente.it/luoghi/villa-necchi-campiglio",
    maps: "https://g.page/villa-necchi-campiglio?share",
    tripAdvisor:
      "https://www.tripadvisor.it/Attraction_Review-g187849-d1930515-Reviews-Villa_Necchi_Campiglio-Milan_Lombardy.html",
    featured: false,
    content:
      'Villa Necchi Campiglio, in is a property of FAI and was built by Pietro Portaluppi between 1932 and 1935 for the Necchi Campiglio family, from the Lombardian industrial bourgeoisie. The villa in 2010 was used as a film set for the movie "Io sono l\'amore" with Tilda Swinton. It is also home of privately donated famous collections of significant pieces of the 20th-century Italian art. A great occasion to visit it for free accompanied by thoughtful and highly trained FAI volunteers is to take part in the conferences and presentations that often take part inside. You could also visit one of the "Gioirnate del FAI" like their annual spring one for example. Anyways the visit to the villa is always free!'
  },
  {
    id: "san-bernadino-alle-ossa",
    title: "San Bernadino Alle Ossa",
    image: "san-bernadino-alle-ossa.jpg",
    subtitle: "All darkness and bones.",
    category: categories.CULTURE,
    date: new Date("09/13/2019"),
    author: "Bilyana Georgieva",
    hours: ["Always open"],
    prices: ["FREE"],
    website: "articles.html?name=san-bernadino-alle-ossa",
    maps: "https://goo.gl/maps/a8mouwWSJYJ63ApM8",
    tripAdvisor:
      "https://www.tripadvisor.it/Attraction_Review-g187849-d1903545-Reviews-Chiesa_di_San_Bernardino_alle_Ossa-Milan_Lombardy.html",
    featured: false,
    content:
      'For the lovers of gothic and dark atmospheres, I suggest entering the church of San Bernardino alle Ossa.  Once crossed the threshold, a corridor carpeted with votive offerings leads to a chapel with the vault frescoed by Sebastiano Ricci in 1695. The walls, the doors, the pillars are covered with human bones. Tibias, femurs, shins, and mandibles probably belonged to the dead of the nearby hospital of San Barnaba or to the victims of the seventeenth-century plague, the one described by Alessandro Manzoni in "Promessi Sposi."  The skulls enclosed in the boxes above the external part, however, are those of those condemned to death.  The king of Portugal in 1738 visited the church and was so impressed by the chapel that he built a perfect one in Evora, near Lisbon.'
  },
  {
    id: "salsamenteria-di-parma",
    title: "Salsamenteria Di Parma",
    image: "salsamenteria-di-parma.jpeg",
    subtitle: "Fancy drinking wine from a bowl?",
    category: categories.FOOD,
    date: new Date("08/26/2019"),
    author: "Bilyana Georgieva",
    hours: ["Monday-Friday: 12.00 - 23.00", "Saturday-Sunday: 11.30 - 23.00"],
    prices: ["Varies"],
    website: "https://www.salsamenteriadiparma.com/",
    maps: "https://goo.gl/maps/3g45LxmP1GJMAGkZA",
    tripAdvisor:
      "https://www.tripadvisor.it/Restaurant_Review-g187849-d2044372-Reviews-Salsamenteria_di_Parma-Milan_Lombardy.html",
    featured: false,
    content:
      "A stone's throw from the Duomo and the Corso Vittorio Emanuele shopping center, there is a low-cost restaurant that is a real treasure.  At the Salsamenteria of Parma in via San Pietro all'Orto you will find typical Emilian products: 6 euro tripe, 7 euro lasagna, and excellent salami sandwiches, from prosciutto crudo to coppa and the Felino salami (3.50-5.00 euros).  In the evening it is worth ordering the cutting board plate (16 euros) to share with friends and a dash of Barbera, which are served here not in glasses but in cups.  The musical accompaniment is remarkable: Rossini, Verdi, Vivaldi, Beethoven..."
  },
  {
    id: "pizzeria-da-biagio",
    title: "Pizzeria Da Biagio",
    image: "pizzeria-da-biagio.jpeg",
    subtitle: "Tradition and comfort",
    category: categories.FOOD,
    date: new Date("12/20/2018"),
    author: "Bilyana Georgieva",
    hours: ["Monday-Sunday: 12.15 - 23.15"],
    prices: ["Variable"],
    website: "articles.html?name=pizzeria-da-biagio",
    maps: "https://goo.gl/maps/ssfd2G4JZ19dqWfV8",
    tripAdvisor: "https://www.tripadvisor.it/Restaurant_Review-g187849-d1119553-Reviews-Pizzeria_Biagio-Milan_Lombardy.html",
    featured: true,
    content: "At Pizzeria Da Biagio, a historic Milanese restaurant in Via Vincenzo Monti, you can stop and eat a good pizza at fair prices (about 10 euros pizza and drink) in a free and modern atmosphere.  Go for the classic and order the Margherita: it's excellent.  In winter you can eat in the two dining rooms, simply furnished, while in summer you can be outdoors in one of the tables set up on the sidewalk.  The restaurant is small and does not accept reservations; it is better to go early. Warning: pay only in cash if you don't want to wait."
  },
  {
    id: "orto-botanico-di-brera",
    title: "Orto Botanico Di Brera",
    image: "orto-botanico-di-brera.jpg",
    subtitle: "The secret garden",
    category: categories.NATURE,
    date: new Date("04/06/2019"),
    author: "Bilyana Georgieva",
    hours: ["Monday-Saturday:  10.00 - 18.00", "Sunday: OFF"],
    prices: ["FREE"],
    website: "http://www.ortobotanicoitalia.it/lombardia/brera/",
    maps: "https://goo.gl/maps/QyngLw4zyUGXARxw8",
    tripAdvisor:
      "https://www.tripadvisor.it/Attraction_Review-g187849-d2078633-Reviews-Orto_Botanico_di_Brera-Milan_Lombardy.html",
    featured: false,
    content:
      "In the heart of Milan, there is a magnificent garden, hidden in one of the most beautiful buildings. This is the Botanical Garden of Brera, which is a home of more than 3,000 plant species and a greenhouse designed by Piermarini. Among the goodies, there are two centuries-old Ginko Biloba, among the oldest in Europe, a 40-meter high linden and a forest of medicinal plants. Ideal for a romantic date, to get there you have to cross the labyrinth of corridors of the Academy or take the shortcut and enter directly from via Fiori Oscuri 4. Perhaps to preserve the charm of the place, bizarre opening times have been chosen: you can visit it for free every day, but unfortunately never on a Sunday. Few frequent it, many ignore its existence: it is the secret garden of the Milanese."
  },
  {
    id: "mercatino-dell-usato",
    title: "Mercatino Dell'usato",
    image: "mercatino-dell-usato.jpg",
    subtitle: "A modern day treasure hunt.",
    category: categories.CULTURE,
    date: new Date("05/24/2019"),
    author: "Bilyana Georgieva",
    hours: ["Sunday - Monday: 10.00 - 13.00", "Sunday - Monday: 15.30 - 19.30", "Saturday: 10.00 - 19.30"],
    prices: ["Variable"],
    website: "https://milanosansiro.mercatinousato.com/",
    maps: "https://goo.gl/maps/nySEc8g6D4tKkgGA6",
    tripAdvisor: "https://it-it.facebook.com/MercatinoUsatoAmati/",
    featured: false,
    content: "Piazza Amati's second-hand market displays items of clothing, furniture, complete furnishings, and appliances in an area of ​​600 square meters.  Space is also set up for books, games, VHS, DVDs, and CDs.  Here you can sell everything you do not need anymore by displaying your goods for free: earn 50% of the price set on all items 65% on furniture and furnishings.  Those who simply come to buy can choose from thousands of selected used items, with new arrivals every day. If 60 days have passed since the date marked on the label, there is an additional discount of 10% to 50% at the cash desk."
  },
  {
    id: "galleria-darte-moderna",
    title: "Galleria d'Arte Moderna",
    image: "galleria-darte-moderna.jpg",
    subtitle: "A gallery of excellence.",
    category: categories.ART,
    date: new Date("04/17/2019"),
    author: "Bilyana Georgieva",
    hours: ["Tuesday-Friday:  9.00 - 17.30", "Monday: OFF"],
    prices: ["FREE"],
    website: "http://www.gam-milano.com/it/home/",
    maps: "https://goo.gl/maps/ck6FaA6HW4193HoM6",
    tripAdvisor:
      "https://www.tripadvisor.it/Attraction_Review-g187849-d243404-Reviews-Galleria_Civica_d_Arte_Moderna-Milan_Lombardy.html",
    featured: false,
    content:
      'Entrance is always free at the Modern Art Gallery.  The museum is located in a magnificent villa built between 1790 and 1796 by Count Barbiano di Belgiojoso.  Passed into the hands of the French, it became the residence of the governor of Milan Gioacchino Murat, who made it the sumptuous setting of lunches and dance parties.  In 1804 Melzi d\'Eril gave it to Napoleon, and since then it is known as "Villa Bonaparte."  After the abandonment following the unification of Italy, the villa was restored by the Municipality of Milan and, starting from 1921 became the headquarters of the Modern Art Gallery of Milan.  With its two thousand paintings and seven hundred sculptures, it is the Museum of the nineteenth century for excellence and testifies to the evolution of style from neoclassicism to divisionism.  Here you can admire works by masters such as Appiani and Segantini, passing through Hayez, Medardo Rosso and Previati.  In addition to the Grassi collection, with the Italian and French nineteenth-century canvases on the ground floor, you can visit the Vismara collection, which contains masterpieces by Modigliani, De Pisis, Carrà, Morandi, Sironi, Picasso, Matisse, Renoir.'
  },
  {
    id: "civico-planetario-hoepli",
    title: "Civico Planetario Hoepli",
    image: "civico-planetario-hoepli.jpg",
    subtitle: "Admire the stars",
    category: categories.CULTURE,
    date: new Date("03/19/2019"),
    author: "Bilyana Georgieva",
    hours: ["Monday-Friday:  9.00 - 17.00", "Saturday - Sunday: 14.15 - 17.30"],
    prices: ["3 euro"],
    website: "https://lofficina.eu/",
    maps: "https://goo.gl/maps/Wqrt4zUVAmAPaoRL9",
    tripAdvisor:
      "https://www.tripadvisor.it/Attraction_Review-g187849-d1912625-Reviews-Civico_Planetario_Ulrico_Hoepli-Milan_Lombardy.html",
    featured: false,
    content:
      "If you can barely spot the Big Dipper, it's time to head to the Hoepli Civic Planetarium.  Located in the gardens of Porta Venezia, it was inaugurated in 1930. The project, designed by architect Piero Portaluppi, was commissioned by the Swiss publisher Ulrico Hoepli, who donated it to the city.  The Planetarium is one of the largest in Italy (19.6 meters in diameter, with a capacity of 375 seats) and the entrance ticket costs 3 euros.  Here are organized guided observations of the sky, generally held every Saturday and Sunday afternoon (15:00 and 16:30) and the first evening of activity each month is celebrated with the identification of the main constellations and basic astronomical phenomena.  They are suitable for newcomers to the sky, for those approaching astronomy for the first time or for those who want to admire the spectacle of the starry sky."
  },
  {
    id: "bar-anny",
    title: "Bar Anny",
    image: "bar-anny.jpg",
    subtitle: "Go back to the 80's",
    category: categories.DRINKS,
    date: new Date("11/06/2019"),
    author: "Bilyana Georgieva",
    hours: ["Monday - Saturday: 7.30 - 0.30"],
    prices: ["Varies"],
    website: "articles.html?name=bar-anny",
    maps: "https://goo.gl/maps/oQAZWvuTtZJhY2KS7",
    tripAdvisor:
      "https://www.tripadvisor.it/Restaurant_Review-g187849-d13803761-Reviews-Bar_Anny-Milan_Lombardy.html",
    featured: true,
    content:
      "Bar Anny in via De Togni was a cult in the eighties.  Upon entering, there is only a counter on the right and a table with a brown leather horseshoe-shaped sofa, while upstairs, there is a small dining room.  Here you will find excellent sandwiches at competitive prices (around 3.50 euros) compared to the other bars in the area.  The students and professors of the nearby Catholic University know this well."
  }
];
