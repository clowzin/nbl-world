import Image from "next/image";

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
          <a href="#">Shop</a>
          <a href="#">About</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="text-center py-32">
        <h2 className="text-6xl font-bold mb-6">
          GLOBAL STREETWEAR
        </h2>

        <p className="text-gray-400 mb-8">
          Peças essenciais para o seu estilo.
        </p>

        <button className="bg-white text-black px-8 py-3 font-semibold">
          EXPLORE COLLECTION
        </button>
      </section>

      {/* PRODUTOS */}
      <section className="px-8 pb-24">
        <h3 className="text-xl font-semibold mb-8">COLLECTION</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <Image src="/hoodie.png" width={400} height={400} alt="Hoodie"/>
            <h4 className="mt-4">NBL Essential Hoodie</h4>
            <p className="text-gray-400">R$ 249,90</p>
          </div>

          <div>
            <Image src="/tshirt.png" width={400} height={400} alt="T-shirt"/>
            <h4 className="mt-4">NBL Basic Tee</h4>
            <p className="text-gray-400">R$ 129,90</p>
          </div>

          <div>
            <Image src="/pants.png" width={400} height={400} alt="Pants"/>
            <h4 className="mt-4">NBL Street Pants</h4>
            <p className="text-gray-400">R$ 199,90</p>
          </div>

        </div>
      </section>

    </main>
  );
}