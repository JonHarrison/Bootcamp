// The below code fills in the first row of the table
var movie = "Dune";
var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
  console.log(response);

  // Create and save a reference to new empty table row
  var newTr = $('<tr>');
  // Create and save references to 3 td elements containing the Title, Year, and Actors from the AJAX response object
  var tdTitle = $('<td>').text(response.Title);
  var tdYear = $('<td>').text(response.Year);
  var tdActors = $('<td>').text(response.Actors);
  // Append the td elements to the new table row
  newTr.append(tdTitle, tdYear, tdActors);
  // Append the table row to the tbody element
  $('tbody').append(newTr);
});

// Repeat the above logic to add rows for two more movies of your choice
fetchMovieDetails('Labyrinth');
fetchMovieDetails('2001');
// BONUS: Once complete, try to make your code as DRY as possible through the use of functions
function displayMovieDetails(Title, Year, Actors) {
      // Create and save a reference to new empty table row
      var newTr = $('<tr>');
      // Create and save references to 3 td elements containing the Title, Year, and Actors from the AJAX response object
      var tdTitle = $('<td>').text(Title);
      var tdYear = $('<td>').text(Year);
      var tdActors = $('<td>').text(Actors);
      // Append the td elements to the new table row
      newTr.append(tdTitle, tdYear, tdActors);
      // Append the table row to the tbody element
      $('tbody').append(newTr);
}

function fetchMovieDetails(movie) {
  var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

  $.ajax({
    type: 'GET', url: queryURL,
    success: function(response, text) {
      console.log(response);
      displayMovieDetails(response.Title, response.Year, response.Actors);
    },
    error: function(request, status, error) {
      alert(request.responseText);
    }
  });
}
