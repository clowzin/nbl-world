import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`}>
      
      <div className="group bg-zinc-900 rounded-2xl p-4 hover:scale-105 transition duration-300 hover:shadow-2xl hover:shadow-black/50">

        <div className="overflow-hidden rounded-xl">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-xl group-hover:scale-110 transition duration-500"
          />
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-400 mt-1">{product.price}</p>
        </div>

        <button className="mt-4 w-full bg-white text-black py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
          Comprar
        </button>

      </div>

    </Link>
  );
}