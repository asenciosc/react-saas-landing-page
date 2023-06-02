import React from "react";
import SingleDev from "../assets/images/single-dev.jpg";
import TwoDevs from "../assets/images/two-devs.jpg";
import MultiDevs from "../assets/images/multi-dev.jpg";

const Pricing = () => {
  return (
    <div className="w-full py-40 px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full border shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-200">
          <img
            className="w-40 mx-auto mt-1"
            src={SingleDev}
            alt="Single Dev Plan"
          />
          <h2 className="text-2xl font-bold text-center py-6">
            Single Developer Plan
          </h2>
          <p className="text-center text-4xl font-bold">$129</p>
          <div className="text-center font-medium mt-4">
            <p className="py-2 border-b-2 mx-8">benefit one</p>
            <p className="py-2 border-b-2 mx-8">benefit two</p>
            <p className="py-2 border-b-2 mx-8">benefit three</p>
          </div>
          <button className="mt-4 bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Start Trial
          </button>
        </div>
        {/* second card FAVORITE */}
        <div className="w-full border border-gray-300 bg-gray-100 shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-200">
          <img
            className="w-40 mx-auto mt-1"
            src={TwoDevs}
            alt="Two Devs Plan"
          />
          <h2 className="text-2xl font-bold text-center py-6">
            Two Developers Plan
          </h2>
          <p className="text-center text-4xl font-bold">$159</p>
          <div className="text-center font-medium mt-4">
            <p className="py-2 border-b-2 mx-8">benefit one</p>
            <p className="py-2 border-b-2 mx-8">benefit two</p>
            <p className="py-2 border-b-2 mx-8">benefit three</p>
          </div>
          <button className="mt-4 bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Start Trial
          </button>
        </div>
        {/* third card */}
        <div className="w-full border shadow-xl flex flex-col p-4 my-4 rounded-xl hover:scale-105 duration-200">
          <img
            className="w-40 mx-auto mt-1"
            src={MultiDevs}
            alt="Multiple (10+) Devs Plan"
          />
          <h2 className="text-2xl font-bold text-center py-6">
            Multiple (10+) Developers Plan
          </h2>
          <p className="text-center text-4xl font-bold">$459</p>
          <div className="text-center font-medium mt-4">
            <p className="py-2 border-b-2 mx-8">benefit one</p>
            <p className="py-2 border-b-2 mx-8">benefit two</p>
            <p className="py-2 border-b-2 mx-8">benefit three</p>
          </div>
          <button className="mt-4 bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
