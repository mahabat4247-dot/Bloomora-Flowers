export default function About() {
  return (
    <div>
      {/* Header */}
      <div className="bg-cream py-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">About Bloomora</h1>
        </div>
      </div>

      {/* Story */}
      <section className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Bloomora was born from a passion for flowers and a desire to bring joy to people's lives. 
              Founded in 2018, we started as a small flower shop with a simple mission: to create beautiful, 
              high-quality arrangements that brighten every occasion.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Today, we've grown into a trusted flower delivery service serving thousands of customers across 
              the country. But our values remain the same: quality, creativity, and customer satisfaction above all else.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Every bouquet is carefully crafted by our expert florists using the freshest seasonal flowers. 
              We believe that flowers have the power to express what words cannot, and we're honored to be part 
              of your special moments.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden h-96">
            <img 
              src="https://images.unsplash.com/photo-1455849318743-dd233dd46d60?w=500&h=600&fit=crop"
              alt="Our shop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Sarah', 'Jessica', 'Marcus'].map((name, i) => (
              <div key={i} className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${1570720000000 + i}?w=300&h=300&fit=crop`}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif font-bold text-lg">{name}</h3>
                <p className="text-gray-600">Lead Florist</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-custom py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Our Values</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4">🌱</div>
            <h3 className="font-serif font-bold text-xl mb-3">Sustainable</h3>
            <p className="text-gray-600">We source our flowers responsibly and use eco-friendly packaging.</p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl mb-4">❤️</div>
            <h3 className="font-serif font-bold text-xl mb-3">Passionate</h3>
            <p className="text-gray-600">Our team loves flowers and cares deeply about every arrangement.</p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl mb-4">⭐</div>
            <h3 className="font-serif font-bold text-xl mb-3">Excellence</h3>
            <p className="text-gray-600">We're committed to delivering the highest quality flowers and service.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
