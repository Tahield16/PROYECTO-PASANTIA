import type { Game } from "../../../types/gameType";
import type { Genre } from "../../../types/genreType";
import styles from "./CardsForm.module.scss";
import placeholderImage from "/assets/videogames-placeholder.png";

type CardFormProps = Partial<Game>

export const CardForm = ({
    _id,
    name,
    rating,
    genres,
    developedBy,
    favorite,
    backgroundImage,
    release,
    description,
  }
: CardFormProps) => {
  console.log(genres);
  const favImgRoute = favorite
    ? "/assets/Activated-favs.svg"
    : "/assets/Deactivated-favs.svg";

  const imgRoute = backgroundImage || placeholderImage;
  
  return (
    <section className={styles.cardContainer}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.gameLogo}
          src={imgRoute}
          alt={name ? `Imagen de ${name}` : "Imagen del juego"}
        />
      </div>

      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{name || "Título del juego"}</h2>

        {rating && (
          <p className={styles.rating}>
            <span className={styles.spnRate}>{rating}</span>/10
            <img
              src="/assets/Star-icon.svg"
              alt="Estrella de rating"
              className={styles.starIcon}
            />
          </p>
        )}
        
        {genres && genres.length > 0 && (
          <div className={styles.genresContainer}>
            {genres.map((genre) => (
              <div className={styles.genreWrapper} key={`${_id}-${genre.slug}`}>
                <span>{genre.slug }</span>
              </div>
            ))}
          </div>
        )}

        {developedBy && developedBy.length > 0 && (
          <p className={styles.developersContainer}>
            Desarrollado por{" "}
            {developedBy.map((developer, index) => (
              <span key={index} className={styles.developer}>
                {developer}
                {index < developedBy.length - 1 && ", "}
              </span>
            ))}
          </p>
        )}

        {release && (
          <p className={styles.releaseDate}>
            Fecha de salida: <span>{release}</span>
          </p>
        )}

        {description && (
          <p className={styles.description}>{description}</p>
        )}
      </div>
    </section>
  );
};
