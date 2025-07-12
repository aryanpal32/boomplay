


import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  // Memoized scroll handler
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close menu when clicking outside (for mobile)
  useEffect(() => {
    const handleClickOutside = (e) => {
      const mobileMenu = document.querySelector('.mobile-menu-container');
      const menuButton = document.querySelector('.mobile-menu-button');
      
      if (isMenuOpen && mobileMenu && !mobileMenu.contains(e.target)) {
        if (!menuButton || !menuButton.contains(e.target)) {
          setIsMenuOpen(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = useCallback((e) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsMenuOpen(prev => !prev);
  }, []);

  const handleLinkClick = useCallback((linkName) => {
    setActiveLink(linkName);
    setIsMenuOpen(false);
  }, []);

  // Navigation items with proper routes
  const navItems = [
    { name: 'About Us', href: '/AboutUs', component: 'AboutUs' },
    { name: 'Projects', href: '/projects', component: 'ProjectCard' },
    { name: 'Career', href: '/CareerPage', component: 'CareerPage' },
    { name: 'Contact Us', href: '/ContactPage', component: 'ContactPage' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/" passHref>
            <div className="flex items-center space-x-3 cursor-pointer">
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
                  BOOM PLAY Media
                </h1>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} passHref>
                <span 
                  className={`relative text-lg font-medium transition-colors duration-300 group ${
                    activeLink === item.name 
                      ? 'text-blue-600' 
                      : 'text-gray-800 hover:text-blue-600'
                  }`}
                  onClick={() => handleLinkClick(item.name)}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                    activeLink === item.name ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
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
              className="mobile-menu-button text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-8 h-8 relative flex items-center justify-center">
                <span className={`absolute block w-6 h-0.5 bg-blue-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
                <span className={`absolute block w-6 h-0.5 bg-blue-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute block w-6 h-0.5 bg-blue-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden mobile-menu-container ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300`}>
          <div className="pt-4 pb-8 space-y-6">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} passHref>
                <span 
                  className={`block px-4 py-3 text-xl font-medium transition-colors duration-300 rounded-lg ${
                    activeLink === item.name
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-800 hover:bg-blue-50'
                  }`}
                  onClick={() => handleLinkClick(item.name)}
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