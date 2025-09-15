import { createFileRoute } from "@tanstack/react-router";
type GameParams = {
  gameId: number;
};
export const Route = createFileRoute("/_games/$gameId")({
  component: RouteComponent,
  params:{
    parse:(raw)=>({gameId:Number(raw.gameId)}),
    stringify:(params)=>({gameId:String(params.gameId)})
  }
});

function RouteComponent() {
  const { gameId }: GameParams = Route.useParams();
  return (
    <>
      <div>Hello "/$gameId"! I'm game {gameId}</div>
    </>
  );
}
