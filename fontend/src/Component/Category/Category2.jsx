import React from "react";
import Image1 from "../../assets/redear.png";
import Image2 from "../../assets/watch.png";
import Image3 from "../../assets/Mac.png";
import Button from "../Shared/Button";
const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col*/}
          <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-400//70 text-white rounded-3xl relative h-[320px] flex items-end ">
            <div>
              <div className=" space-y-3 mb-4">
                <p className="mb-[2px] text-gray">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Laptop
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={Image3}
              alt=""
              className="w-[320px]  absolute top-1/2 -translate-y-1/2 lg -right-0"
            />
          </div>

          {/* second col*/}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen//70 text-white rounded-3xl relative h-[320px] flex items-end ">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Earphone
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandGreen"}
                />
              </div>
            </div>
            <img
              src={Image2}
              alt=""
              className="w-[220px]  absolute -right-1 lg lg:top-[10px]"
            />
          </div>
          {/* third col*/}

          <div className="py-10 pl-5 bg-gradient-to-br from-brandBlue/90 to-brandBlue//70 text-white rounded-3xl relative h-[320px] flex items-end ">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Earphone
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-brandBlue"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={Image1}
              alt=""
              className="w-[120px] absolute right-3 bottom-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
