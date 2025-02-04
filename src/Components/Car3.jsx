import React from "react";
import { TiArrowRight } from "react-icons/ti";

const Car3 = () => {
  return (
    <div className="w-full h-screen z-10 relative bg-black bg-car3 bg-cover bg-center  ">
      <div className="w-full h-screen top-0 bottom-0  bg-gradient-to-r from-black opacity-80 overflow-hidden  ">
        <div className="text-white w-full h-[110%] px-[9%] flex flex-col justify-center">
          <h1 className="text-4xl tracking-widest font-extralight">
            LOTUS EMEYA
          </h1>
          <p className="pt-4">The new benchmark in hyper-GT performance</p>

          <div className="mt-10 flex items-center gap-7">
            <div className="group">
              <button className="border flex items-center relative text-lg font-normal px-14 py-3 border-white text-white">
                Explore{" "}
                <TiArrowRight className="opacity-0 absolute right-7 text-2xl group-hover:translate-x-2 duration-300 group-hover:opacity-100 group-hover:block" />
              </button>
            </div>

            <div className="flex relative gap-1 duration-300 items-center group cursor-pointer hover:text-text1 transition-all text-base font-medium">
              CONFIGURE{" "}
              <TiArrowRight className="text-2xl group-hover:translate-x-2 transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car3;
