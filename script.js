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

function game(){
    let playerScore = 0;
    let computerScore = 0;

    
    for (let i = 0; i < 5 ; i++){
        
        let computerChoice = getComputerChoice();
        let playerChoice = prompt('Play your move (rock, paper or scissors)');
        result = playRound(playerChoice, computerChoice);

        switch (result){
            case 'win':
                console.log ('You win! ' + playerChoice + ' beats ' + computerChoice);
                playerScore++;
                break;
            case 'lose':
                console.log ('You lose! ' + computerChoice + ' beats ' + playerChoice);
                computerScore++;
                break;
            case 'tied' :
                console.log ("It's a tie! You both played " + playerChoice);
                break;
            default:
                console.log ('Take this seriously, you ' + result);
        
        }
    }

    if (playerScore > computerScore){
        console.log("You win with a score of "+ playerScore + " against the computer with a score of " + computerScore);
    }
    else if (playerScore < computerScore){
        console.log("You lose with a score of "+ playerScore + " against the computer with a score of " + computerScore);
    }
    else{
        console.log('You tied! Your scores are ' + playerScore + 'and ' + computerScore);
    }
}

function startGame(body){

    body.style['transition'] = 'opacity 1s ease';
    body.style['opacity'] = '0';
    
    // Set a delay of 1 second before clearing content
    setTimeout(()=>{
        clearContent(body);
        loadGamePage(body);
    }, 2000);

    
    

}

function clearContent(body){

    while (body.firstChild){
        body.removeChild(body.firstChild);
    }

}


function loadGamePage(body){

    header = document.createElement('div');
    header.className = "header";

    promptHeading = document.createElement('h1');
    promptHeading.textContent = "Make your move...";

    reassurance = document.createElement('p');
    reassurance.textContent = "Dont worry, the computer cannot see your move.";

    options = document.createElement('div');
    options.className = "options-container";

    imageContainer1 = document.createElement('div');
    imageContainer1.className = "image-container";
    imageContainer1.innerHTML = '<img src="images/rock.png" alt="rock">';

    imageContainer2 = document.createElement('div');
    imageContainer2.className = "image-container";
    imageContainer2.innerHTML = '<img src="images/paper.png" alt="paper">';

    imageContainer3 = document.createElement('div');
    imageContainer3.className = "image-container";
    imageContainer3.innerHTML = '<img src="images/scissors.png" alt="scissors">';


    scoreContainer = document.createElement('div');
    scoreContainer.className = "score-container";
    
    playerScore = document.createElement('div');
    playerScore.className = "score";
    playerScore.textContent = "Your score: 0";

    computerScore = document.createElement('div');
    computerScore.className = "score";
    computerScore.textContent = "Your score: 0";


    body.appendChild(header);

        header.appendChild(promptHeading);
        header.appendChild(reassurance);

    body.appendChild(options);

        options.appendChild(imageContainer1);
        options.appendChild(imageContainer2);
        options.appendChild(imageContainer3);
        
    body.appendChild(scoreContainer);
        scoreContainer.appendChild(playerScore);
        scoreContainer.appendChild(computerScore);


    

    body.style['transition'] = 'opacity 1s ease';
    body.style['opacity'] = '1';

   
}

startPage = document.querySelector('body');
startGameButton = document.querySelector('.start-game-button');

startGameButton.addEventListener('click', ()=> {

    startGame(startPage);
});





