const options = ["rock", 'paper', 'scissors'];

//Get computer choice to randomly returns "rock", "paper", or "scissors"
function getComputerChoice(){
    const choice = options[Math.floor(Math.random()*options.length)];
    console.log(choice);
    return choice;
}

//Check if either computer wins, or human wins or tie
function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "Tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")        
    ){
        return "Player wins";
    }
    else{
        return "Computer wins";
    }
}

//Takes the human and computer player choices and return into result
function playRound(playerSelection,computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == 'Tie'){
        return "It's a tie!"
    }
    else if(result == 'Player wins'){
        return `You Win! ${playerSelection} beats ${computerSelection}` //the back-tick allows you to use string templating
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

//Prompt player selection
function getPlayerChoice(){
    let validatedInput = false;
    //Keep looping prompt until input is validated
    while(validatedInput == false){
        const choice = prompt("Rock, Paper, Scissors"); 
        if (choice == null){
            continue;
        }
    //Validate player input to ensure the parameneter is case-sensitive
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

//Calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end
//Create a for loop of 5 rounds
function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome")
    for (let i = 0; i<5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        if(checkWinner(playerSelection,computerSelection)== "Player wins"){
            scorePlayer++;
        }
        else if(checkWinner(playerSelection,computerSelection) == "Computer wins"){
            scoreComputer++;
        }
    }
    console.log("Game Over")
    if(scorePlayer > scoreComputer){
        console.log("Player was the winner!");
    }
    else if(scorePlayer < scoreComputer){
        console.log("Computer was the winner!");
    }
    else{
        console.log("We have a tie!");
    }

}
game()

