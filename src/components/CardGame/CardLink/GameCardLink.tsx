import { Link } from "@tanstack/react-router";
import type { Game } from "../../../types/gameType";
import { Card } from "../Cards/Card/Card";
import styles from "./GameCardLink.module.scss";
export const GameCardLink = (game: Game) => {
  const { id } = game;
  return (
    <article className={styles.cardContainer}>
      <Link to="/$gameId" params={{ gameId: String(id) }} search={{source:game.source}}>
        <Card
          id={id}
          name={game.name}
          background_image={game.background_image}
          genres={game.genres}
          tags={game.tags}
          favorite={game.favorite}
          rating={game.rating}
          key={id}
          released={game.released}
        />
      </Link>
      {game.source == "DATABASE" ? (
        <Link
          to="/$gameId/edit"
          params={{ gameId: String(id) }}
          className={styles.editLink}
        >
          <img
            src="/assets/edit-3-svgrepo-com.svg"
            alt="Edit logo, click it to edit this game."
          />
        </Link>
      ) : (
        <></>
      )}
    </article>
  );
};
