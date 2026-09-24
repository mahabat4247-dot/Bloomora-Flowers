import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-custom py-24 text-center">
      <h1 className="text-7xl font-serif font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-3xl font-serif font-bold mb-4">Oops! Page Not Found</h2>
      <p className="text-gray-600 text-lg mb-8">
        The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/" className="btn-primary">
          Go Home
        </Link>
        <Link to="/shop" className="btn-secondary">
          Continue Shopping
        </Link>
      </div>

      <div className="mt-16 text-6xl">
        🌸
      </div>
    </div>
  )
}
