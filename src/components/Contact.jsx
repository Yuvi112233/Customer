import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoaded) {
          setIsLoaded(true);

          // Append the script only once
          const script = document.createElement("script");
          script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
          script.async = true;
          document.body.appendChild(script);
        }
      },
      { threshold: 0.3 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, [isLoaded]);

  return (
    <div className="contact-page ">
      <div className="dark:bg-gray-700">
        <motion.h1
          className="py-8 text-2xl font-semibold text-gray-300 sm:text-3xl text-center font-poppins"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }} 
        >
          Get in Touch!
        </motion.h1>
      </div>

      {/* Lazy-loaded Visme Form */}
      <div
        ref={formRef}
        className="visme_d"
        data-title="QR"
        data-url="epjn3o6r-"
        data-domain="forms"
        data-full-page="false"
        data-min-height="500px"
        data-form-id="120011"
      ></div>
    </div>
  );
};

export default Contact;
