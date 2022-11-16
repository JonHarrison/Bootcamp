var player = {
  score: 0,
  cards: [],
  addCard: function (min, max) {
    var num = random(min, max);
    this.cards.push(num);
    this.score += num;
    return this.score;
  }
};

var dealer = {
  score: 0,
  cards: [],
  addCard: function (min, max) {
    var num = random(min, max);
    this.cards.push(num);
    this.score += num;
    return this.score;
  }
};

function resetGame() {
  player.score = 0;
  player.cards = [];
  dealer.score = 0;
  dealer.cards = [];
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function evaluate() {

  var output = "Player scores " + player.score + " with hand [" + player.cards + "] : dealer scores " + dealer.score + " with hand [" + dealer.cards + "]\n";
  if (dealer.score > 21) {
    if (player.score > 21) {
      output += "Both bust";
    }
    else { // dealer>21 and player<=21
      output += "Dealer bust, player wins";
    }
  }
  else { // dealer<=21
    if (player.score > 21) { // dealer<=21 and player>21
      output += "Player bust, dealer wins";
    }
    else { // dealer<=21 and player <=21
      if (dealer.score == player.score) {
        output += "Both draw ";
      }
      else if (player.score > dealer.score) {
        output += "Player wins";
      }
      else { // dealer < player
        output += "Dealer wins";
      }
    }
  }
  
  return output;

}

function game() {

  // reset game state
  resetGame();

  // * Deals the player a random number between 4 and 21 inclusive.  player += random(4,21);
  player.addCard(4, 21);

  // * If the player has 21 they win!
  if (player.score != 21) {

    // * Deals a random number between 2 and 11 inclusive to the dealer.
    dealer.addCard(2, 11);

    do {
      var response = confirm("You have " + player.score + " do you want to hit ?");
      // * If the player hits, add a number between 2 and 11.
      if (response) {
        player.addCard(2, 11);
      }
      // * Repeat until they choose to stay or they bust
    } while (response && player.score <= 21);

    // * Once player stays add a number between 2 and 11 to the dealer's hand.
    dealer.addCard(2, 11);
    do {
      // * If dealer number is less than 17 add another number
      if (dealer.score < 17)
        dealer.addCard(2, 11);
        // * Repeat until the number is over over 17 but less than 21, or if the dealer goes over 21
      } while (dealer.score <= 17);
  }

  console.log("Player cards", player.cards);
  console.log("Dealer cards", dealer.cards);
  console.log("Player scores : " + player.score);
  console.log("Dealer scores : " + dealer.score);

  var output = evaluate();
  console.log(output);
  alert(output);

}

function unitTestCheckEvaluate(playerScore,dealerScore,expectedResult) {
  player.score = playerScore;
  dealer.score = dealerScore;
  // check result contains expected string
  result  = evaluate().toLowerCase().includes(expectedResult.toLowerCase());
  var output = result ? "PASS : ["  : "FAIL : [";
  output += "Player:" + player.score + " " + "Dealer:" + dealer.score + " Expected outcome:" + expectedResult + "]";
  console.log(output);
  return result;
}

unitTest();
function unitTest() {
  console.log("unitTestCheckEvaluate()");
  var result = true;
  result &= unitTestCheckEvaluate(20,20,"Both draw");
  result &= unitTestCheckEvaluate(21,21,"Both draw");
  result &= unitTestCheckEvaluate(20,21,"Dealer wins");
  result &= unitTestCheckEvaluate(21,20,"Player wins");
  result &= unitTestCheckEvaluate(22,22,"Both bust");
  result &= unitTestCheckEvaluate(23,22,"Both bust");
  result &= unitTestCheckEvaluate(22,23,"Both bust");
  result &= unitTestCheckEvaluate(21,22,"Dealer bust, player wins");
  result &= unitTestCheckEvaluate(22,21,"Player bust, dealer wins");
  result ? console.log("PASSED") : console.log("FAILED");
}

window.addEventListener("load", (event) => {
  console.log("window.load");
  while(confirm("Do you want to play blackjack?")) {
    game();
  }
  alert("Goodbye");
});
