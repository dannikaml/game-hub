var searchInput = document.querySelector('#searchInput');
var bookSearchApi = `https://openlibrary.org/search.json?q=${searchInput}`;
var bookshelfSave = [];
var booksContainer = document.getElementById('books')
var searchButton = document.getElementById('searchButton')

var searchResult = document.querySelector('#bookResults');
var bookList = document.querySelector('#bookList')



function generateSearch() {
    var ulElement = document.createElement("ul")

    fetch(bookSearchApi)
    .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('search input');
    console.log(data);
    
    for (let index = 0; index < 5; index++) {
        const element = data[index];
        console.log(element)
        var liElement = document.createElement("li")
        var bookElement = document.createElement("p")
        liElement.textContent = `search ${element.search}, url: ${element.url}`
        ulElement.append(liElement)
      }
      booksContainer.append(ulElement)
    });
}
searchButton.addEventListener('click', generateSearch);





var bookReview = `https://api.nytimes.com/svc/books/v3/reviews.json?author=${searchInput}&api-key=17ZICVyJ3VHMaorPzVeZgh3dxQ3c30aK`;
fetch(bookReview)
console.log(bookReview)