import type { Game } from "../../types/gameType";
import InfiniteScroll from "react-infinite-scroll-component";
import { GameCardLink } from "../CardGame/CardLink/GameCardLink";
import { Spinner } from "../Spinner/Spinner";
import styles from './CustomInfiniteScroll.module.scss'

interface CustomInfiniteScrollProps {
  games: Game[];
  nextFn: () => void;
  hasMore: boolean;
  isLoading:boolean;
}

export const CustomInfiniteScroll = ({
  games,
  nextFn,
  hasMore,
  isLoading
}: CustomInfiniteScrollProps) => {
  return (
    <>
      {games.length > 0 ? (
        <InfiniteScroll
          dataLength={games.length}
          next={nextFn}
          hasMore={hasMore}
          loader={<h4>Cargando nuevos juegos...</h4>}
          className={styles.gamesContainer}
        >
          {games.map((game) => (
            <GameCardLink key={game.id} {...game} />
          ))}
        </InfiniteScroll>
      ) : isLoading ? (
        <Spinner message={"Cargando juegos"} />
      ) : (
        <p>No se han encontrado juegos.</p>
      )}
    </>
  );
};
