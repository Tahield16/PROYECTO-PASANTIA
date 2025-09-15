import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/crear')({
  component: RouteComponent,
})

function RouteComponent() {
  const crear="crear"
  return <div>Hello {crear}</div>
}
