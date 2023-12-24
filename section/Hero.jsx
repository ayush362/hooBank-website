import React from "react";

export const Hero = () => {
  return (
    <section className="bg-black text-white px-5 md:px-0">
      <div className="container flex flex-col md:flex-row py-10">
        <div className="md:w-2/3 flex flex-col justify-end">
          <p className="flex items-center bg-mBg md:w-fit px-2 rounded-lg justify-center">
            <img src="Discount.svg" alt="percentage" />
            <span className="text-gray-400">
              <span className="text-white">20% </span>DISCOUNT FOR{" "}
              <span className="text-white">1 MONTH </span>ACCOUNT
            </span>
          </p>
          <div className="flex justify-between md:justify-normal py-5 md:py-0">
            <h3 className="md:w-1/3 text-3xl md:text-6xl mt-5 leading-snug font-semibold mr-10">
              The Next <span className="text-mBlue">Generation</span>
            </h3>
            <div className="border-mBlue text-mBlue flex justify-center items-center h-20 w-20 md:h-32 md:w-32 lg:h-40 lg:w-40 border-2 rounded-full md:text-2xl">
              <div className="px-5 md:px-0">
                <span className="flex gap-3">
                  Get <img src="arrow-up.svg" />
                </span>
                <span>Started</span>
              </div>
            </div>
          </div>
          <p className="text-3xl md:text-6xl font-semibold leading-snug">
            Payment Method.
          </p>
          <p className="text-gray-400 lg:w-2/5 py-5">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
        <div className="md:w-1/3">
          <img src="robot.png" alt="robot hand" />
        </div>
      </div>
    </section>
  );
};
