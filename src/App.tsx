import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import { GameTurnInt } from "./types/GlobalTypes";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState<GameTurnInt[]>([]);

  const handleSelectSquare = (rowIndex: number, colIndex: number) => {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurn: GameTurnInt[]) => {
      let currentPlayer = "X";

      if (prevTurn.length > 0 && prevTurn[0].player === "X") {
        currentPlayer = "O";
      }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];

      return updatedTurns;
    });
  };
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            isActive={activePlayer === "X"}
            initialName="Player 1"
            mark="X"
          />
          <Player
            isActive={activePlayer === "O"}
            initialName="Player 2"
            mark="O"
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
    </main>
  );
}

export default App;
