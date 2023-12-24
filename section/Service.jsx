import React from "react";

export const Service = () => {
  return (
    <section className="bg-black text-white px-5 py-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-10 justify-between items-center">
          <img className="w-40" src="airbnb.png" alt="airbnb" />
          <img className="w-40" src="binance.png" alt="binance" />
          <img className="w-40" src="coinbase.png" alt="coinbase" />
          <img className="w-40" src="dropbox.png" alt="dropbox" />
        </div>
        <div className="bg-mBg flex flex-col lg:flex-row gap-10 py-20 px-10 items-center justify-around rounded-2xl my-20">
          <div>
            <h3 className="text-2xl lg:text-4xl font-semibold mb-5">
              Let's try our service now!
            </h3>
            <p className="text-gray-400 lg:w-2/3">
              Everything you need to accept card payments and grow your business
              anywhere on the planet
            </p>
          </div>
          <div>
            <button className="btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};
