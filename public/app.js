const app = function(){
  const url = 'https://api.punkapi.com/v2/beers';

  const getBeersButton = document.querySelector('#getBeersButton');

  getBeersButton.addEventListener('click', function(){
    makeRequest(url,requestComplete)
  });
}

const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.send();

  request.addEventListener('load', callback);
}

const requestComplete = function(){
  if(this.status!== 200) return;
  const jsonString = this.responseText;
  localStorage.setItem('beersList', jsonString);
  const beersList = JSON.parse(jsonString);
  console.log("beersList", beersList);

  populateList(beersList);

}

const populateList = function(beers) {
  const mainUl = document.querySelector('#mainUl');

  beers.forEach(function(beer, index){
    const li = document.createElement('li');
    li.innerText = beer.name;
    li.value = index;
    const ingredient = document.createElement('li');
    ingredient.innerText = beer.ingredients.
    const img = document.createElement('img');
    img.style.width = '30px';
    img.src = beer.image_url;
    mainUl.appendChild(li);
    mainUl.appendChild(img);

  })
}

document.addEventListener('DOMContentLoaded', app);
