import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Download, ArrowRight } from "lucide-react";
import axios from "axios";

const HeroSection = () => {
  const [heroContent, setHeroContent] = useState({
    title: "Expert Industrial Compliance & Certification Solutions",
    subtitle:
      "Helping Indian & Foreign Firms Meet Regulatory Standards and Enhance Product Quality",
    ctaText: "Get a Free Consultation",
    services: [
      "NABL Accreditation",
      "BIS Certification",
      "OTR for Importers",
      "Hallmarking Training",
      "Management Systems",
    ],
  });

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex(
        (prev) => (prev + 1) % heroContent.services.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [heroContent.services.length]);

  return (
    <div className="relative w-full h-[90vh] min-h-[600px] flex items-center bg-gradient-to-br from-blue-900 to-indigo-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-geometric.png')]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {heroContent.title}
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-blue-200 mb-8 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {heroContent.subtitle}
            </motion.p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.a
                href="#contact"
                className="bg-white text-blue-900 hover:bg-blue-100 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {heroContent.ctaText}
                <ArrowRight size={20} />
              </motion.a>

              <motion.a
                href="/services-brochure.pdf"
                download
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Download Brochure
                <Download size={20} />
              </motion.a>
            </div>

            {/* Services Carousel */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-blue-200 font-medium mb-4">
                Our Services Include:
              </h3>
              <div className="relative h-12">
                {heroContent.services.map((service, index) => (
                  <motion.div
                    key={service}
                    className="absolute top-0 left-0 text-white text-xl font-medium flex items-center gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: index === currentServiceIndex ? 1 : 0,
                      y: index === currentServiceIndex ? 0 : 20,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <ChevronRight className="text-blue-300" size={20} />
                    {service}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Graphic Element */}
          <motion.div
            className="hidden lg:flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-xl">
              {/* Geometric background */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-700 rounded-lg rotate-12 opacity-30"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-700 rounded-lg rotate-12 opacity-30"></div>

              {/* Main card */}
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-800 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-white text-2xl font-bold mb-4">
                  35+ Years of BIS Experience
                </h3>
                <p className="text-blue-200 mb-6">
                  Led by an ex-scientist from the Bureau of Indian Standards
                  with over three decades of experience in compliance and
                  certification.
                </p>

                <div className="flex flex-wrap gap-3">
                  <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">
                    NABL
                  </span>
                  <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">
                    BIS
                  </span>
                  <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">
                    ISO
                  </span>
                  <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">
                    Hallmarking
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute bottom-20 left-20 w-16 h-16 bg-blue-600 rounded-full opacity-20"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute top-32 right-32 w-10 h-10 bg-indigo-600 rounded-full opacity-20"
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />
    </div>
  );
};

export default HeroSection;
