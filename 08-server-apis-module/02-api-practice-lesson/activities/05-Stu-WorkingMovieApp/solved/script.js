// Initial array of movies
var movies = ["The Matrix", "Dune", "Mr. Right", "The Lion King"];

// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayMovieInfo() {

  var movie = $(this).attr("data-name");
  var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

  // Creates AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    // YOUR CODE GOES HERE!!!

    console.log(response);

    // Creates a div to hold the movie
    let movieEl = $('<div>');

    // Retrieves the Rating Data
    let ratings = response.Ratings;
    // Creates an element to have the rating displayed
    ratings.forEach((rating) => {
      let ratingsEl = $('<p>');
      ratingsEl.text(`Source : ${rating.Source} , Value : ${rating.Value}`);
      // Displays the rating
      movieEl.append(ratingsEl);
    });

    // Retrieves the release year
    let releaseYear = response.Year;

    // Creates an element to hold the release year
    let releaseYearEl = $('<p>', { text:releaseYear });

    // Displays the release year
    movieEl.append(releaseYearEl);

    // Retrieves the plot
    let plot = response.Plot;

    // Creates an element to hold the plot
    let plotEl = $('<p>', { text:plot });

    // Appends the plot
    movieEl.append(plotEl);

    // Creates an element to hold the image
    let imageEl = $('<img>', { src:response.Poster });

    // Appends the image
    movieEl.append(imageEl);

    // Puts the entire Movie above the previous movies.
    $('#movies-view').prepend(movieEl);

  });

}

// Function for displaying movie data
function renderButtons() {

  // Deletes the movies prior to adding new movies
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();

  // Loops through the array of movies
  for (var i = 0; i < movies.length; i++) {

    // Then dynamicaly generates buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adds a class of movie to our button
    a.addClass("movie");
    // Added a data-attribute
    a.attr("data-name", movies[i]);
    // Provided the initial button text
    a.text(movies[i]);
    // Added the button to the buttons-view div
    $("#buttons-view").append(a);
  }
}

// This function handles events where the add movie button is clicked
$("#add-movie").on("click", function (event) {
  event.preventDefault();
  // This line of code will grab the input from the textbox
  var movie = $("#movie-input").val().trim();

  // The movie from the textbox is then added to our array
  movies.push(movie);

  // Calling renderButtons which handles the processing of our movie array
  renderButtons();

});

// Adding click event listeners to all elements with a class of "movie"
$(document).on("click", ".movie", displayMovieInfo);

// Calling the renderButtons function to display the initial buttons
renderButtons();
