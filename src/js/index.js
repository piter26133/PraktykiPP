var articleArray = [
    {
      "title": "Article 1",
      "short": "Short description 1. It will be displayed below"
    },
    {
      "title": "Article 2",
      "short": "Another description for article"
    },
    {
      "title": "Article 3",
      "short": "Another description for article3"
    }
  ];
  
  var listing = document.querySelector('.c-article-listing');
  var template = document.getElementById("article-template");
  var templateHtml = template.innerHTML;
  var listHtml = "";
  
  function processArticle(art) {
    var temp = templateHtml
      .replace(/{{title}}/g, art.title)
      .replace(/{{short}}/g, art.short);
    listing.insertAdjacentHTML('beforeend', temp);
  }
  
  articleArray.map(processArticle);