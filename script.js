function getComputerChoice() {

    // Have an array of choices
    let options = ['rock', 'paper', 'scissors'];

    // Generate a random int
    let randomFloat = Math.random() * 3;
    let randomInt = Math.floor(randomFloat);

    // Return a random value from the array
    return options[randomInt];
}

function playRound(playerChoice, computerChoice){
    if (typeof(playerChoice) == 'string'){
        playerChoice = playerChoice.toLowerCase();
    }
    else
    {
        console.error("Invalid input, did you never have a childhood???");
    }

    let status = '';
    
    switch(playerChoice){
        case 'rock':
            switch (computerChoice){
                case 'paper': status = 'lose'; break;
                case 'scissors': status = 'win'; break;
                default: status = 'tied';
            }
            break;

        case 'paper':
            switch (computerChoice){
                case 'scissors': status = 'lose'; break;
                case 'rock': status = 'win'; break;
                default: status = 'tied';
            }
            break;

        case 'scissors':
            switch (computerChoice){
                case 'rock': status = 'lose'; break;
                case 'paper': status = 'win'; break;
                default: status = 'tied';
            }
            break;


        default:
            status = 'moron';
    }

    return status;
}

let computerChoice = getComputerChoice();
let playerChoice = prompt('Play your move (rock, paper or scissors)');

result = playRound(playerChoice, computerChoice);

switch (result){
    case 'win':
        console.log('You win! ' + playerChoice + ' beats ' + computerChoice);
        break;
    case 'lose':
        console.log('You lose! ' + computerChoice + ' beats ' + playerChoice);
        break;
    case 'tied' :
        console.log("It's a tie! You both played " + playerChoice);
        break;
    default:
        console.log('Take this seriously, you ' + result);

}