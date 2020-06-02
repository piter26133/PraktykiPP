var articleArray = [
    {
      "img": "/src/product_img/koszula.jpg",
      "alt": "Koszula",
      "name": "Koszula męska",
      "price": "100 PLN"
    },
    {
      "img": "/src/product_img/koszula.jpg",
      "alt": "koszula",
      "name": "Article 1",
      "price": "Pisont groszy",
    },
    {
      "img": "/src/product_img/koszula.jpg",
      "alt": "koszula",
      "name": "Article 1",
      "price": "Pisont groszy",
    },
    {
      "img": "/src/product_img/koszula.jpg",
      "alt": "koszula",
      "name": "Article 1",
      "price": "Pisont groszy",
    },
    {
      "img": "/src/product_img/koszula.jpg",
      "alt": "koszula",
      "name": "Article 1",
      "price": "Pisont groszy",
    },
    {
      "img": "/src/product_img/koszula.jpg",
      "alt": "koszula",
      "name": "Article 1",
      "price": "Pisont groszy",
    },
    {
      "img": "/src/product_img/koszula.jpg",
      "alt": "koszula",
      "name": "Article 1",
      "price": "Pisont groszy",
    }
  ];
  
  var listing = document.querySelector('.c-article-listing');
  var template = document.getElementById("article-template");
  var templateHtml = template.innerHTML;
  var listHtml = "";
  
  function processArticle(art) {
    var temp = templateHtml
      .replace(/{{src}}/g, art.img)
      .replace(/{{alt}}/g, art.alt)
      .replace(/{{name}}/g, art.name)
      .replace(/{{price}}/g, art.price)
    listing.insertAdjacentHTML('beforeend', temp);
  }
  
  articleArray.map(processArticle);