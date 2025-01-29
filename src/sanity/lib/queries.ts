import { groq } from "next-sanity";

export const allProducts = groq`
    *[_type == "product"]`
    


export const accessories = groq`
      *[_type == "product" && category == "Accesories"]`
     

export const pant = groq`
   *[_type == "product" && category == "Pant"]`
  

export const shirt = groq`
   *[_type == "product" && category == "Shirt"] `


   export const shoes = groq`
   *[_type == "product" && category == "Shoes"]`