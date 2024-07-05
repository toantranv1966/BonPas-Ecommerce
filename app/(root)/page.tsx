import ProductList from '@/components/shared/product/product-list'
import sampleData from '@/lib/sample-data'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="space-y-8">
        <h2 className="h2-bold">Latest Products</h2>
        <ProductList data={sampleData.products} />
      </div>
    </main>
  )
}
