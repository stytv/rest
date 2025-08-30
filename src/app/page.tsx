import { PizzaSlice } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-white to-amber-glow/20">
      {/* Header */}
      <header className="bg-wine text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <PizzaSlice className="w-8 h-8 text-gold" />
              <h1 className="text-2xl font-serif font-bold">Visconti Pizzeria Kebab</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#menu" className="hover:text-gold transition-colors">Menu</a>
              <a href="#about" className="hover:text-gold transition-colors">About</a>
              <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-serif font-bold text-charcoal mb-6">
            Authentic Italian Pizza & Halal Kebabs
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the perfect blend of traditional Italian flavors and authentic halal cuisine in the heart of Pavia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-wine hover:bg-wine-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Order on JustEat
            </button>
            <button className="bg-gold hover:bg-gold-dark text-charcoal px-8 py-3 rounded-lg font-semibold transition-colors">
              Order on Deliveroo
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <PizzaSlice className="w-8 h-8 text-charcoal" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Authentic Italian Pizza</h3>
              <p className="text-gray-600">Made with traditional recipes and the finest ingredients</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-wine rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🥙</span>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Halal Kebabs</h3>
              <p className="text-gray-600">Fresh, certified halal meat prepared with care</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-charcoal">🚚</span>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick delivery through JustEat and Deliveroo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-16 bg-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-serif font-bold mb-8">Opening Hours</h3>
          <div className="text-xl">
            <p className="mb-2">Open Daily</p>
            <p className="text-gold font-semibold">10:00 - 01:00</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wine text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <PizzaSlice className="w-6 h-6 text-gold" />
            <span className="text-lg font-serif font-semibold">Visconti Pizzeria Kebab</span>
          </div>
          <p className="text-wine-light">Authentic flavors, delivered fresh to your door</p>
        </div>
      </footer>
    </div>
  )
}