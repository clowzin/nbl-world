import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Shop() {
  return (
    <main className="bg-black text-white min-h-screen p-10">

      <h1 className="text-3xl font-bold mb-10">Shop</h1>

      <div className="grid md:grid-cols-3 gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </main>
  );
}