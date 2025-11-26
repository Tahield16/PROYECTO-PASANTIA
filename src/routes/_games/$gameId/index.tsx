import { createFileRoute } from "@tanstack/react-router";
import { GameDetails } from "../../../components/GameDetails/GameDetails";
import { Spinner } from "../../../components/Spinner/Spinner";
import { useFetchGameById } from "../../../hooks/useFetchGameById";
import { useFilterStore } from "../../../store/filterStore";
import { useFetchGameServerById } from "../../../hooks/useFetchGameServerById";
import { useSelectedGameStore } from "../../../store/selectedGameStore";
import { useSelectedGameServerStore } from "../../../store/selectedGameServerStore";
type GameParams = {
  gameId: number;
};
//useParams
export const Route = createFileRoute("/_games/$gameId/")({
  component: RouteComponent,
  validateSearch:(search)=>({source:search.source})
  
});

function RouteComponent() {
  const { gameId }: GameParams = Route.useParams();
  const {source}=Route.useSearch();
  // const { filters } = useFilterStore();
  const parsedGameId = Number(gameId);
  if (source == "API" || !source) {
    const { isLoading } = useFetchGameById(parsedGameId);
    const {game}=useSelectedGameStore()
 
    return isLoading ? <Spinner message="Cargando juego" /> : <GameDetails game={game} />;
  }
  if (source == "DATABASE") {
    const { isLoading } = useFetchGameServerById(parsedGameId);

    const {game}=useSelectedGameServerStore();

    return isLoading ? <Spinner message="Cargando juego" /> : <GameDetails game={game} />;
  }
  return "Juego no encontrado"
}
