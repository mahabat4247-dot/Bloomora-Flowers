import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

interface HeaderProps {
  cartCount: number
  onCartClick: () => void
  favoritesCount: number
}

export default function Header({ cartCount, onCartClick, favoritesCount }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleNavigation = (path: string) => {
    navigate(path)
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-gray-900 text-white text-center py-2 text-sm">
        Fresh flowers delivered with love • Free delivery on orders over $75
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="text-2xl font-serif font-bold text-gray-900">
              Bloomora Flowers
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-gray-900 transition">Home</Link>
              <Link to="/shop" className="text-gray-700 hover:text-gray-900 transition">Shop</Link>
              <Link to="/about" className="text-gray-700 hover:text-gray-900 transition">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900 transition">Contact</Link>
            </nav>

            {/* Icons */}
            <div className="hidden md:flex items-center space-x-6">
              <button className="btn-icon" aria-label="Search">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              <Link 
                to="/shop" 
                className="btn-icon relative"
                aria-label="Favorites"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {favoritesCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-rose text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {favoritesCount}
                  </span>
                )}
              </Link>

              <button 
                onClick={onCartClick}
                className="btn-icon relative"
                aria-label="Shopping cart"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-rose text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden btn-icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t space-y-2">
              <button 
                onClick={() => handleNavigation('/')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-cream"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('/shop')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-cream"
              >
                Shop
              </button>
              <button 
                onClick={() => handleNavigation('/about')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-cream"
              >
                About
              </button>
              <button 
                onClick={() => handleNavigation('/contact')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-cream"
              >
                Contact
              </button>
              <Link 
                to="/cart"
                className="block px-4 py-2 text-gray-700 hover:bg-cream"
              >
                Cart ({cartCount})
              </Link>
            </nav>
          )}
        </div>
      </header>
    </>
  )
}
