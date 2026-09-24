import { describe, it, expect, beforeEach, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useCart } from './useCart'

describe('useCart', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.clearAllMocks()
  })

  it('initializes with empty cart', () => {
    const { result } = renderHook(() => useCart())
    expect(result.current.items).toEqual([])
  })

  it('adds item to cart', () => {
    const { result } = renderHook(() => useCart())
    
    act(() => {
      result.current.addToCart('product-1', 'size-1', 1)
    })

    expect(result.current.items).toHaveLength(1)
    expect(result.current.items[0]).toEqual({
      productId: 'product-1',
      sizeId: 'size-1',
      quantity: 1,
    })
  })

  it('increases quantity when adding same product', () => {
    const { result } = renderHook(() => useCart())
    
    act(() => {
      result.current.addToCart('product-1', 'size-1', 1)
      result.current.addToCart('product-1', 'size-1', 2)
    })

    expect(result.current.items).toHaveLength(1)
    expect(result.current.items[0].quantity).toBe(3)
  })

  it('removes item from cart', () => {
    const { result } = renderHook(() => useCart())
    
    act(() => {
      result.current.addToCart('product-1', 'size-1', 1)
      result.current.removeFromCart('product-1')
    })

    expect(result.current.items).toHaveLength(0)
  })

  it('updates quantity', () => {
    const { result } = renderHook(() => useCart())
    
    act(() => {
      result.current.addToCart('product-1', 'size-1', 1)
      result.current.updateQuantity('product-1', 5)
    })

    expect(result.current.items[0].quantity).toBe(5)
  })

  it('removes item when quantity is 0', () => {
    const { result } = renderHook(() => useCart())
    
    act(() => {
      result.current.addToCart('product-1', 'size-1', 1)
      result.current.updateQuantity('product-1', 0)
    })

    expect(result.current.items).toHaveLength(0)
  })

  it('clears cart', () => {
    const { result } = renderHook(() => useCart())
    
    act(() => {
      result.current.addToCart('product-1', 'size-1', 1)
      result.current.addToCart('product-2', 'size-2', 2)
      result.current.clearCart()
    })

    expect(result.current.items).toHaveLength(0)
  })
})
