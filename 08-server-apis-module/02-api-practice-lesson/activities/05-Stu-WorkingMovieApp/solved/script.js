const buttonsViewEl = $('#buttons-view');
const moviesViewEl = $('#movies-view');

// Initial array of movies
var movies = ["The Matrix", "Dune", "Mr. Right", "The Lion King"];

// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayMovieInfo(event) {

  var movie = event.target.getAttribute("data-name");
  var queryURL = `https://www.omdbapi.com/?t=${movie}&apikey=trilogy`;

  // Creates AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    // YOUR CODE GOES HERE!!!
    console.log(response);

    // Puts the entire Movie above the previous movies.
    $(moviesViewEl).prepend([
      $('<div class="movie">').append([
        $('<p>', { text: `Rated : ${response.Rated}` }),
        $('<p>', { text: 'Reviews' }),
        $('<ul>', { id: 'ratings' }).css('list-style','none').append([
            // $.each(response.Ratings, function(i,rating) {
            //   console.log(`Source:${rating.Source} , Value:${rating.Value}`);
            //   $(`<li>${rating.Source} , ${rating.Value}<\li>`)
            //   $('#ratings').append($(`<li>${rating.Source} , ${rating.Value}<\li>`))
            // }),
            // response.Ratings.forEach(function(data,index) {
            //   let rating = response.Ratings[index];
            //   console.log(`Source:${rating.Source} , Value:${rating.Value}`);
            //   $(`<li>${rating.Source} , ${rating.Value}<\li>`)
            // }),
            // $('<li>test item</li>'),
            // $.each(response.Ratings, function(i,rating) {
            //   console.log(`Source:${rating.Source} , Value:${rating.Value}`);
            //   $('#ratings').append($('<li>', { text: `${rating.Source} , ${rating.Value}` }));
            // })
        ]),
        $('<p>', { text: `Released : ${response.Year}` }),
        $('<p>', { text: `Plot : ${response.Plot}` }),
        $('<img>', { src:response.Poster, alt:response.Poster })
      ])
    ]);
    $.each(response.Ratings, function(i,rating) {
      console.log(`Source:${rating.Source} , Value:${rating.Value}`);
      $('#ratings').append($('<li>', { text: `${rating.Source} , ${rating.Value}` }));
    });
  })
}

// Function for displaying movie data
function renderButtons() {
  // YOUR CODE GOES HERE
  movies.forEach((movie) => {
    renderMovie(movie);
  });

}

function renderMovie(movie) {
  buttonsViewEl.append($('<button>', { class:'movie-btn', 'data-name':movie, text: movie }));
}

// This function handles events where one button is clicked
$("#add-movie").on("click", function (event) {
  // YOUR CODE GOES HERE
  // Prevent screen refresh
  event.preventDefault();
  // Here we grab the text from the input box
  let movie = $('#movie-input').val().trim();
  // Add movie to the existing array, not necessary but belt and braces
  movies.push(movie);
  renderMovie(movie);
});

// Adding click event listeners to all elements with a class of "movie"
$(buttonsViewEl).on("click", ".movie-btn", displayMovieInfo);

// Calling the renderButtons function to display the initial list of movies
renderButtons();
