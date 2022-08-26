const choices = ["rock", "paper", "scissors"];
const x = ["rock", "paper"];
const y = ["rock", "scissors"];
const z = ["paper", "scissors"];
let counterPaper = 0;
let counterRock = 0;
let counterScissors = 0;
let computerChoice = 0;
const buttons = document.querySelectorAll("#rock, #paper, #scissors");
const scoreTable = document.getElementById("scoreTable");
const title = document.getElementsByClassName("title");
const buttonStart = document.getElementById("startButton");
const buttonReset = document.getElementById("resetButton");

var playerScore = 0;
var computerScore = 0;

var winner = "";

var gameCount = 0;

buttonStart.addEventListener("click", function handleClick(event) {   //disabled özelliği ortadan kalkar start butonuna bastığımızda
  document.getElementById("scissors").disabled = false;
  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
});

buttonReset.addEventListener("click", function handleClick(event) {  //resetliyoruz.
  gameCount = 0;
  computerScore = 0;
  playerScore = 0;
  document.getElementById("playerCount").innerHTML = playerScore;
  document.getElementById("computerCount").innerHTML = computerScore;
  scoreTable.innerHTML  = "Score Table";
});

//oyuncunun buttonlara tıklayarak yaptığı seçimler alınır.

buttons.forEach((elem) => {
  elem.disabled = true; // En başta butonları disabled edebilmek için
  elem.addEventListener("click", function handleClick(event) {
    let player = elem.getAttribute("id");
    // burada başlayan satırlar bilgisayarın 100 defa yaptığı rastgele seçimlerden en yüksek oranda çıkanı bulmamızı sağlar.

    for (let i = 0; i < 100; i++) {
      randomPlay();
    }

    if (counterRock > counterScissors && counterRock > counterPaper) {
      console.log("rock");
    } else if (counterPaper > counterRock && counterPaper > counterScissors) {
      console.log("paper");
    } else if (
      counterScissors > counterRock &&
      counterScissors > counterPaper
    ) {
      console.log("scissors");
    } else if (counterRock == counterPaper) {
      a();
    } else if (counterRock === counterScissors) {
      b();
    } else if (counterPaper === counterScissors) {
      c();
    }

    function randomPlay() {
      computerChoice = choices[Math.floor(Math.random() * 3)];

      switch (computerChoice) {
        case "rock":
          counterRock++;
          break;
        case "scissors":
          counterScissors++;
          break;
        case "paper":
          counterPaper++;
          break;
      }
    }

    function a() {
      computerChoice = x[Math.floor(Math.random() * 2)];

      switch (computerChoice) {
        case "rock":
          counterRock++;
          console.log("rock");

          break;
        case "paper":
          counterPaper++;
          console.log("paper");

          break;
      }
    }

    function b() {
      computerChoice = y[Math.floor(Math.random() * 2)];

      switch (computerChoice) {
        case "rock":
          counterRock++;
          console.log("rock");

          break;
        case "scissors":
          counterScissors++;
          console.log("scissors");

          break;
      }
    }

    function c() {
      computerChoice = z[Math.floor(Math.random() * 2)];

      switch (computerChoice) {
        case "paper":
          counterPaper++;
          console.log("paper");

          break;
        case "scissors":
          counterScissors++;
          console.log("scissors");

          break;
      }
    }

    //**************************************************************

    checkResult(player, computerChoice, gameCount); // skor tablosuna bilgisayar ve oyuncuların seçimlerini text şeklinde yazdırır.

    scoreTable.innerHTML =
      "Player: " +
      player +
      " || " +
      " Computer: " +
      computerChoice +
      " || " +
      "Game Count: " +
      gameCount;

    if (gameCount == 10) {
      //10 elin sonunda kazananı belirleriz.
      if (playerScore > computerScore) {
        winner = "Player";
      } else if (playerScore < computerScore) {
        winner = "Computer";
      } else if ((playerScore = computerScore)) {
        winner = "Draw";
      }
      scoreTable.innerHTML =
        "Game Over! (" +
        playerScore +
        " - " +
        computerScore +
        ") Winner is " +
        winner;
      gameCount = 0;
      playerScore = 0;
      computerScore = 0;
      return;
    }

    document.getElementById("playerCount").innerHTML = playerScore;
    document.getElementById("computerCount").innerHTML = computerScore;
  });
});

//eli kimin aldığını bulmamızı sağlar, sonuçlara göre bilg. ya da oyuncunun counterını arttırır.

function checkResult(player, computerChoice) {
  gameCount++;

  if (computerChoice == player) {
    return;
  }

  switch (player) {
    case "rock":
      if (computerChoice == "paper") {
        computerScore++;
      } else {
        playerScore++;
      }
      break;
    case "paper":
      if (computerChoice == "scissors") {
        computerScore++;
      } else {
        playerScore++;
      }
      break;
    case "scissors":
      if (computerChoice == "rock") {
        computerScore++;
      } else {
        playerScore++;
      }
      break;
  }
}
