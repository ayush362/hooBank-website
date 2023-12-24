import React from "react";
import Link from "next/link";

export const UsefullLinks = [
  { link: "Content", href: "/" },
  { link: "How it works", href: "/" },
  { link: "Create", href: "/" },
  { link: "Explore", href: "/" },
  { link: "Terms & Services", href: "/" },
];
export const CommunityLinks = [
  { link: "Help Center", href: "/" },
  { link: "Partners", href: "/" },
  { link: "Suggestions", href: "/" },
  { link: "Blog", href: "/" },
  { link: "Newsletters", href: "/" },
];
export const PartnerLinks = [
  { link: "Our partner", href: "/" },
  { link: "Become a partner", href: "/" },
];

export const Footer = () => {
  return (
    <section className="bg-black text-white py-10 px-5">
      <div className="container grid grid-cols-2 lg:grid-cols-4 gap-5 border-b py-10 border-gray-500">
        <div className="mr-10">
          <img src="logo.svg" alt="logo" />
          <p className="mt-5 text-gray-400">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div>
          <h5 className="mb-5 font-semibold">Usefull links</h5>
          <ul className="text-gray-400 flex flex-col gap-3">
            {UsefullLinks.map((item) => (
              <li>
                <Link href={item.href}>{item.link}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="mb-5 font-semibold">Community</h5>
          <ul className="text-gray-400 flex flex-col gap-3">
            {CommunityLinks.map((item) => (
              <li>
                <Link href={item.href}>{item.link}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="mb-5 font-semibold">Partner</h5>
          <ul className="text-gray-400 flex flex-col gap-3">
            {PartnerLinks.map((item) => (
              <li>
                <Link href={item.href}>{item.link}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container flex flex-col md:flex-row mt-5 justify-between">
        <div className="lg:w-1/2 text-gray-400 text-xl">
          <p>Copyright C 2021 Hoobank. All Rights Reserved</p>
        </div>
        <div className="lg:w-1/2 flex gap-5 justify-end">
          <img src="instagram.svg" alt="instagram" />
          <img src="facebook.svg" alt="facebook" />
          <img src="twitter.svg" alt="twitter" />
          <img src="linkedin.svg" alt="linkdin" />
        </div>
      </div>
    </section>
  );
};
