import { createFileRoute } from '@tanstack/react-router'
import { Layout } from '../components/layout/layout'

function ProductsPage() {
    return (
        <Layout title="Products">
            <div>
                <p>This is the products page.</p>
            </div>
        </Layout>
    )
}

export const Route = createFileRoute('/products')({
    component: ProductsPage,
})