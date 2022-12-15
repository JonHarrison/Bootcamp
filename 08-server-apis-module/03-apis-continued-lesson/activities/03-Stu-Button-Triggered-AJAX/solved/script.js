// button click event handler
$("button").on("click", function() {
  // get person from person data attribute
  var person = $(this).attr("data-person");
  // generate query URL to retrieve gifs of that person using the Giphy API
  const API_KEY = 'GJUp38aO52ySHIvyIIZRm5s9bRDJS7yQ';
  var queryURL = `https://api.giphy.com/v1/gifs/search?q=${person}&api_key=${API_KEY}`;

  // query Giphy
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
      // API returns an array of images
      var results = response.data;

      // itterate array
      for (var i = 0; i < results.length; i++) {
        // create a new DIV for the image attributes
        var gifDiv = $("<div>");

        var rating = results[i].rating;

        // create element for rating
        var p = $("<p>").text("Rating: " + rating);

        // create element for gif
        var personImage = $("<img>");
        personImage.attr("src", results[i].images.fixed_height.url);

        // prepend rating and image to div
        gifDiv.prepend(p);
        gifDiv.prepend(personImage);

        // prepend div to gifs-appear-here id
        $("#gifs-appear-here").prepend(gifDiv);
      }
    });
});