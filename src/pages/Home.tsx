import { useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import OccasionCard from '../components/OccasionCard'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import { useFavorites } from '../hooks/useFavorites'

const occasions = [
  {
    name: 'Birthday',
    image: 'https://images.unsplash.com/photo-1517995104123-1ca00aa101ff?w=500&h=400&fit=crop'
  },
  {
    name: 'Anniversary',
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&h=400&fit=crop'
  },
  {
    name: 'Love & Romance',
    image: 'https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=500&h=400&fit=crop'
  },
  {
    name: 'Congratulations',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&h=400&fit=crop'
  },
  {
    name: 'Thank You',
    image: 'https://images.unsplash.com/photo-1563241527-3004b2e69d84?w=500&h=400&fit=crop'
  },
  {
    name: 'Sympathy',
    image: 'https://images.unsplash.com/photo-1471181286135-23311fab4633?w=500&h=400&fit=crop'
  },
  {
    name: 'Just Because',
    image: 'https://images.unsplash.com/photo-1582794543139-c6e6f3fb310b?w=500&h=400&fit=crop'
  },
]

const features = [
  {
    icon: '🌸',
    title: 'Fresh Daily',
    description: 'All our flowers are hand-picked daily from the finest sources'
  },
  {
    icon: '🎨',
    title: 'Handcrafted Bouquets',
    description: 'Each arrangement is carefully designed by our expert florists'
  },
  {
    icon: '🚚',
    title: 'Same-Day Delivery',
    description: 'Order before 2 PM for same-day delivery in your area'
  },
  {
    icon: '💯',
    title: '100% Happiness Guarantee',
    description: 'We stand behind every arrangement with our satisfaction guarantee'
  },
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    review: 'The bouquet was even more beautiful than the photos. My mother absolutely loved it!'
  },
  {
    name: 'Michael Chen',
    rating: 5,
    review: 'Amazing customer service and the flowers arrived fresh. Highly recommend!'
  },
  {
    name: 'Emily Rodriguez',
    rating: 5,
    review: 'Ordered for my anniversary and my husband said it was perfect. Will order again!'
  },
  {
    name: 'James Wilson',
    rating: 5,
    review: 'The same-day delivery saved my day. Professional and reliable service.'
  },
]

export default function Home() {
  const navigate = useNavigate()
  const { toggleFavorite, isFavorite } = useFavorites()
  const bestSellers = products.slice(0, 8)

  return (
    <div>
      {/* Hero */}
      <Hero />

      {/* Shop by Occasion */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
            Shop by Occasion
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {occasions.map((occasion) => (
              <OccasionCard
                key={occasion.name}
                name={occasion.name}
                image={occasion.image}
                onClick={() => navigate('/shop')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
            Best Sellers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onFavoriteToggle={toggleFavorite}
                isFavorite={isFavorite(product.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
            Why Choose Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="font-serif text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
            Customer Reviews
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-8">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.review}"</p>
                <p className="font-serif font-bold">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            Bring More Flowers Into Your Life
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Join our flower list for seasonal inspiration, new collections, and special offers.
          </p>
          
          <form onSubmit={(e) => {
            e.preventDefault()
            alert('Thank you for subscribing!')
          }} className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
