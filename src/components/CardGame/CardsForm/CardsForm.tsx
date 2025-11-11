import type { Game } from "../../../types/gameType";
import styles from "./CardsForm.module.scss";
import placeholderImage from "/assets/videogames-placeholder.png";

type CardFormProps = Partial<Game>;

export const CardForm = ({
  id,
  name,
  rating,
  genres: genres,
  developers: developedBy,
  favorite,
  background_image,
  released: release,
  description,
  tags,
  platforms,
  publishers,
  stores,
  requirements,
  shortScreenshots,
  ratings,
}: CardFormProps) => {
  const favImgRoute = favorite
    ? "/assets/Activated-favs.svg"
    : "/assets/Deactivated-favs.svg";

  const imgRoute = background_image || placeholderImage;

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
        <div className={styles.favContainer}>
          <h2 className={styles.cardTitle}>{name || "Título del juego"}</h2>
          <img
            src={favImgRoute}
            alt="Imagen clickeable para agregar o quitar este juego de favoritos."
          />
        </div>

        {rating !== undefined && (
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
            <p>Géneros:</p>
            {genres.map((genre) => (
              <div className={styles.genreWrapper} key={`${id}-${genre.slug}`}>
                <span>{genre.name || genre.slug}</span>
              </div>
            ))}
          </div>
        )}

        {platforms && platforms.length > 0 && (
          <div className={styles.genresContainer}>
            <p>Plataformas:</p>
            {platforms.map((platform) => (
              <div
                className={styles.genreWrapper}
                key={`${id}-${platform.slug}`}
              >
                <span>{platform.name || platform.slug}</span>
              </div>
            ))}
          </div>
        )}

        {developedBy && developedBy.length > 0 && (
          <p className={styles.developersContainer}>
            Desarrollado por:{" "}
            {developedBy.map((dev, index) => (
              <span key={dev.slug ?? index} className={styles.developer}>
                {dev.name || dev.slug}
                {index < developedBy.length - 1 && ", "}
              </span>
            ))}
          </p>
        )}

        {publishers && publishers.length > 0 && (
          <p className={styles.developersContainer}>
            Publicado por:{" "}
            {publishers.map((pub, index) => (
              <span key={pub.slug ?? index} className={styles.developer}>
                {pub.name || pub.slug}
                {index < publishers.length - 1 && ", "}
              </span>
            ))}
          </p>
        )}

        {release && (
          <p className={styles.releaseDate}>
            Fecha de salida: <span>{release}</span>
          </p>
        )}

        {tags && tags.length > 0 && (
          <div className={styles.genresContainer}>
            <p>Etiquetas:</p>
            {tags.map((tag) => (
              <div className={styles.genreWrapper} key={`${id}-${tag.slug}`}>
                <span>{tag.name || tag.slug}</span>
              </div>
            ))}
          </div>
        )}

        {stores && stores.length > 0 && (
          <div className={styles.genresContainer}>
            <p>Tiendas:</p>
            {stores.map((store) => (
              <div className={styles.genreWrapper} key={`${id}-${store.slug}`}>
                <span>{store.name || store.slug}</span>
              </div>
            ))}
          </div>
        )}

        {requirements && (
          <div className={styles.requirementsContainer}>
            <p>Requisitos:</p>
            {requirements.minimum && <p>Mínimos: {requirements.minimum}</p>}
            {requirements.recommended && (
              <p>Recomendados: {requirements.recommended}</p>
            )}
          </div>
        )}

        {shortScreenshots && shortScreenshots?.length > 0 && (
          <div className={styles.screenshotsContainer}>
            <p>Capturas:</p>
            {shortScreenshots.map((shot, index) => (
              <img
                key={index}
                src={shot.image}
                alt={`${name} captura ${index + 1}`}
                className={styles.screenshot}
              />
            ))}
          </div>
        )}

        {ratings && (
          <div className={styles.ratingsContainer}>
            <p>Valoraciones:</p>
            <pre>{JSON.stringify(ratings, null, 2)}</pre>
          </div>
        )}

        {description && <p className={styles.description}>{description}</p>}
      </div>
    </section>
  );
};
