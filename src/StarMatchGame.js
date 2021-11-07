import './App.css';
import React from 'react';
import { utils } from './MathScience';
import PlayAgain from './PlayAgain';
import PlayNumber from './PlayNumber';
import StarsDisplay from './StarsDisplay';
import useGameState from './useGameState';

function StarMatchGame(props) 
{

  const {
    stars,
    availableNums,
    candidateNums,
    timeLeft,
    setGameState
  } = useGameState();

  const wrongCandidates = utils.sum(candidateNums) > stars;

  const gameStatus = availableNums.length === 0 ? 
    'won'
    : 
    timeLeft === 0 ? 
    'lost'
    : 
    'active' ;

  

  const numberStatus = (numberId) => 
  {

    if(!availableNums.includes(numberId)) { return 'used'; }

    if(candidateNums.includes(numberId)) 
    { 
      return wrongCandidates ? 'wrong' : 'candidate'; 
    }

    return 'available';
  };

  const onNumberClick = (numberId , currentStatus) => 
  {
    if( gameStatus !== 'active' || currentStatus === 'used') { return; }

    const newCandidateNums = currentStatus ==='available' ? 
        candidateNums.concat(numberId) 
        : 
        candidateNums.filter(cn => cn !== numberId);

    setGameState(newCandidateNums);
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <h1> Star Match Game </h1>
        
        <div className = "App-game">

          <div className = "App-help">

            <p>
              Try to get the correct number of stars, by either :<br/>
              1) Picking the number by a single digit,<br/>
              2) Sum up digits to form the total number of stars shown
            </p>

          </div>

          <div className = "App-body">

            <div className = "App-left">

              { gameStatus !== 'active' ? 
                (<PlayAgain onClick = {props.newGame} gameStatus = {gameStatus}/>) 
                : 
                (<StarsDisplay count = {stars}/>)
              }

            </div>

            <div className = "App-right">

              {utils.range(1, 9).map(numberId =>
                <PlayNumber 

                key = {numberId} 
                status = {numberStatus(numberId)}
                numberId = {numberId} 
                onClick = {onNumberClick}
                
                />
              )}
              
            </div>
          </div>

          <div className = "App-game-timer"> Time Remaining: {timeLeft} </div>

        </div>
      </header>
    </div>
  );
}

export default StarMatchGame;