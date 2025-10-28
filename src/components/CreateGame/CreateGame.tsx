import { useGamesMockedStore } from "../../store/gamesStore";
import { useState } from "react";
import type { Game } from "../../types/gameType";
import { GamesForm } from "../GamesForm/GamesForm";
import { TitleTextContainer } from "../TitleTextContainer/TitleTextContainer";
import { CardForm } from "../CardGame/CardsForm/CardsForm";
import styles from "./CreateGame.module.scss";

type GamesCardProps = Partial<Game>;
export const CreateGame = () => {
  const { games } = useGamesMockedStore();
  const [selectedGame, setSelectedGame] = useState<
    GamesCardProps | undefined
  >();
  console.log(selectedGame);
  return (
    <main className={styles.createGameContainer}>
      <div className="formContainer">
        <TitleTextContainer
          title="Haz que tu juego trascienda"
          text="Crea tu propio guerrero, y"
          highlited="sorprende al mundo con tu creación"
        />
        <GamesForm
          setSelectedGame={setSelectedGame}
          selectedGame={selectedGame}
        />
      </div>
      <div>
        <CardForm {...selectedGame} />
      </div>
    </main>
  );
};
