import { useState } from "react";
import { useFetchGenres } from "../../hooks/useFetchGenres";
import { useFetchPlatforms } from "../../hooks/useFetchPlatforms";
import { useFetchTags } from "../../hooks/useFetchTags";
import type { Game } from "../../types/gameType";
import { CardForm } from "../CardGame/CardsForm/CardsForm";
import { GamesForm } from "../GamesForm/GamesForm";
import { TitleTextContainer } from "../TitleTextContainer/TitleTextContainer";
import styles from "./CreateGame.module.scss";
import { useFetchStores } from "../../hooks/useFetchStores";

type GamesCardProps = Partial<Game>;
export const CreateGame = () => {
 
  useFetchGenres()
  useFetchTags()
  useFetchPlatforms()
  useFetchStores()

  const [selectedGame, setSelectedGame] = useState<
    GamesCardProps | undefined
  >();

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
