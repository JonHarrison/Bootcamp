const buttonsView = $('#buttons-view');

// Initial array of movies
const movies = ["The Matrix", "Dune", "Mr. Right", "The Lion King"];

// Function for displaying movie data
function renderButtons() {
  // YOUR CODE GOES HERE
  movies.forEach((movie) => {
    renderMovie(movie);
  });

}

function renderMovie(movie) {
  buttonsView.append($('<button>', { class:'movie', 'data-name':movie, text: movie }));
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

// Calling the renderButtons function to display the initial list of movies
renderButtons();