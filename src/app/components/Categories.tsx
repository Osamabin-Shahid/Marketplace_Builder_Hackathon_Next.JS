import React from 'react'

const Categories = () => {
  return (
    <div>
      <div className="px-5 py-10">
        {/* Heading */}
        <div className="text-center my-20 mb-20">
          <h1 className="scroll-m-20 text-4xl text-black font-extrabold tracking-tight lg:text-5xl">
            Our Categories
          </h1>

          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
          </div>
        </div>

        {/* Carousel */}
        <div className="carousel carousel-end  rounded-box mx-auto px-4 sm:px-10 md:px-16 lg:px-32">
          <div className="carousel-item p-2">
            <img src="/about3.jpg" alt="Category 1" className='w-[300px] h-[400px] '/>
          </div>
          <div className="carousel-item p-2">
            <img
              src="/about2.jpg"
              alt="Category 2" 
              className='w-[300px] h-[400px]'/>
          </div>
          <div className="carousel-item p-2">
            <img
              src="/belt2.jpg"
              alt="Category 3"
              className='w-[300px] h-[400px]' />
          </div>
          <div className="carousel-item p-2">
            <img
              src="/shoes5.jpg"
              alt="Category 4" 
              className='w-[300px] h-[400px]'/>
          </div>
          <div className="carousel-item p-2">
            <img 
            src="/about1.jpg" 
            alt="Category 5" 
            className='w-[300px] h-[400px]' />
          </div>
          <div className="carousel-item p-2">
            <img 
            src="/shoes2.jpg" 
            alt="Category 6"
            className='w-[300px] h-[400px]'
            />
          </div>
          <div className="carousel-item p-2">
          <img 
            src="/belt4.jpg" 
            alt="Category 6"
            className='w-[300px] h-[400px]'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories


// import React from 'react'

// const Categories = () => {
//   return (
//     <div>
//        <div className="px-5 py-10">
//         {/* Heading */}
//     <div className="text-center my-20 mb-20">
//       <h1 className="scroll-m-20 text-4xl text-black font-extrabold tracking-tight lg:text-5xl">
//         Our Categories
//       </h1>
      
//       <div className="flex mt-6 justify-center">
//         <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
//       </div>
//     </div>

//     <div className="carousel carousel-end rounded-box mx-32">
//   <div className="carousel-item">
//     <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Drink" />
//   </div>
//   <div className="carousel-item">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
//       alt="Drink" />
//   </div>
//   <div className="carousel-item">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
//       alt="Drink" />
//   </div>
//   <div className="carousel-item">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
//       alt="Drink" />
//   </div>
//   <div className="carousel-item">
//     <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Drink" />
//   </div>
//   <div className="carousel-item">
//     <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Drink" />
//   </div>
//   <div className="carousel-item">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
//       alt="Drink" />
//   </div>
// </div>


//     </div>
//     </div>
//   )
// }

// export default Categories
