export interface Product {
  id: string
  slug: string
  name: string
  description: string
  price: number
  originalPrice?: number
  category: 'roses' | 'tulips' | 'sunflowers' | 'peonies' | 'lavender' | 'mixed'
  occasion?: string
  colors: string[]
  image: string
  rating: number
  reviewCount: number
  badge?: 'bestseller' | 'new'
  inStock: boolean
  sizes: Size[]
}

export interface Size {
  id: string
  name: string
  priceModifier: number
}

export interface CartItem {
  productId: string
  quantity: number
  sizeId: string
}

export interface CartContextType {
  items: CartItem[]
  addToCart: (productId: string, sizeId: string, quantity: number) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
}

export interface FavoritesContextType {
  favorites: string[]
  toggleFavorite: (productId: string) => void
  isFavorite: (productId: string) => boolean
}
