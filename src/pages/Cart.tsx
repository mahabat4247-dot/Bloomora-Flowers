import { Link } from 'react-router-dom'
import { CartContextType } from '../types'
import { products } from '../data/products'

interface CartProps {
  cart: CartContextType
}

export default function Cart({ cart }: CartProps) {
  const getProduct = (productId: string) => 
    products.find(p => p.id === productId)

  const getSize = (productId: string, sizeId: string) => {
    const product = getProduct(productId)
    return product?.sizes.find(s => s.id === sizeId)
  }

  const subtotal = cart.items.reduce((sum, item) => {
    const product = getProduct(item.productId)
    const size = getSize(item.productId, item.sizeId)
    const price = (product?.price || 0) + (size?.priceModifier || 0)
    return sum + price * item.quantity
  }, 0)

  const shipping = subtotal > 75 ? 0 : 8.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  if (cart.items.length === 0) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="text-3xl font-serif font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Add some beautiful flowers to get started</p>
        <Link to="/shop" className="btn-primary">
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div>
      {/* Header */}
      <div className="bg-cream py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-serif font-bold">Shopping Cart</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {cart.items.map(item => {
                const product = getProduct(item.productId)
                const size = getSize(item.productId, item.sizeId)
                
                if (!product || !size) return null

                const itemPrice = product.price + size.priceModifier
                const itemTotal = itemPrice * item.quantity

                return (
                  <div key={`${item.productId}-${item.sizeId}`} className="flex gap-6 pb-6 border-b">
                    {/* Image */}
                    <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      <Link 
                        to={`/product/${product.slug}`}
                        className="font-serif font-bold text-lg hover:text-gray-600"
                      >
                        {product.name}
                      </Link>
                      <p className="text-gray-600 text-sm">{size.name}</p>
                      <p className="text-gray-600 text-sm mt-2">${itemPrice} each</p>

                      {/* Quantity */}
                      <div className="flex items-center gap-2 mt-4">
                        <button
                          onClick={() => cart.updateQuantity(item.productId, item.quantity - 1)}
                          className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
                        >
                          −
                        </button>
                        <span className="px-3 py-1">{item.quantity}</span>
                        <button
                          onClick={() => cart.updateQuantity(item.productId, item.quantity + 1)}
                          className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Price & Remove */}
                    <div className="text-right">
                      <p className="font-serif font-bold text-lg">${itemTotal.toFixed(2)}</p>
                      <button
                        onClick={() => cart.removeFromCart(item.productId)}
                        className="text-rose hover:text-red-600 text-sm mt-4"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8">
              <Link to="/shop" className="btn-secondary">
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-cream p-8 rounded-lg sticky top-20">
              <h2 className="font-serif font-bold text-xl mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              {subtotal > 0 && subtotal <= 75 && (
                <p className="text-sm text-green-600 mb-4">
                  Add ${(75 - subtotal).toFixed(2)} for free shipping!
                </p>
              )}

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between font-serif font-bold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="btn-primary w-full">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
