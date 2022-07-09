// create a function that makes computer play

function computerPlay(){
    let randomChoice = Math.floor(Math.random()*3 + 1)
    
    switch (randomChoice){
        case 1:
            return "Stone"
            break;
        
        case 2:
            return "Paper"
            break;

        case 3:
            return "Scissor"
            break;
    }

}

let score = 0;


function playGround(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() == "rock" && computerSelection == "paper"){
        console.log("You Lose! Paper beats Rock")
    }else if(playerSelection.toLowerCase() == "paper" && computerSelection == "scissor"){
        console.log("You Lose! Scissor beats Paper")
    }else if(playerSelection.toLowerCase() == "scissor" && computerSelection == "rock"){
        console.log("You Lose! Rock beats Scissor")
    }else if(playerSelection.toLowerCase() == "rock" && computerSelection == "scissor"){
        console.log("You win! Rock beats Scissor")
        score++
    }else if(playerSelection.toLowerCase() == "paper" && computerSelection == "rock"){
        console.log("You win! Paper beats Rock")
        score++
    }else if(playerSelection.toLowerCase() == "scissor" && computerSelection == "paper"){
        console.log("You win! Scissor beats Paper")
        score++
    }else(
        console.log("Nobody wins! It's a tie!!!")
    )
}


function game(){

    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("what do you choose? ");
        let computerSelection = computerPlay().toLowerCase();

        playGround(playerSelection, computerSelection);

        
    }

}

game()

if(score >= 3){
    console.log(`You won the match! you scored: ${score}/5 `)
}else{
    console.log(`You Lost the match! you scored: ${score}/5`)
}