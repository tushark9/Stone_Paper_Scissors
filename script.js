let userScore = 0;
let computerScore = 0;

const userScoreElement = document.querySelector("#user-score");
const computerScoreElement = document.querySelector("#computer-score");
const msg = document.querySelector("#msg");

document.querySelectorAll(".choice").forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id;
        playGame(userChoice);
    });
});

function generateComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
}

function playGame(userChoice) {
    const computerChoice = generateComputerChoice();
    let result;

    if (userChoice === computerChoice) {
        result = `It's a draw! You both chose ${userChoice}.`;
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) 
    {
        userScore++;
        userScoreElement.textContent = userScore;
        result = `You win! You chose ${userChoice} and the computer chose ${computerChoice}.`;
    } else {
        computerScore++;
        computerScoreElement.textContent = computerScore;
        result = `You lose! You chose ${userChoice} and the computer chose ${computerChoice}.`;
    }

    msg.textContent = result;
}
