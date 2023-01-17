// music should be an object with title, artist, and album properties
const music = {
  title:  "The Changingman",
  artist: "Paul Weller",
  album:  "Stanley Road"
};

// Write code between the <div> tags to output the data from the music object above.
// Use an h2 element for the title and a p element for artist and title
const { title, artist, album } = music;
const songSnippet = `
  <div class="song">
    <h2>${title}</h2>
    <p>${artist}</p>
    <p>${album}</p>
  </div>
`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;

