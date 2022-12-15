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
    // destucture and rename to make JSON access simpler
    const { name, thumb_url: thumb, tracker_count: tracker , upcoming_event_count: events, url } = response;
    const artistEl = $('#artist-div');
    artistEl.empty(); // remove any existing elements
    artistEl.append([
      // The artist's name
      $('<p>', { text: `Artist's name : ${name}` }),
      // The artists thumbnail image
      $('<img>', { src: thumb }),
      // The number of fans tracking this artist
      $('<p>', { text: `Fan's tracking : ${tracker}` }),
      // The number of upcoming events for this artist
      $('<p>', { text: `Upcoming events : ${events}` }),
      // A link to the bandsintown url for this artist
      $('<a>', { href: url, text: 'Bandintown artist link' }),
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