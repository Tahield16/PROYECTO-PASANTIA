import type { Game } from "../../../../types/gameType";
import styles from "./card.module.scss";
type GameCardProps = Partial<Game>;
export const CardWithoutLogo = ({
  id,
  name,
  rating,
  genres: genres,
  description,
  favorite,
  released: release,
  developers: developedBy,
}: GameCardProps) => {
  const favImgRoute = favorite
    ? "/assets/Activated-favs.svg"
    : "/assets/Deactivated-favs.svg";

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <div className={styles.favContainer}>
          <p className={styles.cardTitle}>{name}</p>
          {favorite !== undefined && (
            <img
              className={styles.favImg}
              src={favImgRoute}
              alt={favorite ? "Juego favorito" : "Juego no favorito"}
            />
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
            <div className={styles.genreWrapper} key={`${id}-${genre}`}>
              <span>{genre.slug}</span>
            </div>
          ))}
        </div>
        {developedBy && (
          <div className={styles.developersContainer}>
            <p>
              Desarrollado por:{" "}
              {developedBy?.map((developer, index) => (
                <span key={index} className={styles.developer}>
                  {developer.slug}
                  {index < developedBy.length - 1 && <span>,</span>}
                </span>
              ))}
            </p>
          </div>
        )}
        {release && (
          <p>
            Fecha de salida:{" "}
            <span className={styles.releaseDate}>{release}</span>
          </p>
        )}
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
};
