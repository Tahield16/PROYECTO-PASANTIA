import { createFileRoute } from "@tanstack/react-router";
import { GameDetails } from "../../../components/GameDetails/GameDetails";
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
  return (
    <>
      <GameDetails _id={parsedGameId} />
    </>
  );
}
