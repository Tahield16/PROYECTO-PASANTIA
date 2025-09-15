import { GameCardLink } from "./components/CardGame/CardLink/GameCardLink";
import "src/styles/_base.scss";
import { useGamesStore } from "./store/gamesStore";
function App() {
  const { games } = useGamesStore();

  return (
    <>
      <section className="Games-container">
        {games.map((game) => (
          <GameCardLink key={game._id} {...game} />
        ))}
      </section>
    </>
  );
}

export default App;
