export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-neutral-800">
        <h1 className="text-xl tracking-widest font-semibold">
          NBL WORLD
        </h1>

        <nav className="space-x-8 text-sm">
          <a href="#" className="hover:text-gray-400 transition">Home</a>
          <a href="#" className="hover:text-gray-400 transition">Shop</a>
          <a href="#" className="hover:text-gray-400 transition">About</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <h2 className="text-6xl font-bold leading-tight mb-6">
          GLOBAL<br />STREETWEAR
        </h2>

        <p className="text-gray-400 max-w-xl mb-8">
          Seleção exclusiva de sneakers e peças streetwear do mundo inteiro.
        </p>

        <button className="bg-white text-black px-8 py-3 text-sm font-semibold tracking-wide hover:bg-gray-300 transition">
          EXPLORE
        </button>
      </section>

      {/* PRODUTOS */}
      <section className="px-8 pb-24">
        <h3 className="text-xl font-semibold mb-8 tracking-wide">
          FEATURED
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="group cursor-pointer">
            <div className="h-60 bg-neutral-800 mb-4 rounded-lg group-hover:opacity-80 transition"></div>
            <h4 className="font-medium">Nike Dunk Low</h4>
            <p className="text-gray-400 text-sm">R$ 799,90</p>
          </div>

          <div className="group cursor-pointer">
            <div className="h-60 bg-neutral-800 mb-4 rounded-lg group-hover:opacity-80 transition"></div>
            <h4 className="font-medium">Adidas Campus</h4>
            <p className="text-gray-400 text-sm">R$ 699,90</p>
          </div>

          <div className="group cursor-pointer">
            <div className="h-60 bg-neutral-800 mb-4 rounded-lg group-hover:opacity-80 transition"></div>
            <h4 className="font-medium">Jordan 1 High</h4>
            <p className="text-gray-400 text-sm">R$ 1.199,90</p>
          </div>

        </div>
      </section>

    </main>
  )
}