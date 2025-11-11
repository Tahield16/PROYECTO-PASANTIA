import InfiniteScroll from "react-infinite-scroll-component";
import { useFetchGameList } from "../../hooks/useFetchGames";
import { useGamesStore } from "../../store/gamesStoreApi";
import { GameCardLink } from "../CardGame/CardLink/GameCardLink";
import { FiltersContainer } from "../Filters/FiltersContainer";
import { TitleTextContainer } from "../TitleTextContainer/TitleTextContainer";
import styles from "./Landing.module.scss";
import { Spinner } from "../Spinner/Spinner";
const Landing = () => {
  const { games, filters, set } = useGamesStore();

  const fetch = useFetchGameList();

  console.log({ data: fetch.data });
  console.log({ games });
  const fetchNextGameList = () => {
    set({ filters: { ...filters, page: filters.page + 1 } });
  };

  return (
    <main className={styles.landingContainer}>
      <TitleTextContainer
        title="Biblioteca"
        text="Encuentra, monitorea y consagra tus juegos favoritos en una"
        highlited="biblioteca sagrada"
      />

      <FiltersContainer />

      <section className={styles.gamesContainer}>
        {games.length > 0 ? (
          <InfiniteScroll
            dataLength={games.length}
            next={fetchNextGameList}
            hasMore={true}
            loader={<h4>Cargando nuevos juegos...</h4>}
            className={styles.gamesContainer}
          >
            {games.map((game) => (
              <GameCardLink key={game.id} {...game} />
            ))}
          </InfiniteScroll>
        ) : fetch.isLoading ? (
          <Spinner message={"Cargando juegos"} />
        ) : (
          <p>No se han encontrado juegos.</p>
        )}
      </section>
    </main>
  );
};
export default Landing;
