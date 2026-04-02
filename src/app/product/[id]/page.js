import Image from "next/image";
import { products } from "@/data/products";

export default async function ProductPage({ params }) {

  const { id } = await params;

  const product = products.find(
    (p) => p.id.toLowerCase().trim() === id.toLowerCase().trim()
  );

  if (!product) {
    return (
      <main className="bg-black text-white min-h-screen flex items-center justify-center">
        <h1>Produto não encontrado</h1>
      </main>
    );
  }

  return (
    <main className="bg-black text-white min-h-screen p-10">

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <Image 
          src={product.image} 
          width={500} 
          height={500} 
          alt={product.name}
          priority
        />

        <div>
          <h1 className="text-3xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-gray-400 mb-6">
            {product.price}
          </p>

          <p className="mb-8">
            {product.description}
          </p>

          <button className="bg-white text-black px-6 py-3 font-semibold">
            COMPRAR
          </button>
        </div>

      </div>

    </main>
  );
}