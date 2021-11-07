
export const PlayAgain = props =>
(
    <div className = "App-game-over">

      <div className = "message"
          style = 
          { 
            {
              color: props.gameStatus === 'lost' ? 
              'red'
              :
              'green'
            } 
          }
      >

        {props.gameStatus === 'lost' ? 
          'Game Over: You Lose' 
          : 
          'Game Over: You Win'
        }

      </div>

      <button onClick = {props.onClick}> Play Again </button>
    </div>
);

export default PlayAgain;