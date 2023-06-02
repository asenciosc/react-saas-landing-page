import React from "react";
import AnalyticChartImg from "../assets/images/analytic-chart-400x320.jpg";

const Feature1 = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[400px] mx-auto my-4" src={AnalyticChartImg} alt="" />
        <div className="flex flex-col justify-center">
          <p className="font-bold">FEATURE 1</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Say something about feature 1
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur recusandae dignissimos sunt inventore laborum, dolores
            rem ullam natus enim dolor debitis aut similique. Ex, odio. Rem
            fugit fugiat similique iusto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature1;
