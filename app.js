// Несколько функций создадим
const game = () => {
	let pScore = 0;
	let cScore = 0;

	// Start the Game
	const startGame = () => {
		const playBtn = document.querySelector('.intro button');
		const introScreen = document.querySelector('.intro');
		const match = document.querySelector('.match');

		playBtn.addEventListener('click', () => {
			introScreen.classList.add('fadeOut');
			match.classList.add('fadeIn');
		});
	};
	//Play Match
	const playMatch = () => {
		const options = document.querySelectorAll('.options button');
		const playerHand = document.querySelector('.player-hand');
		const computerHand = document.querySelector('.computer-hand');
		const hands = document.querySelectorAll('.hands img');

		hands.forEach(hand => {
			hand.addEventListener('animationend', function () {
				this.style.animation = '';
			});
		});

		//Computer option
		const computerOptions = ['Rock', 'Scissors', 'Paper'];

		options.forEach(option => {
			option.addEventListener('click', function () {
				//Computer Choice
				const computerNumber = Math.floor(Math.random() * 3);
				const computerChoise = computerOptions[computerNumber];

				setTimeout(() => {
				//Here is we call compare hands
				compareHands(this.textContent, computerChoise);
				console.log(computerChoise);

				//Update images
				playerHand.src = `./img/${this.textContent}.png`;
				computerHand.src = `./img/${computerChoise}.png`;
				}, 2000);

				//Animation
				playerHand.style.animation = "shakePlayer 2s ease";
				computerHand.style.animation = "shakeComputer 2s ease";
			});
		});
	};

	const updateScore = () => {
		const playerScore = document.querySelector('.player-score p');
		const computerScore = document.querySelector('.computer-score p');
		playerScore.textContent = pScore;
		computerScore.textContent = cScore;
	}

	const compareHands = (playerChoise, computerChoise) => {
		//Update Text
		const winner = document.querySelector(".winner");
		//Checking for a tie
		if (playerChoise === computerChoise) {
			winner.textContent = 'Its a tie';
			return;
		}
		//Check for Rock
		if (playerChoise === 'Rock') {
			if (computerChoise === 'Scissors') {
				winner.textContent = 'Player Wins!';
				pScore++;
				updateScore();
				return;
			} else {
				winner.textContent = 'Computer Wins!';
				cScore++;
				updateScore();
				return;
			}
		}
		//Check for Paper
		if (playerChoise === 'Paper') {
			if (computerChoise === 'Scissors') {
				winner.textContent = 'Computers Wins!';
				cScore++;
				updateScore();
				return;
			} else {
				winner.textContent = 'Player Wins!';
				pScore++;
				updateScore();
				return;
			}
		}
		//Check for scissors
		if (playerChoise === 'Scissors') {
			if (computerChoise === 'Rock') {
				winner.textContent = 'Computer Wins!';
				cScore++;
				updateScore();
				return;
			} else {
				winner.textContent = 'Player Wins!';
				pScore++;
				updateScore();
				return;
			}
		}
	}

	//Is call all the inner Function
	startGame();
	playMatch();
};

//start the game function
game();