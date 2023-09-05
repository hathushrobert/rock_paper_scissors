function getComputerChoice() {

    // Have an array of choices
    let options = ['rock', 'paper', 'scissors'];

    // Generate a random int
    let randomFloat = Math.random() * 3;
    let randomInt = Math.floor(randomFloat);

    // Return a random value from the array
    return options[randomInt];
}


console.log(getComputerChoice());