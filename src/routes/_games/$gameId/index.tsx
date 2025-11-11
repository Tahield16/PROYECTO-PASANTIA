import { createFileRoute } from "@tanstack/react-router";
import { GameDetails } from "../../../components/GameDetails/GameDetails";
import { useFetchGameById } from "../../../hooks/useFetchGameById";
import { Spinner } from "../../../components/Spinner/Spinner";
type GameParams = {
  gameId: number;
};
//useParams
export const Route = createFileRoute("/_games/$gameId/")({
  component: RouteComponent,
 
});

function RouteComponent() {
  const { gameId }: GameParams = Route.useParams();
  const parsedGameId=Number(gameId);
   const {isLoading}=  useFetchGameById(parsedGameId);
   
  return isLoading ? <Spinner message="Cargando juego" /> :<GameDetails />
  
    
   
}
