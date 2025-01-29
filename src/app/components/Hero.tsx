import React from 'react';
import { SheetDemo } from "./signin";

const Hero = () => {
  return (
    <div>
      <div className="hero min-h-[100vh] custom-img mb-20">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md mx-auto px-4">
            <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl text-yellow-400">
              Fashion Hub
            </h1>
            <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight sm:text-lg md:text-xl lg:text-2xl">
              Where fashion meets comfort, and your dreams meet reality - Shop with us and Experience the difference
            </p>
            
            <SheetDemo/>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default Hero;
