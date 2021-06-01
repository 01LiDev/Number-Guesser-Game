let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random()* 9)
}
function compareGuesses(userGuess,cpuGuess,target){
  let userdiff = userGuess - target;
  let cpudiff = cpuGuess - target;
  if(userGuess === target){
    return true;
  }else if(cpuGuess === target){
    return false;
  }else{
    return;
  }
  if(userdiff >= cpuGuess){
    return true;
  }else{
    return false;
  }
}
function updateScore(winner){
  if(winner==='human'){
    humanScore++;
  }else if(winner ==='computer') {
    computerScore++;
  }
}
function advanceRound(){
  currentRoundNumber++;
}
