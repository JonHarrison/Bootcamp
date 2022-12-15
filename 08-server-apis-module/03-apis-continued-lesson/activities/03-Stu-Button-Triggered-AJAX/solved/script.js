$("button").on("click", function() {
  var person = $(this).attr("data-person");
  // generate query URL to retrieve gifs of that person using the Giphy API
  const API_KEY = 'GJUp38aO52ySHIvyIIZRm5s9bRDJS7yQ';
  var queryURL = `https://api.giphy.com/v1/gifs/search?q=${person}&api_key=${API_KEY}`;

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var personImage = $("<img>");
        personImage.attr("src", results[i].images.fixed_height.url);

        gifDiv.prepend(p);
        gifDiv.prepend(personImage);

        $("#gifs-appear-here").prepend(gifDiv);
      }
    });
});