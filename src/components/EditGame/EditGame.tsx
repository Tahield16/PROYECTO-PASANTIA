import { useGamesStore } from "../../store/gamesStore";
import { useState } from "react";
import type { Game } from "../../types/gameType";
import { GamesForm } from "../GamesForm/GamesForm";
import { TitleTextContainer } from "../TitleTextContainer/TitleTextContainer";
import { CardForm } from "../CardGame/CardsForm/CardsForm";
import styles from "./EditGame.module.scss";
interface EditGameProps {
  _id: number | string;
}
type GamesCardProps = Partial<Game>;
export const EditGame = ({ _id }: EditGameProps) => {
  const { games } = useGamesStore();
  const [selectedGame, setSelectedGame] = useState<GamesCardProps | undefined>(
    () => games.find((g) => g._id === _id)
  );
  console.log(selectedGame)
  return (
    <main className={styles.editGameContainer}>
      <div className="formContainer">
        <TitleTextContainer
          title="Reescribe la historia de este juego"
          text="Perfecciona tu juego y"
          highlited="llevalo al siguiente nivel."
        />
        <GamesForm setSelectedGame={setSelectedGame} selectedGame={selectedGame}/>
      </div>
      <div>
        <CardForm {...selectedGame} />
      </div>
    </main>
  );
};
