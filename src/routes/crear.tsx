import { createFileRoute } from '@tanstack/react-router'
import {CreateGame} from '../components/CreateGame/CreateGame'
export const Route = createFileRoute('/crear')({
  component: RouteComponent,
})

function RouteComponent() {
  return <CreateGame />
}
