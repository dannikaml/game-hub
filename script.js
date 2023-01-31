var searchBtnEl = document.querySelector('#searchBtn');
var searchboxEl = document.querySelector("#searchbox");
    console.log(searchboxEl);
var form = document.getElementById('form');

var booksContainer = document.querySelector("#books-container");
var bookSearchTerm = document.querySelector('#search-term');
var bookshelfSave = [];


//var searchResult = document.querySelector('#bookResults');
//var bookList = document.querySelector('#bookList');


var searchHandler = function (event) {
  event.preventDefault(); 
  console.log('event in searchHandler: ', event);

  var searchInput = searchboxEl.value.trim();

  if (searchInput) {
    generateSearch(searchInput);

    booksContainer.textContent = '';
    searchboxEl.value = '';
  } else {
    alert('Search not found - Try Again');
  }
};

var formSubmitHandler = function (event) {
  // Don't refresh the page
  event.preventDefault();

  console.log('submit event: ', event);
  console.log(event.target[0].value);

  var searchValue = event.target[0].value;
  var bookSearchURL = `https://openlibrary.org/search.json?q=${searchValue}`;
  console.log('generateSearch searchValue: ', searchValue);

  // update UI to show the search term
  bookSearchTerm.innerText = event.target[0].value;

    fetch(bookSearchURL)
    .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(searchValue);
    console.log(data);
    
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        console.log(element)
        var liElement = document.createElement("li")
        var bookElement = document.createElement("p")
        liElement.textContent = `search ${element.search}, url: ${element.url}`
        ulElement.append(liElement)
        console.log(liElement, "YOU BETTER BE THERE")
      
      booksContainer.append(ulElement)
      console.log(ulElement)
    
 }
}
searchBtnEl.addEventListener('click', generateSearch);
