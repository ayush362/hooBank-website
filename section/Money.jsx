import React, { useState } from "react";

export const benefits = [
  {
    logo: "Star.svg",
    heading: "Rewards",
    para: "The best credit cards offer soem tantalizing combinations of promotions and prizes",
  },
  {
    logo: "Shield.svg",
    heading: "100% Secured",
    para: "We take proactive steps make sure your information and transactions are secure",
  },
  {
    logo: "Send.svg",
    heading: "Balance Transfer",
    para: "A balance transfer credit card can save you a lot of money in interest charges",
  },
];

export const Money = () => {
  return (
    <section className="bg-black text-white px-5 md:px-0">
      <div className="flex container md:py-10 flex-col lg:flex-row">
        <div className="lg:w-1/2 flex flex-col gap-5">
          <h1 className="text-2xl md:text-4xl lg:text-6xl  font-semibold 2xl:w-[720px] leading-snug">
            You do the business, we'll handle the money
          </h1>
          <p className="lg:w-3/4 text-start text-gray-400">
            With the right credit card,you can imporve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <button className="btn w-fit">Get started</button>
        </div>
        <div className="lg:w-1/2 flex flex-col gap-10">
          {benefits.map((item, index) => (
            <MoneyCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const MoneyCard = ({ logo, heading, para }) => {
  const [isSelected, setSelected] = useState(false);
  return (
    <div
      className={`flex gap-5 items-center w-fit py-2 cursor-pointer rounded-2xl ${
        isSelected ? "bg-mBg" : "hover:bg-gray-700"
      }`}
      onClick={() => setSelected((isSelected) => !isSelected)}
    >
      <div>
        <img src={logo} alt={heading} />
      </div>
      <div>
        <h4 className="text-xl w-fit">{heading}</h4>
        <p className="text-gray-400 w-2/3">{para}</p>
      </div>
    </div>
  );
};
