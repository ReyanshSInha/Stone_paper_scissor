// create a function that makes computer play

function computerPlay(){
    let randomChoice = Math.floor(Math.random()*3 + 1)
    const displayComputerChoice = document.querySelector('.computer-selection')    
    switch (randomChoice){
        case 1:
            
            displayComputerChoice.textContent = 'rock'

            return "rock"
            break;
        
        case 2:
             
            displayComputerChoice.textContent = 'paper'

            return "paper"
            break;

        case 3:
             
            displayComputerChoice.textContent = 'scissor'

            return "scissor"
            break;
    }

}

let score = 0;
let compScore = 0;
let rounds = 0;

function playGround(playerSelection, computerSelection){

    const scoreBoard = document.querySelector('.score')
    const scoreNumber = document.querySelector('#scoreNum')
    const compScoreNumber = document.querySelector("#compScoreNum")

    if(playerSelection == "rock" && computerSelection == "paper"){
        scoreBoard.textContent = "You Lose! Paper beats Rock"
        
        compScore++
        compScoreNumber.textContent = compScore
        scoreNumber.textContent = `${score}/${rounds}`
    }else if(playerSelection == "paper" && computerSelection == "scissor"){
        scoreBoard.textContent = "You Lose! Scissor beats Paper"
        
        compScore++
        compScoreNumber.textContent = compScore
        scoreNumber.textContent = `${score}/${rounds}`
    }else if(playerSelection == "scissor" && computerSelection == "rock"){
        scoreBoard.textContent = "You Lose! Rock beats Scissor"
        
        compScore++
        compScoreNumber.textContent = compScore
        scoreNumber.textContent = `${score}/${rounds}`
    }else if(playerSelection == "rock" && computerSelection == "scissor"){
        scoreBoard.textContent = "You win! Rock beats Scissor"
        compScoreNumber.textContent = compScore
        score++
        scoreNumber.textContent = `${score}/${rounds}`
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        scoreBoard.textContent = "You win! Paper beats Rock"
        compScoreNumber.textContent = compScore
        score++
        scoreNumber.textContent = `${score}/${rounds}`
    }else if(playerSelection == "scissor" && computerSelection == "paper"){
        scoreBoard.textContent = "You win! Scissor beats Paper"
        compScoreNumber.textContent = compScore
        score++
        scoreNumber.textContent = `${score}/${rounds}`

    }else(
        scoreBoard.textContent = "Nobody wins! It's a tie!!!"
        
    )
}

const rock = document.querySelector('#rock')

rock.addEventListener('click', playerChoiceRock)

function playerChoiceRock(){
    rounds++
    const displayChoice = document.querySelector('.player-selection')

    displayChoice.textContent = 'rock'
    computerPlay()
    
    playGround("rock", computerPlay())
    
}

const paper = document.querySelector('#paper')

paper.addEventListener('click', playerChoicePaper)

function playerChoicePaper(){
    rounds++
    const displayChoice = document.querySelector('.player-selection')

    displayChoice.textContent = 'paper'
    computerPlay()
    playGround("paper", computerPlay())
}

const scissor = document.querySelector('#scissor')

scissor.addEventListener('click', playerChoiceScissor)

function playerChoiceScissor(){
    rounds++
    const displayChoice = document.querySelector('.player-selection')

    displayChoice.textContent = 'scissor'
    computerPlay()
    playGround("scissor", computerPlay())
}


if(score >= 3){ 
    console.log(`You won the match! you scored: ${score}/5 `) 
}else{
    console.log(`You Lost the match! you scored: ${score}/5`)
}