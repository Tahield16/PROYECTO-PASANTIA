import { useGamesStore } from "../../store/gamesStore";
import { GameCardLink } from "../CardGame/CardLink/GameCardLink";
import { TitleTextContainer } from "../TitleTextContainer/TitleTextContainer";
import styles from './Landing.module.scss'
const Landing=()=>{
   const { games } = useGamesStore();

  return (
    <main className={styles.landingContainer}>
        <TitleTextContainer title="Biblioteca" text="Encuentra, monitorea y consagra tus juegos favoritos en una" highlited="biblioteca sagrada" />
      <section className={styles.gamesContainer}>
        {games.map((game) => (
          <GameCardLink key={game._id} {...game} />
        ))}
      </section>
    </main>
  );
}
export default Landing;