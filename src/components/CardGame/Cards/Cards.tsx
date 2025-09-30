import type { Game } from "../../../types/gameType";
import styles from "./card.module.scss";
import placeholderImage from "/assets/videogames-placeholder.png";
type GameCardProps = Partial<Game>;
export const Card = ({
  _id,
  name,
  img,
  rating,
  genres,
  description,
  favorite,
  release,
  developedBy,
}: GameCardProps) => {
  const favImgRoute = favorite
    ? "/assets/Activated-favs.svg"
    : "/assets/Deactivated-favs.svg";
  const imgRoute = img ? img : placeholderImage;
  return (
    <div className={styles.cardContainer}>
      <img
        className={styles.gameLogo}
        src={imgRoute}
        alt={`Image of ${name}`}
      />
      <div className={styles.cardContent}>
        <div className={styles.favContainer}>
          <p className={styles.cardTitle}>{name}</p>
          {favorite && (
            <img src={favImgRoute} alt="Juego favorito desactivado" />
          )}
        </div>

        {rating && (
          <p className={styles.rating}>
            <span className={styles.spnRate}>{rating}</span>/10
            <img
              src="/assets/Star-icon.svg"
              alt="Star Icon represeting quantity of stars in the game's rating"
            />
          </p>
        )}
        <div className={styles.genresContainer}>
          {genres?.map((genre) => (
            <div className={styles.genreWrapper} key={`${_id}-${genre}`}>
              <span>{genre}</span>
            </div>
          ))}
        </div>
        {developedBy && (
          <div className={styles.developersContainer}>
            <p>
              Desarrollado por: {" "}
              {developedBy?.map((developer, index) => (
                <span key={index} className={styles.developer}>
                  {developer}
                  {index < developedBy.length - 1 && <span>,</span>}
                </span>
              ))}
            </p>
          </div>
        )}
        {release && (
          <p>
            Fecha de salida: 
            <span className={styles.releaseDate}>{release}</span>
          </p>
        )}
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
};
