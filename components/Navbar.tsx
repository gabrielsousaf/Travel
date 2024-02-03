// import { NAV_LINKS } from "@/constants"
// import Image from "next/image"
// import Link from "next/link"
// import Button from "./Button"

// const Navbar = () => {
//   return (
//     <nav className="flexBetween max-container padding-container relative z-30 py-5">
//       <Link href="/">
//         <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
//       </Link>

//       <ul className="hidden h-full gap-12 lg:flex">
//         {NAV_LINKS.map((link) => (
//           <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
//             {link.label}
//           </Link>
//         ))}
//       </ul>

//       <div className="lg:flexCenter hidden">
//         <Button 
//           type="button"
//           title="Login"
//           icon="/user.svg"
//           variant="btn_dark_green"
//         />
//       </div>

//       <Image 
//         src="menu.svg"
//         alt="menu"
//         width={32}
//         height={32}
//         className="inline-block cursor-pointer lg:hidden"
//       />
//     </nav>
//   )
// }

// export default Navbar








"use client"
import { NAV_LINKS } from "@/constants"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    console.log(isMenuOpen);
  };

  const closeMenuOnScroll = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', closeMenuOnScroll);
    return () => {
      window.removeEventListener('scroll', closeMenuOnScroll);
    };
  }, []);
  
  return (
    <nav className="flexBetween relative max-container padding-container z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <div
        className={`lg:hidden cursor-pointer `}
        onClick={toggleMenu}
      >
        <Image src="menu.svg" alt="menu" width={32} height={32} />
      </div>

      <ul className={`lg:flex bg-white gap-12 ${isMenuOpen ? 'mobile-menu absolute top-12 left-0 right-2' : 'hidden'}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-50 lg:pt-0 lg:pl-0 lg:border-none regular-16 cursor-pointer pb-1.5 transition-all hover:font-bold flex text-left items-start   pl-3  border-t border-solid border-gray-300 pt-2"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
    </nav>
  );
};

export default Navbar;
