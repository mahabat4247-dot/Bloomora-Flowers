import { useState, useEffect } from 'react'
import { CartItem } from '../types'

const CART_STORAGE_KEY = 'bloomora_cart'

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([])

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(CART_STORAGE_KEY)
    if (saved) {
      try {
        setItems(JSON.parse(saved))
      } catch (error) {
        console.error('Failed to load cart:', error)
      }
    }
  }, [])

  // Save to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addToCart = (productId: string, sizeId: string, quantity: number) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(
        item => item.productId === productId && item.sizeId === sizeId
      )
      
      if (existingItem) {
        return prevItems.map(item =>
          item.productId === productId && item.sizeId === sizeId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      
      return [...prevItems, { productId, sizeId, quantity }]
    })
  }

  const removeFromCart = (productId: string) => {
    setItems(prevItems =>
      prevItems.filter(item => item.productId !== productId)
    )
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    
    setItems(prevItems =>
      prevItems.map(item =>
        item.productId === productId
          ? { ...item, quantity }
          : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  return {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  }
}
