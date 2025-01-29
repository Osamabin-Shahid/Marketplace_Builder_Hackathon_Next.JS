import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { Product } from "../../../../types/products"
import ProductDetailClient from "./ProductDetailClient"

async function fetchProductDetail(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      productName,
      description,
      type,
      image,
      price,
    }`, { slug }
  )
}

interface ProductDetailProps {
  params: { slug: string }
}

export default async function ProductDetail({ params }: ProductDetailProps) {
  const { slug } = params
  const product = await fetchProductDetail(slug)

  return (
    <ProductDetailClient product={product} />
  )
}



// "use client"

// import { client } from "@/sanity/lib/client"
// import { groq } from "next-sanity"
// import { Product } from "../../../../types/products"
// import Image from "next/image"
// import { urlFor } from "@/sanity/lib/image"
// import { useRouter } from "next/navigation"

// // Helper function to add item to the cart
// function addToCart(product: Product) {
//   // Check if cart exists in localStorage
//   let cart = JSON.parse(localStorage.getItem("cart") || "[]")
  
//   // Add product to the cart
//   cart.push(product)

//   // Save cart back to localStorage
//   localStorage.setItem("cart", JSON.stringify(cart))
// }

// // Helper function to handle Buy Now action
// function buyNow(product: Product, router: any) {
//   // Add product to the cart
//   addToCart(product)
  
//   // Redirect to the checkout page
//   router.push("/checkout")
// }

// interface ProductDetailProps {
//   params: Promise<{ slug: string }>
// }

// async function fetchProductDetail(slug: string): Promise<Product> {
//   return client.fetch(
//     groq`*[_type == "product" && slug.current == $slug][0]{
//       _id,
//       productName,
//       description,
//       type,
//       image,
//       price,
//       }`, { slug }
//   )
// }

// export default async function ProductDetail({ params }: ProductDetailProps) {
//   const { slug } = await params
//   const product = await fetchProductDetail(slug)

//   const router = useRouter()

//   return (
//     <div>
//       <section className="text-gray-600 body-font overflow-hidden">
//         <div className="container px-5 py-24 mx-auto">
//           <div className="lg:w-4/5 mx-auto flex flex-wrap">
//             {product.image && (
//               <Image
//                 src={urlFor(product.image).url()}
//                 alt={product.productName}
//                 height={500}
//                 width={500}
//                 className="rounded-lg shadow-md" />
//             )}

//             <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//               <h2 className="text-sm title-font text-gray-500 tracking-widest py-2">
//                 {product.productName}
//               </h2>
//               <h1 className="text-gray-900 text-3xl title-font mt-8font-medium mb-1">
//                 {product.productName}
//               </h1>

//               <div className="rating rating-sm py-2">
//                 <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
//                 <input
//                   type="radio"
//                   name="rating-5"
//                   className="mask mask-star-2 bg-orange-400"
//                   defaultChecked />
//                 <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
//                 <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
//                 <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
//               </div>

//               <p className="leading-relaxed mt-8">
//                 {product.description}
//               </p>

//               <div className="divider py-5"></div>

//               <div className="flex mt-10">
//                 <span className="title-font font-medium text-2xl text-gray-900">
//                   {`Rs.${product.price}`}
//                 </span>
//               </div>

//               {/* Add to Cart and Buy Now Buttons */}
//               <div className="flex mt-10 space-x-4">
//                 <button
//                   onClick={() => addToCart(product)}
//                   className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-800 transition duration-300"
//                 >
//                   Add to Cart
//                 </button>

//                 <button
//                   onClick={() => buyNow(product, router)}
//                   className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-800 transition duration-300"
//                 >
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
