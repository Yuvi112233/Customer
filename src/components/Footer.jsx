import React from 'react'
import Particles from './Particles';
import t1 from "../assets/t1.webp";
import t2 from "../assets/t2.png";
import Contact from './Contact';

const Footer = () => {
  return (
<>
<div className=" bg-slate-600 dark:text-gray-200 relative">

<div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 relative"> 
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
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-extrabold sm:text-4xl">Freelance Services I Offer</h2>
    <p className="mt-4 text-lg dark:text-gray-300">Providing high-quality digital solutions to help businesses grow and succeed online.</p>
  </div>
  <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
    <div className="flex">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-yellow-500">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <div className="ml-3">
        <dt className="text-lg font-medium">Custom Website Development</dt>
        <dd className="mt-2 dark:text-gray-300">I create responsive, user-friendly websites tailored to your business needs using modern technologies like React and Tailwind CSS.</dd>
      </div>
    </div>
    <div className="flex">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-yellow-500">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <div className="ml-3">
        <dt className="text-lg font-medium">E-commerce Development</dt>
        <dd className="mt-2 dark:text-gray-300">Build feature-rich online stores with secure payment gateways, seamless UI, and optimized performance.</dd>
      </div>
    </div>
    <div className="flex">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-yellow-500">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <div className="ml-3">
        <dt className="text-lg font-medium">Website Maintenance</dt>
        <dd className="mt-2 dark:text-gray-300">Keep your website updated, secure, and running smoothly with regular maintenance and optimization services.</dd>
      </div>
    </div>
    <div className="flex">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-yellow-500">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <div className="ml-3">
        <dt className="text-lg font-medium">SEO Optimization</dt>
        <dd className="mt-2 dark:text-gray-300">Improve your website’s visibility on search engines with SEO best practices to drive organic traffic.</dd>
      </div>
    </div>
    <div className="flex">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-yellow-500">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <div className="ml-3">
        <dt className="text-lg font-medium">Landing Page Design</dt>
        <dd className="mt-2 dark:text-gray-300">Engaging and high-converting landing pages to capture leads and boost your marketing efforts.</dd>
      </div>
    </div>
    <div className="flex">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-yellow-500">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <div className="ml-3">
        <dt className="text-lg font-medium">Social Media Integration</dt>
        <dd className="mt-2 dark:text-gray-300">Seamlessly connect your website with social media platforms to enhance engagement and branding.</dd>
      </div>
    </div>
    <div className="flex">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-yellow-500">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <div className="ml-3">
        <dt className="text-lg font-medium">Performance Optimization</dt>
        <dd className="mt-2 dark:text-gray-300">Enhance website speed, improve loading times, and boost overall user experience for better engagement.</dd>
      </div>
    </div>
    <div className="flex">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-yellow-500">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <div className="ml-3">
        <dt className="text-lg font-medium">Custom Web Applications</dt>
        <dd className="mt-2 dark:text-gray-300">Develop dynamic web applications with custom features tailored to your business requirements.</dd>
      </div>
    </div>
  </dl>
</div>

</div>

<section className="bg-slate-600 dark:text-gray-800 relative">
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
<div className="absolute inset-0">
  </div>
	<div className= "  container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
		<div id='blog' >
			<h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-200">Crafting Digital Experiences That Matter</h2>
			<p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-300">Bringing your ideas to life with modern web solutions & strategic digital growth.</p>
		</div>
		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-300">What I Offer:</h3>
				<p className="mt-3 text-lg dark:text-gray-300">Custom Web Development – Stunning, fast, and user-friendly websites.</p>
				<div className="mt-12 space-y-12">
	<div className="flex">
		<div className="flex-shrink-0">
			<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
				</svg>
			</div>
		</div>
		<div className="ml-4">
			<h4 className="text-lg font-medium leading-6 dark:text-gray-300">Custom Web Development</h4>
			<p className="mt-2 dark:text-gray-300">I create fast, responsive, and visually stunning websites tailored to your brand and business needs.</p>
		</div>
	</div>
	<div className="flex">
		<div className="flex-shrink-0">
			<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
				</svg>
			</div>
		</div>
		<div className="ml-4">
			<h4 className="text-lg font-medium leading-6 dark:text-gray-300">Social Media Management</h4>
			<p className="mt-2 dark:text-gray-300">Engaging content creation, growth strategies, and audience engagement to boost your brand's presence online.</p>
		</div>
	</div>
	<div className="flex">
		<div className="flex-shrink-0">
			<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
				</svg>
			</div>
		</div>
		<div className="ml-4">
			<h4 className="text-lg font-medium leading-6 dark:text-gray-300">Brand Elevation & Marketing</h4>
			<p className="mt-2 dark:text-gray-300">High-quality graphics, compelling reels, and strategic campaigns to enhance brand visibility and engagement.</p>
		</div>
	</div>
</div>

			</div>
			<div aria-hidden="true" className="mt-10 lg:mt-0">
				<img src={t1} alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
			</div>
		</div>
		<div>
			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
      
			<div className="lg:col-start-2">
	<h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-300">
		Why Choose Our Services?
	</h3>
	<p className="mt-3 text-lg dark:text-gray-300">
		We provide high-quality digital solutions tailored to your needs. From website development to marketing strategies, we ensure your business stands out in the digital landscape.
	</p>
	<div className="mt-12 space-y-12">
		<div className="flex">
			<div className="flex-shrink-0">
				<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
					</svg>
				</div>
			</div>
			<div className="ml-4">
				<h4 className="text-lg font-medium leading-6 dark:text-gray-300">
					Customized Solutions
				</h4>
				<p className="mt-2 dark:text-gray-300">
					We tailor our services to meet your unique business goals, ensuring a personalized approach to your digital presence.
				</p>
			</div>
		</div>
		<div className="flex">
			<div className="flex-shrink-0">
				<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
					</svg>
				</div>
			</div>
			<div className="ml-4">
				<h4 className="text-lg font-medium leading-6 dark:text-gray-300">
					Expert Team
				</h4>
				<p className="mt-2 dark:text-gray-300">
					Our experienced professionals bring creativity and technical expertise to deliver exceptional results.
				</p>
			</div>
		</div>
		<div className="flex">
			<div className="flex-shrink-0">
				<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
					</svg>
				</div>
			</div>
			<div className="ml-4">
				<h4 className="text-lg font-medium leading-6 dark:text-gray-300">
					Result-Oriented Approach
				</h4>
				<p className="mt-2 dark:text-gray-300">
					We focus on delivering measurable growth and success for your business with innovative strategies.
				</p>
			</div>
		</div>
	</div>
</div>

				<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
					<img src={t2} alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
				</div>
			</div>
		</div>
	</div>
</section>

<section className="bg-gray-600 dark:text-gray-300 relative">
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
<div className="absolute inset-0">
    
  </div>

  
 
<div class=" bg-slate-600 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
  <div class="mx-auto max-w-3xl text-center">
    <h2 class="text-3xl font-bold text-gray-300 sm:text-4xl">🚀 Helping Businesses Grow Online</h2>

    <p class="mt-4 text-gray-300 sm:text-xl">
    From local shops to growing brands, I help businesses establish a strong online presence with modern websites and digital solutions.
    </p>
  </div>

  <dl class="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
    <div class="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
      <dt class="order-last text-lg font-medium text-gray-500"> Revenue Boosted for Clients</dt>

      <dd class="text-4xl font-extrabold text-yellow-500 md:text-5xl">₹2L+</dd>
    </div>

    <div class="flex flex-col rounded-lg  bg-blue-50 text-yellow-500 px-4 py-8 text-center">
      <dt class="order-last text-lg font-medium  bg-blue-50 text-gray-500">Businesses Digitized & Transformed</dt>

      <dd class="text-4xl font-extrabold  text-yellow-500 md:text-5xl"> 10+</dd>
    </div>

    <div class="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
      <dt class="order-last text-lg font-medium text-gray-500">Custom Features Developed</dt>

      <dd class="text-4xl font-extrabold  text-yellow-500 md:text-5xl">20+</dd>
    </div>

    <div class="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
      <dt class="order-last text-lg font-medium text-gray-500"> Visitors Reached Through Websites</dt>

      <dd class="text-4xl font-extrabold   text-yellow-500 md:text-5xl">5K+</dd>
    </div>
  </dl>
</div>


</section>



<Contact/>

<footer class="bg-gradient-to-r from-[#000046] to-[#1cb5e0] relative py-6">
  <div class="absolute inset-0">
  <Particles
  particleColors={["#ffffff", "#ffffff"]}
  particleCount={100}
  particleSpread={5}
  speed={0.1}
  particleBaseSize={50}
  moveParticlesOnHover={false}
  alphaParticles={false}
  disableRotation={false}
/>

  </div>

  <div className="relative mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
  <div className="lg:flex lg:items-center lg:justify-between">
    <div>
      {/* Hide h2 on small screens */}
      <h2 className="hidden sm:block text-lg font-semibold text-center lg:text-left text-gray-200">
        Let's Build Something Amazing! 🚀
      </h2>
      {/* Hide description p on small screens */}
      <p className="hidden sm:block mx-auto mt-2 max-w-md text-center lg:text-left text-gray-400 text-sm">
        Crafting Engaging Digital Experiences with Web & Marketing Solutions.
      </p>
    </div>

    {/* Links visible on all screens */}
    <ul className="mt-6 flex flex-wrap justify-center gap-4 lg:justify-end lg:gap-6 text-sm">
      <li><a className="text-gray-200 transition hover:text-white" href="/">About</a></li>
      <li><a className="text-gray-200 transition hover:text-white" href="#services">Services</a></li>
      <li><a className="text-gray-200 transition hover:text-white" href="#review">Testimonials</a></li>
      <li><a className="text-gray-200 transition hover:text-white" href="#blog">Blog</a></li>
    </ul>
  </div>

  {/* Copyright visible on all screens */}
  <p className="mt-6 text-center text-xs text-gray-300 lg:text-right">
    Copyright © 2025 <span className="font-semibold">IgniteInsightHub</span>. All Rights Reserved.
  </p>
</div>

</footer>


</>

  )
}

export default Footer