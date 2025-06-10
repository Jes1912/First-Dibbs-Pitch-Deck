"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { FloatingPathsBackground } from "@/components/floating-paths-background"

interface PitchDeckVideoDemoPageProps {
  onNext: () => void
  onPrev: () => void
  currentSlide: number
  totalSlides: number
}

export default function PitchDeckVideoDemoPage({
  onNext,
  onPrev,
  currentSlide,
  totalSlides,
}: PitchDeckVideoDemoPageProps) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      <FloatingPathsBackground animated={false} />

      <div className="relative z-10 container mx-auto px-6 py-12 text-center">
        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight text-black"
        >
          See <span style={{ color: "#9234ea" }}>First Dibbs</span> in Action
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center text-lg md:text-xl text-black/70 mb-6 max-w-3xl mx-auto"
        >
          Watch how our AI-powered naming solution generates professional, legally-cleared business names in seconds.
        </motion.p>

        {/* Video embed - no frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div
            style={{
              position: "relative",
              paddingBottom: "calc(49.895833333333336% + 41px)",
              height: 0,
              width: "100%",
            }}
          >
            <iframe
              src="https://demo.arcade.software/x1giaq09dB6xaYcdT3yI?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
              title="First Dibbs Demo"
              frameBorder="0"
              loading="lazy"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
              allow="clipboard-write"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                colorScheme: "light",
              }}
            />
          </div>
        </motion.div>
      </div>
      {/* Page navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="fixed bottom-8 right-8 flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm z-50"
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
