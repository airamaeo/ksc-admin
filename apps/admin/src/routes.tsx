import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import { Layout } from './components/layout/layout'

function DashboardPage() {
    return (
        <Layout>
            <div>
                <h2>Dashboard</h2>
                <p>Welcome to KSC Admin.</p>
            </div>
        </Layout>
    )
}

function ProductsPage() {
    return (
        <Layout>
            <div>
                <h2>Products</h2>
                <p>This is the products page.</p>
            </div>
        </Layout>
    )
}

const rootRoute = createRootRoute()

const dashboardRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: DashboardPage,
})

const productsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/products',
    component: ProductsPage,
})

const routeTree = rootRoute.addChildren([dashboardRoute, productsRoute])

export const router = createRouter({
    routeTree,
})