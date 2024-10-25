import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" mark="X" />
          <Player initialName="Player 2" mark="O" />
        </ol>
        Game board
      </div>
    </main>
  );
}

export default App;
