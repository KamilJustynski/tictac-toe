import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import { GameTurnInt } from "./types/GlobalTypes";
import { Log } from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import { GameOver } from "./components/GameOver";

const initialGameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const deriveActivePlayer = (gameTurns: GameTurnInt[]) => {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
};

function App() {
  const [gameTurns, setGameTurns] = useState<GameTurnInt[]>([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = [...initialGameBoard].map((array) => [...array]);

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdsSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdsSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (rowIndex: number, colIndex: number) => {
    setGameTurns((prevTurn: GameTurnInt[]) => {
      const currentPlayer = deriveActivePlayer(prevTurn);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];

      return updatedTurns;
    });
  };

  const handleRematch = () => {
    setGameTurns([]);
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
        {(winner || hasDraw) && (
          <GameOver onRestart={handleRematch} winner={winner} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
