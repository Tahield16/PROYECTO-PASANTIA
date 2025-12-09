import { useState } from "react";
import { useFetchGameServerById } from "../../hooks/useFetchGameServerById";
import { useSelectedGameServerStore } from "../../store/selectedGameServerStore";
import type { Game } from "../../types/gameType";
import { CardForm } from "../CardGame/CardsForm/CardsForm";
import { GamesForm } from "../GamesForm/GamesForm";
import { TitleTextContainer } from "../TitleTextContainer/TitleTextContainer";
import styles from "./EditGame.module.scss";
interface EditGameProps {
  id: number ;
}
type GamesCardProps = Partial<Game>;
export const EditGame = ({ id }: EditGameProps) => {
 useFetchGameServerById(id);
 const {game}=useSelectedGameServerStore();
 const [selectedGame, setSelectedGame]=useState<GamesCardProps | null>(game);
  return (
    <main className={styles.editGameContainer}>
      <div className="formContainer">
        <TitleTextContainer
          title="Reescribe la historia de este juego"
          text="Perfecciona tu juego y"
          highlited="llevalo al siguiente nivel."
        />
        <GamesForm
          setSelectedGame={setSelectedGame}
          selectedGame={selectedGame}
          isEdit={true}
        />
      </div>
      <div>
        <CardForm {...selectedGame} />
      </div>
    </main>
  );
};
