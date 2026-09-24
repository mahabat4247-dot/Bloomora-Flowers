import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ProductCard from './ProductCard'
import { Product } from '../types'

const mockProduct: Product = {
  id: '1',
  slug: 'test-flower',
  name: 'Test Flower',
  description: 'A beautiful test flower',
  price: 49,
  category: 'roses',
  colors: ['red'],
  image: 'https://example.com/image.jpg',
  rating: 4.5,
  reviewCount: 100,
  inStock: true,
  sizes: [
    { id: 's1', name: 'Standard', priceModifier: 0 },
    { id: 's2', name: 'Deluxe', priceModifier: 20 },
  ],
}

const renderProductCard = (product = mockProduct) => {
  return render(
    <BrowserRouter>
      <ProductCard product={product} />
    </BrowserRouter>
  )
}

describe('ProductCard', () => {
  it('renders product name', () => {
    renderProductCard()
    expect(screen.getByText('Test Flower')).toBeInTheDocument()
  })

  it('renders product price', () => {
    renderProductCard()
    expect(screen.getByText('$49')).toBeInTheDocument()
  })

  it('renders product image', () => {
    renderProductCard()
    const img = screen.getByAltText('Test Flower')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://example.com/image.jpg')
  })

  it('renders rating and review count', () => {
    renderProductCard()
    expect(screen.getByText('(100)')).toBeInTheDocument()
  })

  it('renders Add to Bag button', () => {
    renderProductCard()
    expect(screen.getByText('Add to Bag')).toBeInTheDocument()
  })

  it('renders original price when available', () => {
    const productWithSale = { ...mockProduct, originalPrice: 59 }
    renderProductCard(productWithSale)
    expect(screen.getByText('$59')).toBeInTheDocument()
  })

  it('renders badge when available', () => {
    const productWithBadge = { ...mockProduct, badge: 'bestseller' as const }
    renderProductCard(productWithBadge)
    expect(screen.getByText('Best Seller')).toBeInTheDocument()
  })
})
