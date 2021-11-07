import './App.css';
import React, { useState } from "react";
import StarMatchGame from "./StarMatchGame";
function App()
{
  const [gameId, setGameId] = useState(1);

  return(
    <StarMatchGame

    key = {gameId} 
    newGame = { () => setGameId(gameId + 1)}
    
    />
  );
}

export default App;