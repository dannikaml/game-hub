var bookSearchApi = 'https://openlibrary.org/works/OL15626917W.json' ;
var bookshelfSave = [];

var searchInput = document.querySelector('#search');
var searchResult = document.querySelector('#bookResults');
var bookList = document.querySelector('#bookList')


fetch(bookSearchApi)
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('search');
    console.log(data);
    // TODO: Loop through the response
    for (let i = 0; i < 5; i++) {
      const element = data[i];
      console.log(data)
      
    }
    // TODO: Console log each issue's URL and each user's login
  });



function generateSearch() {

}


