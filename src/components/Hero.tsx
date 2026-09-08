"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const heroSlides = [
  {
    id: 1,
    image: "/images/hero-slide-1.png",
    eyebrow: "EMBEDDED & HARDWARE ENGINEERING",
    heading: "Building the Foundation of",
    highlight: "Intelligent Hardware",
    description:
      "From firmware and RTOS to FPGA and connected systems — we engineer embedded solutions that power the next generation of smart devices.",
  },
  {
    id: 2,
    image: "/images/hero-slide-2.png",
    eyebrow: "SOFTWARE & DIGITAL ENGINEERING",
    heading: "Accelerating Innovation Through",
    highlight: "Digital Platforms",
    description:
      "Cloud-native applications, AI-driven data pipelines, and DevOps platforms designed to scale your digital transformation journey.",
  },
  {
    id: 3,
    image: "/images/hero-slide-3.png",
    eyebrow: "ENGINEERING & TECHNOLOGY CONSULTING",
    heading: "Strategic Advisory for",
    highlight: "Technology Excellence",
    description:
      "Architecture blueprints, technology roadmaps, and engineering strategy consulting to future-proof your innovation pipeline.",
  },
]

const SLIDE_DURATION = 6000

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [isAutoPlaying, currentSlide])

  return (
    <section className="relative bg-[#03152B] text-white overflow-hidden min-h-[100dvh] flex items-center">
      {/* Background Images with Crossfade */}
      <AnimatePresence mode="sync">
        {heroSlides.map((slide, index) =>
          index === currentSlide ? (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 z-0 w-full h-full"
            >
              <Image
                src={slide.image}
                alt={slide.eyebrow}
                fill
                priority={index === 0}
                className="object-cover object-center"
                sizes="100vw"
              />
              {/* Dark overlay gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#03152B]/95 via-[#03152B]/70 to-[#03152B]/40 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03152B]/80 via-transparent to-[#03152B]/30 z-10" />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 lg:py-16">
        <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.12, delayChildren: 0.2 },
                },
                exit: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
            >
              {/* Eyebrow */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                  exit: {
                    opacity: 0,
                    y: -15,
                    filter: "blur(6px)",
                    transition: { duration: 0.3 },
                  },
                }}
                className="mb-3.5 sm:mb-4"
              >
                <p className="text-[#168BFF] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase drop-shadow-[0_0_4px_rgba(0,0,0,0.6)]">
                  {heroSlides[currentSlide].eyebrow}
                </p>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.7, ease: "easeOut" },
                  },
                  exit: {
                    opacity: 0,
                    y: -20,
                    filter: "blur(8px)",
                    transition: { duration: 0.3 },
                  },
                }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] font-extrabold text-white leading-[1.15] tracking-tight mb-4 sm:mb-5 drop-shadow-[0_0_8px_rgba(0,0,0,0.7)]"
              >
                {heroSlides[currentSlide].heading}{" "}
                <span className="text-[#168BFF] inline-block font-black">
                  {heroSlides[currentSlide].highlight}
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 25, filter: "blur(8px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.65, ease: "easeOut" },
                  },
                  exit: {
                    opacity: 0,
                    y: -15,
                    filter: "blur(6px)",
                    transition: { duration: 0.3 },
                  },
                }}
                className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed mb-7 sm:mb-8 max-w-xl drop-shadow-[0_0_6px_rgba(0,0,0,0.6)]"
              >
                {heroSlides[currentSlide].description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                  exit: {
                    opacity: 0,
                    y: -10,
                    transition: { duration: 0.25 },
                  },
                }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10"
              >
                <Link
                  href="/contact-us"
                  className="group inline-flex items-center justify-center bg-[#087CF5] hover:bg-[#168BFF] text-white px-6 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-[#087CF5]/25 hover:shadow-[#168BFF]/40 hover:scale-[1.02]"
                >
                  <span>Talk to Our Experts</span>
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="group inline-flex items-center justify-center bg-[#03152B]/80 hover:bg-[#062449] border border-white/25 hover:border-white/50 text-white px-6 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-200 hover:scale-[1.02]"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform opacity-70 group-hover:opacity-100" />
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators / Progress Dots */}
          <div className="flex items-center gap-3">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => {
                  goToSlide(index)
                  setIsAutoPlaying(true)
                }}
                aria-label={`Go to slide ${index + 1}`}
                className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
                style={{ width: index === currentSlide ? "48px" : "16px" }}
              >
                <div
                  className={`absolute inset-0 rounded-full transition-colors duration-300 ${
                    index === currentSlide
                      ? "bg-white/20"
                      : "bg-white/15 hover:bg-white/30"
                  }`}
                />
                {index === currentSlide && (
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-[#168BFF] rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: SLIDE_DURATION / 1000,
                      ease: "linear",
                    }}
                    key={`progress-${currentSlide}`}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
