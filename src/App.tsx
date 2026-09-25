import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { useCart } from './hooks/useCart'
import { useFavorites } from './hooks/useFavorites'

export default function App() {
  const cart = useCart()
  const favorites = useFavorites()
  const [isCartOpen, setIsCartOpen] = useState(false)

  const cartCount = cart.items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <Router>
      <div className="min-h-screen bg-cream flex flex-col">
        <Header 
          cartCount={cartCount}
          onCartClick={() => setIsCartOpen(!isCartOpen)}
          favoritesCount={favorites.favorites.length}
        />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop favorites={favorites} />} />
            <Route 
              path="/product/:slug" 
              element={<ProductDetails cart={cart} favorites={favorites} />} 
            />
            <Route 
              path="/cart" 
              element={<Cart cart={cart} />} 
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}
