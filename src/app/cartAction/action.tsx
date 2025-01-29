import { Product } from "../../../types/products";

// Helper to check if we're on the client-side
const isClient = typeof window !== "undefined"; // This checks if we're in the browser

export const addToCartAction = (product: Product) => {
  if (!isClient) return; // Exit if we're not in the browser

  const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');

  const existingProduct = cart.findIndex(item => item._id === product._id);

  if (existingProduct > -1) {
    cart[existingProduct].inventory += 1;
  } else {
    cart.push({
      ...product,
      inventory: 1, // Add with initial inventory
    });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
};

export const removeFromCart = (productId: string) => {
  if (!isClient) return; // Exit if we're not in the browser

  let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');

  cart = cart.filter(item => item._id !== productId);

  localStorage.setItem('cart', JSON.stringify(cart));
};

export const updateCartQuantity = (productId: string, quantity: number) => {
  if (!isClient) return; // Exit if we're not in the browser

  const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');

  const productIndex = cart.findIndex(item => item._id === productId);

  if (productIndex > -1) {
    cart[productIndex].inventory = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
  }
};

export const getCart = (): Product[] => {
  if (!isClient) return []; // Return an empty array if we're not in the browser

  return JSON.parse(localStorage.getItem('cart') || '[]');
};


// import { Product } from "../../../types/products";


// export const addToCartAction = (product : Product) => {
//   const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]');

//   const existingProduct = cart.findIndex(item => item._id === product._id);

//   if (existingProduct > -1) {
//     cart[existingProduct].inventory += 1 
//   }

//     else {
//       cart.push({
//         ...product, inventory : 1
//       })
//     }

//     localStorage.setItem('cart', JSON.stringify(cart))
//   }

//     export const removeFromCart = (productId : string) => {
//       let cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]');

//       cart = cart.filter(item => item._id !== productId);
//       localStorage.setItem('cart', JSON.stringify(cart))
//     }

//       export const updateCartQuantity = (productId : string, quantity : number) => {
//         const cart : Product[] =JSON.parse(localStorage.getItem('cart') || '[]');

//         const productIndex = cart.findIndex(item => item._id === productId);

//         if(productIndex > -1) {
//           cart [productIndex].inventory = quantity
//           localStorage.setItem('cart', JSON.stringify(cart))
//         }
//       }      

//       export const getCart = () : Product[] => {
//         return JSON.parse(localStorage.getItem('cart') || '[]')
//       }


