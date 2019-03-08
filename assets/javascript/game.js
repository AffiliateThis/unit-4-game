// LOGIC

var userScore = 0;

// When the site loads, a random number will need to be displayed to the player that is between 19 - 120

$(document).ready(function() {
  var randomUserNum = Math.floor(Math.random() * 101) + 20;
  $("#randomusernum").text(randomUserNum);
  console.log(randomUserNum);

  var button1 = Math.floor(Math.random() * 12) + 1;
  console.log(button1);

  var button2 = Math.floor(Math.random() * 12) + 1;
  console.log(button2);

  var button3 = Math.floor(Math.random() * 12) + 1;
  console.log(button3);

  var button4 = Math.floor(Math.random() * 12) + 1;
  console.log(button4);

  // $(userScore).math(button1 + button2);

  $("#button1").click(function() {
    userScore = userScore + button1;
    $("#userScore").text(userScore);
    console.log(userScore);
    console.log(randomUserNum);
    // add the click event value here per click event
  });

  $("#button2").click(function() {
    userScore = userScore + button2;
    console.log(userScore);
    console.log(randomUserNum);
    checkWinlose();
  });

  $("#button3").click(function() {
    userScore = userScore + button3;
    console.log(userScore);
    console.log(randomUserNum);
    checkWinlose();
  });

  $("#button4").click(function() {
    userScore = userScore + button4;
    console.log(userScore);
    console.log(randomUserNum);
    checkWinlose();
  });

  function checkWinlose() {
    if (userScore === randomUserNum) {
      alert("You win!");
    } else if (userScore > randomUserNum) {
      alert("You lose Loser!");
    }
  }
});
