var listing = document.querySelector('.c-article-listing');
var template = document.getElementById("article-template");
var templateHtml = template.innerHTML;
var listHtml = "";

function processArticle(art) {
  var temp = templateHtml
    .replace(/{{src}}/g, art.src)
    .replace(/{{alt}}/g, art.alt)
    .replace(/{{name}}/g, art.name)
    .replace(/{{price}}/g, art.price)
    .replace(/{{sizes}}/g, art.sizes);
  listing.insertAdjacentHTML('beforeend', temp);
}

function loadJSON(url, callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("/products.json");
    xobj.open('GET', url, true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

loadJSON('http://www.mocky.io/v2/5ed77d39320000cc5c27485f', function(data) {
  var productsObject = JSON.parse(data); 
  productsObject.products.filter(function(item){
    return item.category.indexOf("NEW") >= 0;
  }).map(processArticle);
})