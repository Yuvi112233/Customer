import React from 'react'
import Particles from './Particles';
import Contact from './Contact';

const Footer = () => {
  return (
<>
<div className=" bg-slate-600 dark:text-gray-200">
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
	<div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div className="max-w-3xl mx-auto text-center">
			<h2 className="text-3xl font-extrabold sm:text-4xl">All the features you want</h2>
			<p className="mt-4 text-lg dark:text-gray-300">Pellentesque viverra, leo id euismod laoreet, nunc risus molestie orci, vel faucibus quam justo id mauris.</p>
		</div>
		<dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
			<div className="flex">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
				</svg>
				<div className="ml-3">
					<dt className="text-lg font-medium">Quisque at urna</dt>
					<dd className="mt-2 dark:text-gray-300">Vivamus ultricies bibendum tortor, molestie imperdiet justo cursus eu. Donec quis arcu magna. Integer tempor egestas dolor.</dd>
				</div>
			</div>
			<div className="flex">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
				</svg>
				<div className="ml-3">
					<dt className="text-lg font-medium">Quisque eu dui lacinia</dt>
					<dd className="mt-2 dark:text-gray-300">Quisque ultricies volutpat sapien nec varius. Sed sit amet justo vestibulum, efficitur risus quis, gravida libero.</dd>
				</div>
			</div>
			<div className="flex">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
				</svg>
				<div className="ml-3">
					<dt className="text-lg font-medium">Mauris dignissim</dt>
					<dd className="mt-2 dark:text-gray-300">Phasellus nec molestie arcu. Proin dictum, lorem mollis rutrum efficitur, lectus velit pharetra elit, et dictum purus nibh auctor velit.</dd>
				</div>
			</div>
			<div className="flex">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
				</svg>
				<div className="ml-3">
					<dt className="text-lg font-medium">Proin nulla eros</dt>
					<dd className="mt-2 dark:text-gray-300">Sed ornare ultricies gravida. Morbi egestas dolor turpis, ornare laoreet est vehicula non.</dd>
				</div>
			</div>
			<div className="flex">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
				</svg>
				<div className="ml-3">
					<dt className="text-lg font-medium">Proin dictum</dt>
					<dd className="mt-2 dark:text-gray-300">Lorem mollis rutrum efficitur, lectus velit pharetra elit, et dictum purus nibh auctor velit.</dd>
				</div>
			</div>
			<div className="flex">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
				</svg>
				<div className="ml-3">
					<dt className="text-lg font-medium">Quisque eu dui lacinia</dt>
					<dd className="mt-2 dark:text-gray-300">Cras a mauris tincidunt, scelerisque justo sit amet, hendrerit est. Fusce venenatis diam fringilla metus convallis, at dapibus enim congue.</dd>
				</div>
			</div>
			<div className="flex">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
				</svg>
				<div className="ml-3">
					<dt className="text-lg font-medium">Cras vel bibendum tellus</dt>
					<dd className="mt-2 dark:text-gray-300">Curabitur molestie neque ac massa pulvinar, nec sollicitudin nunc consequat. Donec mattis orci eros, vitae porttitor risus pretium eget.</dd>
				</div>
			</div>
			<div className="flex">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
				</svg>
				<div className="ml-3">
					<dt className="text-lg font-medium">Dignissim magna</dt>
					<dd className="mt-2 dark:text-gray-300">Cras ac lectus erat. Curabitur condimentum luctus nisi, non lacinia ipsum.</dd>
				</div>
			</div>
		</dl>
	</div>
</div>

<section className="bg-slate-600 dark:text-gray-800">
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
	<div className= "  container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
		<div>
			<h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-200">Aliquip definiebas ad est</h2>
			<p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-300">Quando cetero his ne, eum admodum sapientem ut.</p>
		</div>
		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-300">Ad vix debet docendi</h3>
				<p className="mt-3 text-lg dark:text-gray-600">Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.</p>
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
							<h4 className="text-lg font-medium leading-6 dark:text-gray-300">Per ei quaeque sensibus</h4>
							<p className="mt-2 dark:text-gray-600">Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.</p>
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
							<h4 className="text-lg font-medium leading-6 dark:text-gray-300">Cu imperdiet posidonium sed</h4>
							<p className="mt-2 dark:text-gray-600">Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.</p>
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
							<h4 className="text-lg font-medium leading-6 dark:text-gray-300">Nulla omittam sadipscing mel ne</h4>
							<p className="mt-2 dark:text-gray-600">At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.</p>
						</div>
					</div>
				</div>
			</div>
			<div aria-hidden="true" className="mt-10 lg:mt-0">
				<img src="https://source.unsplash.com/random/360x480" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
			</div>
		</div>
		<div>
			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
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
				<div className="lg:col-start-2">
					<h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-300">Eam nibh gloriatur ex</h3>
					<p className="mt-3 text-lg dark:text-gray-600">Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.</p>
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
								<h4 className="text-lg font-medium leading-6 dark:text-gray-300">Cibo augue offendit has ad</h4>
								<p className="mt-2 dark:text-gray-600">An per velit appellantur, ut utinam minimum nominavi sit, odio nostro habemus ne nec. Ne sonet regione contentiones est.</p>
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
								<h4 className="text-lg font-medium leading-6 dark:text-gray-300">At eum ferri luptatum lobortis</h4>
								<p className="mt-2 dark:text-gray-600">Te per quidam maiorum ocurreret, etiam delicatissimi usu ad. Ne has quod periculis. Te sit primis iisque efficiantur.</p>
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
								<h4 className="text-lg font-medium leading-6 dark:text-gray-300">Dicunt verterem evertitur eu sea</h4>
								<p className="mt-2 dark:text-gray-600">Audire principes rationibus eam an, autem nominavi luptatum per te. Sumo fabulas vim eu, sonet saperet eleifend ut vix.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
					<img src="https://source.unsplash.com/random/361x481" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
				</div>
			</div>
		</div>
	</div>
</section>

<section className="bg-gray-600 dark:text-gray-300">
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

  
 
<div class=" bg-slate-600 mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
  <div class="mx-auto max-w-3xl text-center">
    <h2 class="text-3xl font-bold text-gray-300 sm:text-4xl">Trusted by eCommerce Businesses</h2>

    <p class="mt-4 text-gray-300 sm:text-xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
      provident impedit esse recusandae facere libero harum sequi.
    </p>
  </div>

  <dl class="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
    <div class="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
      <dt class="order-last text-lg font-medium text-gray-500">Total Sales</dt>

      <dd class="text-4xl font-extrabold text-yellow-500 md:text-5xl">$4.8m</dd>
    </div>

    <div class="flex flex-col rounded-lg  bg-blue-50 text-yellow-500 px-4 py-8 text-center">
      <dt class="order-last text-lg font-medium  bg-blue-50 text-gray-500">Official Addons</dt>

      <dd class="text-4xl font-extrabold  text-yellow-500 md:text-5xl">24</dd>
    </div>

    <div class="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
      <dt class="order-last text-lg font-medium text-gray-500">Total Addons</dt>

      <dd class="text-4xl font-extrabold  text-yellow-500 md:text-5xl">86</dd>
    </div>

    <div class="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
      <dt class="order-last text-lg font-medium text-gray-500">Downloads</dt>

      <dd class="text-4xl font-extrabold   text-yellow-500 md:text-5xl">86k</dd>
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

  <div class="relative mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div class="absolute end-4 top-4 sm:end-6 sm:top-6">
      <a
        class="inline-block rounded-full bg-teal-600 p-2 text-white transition hover:bg-teal-500 sm:p-3"
        href="#navbar"
      >
        <span class="sr-only">Back to top</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </div>

    <div class="lg:flex lg:items-center lg:justify-between">
      <div>
        <div class="flex justify-center text-teal-300 lg:justify-start">
          <svg class="h-6" viewBox="0 0 118 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="/" fill="currentColor" />
          </svg>
        </div>

        <p class="mx-auto mt-4 max-w-md text-center text-gray-300 lg:text-left text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>

      <ul class="mt-6 flex flex-wrap justify-center gap-4 lg:justify-end lg:gap-6 text-sm">
        <li><a class="text-gray-300 transition hover:text-gray-500" href="#">About</a></li>
        <li><a class="text-gray-300 transition hover:text-gray-500" href="#">Services</a></li>
        <li><a class="text-gray-300 transition hover:text-gray-500" href="#">Projects</a></li>
        <li><a class="text-gray-300 transition hover:text-gray-500" href="#">Blog</a></li>
      </ul>
    </div>

    <p class="mt-6 text-center text-xs text-gray-300 lg:text-right">
      Copyright &copy; 2022. All rights reserved.
    </p>
  </div>
</footer>


</>

  )
}

export default Footer