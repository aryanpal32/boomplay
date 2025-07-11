import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutUs from './AboutUs';

const Footer = () => (
  <footer className="relative bg-gradient-to-br from-blue-800 to-blue-950 text-white pt-16 pb-8 px-6 md:px-20 overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute top-0 left-0 w-full h-full opacity-10">
      <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-blue-600 filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-blue-700 filter blur-3xl"></div>
    </div>

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Branding section */}
        <div className="flex flex-col items-center lg:items-start space-y-4">
          <div className="flex items-center space-x-4 group">
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full border border-blue-400/30 group-hover:bg-blue-600/50 transition-all duration-500">
              <Image 
                src="/boomplaylogo.png" 
                alt="Boom Play Logo" 
                width={48} 
                height={48}
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                BOOM PLAY MEDIA
              </h3>
              <p className="text-blue-300">Founder: Aryan Pal</p>
            </div>
          </div>
          
          {/* Social links */}
          <div className="flex space-x-4 mt-4">
            {[
              {icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z', 
               platform: 'facebook'},
              {icon: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84', 
               platform: 'twitter'},
              {icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z', 
               platform: 'github'},
              {icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z', 
               platform: 'instagram'}
            ].map((social, index) => (
              <Link key={index} href={`https://${social.platform}.com/boomplaymedia`} target="_blank" rel="noopener noreferrer">
                <div className="w-10 h-10 bg-blue-700/30 hover:bg-blue-600/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-400/30 transition-all duration-300 hover:-translate-y-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact information */}
        <div className="space-y-4 text-center lg:text-left">
          <h4 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Contact Us
          </h4>
          <div className="space-y-3">
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-blue-100">
                C-704, Crystal Plaza Link Road,<br />
                Opp. Infinity Mall, Andheri West,<br />
                Mumbai – 400053
              </p>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:Boomplaymedia@gmail.com" className="text-blue-100 hover:text-white transition-colors">
                Boomplaymedia@gmail.com
              </a>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+917276011446" className="text-blue-100 hover:text-white transition-colors">
                +91 727-601-1446
              </a>
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div className="space-y-4 text-center lg:text-left">
          <h4 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Quick Links
          </h4>
          <div className="space-y-3">
            {/* <Link href="././AboutUs" className="block text-blue-100 hover:text-white transition-colors">
              About Us
            </Link> */}
            <Link href="/" className="block text-blue-100 hover:text-white transition-colors">
              Our Projects
            </Link>
            {/* <Link href="/team" className="block text-blue-100 hover:text-white transition-colors">
              Our Team
            </Link> */}
            <Link href="/ContactUs" className="block text-blue-100 hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/CareerPage" className="block text-blue-100 hover:text-white transition-colors">
             CareerPage
            </Link>
            {/* <a href="https://www.boomplaymedia.com" target="_blank" rel="noopener noreferrer" className="block text-blue-100 hover:text-white transition-colors">
              Official Website
            </a> */}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-6 border-t border-blue-800/50 text-center text-blue-300 text-sm">
        <p>© {new Date().getFullYear()} Boom Play Media. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;