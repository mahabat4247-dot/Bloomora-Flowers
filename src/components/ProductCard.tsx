import { Link } from 'react-router-dom'
import { Product } from '../types'

interface ProductCardProps {
  product: Product
  onFavoriteToggle?: (productId: string) => void
  isFavorite?: boolean
}

export default function ProductCard({ 
  product, 
  onFavoriteToggle,
  isFavorite = false 
}: ProductCardProps) {
  return (
    <Link to={`/product/${product.slug}`}>
      <div className="product-card group">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden bg-gray-100">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          {product.badge && (
            <div className="absolute top-3 right-3">
              <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                product.badge === 'bestseller' 
                  ? 'bg-rose text-white' 
                  : 'bg-blue-500 text-white'
              }`}>
                {product.badge === 'bestseller' ? 'Best Seller' : 'New'}
              </span>
            </div>
          )}

          {/* Favorite Button */}
          {onFavoriteToggle && (
            <button
              onClick={(e) => {
                e.preventDefault()
                onFavoriteToggle(product.id)
              }}
              className="absolute top-3 left-3 p-2 bg-white rounded-full hover:bg-gray-100 transition"
              aria-label="Add to favorites"
            >
              <svg 
                className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                fill={isFavorite ? 'currentColor' : 'none'}
                stroke={isFavorite ? 'none' : 'currentColor'}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-serif font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-3">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-current' : 'fill-gray-300'}`}
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">({product.reviewCount})</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2 mb-4">
            <span className="font-serif text-2xl font-bold text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          {/* CTA Button */}
          <button className="btn-primary w-full">
            Add to Bag
          </button>
        </div>
      </div>
    </Link>
  )
}
