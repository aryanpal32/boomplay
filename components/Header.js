// // components/Header.js
// import Link from 'next/link';
// import Image from 'next/image';

// const Header = () => (
//   <header className="bg-white p-6 shadow-md flex justify-between items-center">
//     {/* Logo Section */}
//     <div className="flex items-center space-x-4 ml-10"> {/* Added margin-left */}
//       <Image src="/logo.jpeg" alt="Boom Play Logo" width={50} height={50} />
//       <h1 className="text-3xl font-bold text-[#14213D]">BOOM PLAY</h1>
//       <span className="text-lg text-[#6b6b6b]">we/lo</span>
//     </div>

//     {/* Navigation Section */}
//     <nav className="flex space-x-10 text-lg text-[#14213D]">
//       <Link href="#about" className="hover:text-gray-600">About Us</Link>
//       <Link href="#projects" className="hover:text-gray-600">Projects</Link>
//       <Link href="#contact" className="hover:text-gray-600">Contact Us</Link>
//     </nav>
//   </header>
// );

// export default Header;

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <header className="bg-white p-6 shadow-md flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center space-x-4 ml-10">
        <Image src="/boomplaylogo.png" alt="Boom Play Logo" width={60} height={60} />
        <h1 className="text-3xl font-bold text-[#14213D]">BOOM PLAY</h1>
        <span className="text-lg text-[#6b6b6b] hidden md:block">we/lo</span> {/* Hide on mobile */}
      </div>

      {/* Hamburger Icon (Visible only on small screens) */}
      <div className="md:hidden flex items-center" onClick={toggleMenu}>
        <div className="w-6 h-6 flex flex-col justify-between items-center space-y-1">
          <span className="block w-full h-1 bg-[#14213D]"></span>
          <span className="block w-full h-1 bg-[#14213D]"></span>
          <span className="block w-full h-1 bg-[#14213D]"></span>
        </div>
      </div>

      {/* Navigation Section */}
      <nav
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row space-x-0 md:space-x-10 text-lg text-[#14213D]`}
      >
        <Link href="#about" className="hover:text-gray-600 font-bold mb-2 md:mb-0">
          About Us
        </Link>
        <Link href="#projects" className="hover:text-gray-600 font-bold mb-2 md:mb-0">
          Projects
        </Link>
        <Link href="CareerPage" className="hover:text-gray-600 font-bold mb-2 md:mb-0">
          Career
        </Link>
        <Link href="#contact" className="hover:text-gray-600 font-bold mb-2 md:mb-0">
          Contact Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
