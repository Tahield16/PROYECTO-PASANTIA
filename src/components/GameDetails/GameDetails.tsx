import { useState } from "react";

import type { Game } from "../../types/gameType";
import { RatingBar } from "../RatingBar/RatingBar";
import { TitleTextContainer } from "../TitleTextContainer/TitleTextContainer";
import styles from "./GameDetails.module.scss";
import { useGamesStore } from "../../store/gamesStoreApi";

interface GameDetailsProps {
  id: Game["id"];
}
export const GameDetails = ({ id }: GameDetailsProps) => {
  const { games } = useGamesStore();
  const selectedGame = games.find((game) => game.id === id);
  const maxThumbnails: number | undefined = selectedGame?.shortScreenshots
    ?.length
    ? selectedGame.shortScreenshots.length >= 4
      ? 4
      : selectedGame.shortScreenshots.length
    : undefined;
  const [mainImgSource, setMainImgSource] = useState(
    selectedGame?.background_image
  );
  const [thumbnails, setThumbnails] = useState(
    selectedGame?.shortScreenshots
      ?.slice(0, maxThumbnails)
      .filter((s) => s.image !== mainImgSource) ?? []
  );

  // const handleClickImg = (screenshotImg: string) => {
  //   if (!mainImgSource || mainImgSource === screenshotImg) return;
  //   setThumbnails((prev) => (
  //     const newThumbs = prev.map((screen) => (
  //       const newSource=screen.image==screenshotImg ? mainImgSource:screen.image
  //     ));
  //   ));
  //   // Intercambia la imagen principal con la seleccionada
  //   setMainImgSource(screenshotImg);
  // };
  return (
    <main className={styles.detailsContainer}>
      <div className={styles.centeredContent}>
        <section className={styles.TitleDescriptionContainer}>
          <TitleTextContainer
            title={selectedGame?.name}
            text={undefined}
            highlited={undefined}
          />
          <p>
            <span className={styles.relaseHighlight}>
              Fecha de lanzamiento:
            </span>{" "}
            {selectedGame?.released}
          </p>
        </section>

        <section className={styles.galleryContainer}>
          <img
            src={mainImgSource}
            alt={`Selected Image of ${selectedGame?.name}`}
            className={styles.mainImg}
          />
          <div className={styles.thumbnailsContainer}>
            {thumbnails.map((screenshot, i) => (
              <div key={i}>
                <img
                  // () => handleClickImg(screenshot.image)
                  onClick={() => {}}
                  src={screenshot.image}
                  alt={`${selectedGame?.name}_gameplay_ss`}
                  className={styles.screenshot}
                />
              </div>
            ))}
          </div>
        </section>
        <section className={styles.ratingGameContainer}>
          <RatingBar ratings={selectedGame?.ratings} />
          <div className={styles.platformsContainer}>
            <p className={styles.textHighlight}>Conseguilo en: </p>
            {selectedGame?.stores?.map(({ url, store }) => (
              <a
                href={url}
                target="_blank"
                key={`${selectedGame.id}-${store.name}`}
              >
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
          <div className={styles.AboutContent}>
            <TitleTextContainer
              title="Acerca de: "
              highlited={undefined}
              text={undefined}
            ></TitleTextContainer>
            <p className={styles.gameDescription}>
              {selectedGame?.description}
            </p>
          </div>
        </section>
        <section className={styles.featuresContainer}>
          <div className={styles.featureItem}>
            <div className={styles.tagsContainer}>
              <p>
                {" "}
                <span className={styles.textHighlight}>Tags: </span>
              </p>
              {selectedGame?.tags?.map((tag) => (
                <div
                  className={styles.genreWrapper}
                  key={`${selectedGame.id}-${tag.name}`}
                >
                  <span>{tag.slug}</span>
                </div>
              ))}
              {selectedGame?.tags?.map((tag) => (
                <div
                  className={styles.genreWrapper}
                  key={`${selectedGame.id}-${tag.name}`}
                >
                  <span>{tag.slug}</span>
                </div>
              ))}
            </div>
            <div className={styles.genresContainer}>
              <p>
                {" "}
                <span className={styles.textHighlight}>Generos: </span>
              </p>
              {selectedGame?.genres?.map((genre) => (
                <div
                  className={styles.genreWrapper}
                  key={`${selectedGame.id}-${genre.name}`}
                >
                  <span>{genre.slug}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.publishersContainer}>
              <p>
                <span className={styles.textHighlight}>Publishers : </span>
                {selectedGame?.publishers?.map(
                  (publisher, index, publishers) => (
                    <span key={index} className={styles.publisher}>
                      {publisher}
                      {index < publishers.length - 1 && <span>, </span>}
                    </span>
                  )
                )}
              </p>
            </div>
            <div className={styles.developersContainer}>
              <p>
                <span className={styles.textHighlight}>Developers : </span>
                {selectedGame?.developedBy?.map((developer, index) => (
                  <span key={index} className={styles.developer}>
                    {developer}
                    {index < selectedGame.developedBy.length - 1 && (
                      <span>,</span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.requirementsContainer}>
              <p className={`${styles.text} ${styles.requirement}`}>
                {selectedGame?.platforms[0]?.requirements.minimum}
              </p>
            </div>
            <div className={styles.requirementsContainer}>
              <p className={styles.requirement}>
                {selectedGame?.platforms[0]?.requirements.recommended}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
