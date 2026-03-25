import { createFileRoute } from '@tanstack/react-router'
import {SidebarLayout} from "../components/layout/sidebar-layout.tsx";

function ProductsPage() {
    return (
        <SidebarLayout title="Products">
            <div>
                <p>This is the products page.</p>
            </div>
        </SidebarLayout>
    )
}

export const Route = createFileRoute('/products')({
    component: ProductsPage,
})