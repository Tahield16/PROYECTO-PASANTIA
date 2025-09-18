import { createFileRoute } from '@tanstack/react-router'
type GameParams = {
  gameId: string; 
};
export const Route = createFileRoute('/_games/$gameId/edit')({
  component: EditGame,
})

function EditGame() {
  const {gameId }: GameParams = Route.useParams();
  const gameIdNumber=Number(gameId)
  return (
    <div>
      <h1>You'll be able to edit {gameIdNumber} on the future</h1>
      <h1>hello from /$gamesId/edit</h1>
    </div>
  );
}

