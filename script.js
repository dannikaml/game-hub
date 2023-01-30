var searchBtnEl = document.querySelector('#searchBtn');
var searchboxEl = document.querySelector("#searchbox");
//var searchValue = searchbox.innerText.trim()
//var bookSearchApi = `https://openlibrary.org/search.json?q=${searchValue}`;
var bookshelfSave = [];
var booksContainer = document.querySelector("#books");



var searchResult = document.querySelector('#bookResults');
var bookList = document.querySelector('#bookList');
console.log(searchboxEl)



function generateSearch() {
    var searchValue = searchboxEl.value.trim()
    var bookSearchURL = `https://openlibrary.org/search.json?q=${searchValue}`;
    console.log(searchValue)
    var ulElement = document.createElement("ul")

    fetch(bookSearchURL)
    .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(searchValue);
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
searchBtnEl.addEventListener('click', generateSearch);
