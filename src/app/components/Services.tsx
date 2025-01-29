import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { GiTakeMyMoney } from "react-icons/gi";

const Services = () => {
  return (
    <div>
      <section className="text-myColor1 bg-myColor4 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20">
            <h1 className="scroll-m-20 text-4xl text-black font-extrabold tracking-tight lg:text-5xl">
              Our Services
            </h1>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {/* Free Delivery Service */}
            <div className="p-4 md:w-1/3 w-full flex flex-col text-center items-center hover:scale-110 transition-transform">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <TbTruckDelivery className='w-[100px] h-[100px] text-black' />
              </div>
              <div className="flex-grow">
                <h2 className="text-indigo-500 text-2xl title-font font-bold mb-3">
                  Free delivery
                </h2>
                <p className="scroll-m-20 text-lg font-semibold tracking-tight capitalize">
                  Free delivery on orders above $1000
                </p>
              </div>
            </div>

            {/* Customer Service */}
            <div className="p-4 md:w-1/3 w-full flex flex-col text-center items-center hover:scale-110 transition-transform">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <RiCustomerService2Line className='w-[100px] h-[100px] text-black' />
              </div>
              <div className="flex-grow">
                <h2 className="text-indigo-500 text-2xl title-font font-bold mb-3">
                  24/7 Customer Service
                </h2>
                <p className="scroll-m-20 text-lg font-semibold tracking-tight capitalize">
                  For queries and questions, feel free to contact us.
                </p>
              </div>
            </div>

            {/* Money Back Guarantee */}
            <div className="p-4 md:w-1/3 w-full flex flex-col text-center items-center hover:scale-110 transition-transform">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <GiTakeMyMoney className='w-[100px] h-[100px] text-black' />
              </div>
              <div className="flex-grow">
                <h2 className="text-indigo-500 text-2xl title-font font-bold mb-3">
                  Money Back Guarantee
                </h2>
                <p className="scroll-m-20 text-lg font-semibold tracking-tight capitalize">
                  Get a money-back guarantee on damaged or defective products.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Services


// import React from 'react'
// import { TbTruckDelivery } from "react-icons/tb";
// import { RiCustomerService2Line } from "react-icons/ri";
// import { GiTakeMyMoney } from "react-icons/gi";

// const Services = () => {
//   return (
//     <div>
//       <section className="text-myColor1 bg-myColor4 body-font">
//   <div className="container px-5 py-10 mx-auto">
//     <div className="text-center mb-20">
//       <h1 className="scroll-m-20 text-4xl text-black font-extrabold tracking-tight lg:text-5xl">
//         Our Services
//       </h1>
      
//       <div className="flex mt-6 justify-center">
//         <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
//       </div>
//     </div>
//     <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
//       <div className="p-4 md:w-1/3 flex flex-col text-center items-center  hover:scale-110">
//         <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
//          <TbTruckDelivery className='w-[100px] h-[100px] text-black'/>
//         </div>
//         <div className="flex-grow">
//           <h2 className="  text-indigo-500 text-2xl title-font font-bold mb-3">
//             Free delivery
//           </h2>
//           <p className="scroll-m-20 text-lg font-semibold tracking-tight capitalize">
//             Free delivery on order above $1000
//           </p>
          
//         </div>
//       </div>
//       <div className="p-4 md:w-1/3 flex flex-col text-center items-center  hover:scale-110">
//         <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
//           <RiCustomerService2Line  className='w-[100px] h-[100px] text-black'/>
//         </div>
//         <div className="flex-grow">
//           <h2 className="text-indigo-500 text-2xl title-font font-bold mb-3">
//             24/7 Customer Service
//           </h2>
//           <p className="scroll-m-20 text-lg font-semibold tracking-tight capitalize">
//            For Queries and Questions please feel free to contact us.
//           </p>
         
//         </div>
//       </div>
//       <div className="p-4 md:w-1/3 flex flex-col text-center items-center hover:scale-110">
//         <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
//           <GiTakeMyMoney  className='w-[100px] h-[100px] text-black'/>
//         </div>
//         <div className="flex-grow ">
//           <h2 className="text-indigo-500 text-2xl title-font font-bold mb-3 ">
//             Money Back Guarantee
//           </h2>
//           <p className="scroll-m-20 text-lg font-semibold tracking-tight capitalize \">
//             Get Money Back guarantee on Damaged or defective products.
//           </p>
          
//         </div>
//       </div>
//     </div>
   
//   </div>
// </section>

//     </div>
//   )
// }

// export default Services
