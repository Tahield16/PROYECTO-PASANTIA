import type { Game } from "../../../types/gameType";
import styles from "./card.module.scss";
export const Card = ({ _id, name, img, rating, genres,description,favorite }: Game) => {
  const favImgRoute=favorite?'/assets/Activated-favs.svg':'/assets/Deactivated-favs.svg'
  return (
    <div className={styles.cardContainer}>
      <img className={styles.gameLogo} src={img} alt={`Image of ${name}`} />
      <div className={styles.cardContent}>
        <div className={styles.favContainer}>
          <p className={styles.cardTitle}>{name}</p>
          <img src={favImgRoute} alt="Juego favorito desactivado" />
        </div>

        <p className={styles.rating}>
          <span className={styles.spnRate}>{rating}</span>/10{" "}
          <img
            src="/assets/Star-icon.svg"
            alt="Star Icon represeting quantity of stars in the game's rating"
          />
        </p>
        <div className={styles.genresContainer}>
          {genres.map((genre) => (
            <div className={styles.genreWrapper} key={`${_id}-${genre}`}>
              <span>{genre}</span>
            </div>
          ))}
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
