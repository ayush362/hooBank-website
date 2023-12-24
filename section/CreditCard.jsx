import React from "react";

export const CreditCard = () => {
  return (
    <section className="bg-black text-white py-20 px-5">
      <div className="container flex flex-col items-center lg:flex-row">
        <div className="lg:w-1/2 flex flex-col gap-10">
          <h3 className="text-6xl font-semibold lg:w-[90%] leading-snug">
            Find a better card deal in few easy steps.
          </h3>
          <p className="text-gray-400 lg:w-2/3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
            ipsum porro! Iusto recusandae a veniam. Numquam laudantium
            voluptatum eius temporibus?
          </p>
          <div className="flex gap-5">
            <button className="btn">Get Started</button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img src="card.png" alt="card" />
        </div>
      </div>
    </section>
  );
};
