import React from "react";

export const details = [
  { key: "ACTIVE USER", value: "3800+" },
  { key: "truested by company", value: "230+" },
  { key: "TRANSACTION", value: "$230M+" },
];

export const Insight = () => {
  return (
    <section className="bg-black text-white">
      <div className="container flex flex-col md:flex-row py-10 pb-32 justify-between">
        {details.map((item) => (
          <div className="flex flex-col lg:flex-row gap-5 items-center">
            <span className="text-3xl font-bold">{item.value}</span>
            <span className="uppercase text-2xl text-mBlue">{item.key}</span>
          </div>
          
        ))}
      </div>
    </section>
  );
};
