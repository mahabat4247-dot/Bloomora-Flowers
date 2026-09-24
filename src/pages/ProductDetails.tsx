import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import { CartContextType, FavoritesContextType } from '../types'

interface ProductDetailsProps {
  cart: CartContextType
  favorites: FavoritesContextType
}

export default function ProductDetails({ cart, favorites }: ProductDetailsProps) {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('s1')
  const [added, setAdded] = useState(false)

  const product = products.find(p => p.slug === slug)

  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="text-3xl font-serif font-bold mb-4">Product not found</h1>
        <button 
          onClick={() => navigate('/shop')}
          className="btn-primary"
        >
          Back to Shop
        </button>
      </div>
    )
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const handleAddToCart = () => {
    cart.addToCart(product.id, selectedSize, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-cream py-4">
        <div className="container-custom text-sm text-gray-600">
          <button onClick={() => navigate('/')} className="hover:text-gray-900">Home</button>
          <span className="mx-2">/</span>
          <button onClick={() => navigate('/shop')} className="hover:text-gray-900">Shop</button>
          <span className="mx-2">/</span>
          <span>{product.name}</span>
        </div>
      </div>

      {/* Product */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden h-96 lg:h-auto">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div>
            <h1 className="text-4xl font-serif font-bold mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < Math.round(product.rating) ? 'fill-current' : 'fill-gray-300'}`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600">({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <span className="text-4xl font-serif font-bold">${product.price}</span>
              {product.originalPrice && (
                <span className="ml-4 text-gray-500 line-through">${product.originalPrice}</span>
              )}
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            <div className="mb-6">
              <label className="block font-serif font-bold mb-3">Select Size</label>
              <div className="flex gap-4">
                {product.sizes.map(size => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`px-6 py-3 border-2 rounded-lg font-semibold transition ${
                      selectedSize === size.id
                        ? 'border-gray-900 bg-gray-900 text-white'
                        : 'border-gray-300 text-gray-900 hover:border-gray-900'
                    }`}
                  >
                    {size.name}
                    {size.priceModifier > 0 && <span className="text-sm ml-2">+${size.priceModifier}</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block font-serif font-bold mb-3">Quantity</label>
              <div className="flex items-center border border-gray-300 rounded-lg w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  −
                </button>
                <span className="px-6 py-2 font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="btn-primary flex-1"
              >
                {added ? '✓ Added to Bag' : 'Add to Bag'}
              </button>
              <button
                onClick={() => favorites.toggleFavorite(product.id)}
                className={`px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold transition ${
                  favorites.isFavorite(product.id)
                    ? 'bg-rose text-white border-rose'
                    : 'text-gray-900 hover:border-gray-900'
                }`}
              >
                ♥
              </button>
            </div>

            {/* Info */}
            <div className="space-y-4 text-sm text-gray-600">
              <p>✓ Fresh flowers delivered with care</p>
              <p>✓ Free delivery on orders over $75</p>
              <p>✓ 100% satisfaction guarantee</p>
            </div>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      {relatedProducts.length > 0 && (
        <section className="bg-cream py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-serif font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(p => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onFavoriteToggle={favorites.toggleFavorite}
                  isFavorite={favorites.isFavorite(p.id)}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
