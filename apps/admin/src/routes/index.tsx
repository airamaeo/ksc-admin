import { createFileRoute } from '@tanstack/react-router'
import {SidebarLayout} from "../components/layout/sidebar-layout.tsx";

function DashboardPage() {
  return (
      <SidebarLayout  title="Dashboard">
          <div>
              <p>Welcome to KSC Admin Panel</p>
          </div>
      </SidebarLayout>
  )
}

export const Route = createFileRoute('/')({
  component: DashboardPage,
})
