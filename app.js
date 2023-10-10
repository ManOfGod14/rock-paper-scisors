/**
 * Rock Paper Scisors
 */

// question 1
// console.log("Hello World 3");

// question 2 : github

// question 3
function getComputerChoice() {
    const choices = ["pierre", "papier", "ciseaux"];
    // je doit générer un nombre entre 0, 1 ou 2
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
console.log("************ question 3 : test getComputerChoice function *************");
const computerChoice = getComputerChoice();
console.log("Choix de l'ordinateur : "+ computerChoice);

// question 4
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection !== "pierre" && playerSelection !== "papier" && playerSelection !== "ciseaux") {
        alert("Sélection invalide, veuillez choisir entre : Pierre, Papier ou Ciseaux !");
    }

    // détermine le vainqueur
    if (playerSelection === computerSelection) {
        return "Egalité ! Les deux joueurs ont choisi "+ playerSelection +".";
    } else if ((playerSelection === "pierre" && computerSelection === "ciseaux")
        || (playerSelection === "papier" && computerSelection === "pierre")
        || (playerSelection === "ciseaux" && computerSelection === "papier")) {
        return "Vous gagnez ! "+ playerSelection + " bat "+ computerSelection +".";
    } else {
        return "Vous perdez ! "+ computerSelection + " bat "+ playerSelection +"."
    }
}
console.log("************ question 4 : test playRound function *************");
const playerSelection = "Papier";
const computerSelection = getComputerChoice();
const playResult = playRound(playerSelection, computerSelection);
console.log(playResult);

// question 5 & 6
function game($rounds = 5) {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < $rounds; i++) {
        const playerSelection = prompt("Saisissez votre choix entre (Pierre, Papier, ou Ciseaux) :");
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);

        if(roundResult.includes("gagnez")) {
            playerScore++;
        } else if(roundResult.includes("perdez")) {
            computerScore++;
        }
    }

    if(playerScore > computerScore) {
        return "Vous avez gagné le jeu : Votre score : "+ playerScore +" - Score de l'ordinateur : "+ computerScore;
    } else if(playerScore < computerScore) {
        return "Vous avez perdu le jeu : Votre score : "+ playerScore +" - Score de l'ordinateur : "+ computerScore;
    } else {
        return "Le jeu  est nul : Votre score : "+ playerScore +" - Score de l'ordinateur : "+ computerScore;
    }
}
console.log("************ question 5 & 6 : test game function *************");
document.getElementById('gameId').addEventListener('click', () => {
    const gameResult = game();
    document.getElementById('gameResultId').innerHTML = gameResult;
});
