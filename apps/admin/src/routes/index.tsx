import { createFileRoute } from '@tanstack/react-router'
import {Layout} from "../components/layout/layout.tsx";

function DashboardPage() {
  return (
      <Layout  title="Dashboard">
          <div>
              <p>Welcome to KSC Admin Panel</p>
          </div>
      </Layout>
  )
}

export const Route = createFileRoute('/')({
  component: DashboardPage,
})
