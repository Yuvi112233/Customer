import React from 'react'
import BounceCards from './BounceCards'
import { motion } from "framer-motion";
import b1 from "../assets/b1.jpg";
import Particles from './Particles';
import an1 from "../assets/an1.jpg";
import an2 from "../assets/an2.jpg";
import an3 from "../assets/an3.jpeg";
import an4 from "../assets/an4.jpeg";
import an5 from "../assets/an5.jpeg";

const images = [an1, an2, an3, an4, an5];
  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)"
  ];
const Body = () => {
  return (

    <div >




   <section  className=" py-10 bg-slate-600 relative pt-14">
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
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-12 p-6 bg-gray-900 rounded-2xl shadow-lg">
  {/* Left Content Section */}
  <div className="max-w-lg">
    <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
      🚀 Transform Your Business with a High-Impact Digital Presence
    </h2>

    <p className="mt-4 text-gray-300 leading-relaxed">
      👨‍💻 <span className="font-semibold text-white">Custom Websites</span> | 🎯 <span className="font-semibold text-white">Digital Marketing</span> | 📈 <span className="font-semibold text-white">Growth Strategies</span>
    </p>

    <p className="mt-2 text-gray-400">
      Your website is the first impression of your brand. I help businesses create **modern, responsive, and high-performance** websites that drive results.  
      Whether you're looking for a **sleek portfolio, an e-commerce store, or a business website**, I bring expertise in:
    </p>

    <ul className="mt-4 space-y-2 text-gray-300">
      <li>✅ <span className="font-medium text-white">MERN Stack Development</span> (React, Node.js, Express, MongoDB)</li>
      <li>✅ <span className="font-medium text-white">SEO-Optimized & Mobile-Responsive Designs</span></li>
      <li>✅ <span className="font-medium text-white">Social Media & Content Marketing for Brand Growth</span></li>
      <li>✅ <span className="font-medium text-white">Custom Web Solutions Tailored to Your Business</span></li>
    </ul>

    <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-md transition">
      📩 Let's Build Something Amazing!
    </button>
  </div>

  {/* Right Image Section */}
  <div className="flex justify-center">
  <img
    src={b1}
    alt="QR Code Digital Business"
    className="w-96 md:w-[500px] lg:w-[600px] rounded-xl shadow-xl"
  />
</div>

</div>

    <motion.h1
  className="py-10 text-2xl font-semibold text-gray-300 sm:text-3xl text-center font-poppins sm:block hidden"
  initial={{ opacity: 0, y: 50 }} // Start position (invisible + moved down)
  whileInView={{ opacity: 1, y: 0 }} // Animate when in view
  transition={{ duration: 0.8, ease: "easeOut" }} // Animation timing
  viewport={{ once: false, amount: 0.2 }} // Only animate once when in view
>
  Hover on Me!
</motion.h1>


    {/* Centered BounceCards */}
    <div className="flex justify-center items-center mt-10 w-full overflow-hidden">
  <BounceCards
    className="custom-bounceCards w-[300px] h-[150px] sm:w-[500px] sm:h-[250px]" 
    images={images}
    containerWidth={window.innerWidth < 640 ? 300 : 500}  
    containerHeight={window.innerWidth < 640 ? 150 : 250}  
    animationDelay={1}
    animationStagger={0.08}
    easeType="elastic.out(1, 0.5)"
    transformStyles={transformStyles}
    enableHover={true}
  />
</div>

  </div>
</section>


  
  </div>
  )
}

export default Body