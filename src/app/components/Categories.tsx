import Image from "next/image";
import React from "react";

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
            <Image
              src="/about3.jpeg"
              alt="Category 1"
              className="w-[300px] h-[400px] "
              width={300}
              height={300}
            />
          </div>
          <div className="carousel-item p-2">
            <Image
              src="/about2.jpeg"
              alt="Category 2"
              className="w-[300px] h-[400px]"
              width={300}
              height={300}
            />
          </div>
          <div className="carousel-item p-2">
            <Image
              src="/belt2.jpeg"
              alt="Category 3"
              className="w-[300px] h-[400px]"
              width={300}
              height={300}
            />
          </div>
          <div className="carousel-item p-2">
            <Image
              src="/shoes5.jpeg"
              alt="Category 4"
              className="w-[300px] h-[400px]"
              width={300}
              height={300}
            />
          </div>
          <div className="carousel-item p-2">
            <Image
              src="/about1.jpeg"
              alt="Category 5"
              className="w-[300px] h-[400px]"
              width={300}
              height={300}
            />
          </div>
          <div className="carousel-item p-2">
            <Image
              src="/shoes2.jpeg"
              alt="Category 6"
              className="w-[300px] h-[400px]"
              width={300}
              height={300}
            />
          </div>
          <div className="carousel-item p-2">
            <Image
              src="/belt4.jpeg"
              alt="Category 6"
              className="w-[300px] h-[400px]"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
