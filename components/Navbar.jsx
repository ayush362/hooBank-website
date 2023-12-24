import React, { useState } from "react";
import Link from "next/link";

export const links = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/" },
  { name: "Features", url: "/" },
  { name: "Solution", url: "/" },
];

export const Navbar = () => {
  const [isSelected, setSelected] = useState(false);
  return (
    <nav className="bg-black px-5 md:px-0">
      <div className="container flex items-center justify-between">
        <div>
          <img src="logo.svg" alt="logo" className="w-36 h-20" />
        </div>
        <div className="text-white">
          <LinkList links={links} className="hidden lg:flex gap-10" />
          <img
            src="menu.svg"
            className={`lg:hidden ${isSelected ? "hidden" : "block"}`}
            onClick={() => setSelected((isSelected) => !isSelected)}
          />
          <img
            src="close.svg"
            alt="close"
            className={`lg:hidden ${isSelected ? "block" : "hidden"}`}
            onClick={() => setSelected((isSelected) => !isSelected)}
          />
        </div>
      </div>
      <div className="text-white container">
        <LinkList
          links={links}
          className={`lg:hidden flex flex-col gap-5 py-10 ${
            isSelected ? "block" : "hidden"
          }`}
        />
      </div>
    </nav>
  );
};

const LinkList = ({ links, className }) => {
  return (
    <ul className={className}>
      {links.map((link) => (
        <Link href={link.url}>{link.name}</Link>
      ))}
    </ul>
  );
};
