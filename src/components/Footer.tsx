import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Shop */}
          <div>
            <h3 className="font-serif text-lg mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/shop" className="hover:text-white transition">All Flowers</Link></li>
              <li><Link to="/shop" className="hover:text-white transition">Best Sellers</Link></li>
              <li><Link to="/shop" className="hover:text-white transition">Roses</Link></li>
              <li><Link to="/shop" className="hover:text-white transition">Seasonal Flowers</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-serif text-lg mb-4">Help</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
              <li><a href="#" className="hover:text-white transition">Delivery Information</a></li>
              <li><a href="#" className="hover:text-white transition">Flower Care</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-serif text-lg mb-4">About</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-white transition">Our Story</Link></li>
              <li><a href="#" className="hover:text-white transition">Our Florists</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-serif text-lg mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li><a href="https://instagram.com" className="hover:text-gray-300 transition text-sm">Instagram</a></li>
              <li><a href="https://facebook.com" className="hover:text-gray-300 transition text-sm">Facebook</a></li>
              <li><a href="https://pinterest.com" className="hover:text-gray-300 transition text-sm">Pinterest</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {currentYear} Bloomora Flowers. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
