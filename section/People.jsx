import React, { useState } from "react";

export const PeopleDetails = [
  {
    para: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver",
    image: "people01.png",
    name: "Herman Jensen",
    designation: "Founder & Leader",
  },
  {
    para: "Money makes your life easier. If you're lucky to have it,you're lucky.",
    image: "people02.png",
    name: "Steve Mark",
    designation: "Founder & Leader",
  },
  {
    para: "It is usually poeple in the money business,finance,and international trade that are really rich",
    image: "people03.png",
    name: "Kenn Gallagher",
    designation: "Founder & Leader",
  },
];

export const People = () => {
  return (
    <section className="bg-black text-white px-5">
      <div className="container">
        <div className="flex justify-between py-10">
          <h3 className="text-2xl lg:text-5xl lg:w-1/4 leading-snug font-semibold">
            What People are saying about us
          </h3>
          <p className="lg:w-1/4 leading-snug text-gray-400">
            Everything you need to accept card payments and grow your business
            anywhere on the planet
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          {PeopleDetails.map((item, index) => (
            <PeopleCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const PeopleCard = ({ para, image, name, designation }) => {
  const [isSelected, setSelected] = useState(false);
  return (
    <div
      className={`flex flex-col gap-5 lg:w-1/3 px-5 cursor-pointer py-10 rounded-xl ${
        isSelected ? "bg-mBg" : ""
      }`}
      onClick={() => setSelected((isSelected) => !isSelected)}
    >
      <img src="quotes.svg" className="w-10 h-10" />
      <p className="lg:w-1/2 text-gray-400">{para}</p>
      <div className="flex gap-5 items-center">
        <img src={image} alt={name} className="w-10 h-10" />
        <div>
          <p className="text-2xl">{name}</p>
          <span className="text-gray-400">{designation}</span>
        </div>
      </div>
    </div>
  );
};
