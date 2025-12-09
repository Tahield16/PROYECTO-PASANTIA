import { createFileRoute } from '@tanstack/react-router'
import {EditGame} from '../../../components/EditGame/EditGame'
type GameParams = {
  gameId: string; 
};
export const Route = createFileRoute('/_games/$gameId/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  const {gameId }: GameParams = Route.useParams();
  const gameIdNumber=Number(gameId)
  return (
  
      <EditGame id={gameIdNumber}/>
    
  );
}

