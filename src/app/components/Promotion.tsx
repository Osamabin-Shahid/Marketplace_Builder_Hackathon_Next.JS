import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaShopify } from "react-icons/fa";

const Promotion = () => {
  return (
    <div className="px-5 py-10">
      {/* Heading */}
      <div className="text-center my-20 mb-20">
        <h1 className="scroll-m-20 text-4xl text-black font-extrabold tracking-tight lg:text-5xl">
          Our Promotions
        </h1>

        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
        </div>
      </div>

      {/* Promo Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Promo 1 */}
        <div className="hero min-h-[60vh] promo1 relative">
          <div className="hero-overlay bg-opacity-50" />
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Flash <span className="text-yellow-400">Sale!</span>
              </h1>
              <h1 className="uppercase mb-5 scroll-m-20 text-xl font-semibold tracking-tight">
                Get upto{" "}
                <span className="mb-5 scroll-m-20 text-5xl font-bold tracking-tight text-yellow-400">
                  50%
                </span>{" "}
                Off
              </h1>
              <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight capitalize">
                Buy Now to get 50% OFF on season variant.
              </p>
              <Link href={'/shirt'}><Button className="outline outline-1 rounded-full font-extrabold text-white text-lg hover:bg-yellow-400 hover:text-red-700">
                <FaShopify className="animate-bounce" /> BUY NOW!!
              </Button></Link>
            </div>
          </div>
        </div>

        {/* Promo 2 */}
        <div className="hero min-h-[60vh] promo2 relative">
          <div className="hero-overlay bg-opacity-50" />
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Flash <span className="text-yellow-400">Sale!</span>
              </h1>
              <h1 className="uppercase mb-5 scroll-m-20 text-xl font-semibold tracking-tight">
                Get upto{" "}
                <span className="mb-5 scroll-m-20 text-5xl font-bold tracking-tight text-yellow-400">
                  30%
                </span>{" "}
                Off
              </h1>
              <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight capitalize">
                Buy Now to get 30% OFF on season variant.
              </p>
             <Link href={'/accesories'}> <Button className="outline outline-1 rounded-full font-extrabold text-white text-lg hover:bg-yellow-400 hover:text-red-700">
                <FaShopify className="animate-bounce" /> BUY NOW!!
              </Button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;






// import { Button } from "@/components/ui/button";
// import React from "react";
// import { FaShopify } from "react-icons/fa";

// const Promotion = () => {
//   return (
//     <div className="px-5 py-10">
//         {/* Heading */}
//     <div className="text-center my-20 mb-20">
//       <h1 className="scroll-m-20 text-4xl text-black font-extrabold tracking-tight lg:text-5xl">
//         Our Promotions
//       </h1>
      
//       <div className="flex mt-6 justify-center">
//         <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
//       </div>
//     </div>

//     {/* Promo 1 */}

//     <div className="grid grid-cols-2 gap-6 ">
//       <div className="hero min-h-[60vh] promo1 ">
//         <div className="hero-overlay bg-opacity-50  "></div>
//         <div className="hero-content text-neutral-content text-center">
//           <div className="max-w-md">
//             <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ">
//               Flash <span className="text-yellow-400">Sale!</span> 
//             </h1>
//             <h1 className="uppercase mb-5 scroll-m-20 text-xl font-semibold tracking-tight">
//               Get upto{" "}
//               <span className=" mb-5 scroll-m-20 text-5xl font-bold tracking-tight text-yellow-400">
//                 50%
//               </span>{" "}
//               Off
//             </h1>
//             <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight capatilize  ">
//               Buy Now to get 50% OFF on season variant.
//             </p>
//             <Button className="outline outline-1 rounded-full font-extrabold text-white text-lg hover:bg-yellow-400 hover:text-red-700">
//               <FaShopify className="animate-bounce " /> BUY NOW!!
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Promo 2  */}

//       <div className="hero min-h-[60vh] promo2">
//         <div className="hero-overlay bg-opacity-50  "></div>
//         <div className="hero-content text-neutral-content text-center">
//           <div className="max-w-md">
//             <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ">
//               Flash <span className="text-yellow-400">Sale!</span> 
//             </h1>
//             <h1 className="uppercase mb-5 scroll-m-20 text-xl font-semibold tracking-tight">
//               Get upto{" "}
//               <span className=" mb-5 scroll-m-20 text-5xl font-bold tracking-tight text-yellow-400">
//                 30%
//               </span>{" "}
//               Off
//             </h1>
//             <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight capatilize  ">
//               Buy Now to get 30% OFF on season variant.
//             </p>
//             <Button className="outline outline-1 rounded-full font-extrabold text-white text-lg hover:bg-yellow-400 hover:text-red-700">
//               <FaShopify className="animate-bounce " /> BUY NOW!!
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Promotion;
