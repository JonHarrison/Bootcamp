function searchBandsInTown(artist) {
  // Add code to query the bands in town api searching for the artist received as an argument to this function
  const APP_ID = 'trilogy'; // codingbootcamp
  var queryURL = `https://rest.bandsintown.com/artists/${artist}?app_id=${APP_ID}`;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    // Using jQuery, append the following to the #artist-div :
    $('#artist-div').append([
      // The artist's name
      $('<p>', { text: response.name }),
      // The artists thumbnail image
      $('<img>', { src: response.thumb_url }),
      // The number of fans tracking this artist
      $('<p>', { text: response.fanTrack }),
      // The number of upcoming events for this artist
      $('<p>', { text: response.upcoming_event_count }),
      // A link to the bandsintown url for this artist
      $('<a>', { href: response.url, text: response.url }),
      // Note: Append actual HTML elements, not just text
    ]);
  });
}

// Event handler for user clicking the select-artist button
$("#select-artist").on("click", function (event) {
  // Preventing the button from trying to submit the form
  event.preventDefault();
  // Storing the artist name
  var artist = $("#artist-input").val().trim();

  // Running the searchBandsInTown function(passing in the artist as an argument)
  searchBandsInTown(artist);
});