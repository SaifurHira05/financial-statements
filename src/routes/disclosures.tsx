import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/disclosures')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/disclosures"!</div>
}
