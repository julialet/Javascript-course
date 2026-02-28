'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;

const displayMessage = function (message){
    document.querySelector(".message").textContent = message
}

// Click on "check" button
document.querySelector(".check").addEventListener("click", function(){
    const guess = Number(document.querySelector(".guess").value)
    console.log(guess, typeof guess)

    if (!guess){
        displayMessage("Choose a valid number.")
        
    // When guess is right
    } else if (guess === secretNumber){
        displayMessage("Correct Number!")
        
        document.querySelector(".number").textContent = secretNumber

        document.querySelector("body").style.backgroundColor = "#60b347"

        document.querySelector(".number").style.width = "30rem"
        
        let highscore = document.querySelector(".highscore").textContent

        if (score > highscore){
            document.querySelector(".highscore").textContent = score
        }
        
    // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1){
        displayMessage(guess > secretNumber ? "Too high!" : "Too low!")
        score--;
        document.querySelector(".score").textContent = score  
        } else {
            displayMessage("You lost the game!")
            score--;
            document.querySelector(".score").textContent = 0 
        }

    } 

})

// Again button
document.querySelector(".again").addEventListener("click", function(){

    document.querySelector("body").style.backgroundColor = "#222"
    score = 20
    secretNumber = Math.trunc(Math.random()*20) + 1;
    displayMessage("Start guessing...")
    document.querySelector(".score").textContent = score

    document.querySelector(".number").style.width = "15rem" 
    document.querySelector(".number").textContent = "?"
    document.querySelector(".guess").value = " "

})



