var searchBtnEl = document.querySelector('#searchBtn');
var searchboxEl = document.querySelector("#searchbox");
var form = document.getElementById('form');
console.log(searchboxEl);
//var searchValue = searchbox.innerText.trim()
//var bookSearchApi = `https://openlibrary.org/search.json?q=${searchValue}`;
var bookshelfSave = [];
var booksContainer = document.querySelector("#books-container");
var bookSearchTerm = document.querySelector('#search-term');



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
  console.log('apiDataResponse.length: ', apiDataResponse.docs.length);
  if (apiDataResponse.docs.length === 0) {
    booksContainer.textContent = 'Search not found.';
  } else {
     apiDataResponse.docs.map(function(book) {
      console.log(book);
     })

    console.log('i am in the else statement');
  }


   // something is wrong here
   for (let index = 0; index < apiDataResponse.docs.length; index++) {
        const element = apiDataResponse.docs[index];
        console.log(element)
        var liElement = document.createElement("li")
        var ulElement = document.createElement("p")
        liElement.textContent = `search: ${element.key}, url: ${element.title}`
        ulElement.append(liElement)
      }
      booksContainer.append(ulElement)
    
    }
    
    
// searchBtnEl.addEventListener('click', generateSearch);
form.addEventListener("submit", formSubmitHandler);

    




  //  fetch('https://openlibrary.org/search.json?q=${searchValue}') 
    //  .then(response => response.json()) 
    // .then(data => { const selectedData = data.filter(item => item.property === 'value'); 
    // console.log(selectedData); }); 
    
    // for (let index = 0; index < data.length; index++) {
    //     const element = data[index];
    //     console.log(element)
    //     var liElement = document.createElement("li")
    //     var bookElement = document.createElement("p")
    //     liElement.textContent = `search ${element.search}, url: ${element.url}`
    //     ulElement.append(liElement)
    //   }
    //   booksContainer.append(ulElement)