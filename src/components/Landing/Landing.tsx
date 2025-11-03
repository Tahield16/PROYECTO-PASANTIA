import { useFetchGames } from "../../hooks/useFetchGames";
import { useGamesStore } from "../../store/gamesStoreApi";
import type { GamesFilters } from "../../types/gameType";
import { GameCardLink } from "../CardGame/CardLink/GameCardLink";
import { FiltersContainer } from "../Filters/FiltersContainer";
import { TitleTextContainer } from "../TitleTextContainer/TitleTextContainer";
import styles from "./Landing.module.scss";
const Landing = () => {
  const { games } = useGamesStore();
  console.log({games:games});
  const filters: GamesFilters = {
    sort: "-rating",
    search: "GTA",
    pageSize:5,
  };
  const fetch = useFetchGames(filters);

  console.log({ data: fetch.data });
  return (
    <main className={styles.landingContainer}>
      <TitleTextContainer
        title="Biblioteca"
        text="Encuentra, monitorea y consagra tus juegos favoritos en una"
        highlited="biblioteca sagrada"
      />
      <FiltersContainer />
      <section className={styles.gamesContainer}>
        {games.map((game) => (
          <GameCardLink key={game.id} {...game} />
        ))}
      </section>
    </main>
  );
};
export default Landing;
