import { useSelectedGameStore } from "../../store/selectedGameStore";
import { RatingBar } from "../RatingBar/RatingBar";
import { TitleTextContainer } from "../TitleTextContainer/TitleTextContainer";
import styles from "./GameDetails.module.scss";

export const GameDetails = () => {

  const { game } = useSelectedGameStore();


  console.log(game);

    const pcRequirments=game?.platforms?.find((p)=>p.platform.id===4);
  return (
    <main className={styles.detailsContainer}>
      <div className={styles.centeredContent}>
        <section className={styles.TitleDescriptionContainer}>
          <TitleTextContainer
            title={game?.name}
            text={undefined}
            highlited={undefined}
          />
          <p>
            <span className={styles.relaseHighlight}>
              Fecha de lanzamiento:
            </span>{" "}
            {game?.released}
          </p>
        </section>

        <section className={styles.galleryContainer}>
          <img
            src={game?.background_image}
            alt={`Selected Image of ${game?.name}`}
            className={styles.mainImg}
          />
          <div className={styles.thumbnailsContainer}>
           <img src={game?.background_image_additional} alt={`Imagen alternativa de ${game?.name}`} className={styles.screenshot} />
          <RatingBar ratings={game?.ratings} />
          </div>
        </section>
        <section className={styles.ratingGameContainer}>
          <div className={styles.platformsContainer}>
            <p className={styles.textHighlight}>Conseguilo en: </p>
            {game?.stores?.map(({ url, store }) => (
              <a href={url} target="_blank" key={`${game.id}-${store.name}`}>
                <div className={styles.platformWrapper}>
                  <img
                    src={store.image_background}
                    alt={`${store.name} logo`}
                    className={styles.platformLogo}
                  />
                  <span>{store.slug}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className={styles.descriptionWrapper}>
            <TitleTextContainer
              title="Acerca de: "
              highlited={undefined}
              text={undefined}
            ></TitleTextContainer>
          <div className={styles.aboutContent}>
            <p className={styles.gameDescription}>{game?.description_raw}</p>
          </div>
        </section>
        <section className={styles.featuresContainer}>
          <div className={styles.featureItem}>
            <div className={`${styles.tagsContainer} ${styles.feature}`}>
              <p>
                {" "}
                <span className={styles.textHighlight}>Tags: </span>
              </p>
              {game?.tags?.map((tag) => (
                <div
                  className={styles.genreWrapper}
                  key={`${game.id}-${tag.name}`}
                >
                  <span>{tag.slug}</span>
                </div>
              ))}
              {game?.tags?.map((tag) => (
                <div
                  className={styles.genreWrapper}
                  key={`${game.id}-${tag.name}`}
                >
                  <span>{tag.slug}</span>
                </div>
              ))}
            </div>
            <div className={`${styles.genresContainer }  ${styles.feature}`}>
              <p>
                {" "}
                <span className={styles.textHighlight}>Generos: </span>
              </p>
              {game?.genres?.map((genre) => (
                <div
                  className={styles.genreWrapper}
                  key={`${game.id}-${genre.name}`}
                >
                  <span>{genre.slug}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.featureItem}>
            <div className={`${styles.publishersContainer} ${styles.feature}`}>
              <p>
                <span className={styles.textHighlight}>Publishers : </span>
                {game?.publishers?.map((publisher, index, publishers) => (
                  <span key={index} className={styles.publisher}>
                    {publisher.slug}
                    {index < publishers.length - 1 && <span>, </span>}
                  </span>
                ))}
              </p>
            </div>
            <div className={`${styles.developersContainer}  ${styles.feature}`}>
              <p>
                <span className={styles.textHighlight}>Developers : </span>
                {game?.developers?.map((developer, index) => (
                  <span key={index} className={styles.developer}>
                    {developer.slug}
                    {index < game.developers.length - 1 && <span>,</span>}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className={styles.featureItem}>
            <div className={`${styles.requirementsContainer} ${styles.feature}`}>
              <p className={`${styles.text} ${styles.requirement}`}>
                {pcRequirments?.requirements.minimum}
              </p>
            </div>
            <div className={`${styles.requirementsContainer} ${styles.feature}`}>
              <p className={styles.requirement}>
                {pcRequirments?.requirements.recommended}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
