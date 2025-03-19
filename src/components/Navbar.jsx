import React from 'react'
import BlurText from "./BlurText";
import CircularGallery from './CircularGallery'
import Particles from './Particles';
import { motion } from "framer-motion";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
const Navbar = () => {
  
  return (
    
<div>
  
<header className="p-4 bg-gradient-to-r from-[#8e9eab] to-[#eef2f3]">
	<div className="container flex justify-between h-10 mx-auto rounded">
		<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
			<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-8 dark:text-violet-600">
				<path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
				<path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
			</svg>
		</a>
		<ul
  className="items-center hidden space-x-6 md:flex font-poppins text-lg bg-opacity-30 px-6 py-2 rounded-lg shadow-lg backdrop-blur-lg"
  id="navbar"
>
  <li className="flex">
    <a
      rel="noopener noreferrer"
      href="#"
      className="flex items-center px-4 py-2 text-red-500 text-xl font-semibold transition-all duration-300 hover:text-red-600"
    >
      About Us
    </a>
  </li>
  <li className="flex">
    <a
      rel="noopener noreferrer"
      href="#"
      className="flex items-center px-4 py-2 text-gray-700 font-medium transition-all duration-300 hover:text-red-500"
    >
      Services We Offer
    </a>
  </li>
  <li className="flex">
    <a
      rel="noopener noreferrer"
      href="#"
      className="flex items-center px-4 py-2 text-gray-700 font-medium transition-all duration-300 hover:text-red-500"
    >
      Blog
    </a>
  </li>
  <li className="flex">
    <a
      rel="noopener noreferrer"
      href="#"
      className="flex items-center px-4 py-2 text-gray-700 font-medium transition-all duration-300 hover:text-red-500"
    >
      Testimonials
    </a>
  </li>
</ul>

		<button className="flex justify-end p-4 md:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>

<section className="bg-gradient-to-r from-[#000046] to-[#1cb5e0]  relative">
  {/* Particle Background */}
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

  {/* Content Section */}
  <div className="relative mx-auto max-w-screen-xl px-4 py-14 lg:flex lg:h-screen lg:items-center ">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl font-morgena">
        <BlurText
          text="Understand User Flow."
          delay={200}
          animateBy="words"
          direction="bottom"
          onAnimationComplete={handleAnimationComplete}
          className="text-2xl text-gray-200 font-medium pb-2 font-poppins"
        />
        <h1 className="font-extrabold text-yellow-300 sm:block font-poppins ">Increase Conversion.</h1>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed  text-gray-300 shadow-sm font-poppins">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
  <a
    className="font-poppins inline-block min-w-[180px] rounded bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-400 focus:ring-3 focus:outline-none"
    href="#"
  >
    Get Started
  </a>

  <a
    className="font-poppins inline-block min-w-[180px] rounded-sm px-6 py-3 text-sm font-semibold text-gray-400 hover:text-white focus:ring-3 focus:outline-none"
    href="#"
  >
    Learn More
  </a>
</div>

    </div>
  </div>
</section>


<div className='dark:bg-gray-700'>
<motion.h1
      className="dark:bg-gray-700 py-8 text-2xl font-semibold text-gray-300 sm:text-3xl text-center font-poppins  "
      initial={{ opacity: 0, y: 50 }} // Start position (invisible + moved down)
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      transition={{ duration: 0.8, ease: "easeOut" }} // Animation timing
      viewport={{ once: false, amount: 0.2 }} // Only animate once when in view
    >
      Services We Offer
    </motion.h1>
    </div>



<div style={{ height: '500px', position: 'relative' }}className='bg-slate-600' >
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
  )
}

export default Navbar