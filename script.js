var searchBtnEl = document.querySelector('#searchBtn');
var searchboxEl = document.querySelector("#searchbox");
//var searchValue = searchbox.innerText.trim()
//var bookSearchApi = `https://openlibrary.org/search.json?q=${searchValue}`;
var bookshelfSave = [];


//var searchResult = document.querySelector('#bookResults');
//var bookList = document.querySelector('#bookList');


var searchHandler = function (event) {
  event.preventDefault(); 
  console.log('event in searchHandler: ', event);

  var searchInput = searchboxEl.value.trim();

  if (searchInput) {
    generateSearch(searchInput);

var searchResult = document.querySelector('#bookResults');
var bookList = document.querySelector('#bookList');
console.log(searchboxEl)

var formSubmitHandler = function (event) {
  // Don't refresh the page
  event.preventDefault();

  console.log('submit event: ', event);
  console.log(event.target[0].value);

function generateSearch() {
    var searchValue = searchboxEl.value.trim()
    var bookSearchURL = `https://openlibrary.org/search.json?q=${searchValue}`;
    console.log(searchValue)
    var ulElement = document.createElement("ul")

  // call the api
 fetch(bookSearchURL)
 .then(function (apiDataResponse) {
  console.log('response in generateSearch: ', apiDataResponse);
  if (apiDataResponse.ok) {
    console.log('apiDataResponse is okay!');
    apiDataResponse.json().then(function (apiDataResponse) {
      console.log('apiDataResponse: ', apiDataResponse);
      console.log('apiDataResponse event: ', event);
      displaySearch(apiDataResponse, event);
    });
  } else {
    console.log('response failed :(');
    alert('Error: ' + response.statusText);
  }
})
.catch(function (error) {
  alert('Unable to connect to Open Library: ' + error);
});
}

var displaySearch = function (apiDataResponse, event) {
  console.log('apiDataResponse.length: ---WHERE AM I? ', apiDataResponse.length);

  var ulElement = document.createElement('div');
    ulElement.classList = 'list-group';
    console.log('WHAT IS HAPPENING?');
  
  if (apiDataResponse.docs.length === 0) {
    booksContainer.textContent = 'Search not found.';
  } else {
     apiDataResponse.docs.map(function(book) {
      //console.log(book);
     })

    console.log('i am in the else statement');
  }

   // something is wrong here
   for (let index = 0; index < apiDataResponse.docs.length; index++) {
       const element = apiDataResponse.docs[index];
        console.log(element, "CAN YOU SEE ME?");
    
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
// searchBtnEl.addEventListener('click', generateSearch);
form.addEventListener("submit", formSubmitHandler);