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
    

        var liElement = document.createElement('span');

        var titleEl = document.createElement('h2');
        var subtitleEl =document.createElement('p');
        var datePublishedEl =document.createElement('p');
        var authorEl =document.createElement('p');
        var languageEl =document.createElement('p');
        var publisherEl =document.createElement('p');
        var pagesEl =document.createElement('p');
        var numPages = element.number_of_pages_median || "NA";
        var bookSubtitle = element.subtitle || "No subtitle";

        titleEl.textContent = `Book Title: ${element.title}`;
        subtitleEl.textContent = `Subtitle: ${bookSubtitle}`;
        datePublishedEl.textContent = `Date Published: ${element.publish_date}`;
        authorEl.textContent = `Author: ${element.author_name}`;
        languageEl.textContent = `Languages: ${element.language}`;
        publisherEl.textContent = `Publisher: ${element.publisher}`;
        pagesEl.textContent = `Number of Pages: ${numPages}`;

        liElement.appendChild(titleEl)
        liElement.appendChild(subtitleEl)
        liElement.appendChild(datePublishedEl)
        liElement.appendChild(authorEl)
        liElement.appendChild(languageEl)
        liElement.appendChild(publisherEl)
        liElement.appendChild(pagesEl)
        //liElement.innerHTML = `Book Title: ${element.title}, Subtitle: ${element.subtitle}, Date Published: ${element.publish_date}, Author: ${element.author_name}, Languages: ${element.language}, Publisher: ${element.publisher}, Number of Pages: ${element.number_of_pages_median}`;
        ulElement.append(liElement)
        console.log(liElement, "YOU BETTER BE THERE")
      
      booksContainer.appendChild(ulElement)
      console.log(ulElement)
    
 }
}
// searchBtnEl.addEventListener('click', generateSearch);
form.addEventListener("submit", formSubmitHandler);