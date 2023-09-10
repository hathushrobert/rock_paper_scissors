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



    clearContent(body);
    body.style['transition'] = 'opacity 1s ease';
    body.style['opacity'] = '1';
    
    loadGamePage(body);
    
    


}

function clearContent(body){

    while (body.firstChild){
        body.removeChild(body.firstChild);
    }

}


function loadGamePage(body){

    let header = document.createElement('div');
    header.className = "header";

    let promptHeading = document.createElement('h1');
    promptHeading.textContent = "Make your move...";

    let reassurance = document.createElement('p');
    reassurance.textContent = "Dont worry, the computer cannot see your move.";

    let options = document.createElement('div');
    options.className = "options-container";

    let imageContainer1 = document.createElement('div');
    imageContainer1.className = "image-container";
    imageContainer1.id = "rock"; 
    imageContainer1.innerHTML = '<img src="images/rock.png" alt="rock">';


    let imageContainer2 = document.createElement('div');
    imageContainer2.className = "image-container";
    imageContainer2.innerHTML = '<img src="images/paper.png" alt="paper">';
    imageContainer2.id = "paper"; 


    let imageContainer3 = document.createElement('div');
    imageContainer3.className = "image-container";
    imageContainer3.innerHTML = '<img src="images/scissors.png" alt="scissors">';
    imageContainer3.id = "scissors";


    let scoreContainer = document.createElement('div');
    scoreContainer.className = "score-container";
    
    let playerScore = document.createElement('div');
    playerScore.id = "player-score"
    playerScore.className = "score";
    playerScore.textContent = "Your score: 0";

    let computerMove = document.createElement('div');
    computerMove.id = 'computer-move';
    computerMove.className = "score";

    let computerScore = document.createElement('div');
    computerScore.id = 'computer-score';
    computerScore.className = "score";
    computerScore.textContent = "Computer score: 0";


    body.appendChild(header);

        header.appendChild(promptHeading);
        header.appendChild(reassurance);

    body.appendChild(options);

        options.appendChild(imageContainer1);
        options.appendChild(imageContainer2);
        options.appendChild(imageContainer3);
        
    body.appendChild(scoreContainer);
        scoreContainer.appendChild(playerScore);
        scoreContainer.appendChild(computerMove);
        scoreContainer.appendChild(computerScore);  
}


function loadWinScreen(body){

    let resultScreen = document.createElement('div');
    resultScreen.className = "result-screen";
    
    let winMessage = document.createElement('h1');
    winMessage.textContent = "You win!";
    winMessage.className = "result-message";

    let retryButton = document.createElement('button');
    retryButton.className = 'start-game-button';
    retryButton.textContent = "Play again";
    retryButton.addEventListener('click', ()=> {
        startGame(body);
        game(body);
    });

    clearContent(body);
    body.appendChild(resultScreen);

    resultScreen.appendChild(winMessage);
    resultScreen.appendChild(retryButton);


}


function loadLoseScreen(body){
    
    let resultScreen = document.createElement('div');
    resultScreen.className = "result-screen";
    
    let winMessage = document.createElement('h1');
    winMessage.textContent = "You lose!";
    winMessage.className = "result-message";

    let retryButton = document.createElement('button');
    retryButton.className = 'start-game-button';
    retryButton.textContent = "Play again";
    retryButton.addEventListener('click', ()=> {
        startGame(body);
        game(body);
    });


    clearContent(body);
    body.appendChild(resultScreen);

    resultScreen.appendChild(winMessage);
    resultScreen.appendChild(retryButton);

}



// MAIN
let startPage = document.querySelector('body');
let startButton = startPage.querySelector('.start-game-button');

startButton.addEventListener('click', ()=>{

    startGame(startPage);
    game(startPage);
    
    
});


function game(startPage) {
    let computerChoice;
    let playerChoice;
    let playerScore = 0;
    let computerScore = 0;

    let playerScoreNode = startPage.querySelector('#player-score');
    let computerScoreNode = startPage.querySelector('#computer-score');

    let counter = 0;
    let choices = ['rock', 'paper', 'scissors'];
    let choicesNodes = startPage.querySelectorAll('.image-container')

    choicesNodes.forEach((choice) => {

        playerChoice = choice.addEventListener('click', ()=>{

            computerChoice = getComputerChoice();
            playerChoice = choice.id;

            startPage.querySelector('#computer-move').textContent = "Computer played " + computerChoice.toUpperCase() + "!";
    
    
            console.log('computer choice: ' + computerChoice);
            console.log('player choice: ' + playerChoice);    

            
            let result = playRound(playerChoice, computerChoice);
    
            if (result == 'win'){
                playerScore++;

                if (playerScore == 5) {loadWinScreen(startPage);}
                else{

                    playerScoreNode.textContent = "You score: " + playerScore;
                    startPage.querySelector('#computer-move').textContent += " Let's go!";

                }
            }
            else if (result == 'lose'){
                computerScore++;

                if (computerScore == 5) {loadLoseScreen(startPage);}
                else{

                    computerScoreNode.textContent = "You score: " + computerScore;
                    startPage.querySelector('#computer-move').textContent += " yikes...";
                }
            }
    
        });


    });

}












