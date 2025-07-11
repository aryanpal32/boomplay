// // // components/Header.js
// // import Link from 'next/link';
// // import Image from 'next/image';

// // const Header = () => (
// //   <header className="bg-white p-6 shadow-md flex justify-between items-center">
// //     {/* Logo Section */}
// //     <div className="flex items-center space-x-4 ml-10"> {/* Added margin-left */}
// //       <Image src="/logo.jpeg" alt="Boom Play Logo" width={50} height={50} />
// //       <h1 className="text-3xl font-bold text-[#14213D]">BOOM PLAY</h1>
// //       <span className="text-lg text-[#6b6b6b]">we/lo</span>
// //     </div>

// //     {/* Navigation Section */}
// //     <nav className="flex space-x-10 text-lg text-[#14213D]">
// //       <Link href="#about" className="hover:text-gray-600">About Us</Link>
// //       <Link href="#projects" className="hover:text-gray-600">Projects</Link>
// //       <Link href="#contact" className="hover:text-gray-600">Contact Us</Link>
// //     </nav>
// //   </header>
// // );

// // export default Header;

// import React, { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
//   };

//   return (
//     <header className="bg-white p-6 shadow-md flex justify-between items-center">
//       {/* Logo Section */}
//       <div className="flex items-center space-x-4 ml-10">
//         <Image src="/boomplaylogo.png" alt="Boom Play Logo" width={60} height={60} />
//         <h1 className="text-3xl font-bold text-[#14213D]">BOOM PLAY</h1>
//         <span className="text-lg text-[#6b6b6b] hidden md:block">we/lo</span> {/* Hide on mobile */}
//       </div>

//       {/* Hamburger Icon (Visible only on small screens) */}
//       <div className="md:hidden flex items-center" onClick={toggleMenu}>
//         <div className="w-6 h-6 flex flex-col justify-between items-center space-y-1">
//           <span className="block w-full h-1 bg-[#14213D]"></span>
//           <span className="block w-full h-1 bg-[#14213D]"></span>
//           <span className="block w-full h-1 bg-[#14213D]"></span>
//         </div>
//       </div>

//       {/* Navigation Section */}
//       <nav
//         className={`${
//           isMenuOpen ? 'flex' : 'hidden'
//         } md:flex flex-col md:flex-row space-x-0 md:space-x-10 text-lg text-[#14213D]`}
//       >
//         <Link href="#about" className="hover:text-gray-600 font-bold mb-2 md:mb-0">
//           About Us
//         </Link>
//         <Link href="#projects" className="hover:text-gray-600 font-bold mb-2 md:mb-0">
//           Projects
//         </Link>
//         <Link href="CareerPage" className="hover:text-gray-600 font-bold mb-2 md:mb-0">
//           Career
//         </Link>
//         <Link href="#contact" className="hover:text-gray-600 font-bold mb-2 md:mb-0">
//           Contact Us
//         </Link>
//       </nav>
//     </header>
//   );
// };

// export default Header;


// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center">
//           {/* Logo Section */}
//           <div className="flex items-center space-x-3">
//             <div className="relative w-12 h-12 md:w-14 md:h-14 transition-all duration-300 hover:scale-105">
//               <Image 
//                 src="/boomplaylogo.png" 
//                 alt="Boom Play Logo" 
//                 layout="fill"
//                 objectFit="contain"
//                 className="drop-shadow-md"
//               />
//             </div>
//             <div className="flex flex-col md:flex-row md:items-baseline space-y-0 md:space-y-0 md:space-x-2">
//               <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600">
//                 BOOM PLAY
//               </h1>
//               <span className="text-sm md:text-lg font-light text-gray-500 hidden md:block transform transition-all duration-500 hover:scale-105">
//                 we/lo
//               </span>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {[
//               { name: 'About Us', href: '#about' },
//               { name: 'Projects', href: '#projects' },
//               { name: 'Career', href: 'CareerPage' },
//               { name: 'Contact Us', href: '#contact' }
//             ].map((item, index) => (
//               <Link key={index} href={item.href}>
//                 <a className="relative text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300 group">
//                   {item.name}
//                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
//                 </a>
//               </Link>
//             ))}
//             <button className="ml-6 px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
//               Get Started
//             </button>
//           </nav>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={toggleMenu}
//               className="text-gray-800 focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               <div className="w-8 h-8 relative flex items-center justify-center">
//                 <span className={`absolute block w-6 h-0.5 bg-blue-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
//                 <span className={`absolute block w-6 h-0.5 bg-blue-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
//                 <span className={`absolute block w-6 h-0.5 bg-blue-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
//               </div>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300`}>
//           <div className="pt-4 pb-8 space-y-6">
//             {[
//               { name: 'About Us', href: '#about' },
//               { name: 'Projects', href: '#projects' },
//               { name: 'Career', href: 'CareerPage' },
//               { name: 'Contact Us', href: '#contact' }
//             ].map((item, index) => (
//               <Link key={index} href={item.href}>
//                 <a 
//                   className="block px-4 py-3 text-xl font-medium text-gray-800 hover:bg-blue-50 rounded-lg transition-colors duration-300"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.name}
//                 </a>
//               </Link>
//             ))}
//             <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300">
//               Get Started
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12 md:w-14 md:h-14 transition-all duration-300 hover:scale-105">
              <Image 
                src="/boomplaylogo.png" 
                alt="Boom Play Logo" 
                layout="fill"
                objectFit="contain"
                className="drop-shadow-md"
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-baseline space-y-0 md:space-y-0 md:space-x-2">
              <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600">
                BOOM PLAY
              </h1>
              
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: 'About Us', href: '#about' },
              { name: 'Projects', href: '#projects' },
              { name: 'Career', href: '/CareerPage' },
              { name: 'Contact Us', href: '#contact' }
            ].map((item, index) => (
              <Link key={index} href={item.href}>
                <span className="relative text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300 group">
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            ))}
            <button className="ml-6 px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-8 h-8 relative flex items-center justify-center">
                <span className={`absolute block w-6 h-0.5 bg-blue-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
                <span className={`absolute block w-6 h-0.5 bg-blue-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute block w-6 h-0.5 bg-blue-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300`}>
          <div className="pt-4 pb-8 space-y-6">
            {[
              { name: 'About Us', href: '#about' },
              { name: 'Projects', href: '#projects' },
              { name: 'Career', href: '/CareerPage' },
              { name: 'Contact Us', href: '#contact' }
            ].map((item, index) => (
              <Link key={index} href={item.href}>
                <span 
                  className="block px-4 py-3 text-xl font-medium text-gray-800 hover:bg-blue-50 rounded-lg transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </span>
              </Link>
            ))}
            <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
