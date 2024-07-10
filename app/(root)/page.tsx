import ProductList from '@/components/shared/product/product-list'
import { getLatestProducts } from '@/lib/actions/product.actions'

export default async function Home() {
  const lastestProducts = await getLatestProducts()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="space-y-8">
        <ProductList title="Newest Arrivals" data={lastestProducts} />
      </div>
    </main>
  )
}
