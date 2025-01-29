"use client";

import { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { accessories,} from "@/sanity/lib/queries";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import Swal from "sweetalert2";
import { addToCart } from "../cartAction/page";


const Accessories = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const response: Product[] = await client.fetch(accessories);
      setProducts(response);                                   
    }
    fetchProducts();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
        position : "top-end",
        icon : "success",
        title : `${product.productName}  added to cart`,
        showConfirmButton : false,
        timer : 1000,
    })
    addToCart(product);
    
  };

  return (
    <div>
      <div className="text-center my-5 mb-10">
        <h1 className="scroll-mt-20 text-4xl text-black font-extrabold tracking-tight lg:text-5xl">
          Accessories
        </h1>

        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
        </div>
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="card card-compact bg-base-100 w-full shadow-xl"
          >
            <Link href={`/productList/${product.slug.current}`}>
              <figure className="relative w-full h-64">
                {product.image && (
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.productName}
                    width={400}
                    height={400}
                    className="rounded-t-lg w-full"
                  />
                )}
              </figure>

              <div className="card-body">
                <h2 className="card-title text-xl font-semibold">
                  {product.productName}
                </h2>
                <p className="text-3xl font-extrabold px-4">{`Rs.${product.price}`}</p>

                <button
                className="flex justify-center items-center gap-4 font-semibold text-white text-lg bg-myColor2 shadoow-md border-0 py-3 px-6 
                            hover:bg-transparent hover:text-myColor1 hover:shadow-lg duration-300 
                            rounded"
                            
                onClick={(e) => handleAddToCart(e, product)}
              >
                <FaShoppingCart className="text-3xl"/>Add To Cart 
              </button>
              
              </div>

              
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accessories;
