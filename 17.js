//nested if else

//lets play a guessing game to understand nested if else

//we take a number first 

// winning number = 20;

//then we put condition 
//your guess is right
//too low 
//too high

let winningNumber = 20;

let userGuess = +prompt("Guess the Number:");

if(userGuess == winningNumber){
    console.log("Your guess is right!!");
}
else{
    if(userGuess > winningNumber){
        console.log("Too high!!");
    }
    else{
        console.log("Too low!!");
    }
}