import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  return (
    <div className="max-w-1640 mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">eats</span>
        </h1>
        <div className="hidden sm:flex items-center bg-slate-200 rounded-full  p-1 text-[14px] ">
          <p className="bg-slate-900 rounded-full text-white p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
