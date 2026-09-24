import { useState, useEffect } from 'react'

const FAVORITES_STORAGE_KEY = 'bloomora_favorites'

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([])

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(FAVORITES_STORAGE_KEY)
    if (saved) {
      try {
        setFavorites(JSON.parse(saved))
      } catch (error) {
        console.error('Failed to load favorites:', error)
      }
    }
  }, [])

  // Save to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (productId: string) => {
    setFavorites(prevFavorites =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter(id => id !== productId)
        : [...prevFavorites, productId]
    )
  }

  const isFavorite = (productId: string) => {
    return favorites.includes(productId)
  }

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  }
}
