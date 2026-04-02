import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-neutral-800">
        <h1 className="text-xl tracking-widest font-semibold">
          NBL® WORLD
        </h1>

        <nav className="space-x-8 text-sm">
          <a href="#">Home</a>
          <Link href="/shop">Shop</Link>
          <a href="#">About</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="text-center py-32">
        <h2 className="text-6xl font-bold mb-6">
          IDENTIDADE EM PERFORMANCE
        </h2>

        <p className="text-gray-400 mb-8">
          Peças essenciais para o seu estilo.
        </p>

        <Link href="/shop">
          <button className="bg-white text-black px-8 py-3 font-semibold">
            Explorar
          </button>
        </Link>
      </section>

      {/* PRODUTOS */}
      <section className="px-8 pb-24">
        <h3 className="text-xl font-semibold mb-8">COLLECTION</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </section>

    </main>
  );
}