import React from "react";

export const PayPal = () => {
  return (
    <section className="bg-black text-white py-20 px-5">
      <div className="container flex flex-col justify-center lg:justify-normal items-center lg:flex-row">
        <div className="lg:w-1/2">
          <img src="bill.png" alt="bill" />
        </div>
        <div className="lg:w-1/2 flex flex-col gap-10">
          <h3 className="text-6xl font-semibold lg:w-[90%] leading-snug">
            Easily control your billing & invoicing.
          </h3>
          <p className="text-gray-400 lg:w-2/3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
            ipsum porro! Iusto recusandae a veniam. Numquam laudantium
            voluptatum eius temporibus?
          </p>
          <div className="flex gap-5">
            <button>
              <img src="apple.svg" alt="apple" />
            </button>
            <button>
              <img src="google.svg" alt="apple" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
