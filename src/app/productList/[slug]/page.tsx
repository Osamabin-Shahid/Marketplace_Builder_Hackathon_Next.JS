import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Product } from "../../../../types/products";
import ProductDetailClient from "./ProductDetailClient";

// Fetch product details from the Sanity client
async function fetchProductDetail(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      productName,
      description,
      type,
      image,
      price,
    }`,
    { slug }
  );
}

interface ProductDetailProps {
  params: { slug: string };
}

// Make the page component async
const ProductDetail = async ({ params }: ProductDetailProps) => {
  const { slug } = params;
  
  // Fetch product details
  const product = await fetchProductDetail(slug);

  return <ProductDetailClient product={product} />;
};

export default ProductDetail;


// import { client } from "@/sanity/lib/client"
// import { groq } from "next-sanity"
// import { Product } from "../../../../types/products"
// import ProductDetailClient from "./ProductDetailClient"

// async function fetchProductDetail(slug: string): Promise<Product> {
//   return client.fetch(
//     groq`*[_type == "product" && slug.current == $slug][0]{
//       _id,
//       productName,
//       description,
//       type,
//       image,
//       price,
//     }`, { slug }
//   )
// }

// interface ProductDetailProps {
//   params: { slug: string }
// }

// export default async function ProductDetail({ params }: ProductDetailProps) {
//   const { slug } = params
//   const product = await fetchProductDetail(slug)

//   return (
//     <ProductDetailClient product={product} />
//   )
// }

