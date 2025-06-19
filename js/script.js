let playerScore = 0;
let computerScore = 0;
let isPlaying = true;
const messagesDiv = document.getElementById('messages');

function getComputerMove() {
  const moves = ['kamień', 'papier', 'nożyce'];
  return moves[Math.floor(Math.random() * moves.length)];
}

function playRound(userMove) {
  const computerMove = getComputerMove();
  let result;

  if (userMove === computerMove) {
    result = 'Remis w tej rundzie';
  } else if (
    (userMove === 'kamień' && computerMove === 'nożyce') ||
    (userMove === 'nożyce' && computerMove === 'papier') ||
    (userMove === 'papier' && computerMove === 'kamień')
  ) {
    result = 'Wygrałeś tę rundę';
    playerScore++;
  } else {
    result = 'Przegrałeś tę rundę';
    computerScore++;
  }

  messagesDiv.innerHTML = `
    <p>Twój ruch: ${userMove}</p>
    <p>Ruch Komputera: ${computerMove}</p>
    <p><strong>${result}</strong></p>
    <table>
      <captain>
        Punktacja
      </captain>
      <thead>
        <tr>
          <th>Twoje punkty</td>
          <th>Punkty komputera</td>
        </tr>
      </thead>
      <tboby>
        <tr>
          <td>${playerScore}</td>
          <td>${computerScore}</td>
        </tr>
      </tbody>
    </table>
  `;
}


document.getElementById('button-rock').addEventListener('click', () => playRound('kamień'));
document.getElementById('button-paper').addEventListener('click', () => playRound('papier'));
document.getElementById('button-scissors').addEventListener('click', () => playRound('nożyce'));