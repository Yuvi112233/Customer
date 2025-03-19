import React from 'react'
import BounceCards from './BounceCards'
import { motion } from "framer-motion";
import Particles from './Particles';

const images = [
    "https://picsum.photos/400/400?grayscale",
    "https://picsum.photos/500/500?grayscale",
    "https://picsum.photos/600/600?grayscale",
    "https://picsum.photos/700/700?grayscale",
    "https://picsum.photos/300/300?grayscale"
  ];
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
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div>
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-300 sm:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>

          <p className="mt-4 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
            architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
            sequi.
          </p>
        </div>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded-xl"
          alt=""
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
    <div className="flex justify-center items-center mt-10">
    
      <BounceCards
        className="custom-bounceCards"
        images={images}
        containerWidth={500}
        containerHeight={250}
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