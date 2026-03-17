import { createFileRoute } from '@tanstack/react-router'

function DashboardPage() {
  return (
      <div>
        <h2>Dashboard</h2>
        <p>Welcome to KSC Admin.</p>
      </div>
  )
}

export const Route = createFileRoute('/')({
  component: DashboardPage,
})
