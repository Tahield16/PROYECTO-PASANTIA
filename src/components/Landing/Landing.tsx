import { useGamesMockedStore } from "../../store/gamesStore";
import { GameCardLink } from "../CardGame/CardLink/GameCardLink";
import { TitleTextContainer } from "../TitleTextContainer/TitleTextContainer";
import { FiltersContainer } from "../Filters/FiltersContainer";
import styles from "./Landing.module.scss";
import { useFetchGames } from "../../hooks/useFetchGames";
const Landing = () => {
  const { games } = useGamesMockedStore();
  const fetch=useFetchGames()

  console.log({data:fetch.data})
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
          <GameCardLink key={game._id} {...game} />
        ))}
      </section>
    </main>
  );
};
export default Landing;
