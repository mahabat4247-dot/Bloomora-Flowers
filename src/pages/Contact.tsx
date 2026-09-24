import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div>
      {/* Header */}
      <div className="bg-cream py-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">Contact Us</h1>
          <p className="text-gray-600 mt-2">We'd love to hear from you</p>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-serif font-bold mb-8">Get in Touch</h2>
            
            <div className="space-y-8 mb-12">
              <div>
                <h3 className="font-serif font-bold text-lg mb-2">Address</h3>
                <p className="text-gray-600">123 Flower Street<br />New York, NY 10001<br />United States</p>
              </div>

              <div>
                <h3 className="font-serif font-bold text-lg mb-2">Phone</h3>
                <p className="text-gray-600">(555) 123-4567</p>
              </div>

              <div>
                <h3 className="font-serif font-bold text-lg mb-2">Email</h3>
                <p className="text-gray-600">hello@bloomora.com</p>
              </div>

              <div>
                <h3 className="font-serif font-bold text-lg mb-2">Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9 AM - 6 PM<br />
                  Saturday: 10 AM - 5 PM<br />
                  Sunday: 11 AM - 4 PM
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden h-64 md:h-full bg-gray-200">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Map would load here
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-serif font-bold mb-8">Send us a Message</h2>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
