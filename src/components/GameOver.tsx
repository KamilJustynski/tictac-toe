import React from "react";

export interface GameOverInt {
  winner: string | undefined;
  onRestart: () => void;
}

export const GameOver: React.FC<GameOverInt> = ({ winner, onRestart }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a draw!</p>}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
};
