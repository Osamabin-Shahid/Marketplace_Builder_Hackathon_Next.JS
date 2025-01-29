"use client"

import { useRouter } from "next/navigation"
import { Product } from "../../../../types/products"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import { addToCart } from "@/app/cartAction/action"
import Swal from "sweetalert2"
import { Any } from "next-sanity"

// Helper function to add item to the cart
function HandleAddToCart(e: React.MouseEvent, product: Product) {
  e.preventDefault();
  Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${product.productName}  added to cart`,
        showConfirmButton: false,
        timer: 1000,
      });
      addToCart(product)

}

// Helper function to handle Buy Now action
function buyNow(product: Product, router: Any) {
  addToCart( product)
  router.push("/checkout")
}

interface ProductDetailClientProps {
  product: Product
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const router = useRouter()

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.productName}
                height={500}
                width={500}
                className="rounded-lg shadow-md" />
            )}

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest py-2">
                {product.productName}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font mt-8 font-medium mb-1">
                {product.productName}
              </h1>

              <div className="rating rating-sm py-2">
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
              </div>

              <p className="leading-relaxed mt-8">
                {product.description}
              </p>

              <div className="divider py-5"></div>

              <div className="flex mt-10">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {`Rs.${product.price}`}
                </span>
              </div>

              {/* Add to Cart and Buy Now Buttons */}
              <div className="flex mt-10 space-x-4">
                <button
                  onClick={(e) => HandleAddToCart(e,product)}
                  className="flex justify-center items-center gap-4 font-semibold text-white text-lg bg-myColor2 shadoow-md border-0 py-3 px-6 
                  hover:bg-transparent hover:text-myColor1 hover:shadow-lg duration-300 
                 rounded"
                >
                  Add to Cart
                </button>

                <button
                  onClick={() => buyNow(product, router)}
                  className="flex justify-center items-center gap-4 font-semibold text-white text-lg bg-green-500 shadoow-md border-0 py-3 px-6 
                  hover:bg-transparent hover:text-green-500 hover:shadow-lg duration-300 
                 rounded"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
