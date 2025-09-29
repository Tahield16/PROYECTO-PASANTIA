import { createFileRoute } from '@tanstack/react-router'
import  Favorites  from '../components/Favorites/Favorites'
export const Route = createFileRoute('/favoritos')({
  component: Favorites,
})

