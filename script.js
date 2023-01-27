var searchInput = document.querySelector('#searchInput');
var bookSearchApi = `https://openlibrary.org/search.json?q=${searchInput}`;
var bookshelfSave = [];
var booksContainer = document.getElementById('books')


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
    
    for (let index = 0; index < data.length; index++) {
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
searchInput.addEventListener('click', generateSearch);
