import Image from "next/image"

const products = {
  hoodie: {
    name: "NBL Essential Hoodie",
    price: "R$ 249,90",
    image: "/hoodie.png",
    desc: "Hoodie premium com design minimalista, conforto extremo e estilo global."
  },
  tshirt: {
    name: "NBL Essential T-Shirt",
    price: "R$ 149,90",
    image: "/tshirt.png",
    desc: "Camiseta básica premium com tecido leve e caimento perfeito."
  },
  pants: {
    name: "NBL Essential Pants",
    price: "R$ 349,90",
    image: "/pants.png",
    desc: "Calça confortável com corte moderno, ideal para uso diário e streetwear."
  }
}

export default async function ProductPage({ params }) {

  const { id } = await params
const product = products[id]

  // Se não existir o produto
  if (!product) {
    return (
      <main className="bg-black text-white min-h-screen flex items-center justify-center">
        <h1>Produto não encontrado</h1>
      </main>
    )
  }

  return (
    <main className="bg-black text-white min-h-screen p-10">

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <Image 
          src={product.image} 
          width={500} 
          height={500} 
          alt={product.name}
          loading="eager"
        />

        <div>
          <h1 className="text-3xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-gray-400 mb-6">
            {product.price}
          </p>

          <p className="mb-8">
            {product.desc}
          </p>

          <button className="bg-white text-black px-6 py-3 font-semibold">
            COMPRAR
          </button>
        </div>

      </div>

    </main>
  )
}