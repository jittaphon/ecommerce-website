import React from "react";
import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.png";
const Partners = () => {
  return (
    <div
      data-aos="zoom-out"
      className="py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10"
    >
      <div className="container">
        <div className="grid grid-cols-5 gap-3 place-items-center opacity-50">
          <img src={brand1} alt="" className="w-[80px]" />
          <img src={brand2} alt="" className="w-[80px]" />
          <img src={brand3} alt="" className="w-[80px]" />
          <img src={brand1} alt="" className="w-[80px]" />
          <img src={brand2} alt="" className="w-[80px]" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
