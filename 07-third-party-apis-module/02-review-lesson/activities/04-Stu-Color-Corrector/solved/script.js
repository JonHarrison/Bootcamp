// JavaScript function that wraps everything
$(document).ready(function() {

  const colorPickerEl = $('#color-picker');
  const randTargetColorEl = $('#rand-target-color');

  // Array for word colors
  var colorsOfText = [];

  // Target word
  var targetColor;

  // Target word color
  var targetColorOfText;

  // User"s selection
  var userAnswer;

  // Array for words
  var colors = [
    "brown",
    "blue",
    "magenta",
    "teal",
    "coral",
    "black"
  ];

  function random(array) {
    return array[Math.floor(Math.random() * colors.length)];
  }

  // This function sets a random color "word" and a random set of colors "visuals"
  function randColor() {
    // Set random word
    targetColor = random(colors);
    // Set random word color
    targetColorOfText = random(colors);
    
    randTargetColorEl.text(targetColor);
    randTargetColorEl.css('color',targetColorOfText);
  }

  // This function shuffles an array
  function shuffle(array) {
    // this simple shuffle works but has bias
    // array.sort(() => Math.random() - 0.5);

    // The Fisher-Yates algorithm is better
    // this is the optimised Durstenfeld shuffle
    // for (let i = array.length - 1; i > 0; i--) {
    //   let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  
    //   // swap elements array[i] and array[j]
    //   // we use "destructuring assignment" syntax to achieve that
    //   // you'll find more details about that syntax in later chapters
    //   // same can be written as:
    //   // let t = array[i]; array[i] = array[j]; array[j] = t
    //   [array[i], array[j]] = [array[j], array[i]];
    // }

    // Or thanks so Marius using map
    array.map((n) => [Math.random(),n]).sort().map((n) => n[1]);
  
  }

  // This function creates the actual "game" logic.
  function createColorPicker() {

    // Shuffle color array
    shuffle(colors);

    // Push to text color array
    colorsOfText = colors;

    // Shuffle text color array
    shuffle(colorsOfText);

    // Loop through all colors in the array
    // Create element to hold word
    // Output a word
    // Make word a random color
    for (let i = 0; i < colorsOfText.length; i++)
    {
      let listEl = $('<li>');
      listEl.text(colorsOfText[i]);
      listEl.css('color', random(colorsOfText));
      colorPickerEl.append(listEl);
    }

  }

  // Clear the divs and arrays upon each round.
  function clear() {
    colorPickerEl.empty();
    randTargetColorEl.empty();
    colorsOfText = [];
    targetColor = '';
    targetColorOfText = '';
  }

  // Function for resetting colors and setting new colors.
  function reset() {
    clear();
    randColor();
    createColorPicker();
  }

  // Get id of element clicked by user
  $("#color-picker").click(function(event) {
    userAnswer = event.target;
    if (targetColor == userAnswer.textContent) {
      alert('Correct!');      
      reset();
    }
    else {
      alert('Wrong!');
      reset();
    }
  });

  // Run game
  reset();
});
