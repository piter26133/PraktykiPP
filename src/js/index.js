var listing = document.querySelector('.post__listing');
var template = document.getElementById('post-template');
var templateHtml = template.innerHTML;
var listHtml = "";

function processArticle(art) {
  var temp = templateHtml
    .replace(/{{src}}/g, art.src)
    .replace(/{{alt}}/g, art.alt)
    .replace(/{{name}}/g, art.name)
    .replace(/{{price}}/g, art.price)
    .replace(/{{sizes}}/g, art ? .sizes ? .map(function (item) {
      return `<label>
              <input type="radio" name="size" value="${item}" />
                ${item}
              </label>`
    }).join(''));
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

loadJSON('https://run.mocky.io/v3/e67f8676-6ef9-4991-b89d-7eb601ed3a38', function (data) {
  var productsObject = JSON.parse(data);
  productsObject.products.filter(function (item) {
    return item.category.indexOf("ALL") >= 0;
  }).map(processArticle);
})