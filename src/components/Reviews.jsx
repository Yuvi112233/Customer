import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import Particles from "./Particles";

const Reviews = () => {
  const sliderRef = useRef(null);
  const keenInstance = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      keenInstance.current = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1.1, // Slightly reduced for better mobile view
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 768px)": {
            slides: {
              perView: 1.5,
              spacing: 20,
            },
          },
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 2.5,
              spacing: 32,
            },
          },
        },
      });

      const prevButton = document.getElementById("keen-slider-previous");
      const nextButton = document.getElementById("keen-slider-next");

      if (prevButton && nextButton) {
        prevButton.addEventListener("click", () => keenInstance.current.prev());
        nextButton.addEventListener("click", () => keenInstance.current.next());
      }
    }

    return () => {
      keenInstance.current?.destroy();
    };
  }, []);

  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css"
        rel="stylesheet"
      />

      <section className=" bg-slate-600  relative">
        {/* Particles Background */}
        <div className="absolute inset-0">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* Container */}
        <div id="review" className="relative mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:py-16 lg:px-8 xl:py-24">
          <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
            <h2 className="max-w-xl text-4xl font-bold tracking-tight text-gray-300 sm:text-5xl">
              Read trusted reviews from our customers
            </h2>

            <div className="mt-8 flex gap-4 lg:mt-0">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous"
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                id="keen-slider-next"
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  className="size-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Slider */}
<div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
  <div ref={sliderRef} className="keen-slider">
    <div className="keen-slider__slide">
      <blockquote className="rounded-xl shadow-2xl flex h-full flex-col justify-between bg-gradient-to-bl from-[#c78fae] via-[#d498e6] to-[#aca9c9] relative p-6 shadow-xs sm:p-8 lg:p-12">
        <div>
          <div className="flex gap-0.5 text-green-500">⭐⭐⭐⭐⭐</div>

          <div className="mt-4">
            <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
              Great Website, Highly Professional!
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
              Yuvraj did an amazing job on my website. He understood my
              requirements perfectly and delivered beyond expectations. Will
              definitely hire again!
            </p>
          </div>
        </div>

        <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
          &mdash; Harpreet Singh, Ludhiana
        </footer>
      </blockquote>
    </div>

    <div className="keen-slider__slide">
      <blockquote className="rounded-xl shadow-2xl flex h-full flex-col justify-between bg-gradient-to-bl from-[#c78fae] via-[#d498e6] to-[#aca9c9] relative p-6 shadow-xs sm:p-8 lg:p-12">
        <div>
          <div className="flex gap-0.5 text-green-500">⭐⭐⭐⭐⭐</div>

          <div className="mt-4">
            <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
              Excellent Work for My Business!
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
              My e-commerce website was handled very professionally. The design
              was sleek, and the functionality was top-notch. Highly recommended!
            </p>
          </div>
        </div>

        <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
          &mdash; Simran Kaur, Amritsar
        </footer>
      </blockquote>
    </div>

    <div className="keen-slider__slide">
      <blockquote className="rounded-xl shadow-2xl flex h-full flex-col justify-between bg-gradient-to-bl from-[#c78fae] via-[#d498e6] to-[#aca9c9] relative p-6 shadow-xs sm:p-8 lg:p-12">
        <div>
          <div className="flex gap-0.5 text-green-500">⭐⭐⭐⭐⭐</div>

          <div className="mt-4">
            <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
              Very Responsive & Skilled Developer!
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
              Needed a landing page for my restaurant, and Yuvraj delivered a
              stunning design with smooth animations. Very happy with the work!
            </p>
          </div>
        </div>

        <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
          &mdash; Rajveer Chawla, Jalandhar
        </footer>
      </blockquote>
    </div>

    <div className="keen-slider__slide">
      <blockquote className="rounded-xl shadow-2xl flex h-full flex-col justify-between bg-gradient-to-bl from-[#c78fae] via-[#d498e6] to-[#aca9c9] relative p-6 shadow-xs sm:p-8 lg:p-12">
        <div>
          <div className="flex gap-0.5 text-green-500">⭐⭐⭐⭐⭐</div>

          <div className="mt-4">
            <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
              Perfect Social Media & Website Solution!
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
              Yuvraj and his team managed my business's social media and created
              a beautiful website. My customer engagement has increased a lot!
            </p>
          </div>
        </div>

        <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
          &mdash; Amandeep Sharma, Chandigarh
        </footer>
      </blockquote>
    </div>
  </div>
</div>

        </div>
      </section>
    </div>
  );
};

export default Reviews;
