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

    // Creates a div to hold the movie
    let movieEl = $('<div class="movie">');

    // Retrieves the Rating Data
    let rated = response.Rated;
    let ratedEl = $('<p>', { text: `Rated : ${rated}` });
    movieEl.append(ratedEl);

    let ratings = response.Ratings;
    // Creates an element to have the rating displayed
    movieEl.append($('<p>', { text: 'Reviews'}));
    ratings.forEach((rating) => {
      let reviewEl = $('<p>');
      reviewEl.text(`Source : ${rating.Source} , Value : ${rating.Value}`);
      // Displays the rating
      movieEl.append(reviewEl);
    });

    // Retrieves the release year
    let releaseYear = response.Year;

    // Creates an element to hold the release year
    let releaseYearEl = $('<p>', { text: `Released : ${releaseYear}` });

    // Displays the release year
    movieEl.append(releaseYearEl);

    // Retrieves the plot
    let plot = response.Plot;

    // Creates an element to hold the plot
    let plotEl = $('<p>', { text: `Plot : ${plot}` });

    // Appends the plot
    movieEl.append(plotEl);

    // Creates an element to hold the image
    let imageEl = $('<img>', { src:response.Poster, alt:response.Poster });

    // Appends the image
    movieEl.append(imageEl);

    // Puts the entire Movie above the previous movies.
    $(moviesViewEl).prepend(movieEl);

  });

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

