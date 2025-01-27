"use client"
import { createContext, useContext, ReactNode, useState } from "react"
import ShoppingCart from "../components/ShoppingCart"


type ShoppingCartProvider = {
  children: ReactNode
}
type CartItem = {
  id: number,
  quantity: number
}
type ShoppingCartContext = {
  cartQuantity: number
  cartItems: CartItem[]
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)
export function useShoppingCart() {
  return (
    useContext(ShoppingCartContext)
  )
}


export function ShoppingCartProvider({ children }: ShoppingCartProvider) {

  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartQuantity = cartItems.reduce((quantity, item) =>
    item.quantity + quantity, 0)

  const getItemQuantity = (id: number) => {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  const increaseCartQuantity = (id: number) => {
    setCartItems(curritems => {
      if (curritems.find(item => item.id === id) == null) {
        return [...curritems, { id, quantity: 1 }]
      } else {
        return curritems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  const decreaseCartQuantity = (id: number) => {
    setCartItems(curritems => {
      if (curritems.find(item => item.id === id)?.quantity === 1) {
        return curritems.filter(item => item.id !== id)
      } else {
        return curritems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  const removeFromCart = (id: number) => {
    setCartItems(curritems => {
      return curritems.filter(item => item.id !== id)
    })
  }

  const clearCart = () => {
    setCartItems([]); // set the cart items to an empty array
  };




  return (
    <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartItems, cartQuantity, clearCart }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}