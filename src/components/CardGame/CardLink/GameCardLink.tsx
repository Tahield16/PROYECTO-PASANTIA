import { Link } from "@tanstack/react-router";
import type { Game } from "../../../types/gameType";
import { Card } from "../Cards/Cards";
import styles from "./GameCardLink.module.scss";
export const GameCardLink = (game: Game) => {
  const { _id } = game;
  return (
    <article className={styles.cardContainer}>
      <Link to="/$gameId" params={{ gameId: String(_id) }}>
        <Card _id={_id} name={game.name} img={game.img} description={game.description} favorite={game.favorite} rating={game.rating} key={_id} />
      </Link>
      <Link
        to="/$gameId/edit"
        params={{ gameId: String(_id) }}
        className={styles.editLink}
      >
        <img
          src="/assets/edit-3-svgrepo-com.svg"
          alt="Edit logo, click it to edit this game."
          
        />
      </Link>
    </article>
  );
};
