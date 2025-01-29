import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

import about1 from "../../../public/shoes4.jpg";
import about2 from "../../../public/belt2.jpg";
import about3 from "../../../public/about3.jpg";

function AboutUs() {
  return (
    <section className="bg-myColor1 px-4 md:px-8 lg:px-32 flex flex-col lg:flex-row items-center lg:justify-between py-10 lg:py-20">
      {/* Text Section */}
      <div className="text-white w-full lg:w-[50%]">
        <h1 className="text-[20px] md:text-[32px] font-bold text-yellow-400 font-greatVibes">
          About Us
        </h1>

        <h1 className="text-[28px] md:text-[40px] lg:text-[50px] font-bold mt-2 lg:mt-4 leading-snug">
          <span className="text-yellow-400">We</span> Sell Best Quality and Affordable
          Product
        </h1>

        <p className="text-[14px] md:text-[16px] font-normal mt-4 lg:mt-6 leading-relaxed">
          Welcome to MENS APPAREL, where style meets comfort. We’re a men’s apparel brand offering a curated collection of high-quality shirts, pants, shoes, and accessories for the modern man. Whether you're dressing up for work or dressing down for the weekend, we have something for every occasion.</p>

        <h2 className='text-[20px] py-5 md:text-[24px] font-bold text-yellow-400 font-greatVibes'>Our Mission</h2>
        <p>Our goal is simple: to provide fashionable, durable, and affordable clothing that helps men look and feel their best. From classic designs to the latest trends, we ensure our products deliver both style and comfort.</p>

        <h2 className='text-[20px] py-5 md:text-[24px] font-bold text-yellow-400 font-greatVibes'>Why Choose us?</h2>


        <ul className=" lg:mt-2 space-y-2">
          <li className="text-[14px] md:text-[16px] flex items-start">
            <FaCheck className="text-[#FF9F0D] mt-1 mr-3" />
            Premium Quality: Only the best materials for durability and comfort.
          </li>
          <li className="text-[14px] md:text-[16px] flex items-start">
            <FaCheck className="text-[#FF9F0D] mt-1 mr-3" />
            Affordable Prices: Fashion that fits your budget.
          </li>
          <li className="text-[14px] md:text-[16px] flex items-start">
            <FaCheck className="text-[#FF9F0D] mt-1 mr-3" />
            Trendy & Timeless: A perfect blend of classic and modern styles.
          </li>
          <li className="text-[14px] md:text-[16px] flex items-start">
            <FaCheck className="text-[#FF9F0D] mt-1 mr-3" />
            Customer First: We’re dedicated to providing an exceptional shopping experience.
          </li>
        </ul>

       
      </div>

      {/* Image Section */}
      <div className="mt-8 lg:mt-0 w-full lg:w-[45%]  flex flex-col justify-center items-center lg:items-start ">
        <Image
          src={about1}
          alt="About Image 1"
          className="w-full lg:w-[76%] rounded-lg"
        />
        <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-4 mt-6 w-full">
          <Image
            src={about2}
            alt="About Image 2"
            className="w-full md:w-[48%] lg:w-[40%] rounded-lg"
          />
          <Image
            src={about3}
            alt="About Image 3"
            className="w-full md:w-[48%] lg:w-[40%] rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
