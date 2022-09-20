const sortNumber = () => Math.floor(Math.random() * 3)

const checkEventClick = (event) => {
  const myChoice = event.target.alt
  checkWinner(myChoice)
};

const checkWinner = (myChoice) => {
  const list_options = ["pedra", "papel", "tesoura"];
  const pcChoice = list_options[sortNumber()];
  let playerWin = true;
  showsChoices(myChoice, pcChoice);

  if (pcChoice === myChoice) {
    return
  }

  if (
    myChoice == "pedra" && pcChoice == "tesoura"
    || myChoice == "papel" && pcChoice == "pedra"
    || myChoice == "tesoura" && pcChoice == "papel"
  ) {
    playerWin = false;
  };

  roundWinner(playerWin)
};

const showsChoices = (myChoice, pcChoice) => {
  let divImg = pegaSeletor('escolha');
  divImg[0].src = `src/img/jokempo/${myChoice}.png`
  divImg[1].src = `src/img/jokempo/${pcChoice}.png`
}

const roundWinner = (playerWin) => {
  const winner = playerWin ? 0 : 1
  const divAvatar = document.querySelectorAll('.player');
  divAvatar[winner].classList.add('vibra')
  setTimeout(() => divAvatar[winner].classList.remove('vibra'), 500);
}

const screen = document.querySelector(".player_box .option");
screen.addEventListener("click", checkEventClick)
