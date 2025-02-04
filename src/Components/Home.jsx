import React from "react";
import { GiApothecary } from "react-icons/gi";
import { BiMenuAltLeft } from "react-icons/bi";
import { TiArrowRight } from "react-icons/ti";

const Home = () => {
  return (
    <div className=" w-full h-screen z-10">
      <div className="flex text-white justify-center text-center gap-1 pt-2 cursor-pointer">
        <h1 className="text-4xl  pt-2 font-semibold">LOTUS </h1>
        <GiApothecary className="mt-3" />
      </div>

      <div className="absolute right-0 top-4 mr-5 text-3xl cursor-pointer">
        <BiMenuAltLeft className="text-white" />
      </div>

      <div className="absolute w-full h-screen top-0 left-0 -z-10">
        <video
          autoPlay
          loop
          muted
          src="https://wlt-p-001.sitecorecontenthub.cloud/api/public/content/596467cc6abc4601adad9b543ca16e0c?v=dc5cb022"
        ></video>
      </div>

      <div className="text-white w-full h-[110%] px-[9%] flex flex-col justify-center">
        <h1 className="text-4xl font-extralight">
          PURE <br /> PERFORMANCE <br /> PEDIGREE SINCE <br /> 1948
        </h1>
        <p className="pt-5 font-light leading-relaxed">
          The unique driving experience a lotus offers has inspired <br />{" "}
          passionate drivers for more than seventy five years.
        </p>

        <div className="mt-10 group">
          <button className="border flex items-center relative text-lg font-normal px-12 py-3 border-white text-white">
            Learn More{" "}
            <TiArrowRight className="text-2xl absolute right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 group-hover:block" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
