import { Product } from "../../../types/products";


const isClient = typeof window !== "undefined";

// Add to cart function
export const addToCart = (product: Product) => {
  if (!isClient) return; 
  
  const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');

  const existingProduct = cart.findIndex(item => item._id === product._id);

  if (existingProduct > -1) {
    // Product exists, update inventory
    cart[existingProduct].inventory += 1;
  } else {
    // Product doesn't exist, add it to the cart
    cart.push({
      ...product,
      inventory: 1, // Set inventory to 1 if it's a new product
    });
  }

  // Save the updated cart back to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
};

// Remove from cart function
export const removeFromCart = (productId: string) => {
  if (!isClient) return; // Ensure this runs only on the client-side
  
  let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');

  // Filter out the product by its ID
  cart = cart.filter(item => item._id !== productId);

  // Save the updated cart back to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
};

// Update product quantity in the cart
export const updateCartQuantity = (productId: string, quantity: number) => {
  if (!isClient) return; 

  const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');

  // Find the product by its ID
  const productIndex = cart.findIndex(item => item._id === productId);

  if (productIndex > -1) {
    // Product found, update inventory
    cart[productIndex].inventory = quantity;

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  }
};

// Get the current cart from localStorage
export const getCart = (): Product[] => {
  if (!isClient) return []; // Return an empty array if running on the server
  
  return JSON.parse(localStorage.getItem('cart') || '[]');
};


// import { Product } from "../../../types/products";


// export const addToCart = (product : Product) => {
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


