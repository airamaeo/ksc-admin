import { createFileRoute } from '@tanstack/react-router'

function ProductsPage() {
  return (
      <div>
        <h2>Products</h2>
        <p>This is the products page.</p>
      </div>
  )
}

export const Route = createFileRoute('/products')({
  component: ProductsPage,
})