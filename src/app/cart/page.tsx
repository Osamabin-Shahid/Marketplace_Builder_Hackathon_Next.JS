"use client"

import React, { useEffect, useState } from "react"
import { Product } from "../../../types/products"
import Swal from "sweetalert2"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import { getCart, removeFromCart, updateCartQuantity } from "../cartAction/action"
import { useRouter } from "next/navigation"

const CartPage = () => {
  const [cartItems, setcartItems] = useState<Product[]>([])

  useEffect(() => {
    setcartItems(getCart())
  }, [])

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure you want to remove this item from the cart?",
      showCancelButton: true,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id)
        setcartItems(getCart())
        Swal.fire("Item removed from cart", "", "success")
      }
    })
  }

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      updateCartQuantity(id, quantity)
      const updatedItems = cartItems.map((item) =>
        item._id === id ? { ...item, inventory: quantity } : item
      )
      setcartItems(updatedItems)
    }
  }

  const handleIncrement = (id: string) => {
    const updatedItems = [...cartItems]
    const productIndex = updatedItems.findIndex((item) => item._id === id)
    const product = updatedItems[productIndex]

    if (product) {
      updatedItems[productIndex] = {
        ...product,
        inventory: product.inventory + 1
      }
      setcartItems(updatedItems)
      updateCartQuantity(id, product.inventory + 1)
    }
  }

  const handleDecrement = (id: string) => {
    const updatedItems = [...cartItems]
    const productIndex = updatedItems.findIndex((item) => item._id === id)
    const product = updatedItems[productIndex]

    if (product && product.inventory > 1) {
      updatedItems[productIndex] = {
        ...product,
        inventory: product.inventory - 1
      }
      setcartItems(updatedItems)
      updateCartQuantity(id, product.inventory - 1)
    }
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0)
  }

  const router = useRouter()

  const handledProceed = () => {
    Swal.fire({
      title: "Proceed to checkout?",
      text: "Please review your cart before proceeding to checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    })
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Your order has been successfully Proceeding to checkout", "", "success")

          router.push("/checkout")
          setcartItems([])
        }
      })
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-xl text-gray-500">
          Your cart is empty.
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item._id} className="flex flex-col md:flex-row justify-between items-center bg-white shadow-lg p-4 rounded-lg space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.productName}
                    width={500}
                    height={500}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                )}
                <div>
                  <h3 className="text-lg font-semibold">{item.productName}</h3>
                  <p className="text-sm text-gray-500">Price: Rs.{item.price}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  className="bg-gray-200 text-gray-700 rounded-full p-2"
                  onClick={() => handleDecrement(item._id)}
                >
                  -
                </button>
                <input
                  type="text"
                  value={item.inventory}
                  onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value))}
                  className="w-12 text-center border rounded-md p-2"
                />
                <button
                  className="bg-gray-200 text-gray-700 rounded-full p-2"
                  onClick={() => handleIncrement(item._id)}
                >
                  +
                </button>
              </div>

              <button
                className="bg-red-600 text-white rounded-3xl duration-300 hover:text-red-800 hover:bg-transparent shadow-lg px-4 py-2"
                onClick={() => handleRemove(item._id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between items-center mt-8 p-4 bg-gray-50 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold">Total: Rs.{calculateTotal().toFixed(2)}</h2>
        <button
          onClick={handledProceed}
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-transparent hover:text-blue-600 duration-300 shadow-lg transition mt-4 md:mt-0"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

export default CartPage
