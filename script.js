var searchBtnEl = document.querySelector('#searchBtn');
var searchboxEl = document.querySelector("#searchbox");
console.log(searchboxEl);
var form = document.getElementById('form');

var booksContainer = document.querySelector("#books-container");
var bookSearchTerm = document.querySelector('#search-term');
var bookshelfSave = [];
var checkBoxEl = document.querySelector("#checkbox")

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
  var reviewTitleUrl = `https://api.nytimes.com/svc/books/v3/reviews.json?title=${searchValue}&api-key=17ZICVyJ3VHMaorPzVeZgh3dxQ3c30aK`
  console.log('generateSearch searchValue: ', searchValue);

  localStorage.setItem('bookKey', searchValue);
  localStorage.getItem('bookKey');

  // update UI to show the search term
  bookSearchTerm.innerText = event.target[0].value;
  // if (document.getElementById("checkBox").checked == false) {
  // if (CheckBoxEl.Checked == false) {
    var searchValue = event.target[0].value;
    var bookSearchURL = `https://openlibrary.org/search.json?q=${searchValue}`;
    var reviewTitleUrl = `https://api.nytimes.com/svc/books/v3/reviews.json?title=${searchValue}&api-key=17ZICVyJ3VHMaorPzVeZgh3dxQ3c30aK`
    
    var seeReviews = checkBoxEl.checked
    console.log('generateSearch searchValue: ', searchValue);
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
  // } else {
  //   // calls review api
    fetch(reviewTitleUrl)
      .then(function (apiDataResponse) {
        console.log('aaaaahhhhhh ', apiDataResponse);
        if (apiDataResponse.ok) {
          console.log('please  gvbhgigiujhij!');
          apiDataResponse.json().then(function (apiDataResponse) {
            console.log('apiDataResponse: ', apiDataResponse.results);
            console.log('apiDataResponse event: ', event);
            // displaySearch(apiDataResponse, event);
            if (seeReviews) {

              var linkToReviewContainer = document.getElementById("linkToReview")
              linkToReviewContainer.innerHTML = ""
              let reviewLink = !apiDataResponse.results.length ? "" : apiDataResponse.results[0].url 
              if (reviewLink) {
                let anchorEl = document.createElement("a")
                anchorEl.href = reviewLink
                anchorEl.textContent = `Click here <-- to see reviews for: ${searchValue}`
                linkToReviewContainer.appendChild(anchorEl)
                console.log("I want to see reviews")
              } else {
                let noReviewEl = document.createElement("h3")
              noReviewEl.textContent = `No reviews currently available for: ${searchValue}`
              linkToReviewContainer.appendChild(noReviewEl)
              }
             
            } else {
              // may need to hide linkToReviewContainer
              console.log("user does't want to see reviews")
            }
          });
        } else {
          console.log('response failed :(');
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to Open Library: ' + error);
      });
  // }
}

//local sotrage
// localStorage.setItem('bookKey', searchValue)
// localStorage.getItem('bookKey')

var displaySearch = function (apiDataResponse, event) {
  console.log('apiDataResponse.length: ---WHERE AM I? ', apiDataResponse.length);

  var ulElement = document.createElement('div');
  ulElement.classList = 'list-group';

  if (apiDataResponse.docs.length === 0) {
    booksContainer.textContent = 'Search not found.';
  } else {
    apiDataResponse.docs.map(function (book) {
    
    })

  }

  // something is wrong here
  for (let index = 0; index < apiDataResponse.docs.length; index++) {
    const element = apiDataResponse.docs[index];

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
        ulElement.append(liElement)
      
      booksContainer.appendChild(ulElement)
    
 }
}

// searchBtnEl.addEventListener('click', generateSearch);
form.addEventListener("submit", formSubmitHandler);
