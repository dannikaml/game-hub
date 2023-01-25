<<<<<<< HEAD
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


=======
var = 'https://openlibrary.org/api/volumes/brief/isbn/9780525440987.json';
const bookSearchBox = document.getElementById('search-input')
const searchList = document.getElementById('')
function loadBook(searchTerm){
    const URL = 'https://openlibrary.org/api/volumes/brief/isbn/9780525440987.json';
}
>>>>>>> 7839f2d4bee502f4bb77e35bd4e401d35361017d
