import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full h-[180vh] bg-black">
      <div className="flex justify-center flex-col items-center">
        <div className="w-[70px] h-[70px] mt-[70px]">
          <img
            className="w-full h-full "
            src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Lotus_Cars_logo.svg/1200px-Lotus_Cars_logo.svg.png"
            alt=""
          />
        </div>
        <div className="border w-[80%] mt-[3rem] border-yellow-300"></div>
      </div>

      <div className="px-[10%] mt-[4rem]">
        <h1 className="text-yellow-300 text-6xl font-extralight tracking-widest ">
          STAY IN <br /> THE KNOW
        </h1>
        <p className="text-white font-light pt-[2rem]">
          Subscribe to Lotus Updates for the latest news, <br /> releases, and
          exclusive offers.
        </p>
      </div>

      <div className="px-[10%] grid grid-cols-2">
        {/* box 1 */}
        <div className="mt-[4%]">
          <button className="text-yellow-300 border border-yellow-300 px-5 py-4 font-normal hover:bg-yellow-300 duration-100 transition-all hover:text-black">
            KEEP ME INFORMED
          </button>
        </div>

        <div className="grid grid-cols-3 w-full gap-16 -mx-40">
          {/* box 2 */}
          <div className="text-white flex flex-col space-y-4 mt-[20%]">
            <h4 className="text-yellow-300 text-2xl font-light pb-3">MODELS</h4>
            <a href="#">Emeya</a>
            <a href="#">Eletre</a>
            <a href="#">Emira</a>
            <a href="#">Evija</a>
          </div>

          {/* box 3 */}
          <div className="text-white flex  flex-col space-y-4 mt-[20%]">
            <h4 className="text-yellow-300 w-[200%] text-2xl font-light pb-3">
              ABOUT LOTUS
            </h4>
            <a href="#">Lotus Story</a>
            <a href="#">Press</a>
            <a href="#">Careers</a>
            <a href="#">Investor relations</a>
          </div>

          {/* box 4 */}
          <div className="text-white flex flex-col space-y-4 mt-[20%]">
            <h4 className="text-yellow-300 text-2xl font-light pb-3">
              SERVICES
            </h4>
            <a href="#">Lotus Charging</a>
            <a href="#">Lotus Connect</a>
            <a href="#">Eletre handbook</a>
            <a href="#">Emira handbook</a>
            <a href="#">Contact Us</a>
            <a href="#">Vehicle Service Information</a>
          </div>
        </div>
      </div>

      {/* social media */}
      <div className="px-[10%] flex flex-row gap-3 cursor-pointer">
        <FaFacebookF className="text-3xl text-white border border-yellow-300 " />
        <FaInstagram className="text-3xl text-white border border-yellow-300 " />
        <FaXTwitter className="text-3xl text-white border border-yellow-300 " />
        <FaYoutube className="text-3xl text-white border border-yellow-300 " />
      </div>

      <div className="flex justify-center">
        <div className="w-[80%] px-[10%] mt-[4rem] flex  border-t-2 border-yellow-300"></div>
      </div>

      <div className="flex justify-between mt-5 cursor-pointer px-[10%] items-center text-white">
        <div className="flex text-xs gap-10 ">
          <span>Terms & Conditions</span>
          <span>Cookie Statement</span>
          <span>Privacy notice</span>
        </div>

        <div className="flex text-xs items-center gap-3">
          <span>Philippines</span>
          <MdOutlineKeyboardArrowDown className="text-xl border border-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
