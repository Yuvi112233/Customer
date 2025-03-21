import React, { useState, useRef } from 'react';
import BlurText from "./BlurText";
import CircularGallery from './CircularGallery';
import Particles from './Particles';
import { motion } from "framer-motion";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const galleryRef = useRef(null); // Reference for the CircularGallery section

  const toggleMenu = () => {
    console.log("Toggling menu. Current state:", isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToGallery = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking (optional)
  };

  return (
    <div>
      <div>
      <header className="p-4 bg-gradient-to-r from-[#8e9eab] to-[#eef2f3] sticky top-0 z-50 pointer-events-auto shadow-lg rounded-b-lg backdrop-blur-sm bg-opacity-90">
  <div className="container flex justify-between items-center h-14 mx-auto rounded relative z-50">
    {/* Left Section: SVG + Title */}
    <div className="flex items-center space-x-4">
      <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="hidden sm:flex items-center p-2 group">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 32 32"
          className="w-8 h-8 text-yellow-500 group-hover:scale-110 transition-transform duration-300"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
        </motion.svg>
      </a>
      <div className="flex flex-col text-center md:text-left">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#3a3a3a] leading-snug tracking-wide transition-all duration-300 hover:scale-105 hover:text-[#222222] font-poppins">
          Welcome to Our Platform
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-[#525252] font-medium tracking-wide transition-all duration-300 hover:text-[#333333] font-poppins">
          Innovative solutions for your business
        </p>
      </div>
    </div>

    {/* Right Section: Nav Links */}
    <nav className="hidden md:flex items-center space-x-8">
      <a
        href="#"
        className="text-lg font-semibold text-red-500 drop-shadow-lg scale-110 transition-all duration-300 hover:scale-125 hover:text-red-600 font-poppins"
      >
        About Us
      </a>
      <a
        href="#services"
        onClick={(e) => {
          e.preventDefault();
          scrollToGallery();
        }}
        className="text-lg font-medium text-gray-600 transition-all duration-300 hover:text-blue-500 hover:drop-shadow-lg hover:scale-110 font-poppins"
      >
        Services
      </a>
      <a
        href="#blog"
        onClick={(e) => {
          e.preventDefault();
          scrollToBlog();
        }}
        className="text-lg font-medium text-gray-600 transition-all duration-300 hover:text-green-500 hover:drop-shadow-lg hover:scale-110 font-poppins"
      >
        Blog
      </a>
      <a
        href="#review"
        onClick={(e) => {
          e.preventDefault();
          scrollToTestimonials();
        }}
        className="text-lg font-medium text-gray-600 transition-all duration-300 hover:text-purple-500 hover:drop-shadow-lg hover:scale-110 font-poppins"
      >
        Testimonials
      </a>
    </nav>

    {/* Mobile Menu Button */}
    <button className="md:hidden p-4 relative z-50" onClick={toggleMenu}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-600 hover:text-gray-800 transition-colors duration-300">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div>
</header>

{/* Mobile Menu with Overlay */}
{isMenuOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 z-[999] transition-opacity duration-300 ease-in-out"
    onClick={toggleMenu}
  />
)}
<div className={`fixed top-0 right-0 h-full w-4/5 bg-gray-800 shadow-2xl border-l border-gray-600 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-[1000]`}>
  <div className="bg-gray-900 px-3 py-4 flex justify-between items-center border-b border-gray-700">
    <h2 className="text-sm font-bold text-gray-200 font-poppins flex items-center truncate">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 32 32"
        className="w-5 h-5 text-yellow-500 mr-2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c-0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
      </motion.svg>
      Welcome to Our Platform
    </h2>
    <button className="text-gray-300 hover:text-white hover:bg-gray-700 p-3 rounded-full transition-all duration-300 text-2xl font-bold min-w-[48px] flex items-center justify-center" onClick={toggleMenu}>✕</button>
  </div>
  <ul className="flex flex-col space-y-2 p-6 font-poppins text-lg">
    <li>
      <a
        href="#"
        className="block text-red-400 font-semibold hover:bg-gray-700 hover:text-red-300 px-4 py-3 rounded-lg transition-all duration-300 border-b border-gray-700"
        onClick={toggleMenu}
      >
        About Us
      </a>
    </li>
    <li>
      <a
        href="#services"
        className="block text-gray-200 font-medium hover:bg-gray-700 hover:text-blue-400 px-4 py-3 rounded-lg transition-all duration-300 border-b border-gray-700"
        onClick={(e) => {
          e.preventDefault();
          scrollToGallery();
        }}
      >
        Services
      </a>
    </li>
    <li>
      <a
        href="#blog"
        className="block text-gray-200 font-medium hover:bg-gray-700 hover:text-green-400 px-4 py-3 rounded-lg transition-all duration-300 border-b border-gray-700"
        onClick={(e) => {
          e.preventDefault();
          scrollToBlog();
        }}
      >
        Blog
      </a>
    </li>
    <li>
      <a
        href="#review"
        className="block text-gray-200 font-medium hover:bg-gray-700 hover:text-purple-400 px-4 py-3 rounded-lg transition-all duration-300 border-b border-gray-700"
        onClick={(e) => {
          e.preventDefault();
          scrollToTestimonials();
        }}
      >
        Testimonials
      </a>
    </li>
  </ul>
</div>

        <section className="bg-gradient-to-r from-[#000046] to-[#1cb5e0] relative">
          <div className="absolute inset-0">
            <Particles
              particleColors={['#ffffff', '#ffffff']}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={false}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>
          <div className="relative mx-auto max-w-screen-xl px-4 py-14 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="text-3xl font-extrabold sm:text-5xl font-morgena">
                <BlurText
                  text="Seamless Digital Experience."
                  delay={200}
                  animateBy="words"
                  direction="bottom"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-2xl text-gray-200 font-medium pb-2 font-poppins"
                />
                <h1 className="font-extrabold text-yellow-300 sm:block font-poppins"> Smart QR Solutions.</h1>
              </h1>
              <p className="mt-4 sm:text-xl/relaxed text-gray-300 shadow-sm font-poppins">
                Empower your business with custom QR codes & digital services designed for maximum efficiency and growth.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a className="font-poppins inline-block min-w-[180px] rounded bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-400 focus:ring-3 focus:outline-none" href="#contact">
                  Get Started
                </a>
                <a className="font-poppins inline-block min-w-[180px] rounded-sm px-6 py-3 text-sm font-semibold text-gray-400 hover:text-white focus:ring-3 focus:outline-none" href="#review">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        <div ref={galleryRef}  className='dark:bg-gray-700'>
          <motion.h1
          
            className="dark:bg-gray-700 py-8 text-2xl font-semibold text-gray-300 sm:text-3xl text-center font-poppins"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            Services We Offer
          </motion.h1>
        </div>

        {/* CircularGallery Section with Ref */}
        <div  style={{ height: '500px', position: 'relative' }} className='bg-slate-600'>
          <div className="absolute inset-0">
            <Particles
              particleColors={['#ffffff', '#ffffff']}
              particleCount={100}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={false}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;