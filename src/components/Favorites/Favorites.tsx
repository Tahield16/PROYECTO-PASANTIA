import { FiltersContainer } from "../Filters/FiltersContainer";
import { GameCardLink } from "../CardGame/CardLink/GameCardLink";
import { useGamesStore } from "../../store/gamesStoreApi";
import styles from "./Favorites.module.scss";
import { TitleTextContainer } from "../TitleTextContainer/TitleTextContainer";
const Favorites = () => {
  const { games } = useGamesStore();
  const favoritesGames = games.filter((game) => game.favorite);
  return (
    <main className={styles.favoritesContainer}>
      <TitleTextContainer
        title="Favoritos"
        text="Los videojuegos que alcanzaron la gloria"
        highlited="tus verdaderos campeones"
      />
      <FiltersContainer />
      <section className={styles.gamesContainer}>
        {favoritesGames.map((game) => (
          <GameCardLink key={game.id} {...game} />
        ))}
      </section>
    </main>
  );
};
export default Favorites;
