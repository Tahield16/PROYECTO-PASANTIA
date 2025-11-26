import { useFetchGameList } from "../../hooks/useFetchGames";
import { useFetchGameList as useFetchGamesServer } from "../../hooks/useFetchGamesServer";
import { useFetchGenres } from "../../hooks/useFetchGenres";
import { useGamesServerStore } from "../../store/gamesServerStore";
import { useGamesStore } from "../../store/gamesStoreApi";
import { CustomInfiniteScroll } from "../CustomInfiiteScroll/CustomInfiniteScroll";
import { FiltersContainer } from "../Filters/FiltersContainer";
import { TitleTextContainer } from "../TitleTextContainer/TitleTextContainer";
import { useFetchTags } from "../../hooks/useFetchTags";
import styles from "./Landing.module.scss";
const Landing = () => {
  const { games, filters, set } = useGamesStore();
  const { gamesServer, filtersServer, setServer, hasMore } = useGamesServerStore();
  useFetchGenres();
  const fetch = useFetchGameList();
  const fetchServer = useFetchGamesServer();
  useFetchTags();

  
  const fetchNextGameList = () => {
    set({ filters: { ...filters, page: filters.page + 1 } });
  };
  const fetchNextServerGameList = () => {
    setServer({ filtersServer: { ...filtersServer, page: filtersServer.page + 1 } });
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
        {filters.source == "API" && (
          <CustomInfiniteScroll
            games={games}
            hasMore={true}
            isLoading={fetch.isLoading}
            nextFn={fetchNextGameList}
          />
        )}
        {filters.source =="DATABASE" &&(
          <CustomInfiniteScroll
          games={gamesServer}
          hasMore={hasMore}
          isLoading={fetchServer.isLoading}
          nextFn={fetchNextServerGameList}
           />
        )}
      </section>
    </main>
  );
};
export default Landing;
