// LOGIC

var userScore = 0;

// When the site loads, a random number will need to be displayed to the player that is between 19 - 120

$(document).ready(function() {
  var button1;
  var button2;
  var button3;
  var button4;
  var randomUserNum;
  var userScore = 0;

  function gameStart() {
    randomUserNum = Math.floor(Math.random() * 101) + 20;
    $("#randomusernum").text(randomUserNum);
    $("#userscore").text(userScore);
    console.log(randomUserNum);

    button1 = Math.floor(Math.random() * 12) + 1;
    console.log(button1);

    button2 = Math.floor(Math.random() * 12) + 1;
    console.log(button2);

    button3 = Math.floor(Math.random() * 12) + 1;
    console.log(button3);

    button4 = Math.floor(Math.random() * 12) + 1;
    console.log(button4);
  }
  // $(userScore).math(button1 + button2);

  $("#button1").click(function() {
    userScore = userScore + button1;
    $("#userscore").text(userScore);
    console.log(userScore);
    console.log(randomUserNum);
    // add the click event value here per click event
  });

  $("#button2").click(function() {
    userScore = userScore + button2;
    $("#userscore").text(userScore);
    console.log(userScore);
    console.log(randomUserNum);
    checkWinlose();
  });

  $("#button3").click(function() {
    userScore = userScore + button3;
    $("#userscore").text(userScore);
    console.log(userScore);
    console.log(randomUserNum);
    checkWinlose();
  });

  $("#button4").click(function() {
    userScore = userScore + button4;
    $("#userscore").text(userScore);
    console.log(userScore);
    console.log(randomUserNum);
    checkWinlose();
  });

  function checkWinlose() {
    if (userScore === randomUserNum) {
      alert("You win!");
      gameStart();
    } else if (userScore > randomUserNum) {
      alert("You lose Loser!");
      gameStart();
    }
  }
  gameStart();
});
