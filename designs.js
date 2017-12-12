const container=$('#container');
const paper=$('#buttonPaper');
const rock=$('#buttonRock');
const scissors=$('#buttonScissors');
let scoreComputer=0;
let scoreUser=0;
let numOfRunTimes=5;
function computer(){
  let randomNumber=Math.floor(Math.random()*3);
  let computerChoice;
  switch(randomNumber){
    case 0 :computerChoice='rock';
            break;
    case 1 : computerChoice='paper';
            break;
    case 2 : computerChoice='scissors';
            break;
  }
  return computerChoice;
}
function paragraph(userChoice,computerChoice){
  let par=document.createElement('p');
  par.textContent=`Your choice : ${userChoice}. Computer choice : ${computerChoice}.`;
  container.append(par);
}
function whoWins(num){
  let para=document.createElement('p');
  switch(num){
    case 1 : para.textContent='You win the round';
             break;
    case 2: para.textContent='Computer wins the round';
             break;
    case 3 : para.textContent='Round is even!';
             break;
  }
  container.append(para);
}
function score(){
  let para=document.createElement('p');
  para.textContent=`Score : Computer score : ${scoreComputer} . Your score : ${scoreUser}.\n Please choose again.`;
  container.append(para);
}
function winGame(numOfRuns){
  if(numOfRuns===0){
    container.append('<p>Game Over!</p>');
    if(scoreUser>scoreComputer){
      container.append('<p>You win the game!</p>');
    } else if(scoreUser<scoreComputer){
      container.append('<p>Computer wins the game!</p>');
    }  else {
      container.append('<p>Score is even.Nobody wins the game!</p>');
    }
    container.append('<button id=\'newGame\'>New Game</button>');
    $('#newGame').on('click',function(){
      container.find('p').remove();
      container.find('#newGame').remove();
      numOfRunTimes=5;
    });
  }
}
paper.on('click',function(){
  let computerChoice=computer();
  if(computerChoice==='rock'){
    paragraph('paper','rock');
    whoWins(1);
    scoreUser++;
    score();
  } else if(computerChoice==='scissors'){
    paragraph('paper','scissors');
    whoWins(2);
    scoreComputer++;
    score();
  } else {
    paragraph('paper','paper');
    whoWins(3);
    score();
  }
  numOfRunTimes--;
  winGame(numOfRunTimes);
});
rock.on('click',function(){
    let computerChoice=computer();
    if(computerChoice==='paper'){
      paragraph('rock','paper');
      whoWins(2);
      scoreComputer++;
      score();
    } else if(computerChoice==='scissors'){
      paragraph('rock','scissors');
      whoWins(1);
      scoreUser++;
      score();
    } else {
      paragraph('rock','rock');
      whoWins(3);
      score();
    }
    numOfRunTimes--;
    winGame(numOfRunTimes);
});
scissors.on('click',function(){
  let computerChoice=computer();
  if(computerChoice==='rock'){
    paragraph('scissors','rock');
    whoWins(2);
    scoreComputer++;
    score();
  } else if(computerChoice==='paper'){
    paragraph('scissors','paper');
    whoWins(1);
    scoreUser++;
    score();
  } else {
    paragraph('scissors','scissors');
    whoWins(3);
    score();
  }
  numOfRunTimes--;
  winGame(numOfRunTimes);
});
