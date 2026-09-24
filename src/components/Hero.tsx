import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=1200&h=600&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white">
        <h1 className="font-serif text-6xl md:text-7xl font-bold mb-6">
          Flowers for life's<br />beautiful moments.
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
          Thoughtfully designed bouquets made with fresh seasonal flowers and delivered with care.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link 
            to="/shop"
            className="btn-primary"
          >
            Shop Flowers
          </Link>
          
          <button className="btn-secondary">
            Explore Collections
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
