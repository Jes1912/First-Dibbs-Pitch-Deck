"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FloatingPathsBackground } from "@/components/floating-paths-background"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PitchDeckFirstPageProps {
  onNext: () => void
  onPrev: () => void
  currentSlide: number
  totalSlides: number
}

export default function PitchDeckFirstPage({ onNext, onPrev, currentSlide, totalSlides }: PitchDeckFirstPageProps) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      {/* Background effect - animated on first slide */}
      <FloatingPathsBackground animated={true} />

      {/* Content overlay */}
      <div className="relative z-10 flex-1 min-h-0 flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main title with compact sizing */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter"
          >
            <span className="inline-block">
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 100, damping: 20 }}
                className="inline-block text-black"
              >
                First
              </motion.span>
            </span>{" "}
            <span className="inline-block">
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 100, damping: 20 }}
                className="inline-block"
                style={{ color: "#9234ea" }}
              >
                Dibbs
              </motion.span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mb-8"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-light text-black/80 tracking-wide">
              Company Naming Made Easy
            </h2>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex justify-center"
          >
            <div className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Button
                variant="ghost"
                onClick={onNext}
                className="rounded-[1.15rem] px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold backdrop-blur-md bg-white/95 hover:bg-white/100 text-black transition-all duration-300 group-hover:-translate-y-0.5 border border-black/10 hover:shadow-md"
              >
                <span className="opacity-90 group-hover:opacity-100 transition-opacity">Get Started</span>
                <span className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">
                  →
                </span>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Page navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 flex items-center gap-3 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-sm z-50"
      >
        <button
          onClick={onPrev}
          disabled={currentSlide === 0}
          className={`transition-colors ${
            currentSlide === 0 ? "text-black/30 cursor-not-allowed" : "text-black/70 hover:text-black cursor-pointer"
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="text-sm font-medium text-black/70">{currentSlide + 1}</span>
        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className={`transition-colors ${
            currentSlide === totalSlides - 1
              ? "text-black/30 cursor-not-allowed"
              : "text-black/70 hover:text-black cursor-pointer"
          }`}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </motion.div>
    </div>
  )
}
