var searchBtnEl = document.querySelector('#searchBtn');
var searchboxEl = document.querySelector("#searchbox");
//var searchValue = searchbox.innerText.trim()
//var bookSearchApi = `https://openlibrary.org/search.json?q=${searchValue}`;
var bookshelfSave = [];
var booksContainer = document.querySelector("#books");
var bookSearchTerm = document.querySelector('#search-term');



var searchResult = document.querySelector('#bookResults');
var bookList = document.querySelector('#bookList');
console.log(searchboxEl)

var searchHandler = function (event) {
  event.preventDefault();

  var searchInput = searchboxEl.value.trim();

  if (searchInput) {
    generateSearch(searchInput);

    booksContainer.textContent = '';
    searchboxEl.value = '';
  } else {
    alert('Search not found - Try Again');
  }
};

var generateSearch = function (docs) {
    var searchValue = searchboxEl.value.trim()
    var bookSearchURL = `https://openlibrary.org/search.json?q=${searchValue}`;
    console.log(searchValue)

   fetch(bookSearchURL)
   .then(function (response) {
    if (response.ok) {
      console.log(response);
      response.json().then(function (data) {
        console.log(data);
        console.log(docs);
        displaySearch(data, docs);
      });
    } else {
      alert('Error: ' + response.statusText);
    }
  })
  .catch(function (error) {
    alert('Unable to connect to Open Library');
  });
};

var displaySearch = function (docs, searchTerm) {
  if (docs.length === 0) {
    booksContainer.textContent = 'Search not found.';
    return;
  }

  bookSearchTerm.textContent = searchTerm;

  for (var i = 0; i < docs.length; i++) {
    var bookTitle = docs[i].title + '/' + docs[i].name;

    var bookEl = document.createElement('div');
    bookEl.classList = 'list-item flex-row justify-space-between align-center';

    var titleEl = document.createElement('span');
    titleEl.textContent = bookTitle;

    bookEl.appendChild(titleEl);

    var statusEl = document.createElement('span');
    statusEl.classList = 'flex-row align-center';

    
    booksContainer.appendChild(bookEl);
  }
};

    
searchBtnEl.addEventListener('click', generateSearch);










// fetch(bookSearchURL)
//     .then(function (response) {
//     return response.json();
//   })
//   .then(function (data, item) {
//     console.log(searchValue);
//     console.log(data);

  
//     });
// }





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