"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Mail, Sparkles } from "lucide-react"

interface PitchDeckThankYouPageProps {
  onNext: () => void
  onPrev: () => void
  currentSlide: number
  totalSlides: number
}

export default function PitchDeckThankYouPage({ onPrev, currentSlide, totalSlides }: PitchDeckThankYouPageProps) {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-50 p-6">
      {/* Subtle animated background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              backgroundColor: i % 2 === 0 ? "rgba(146, 52, 234, 0.05)" : "rgba(79, 70, 229, 0.05)",
              width: Math.random() * 150 + 50,
              height: Math.random() * 150 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content overlay */}
      <div className="relative z-10 container mx-auto text-center flex flex-col items-center justify-center flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
          className="w-full max-w-2xl"
        >
          <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-8">
            <Sparkles className="h-12 w-12 text-purple-600" />
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold mb-4 tracking-tight text-black">
            Thank You from <span style={{ color: "#9234ea" }}>First Dibbs</span>
          </h1>

          <p className="text-xl md:text-2xl text-black/70 mb-10">
            We're excited about the future of company naming and would love to answer any questions you have.
          </p>

          <motion.a
            href="mailto:info@firstdibbs.ai"
            className="inline-flex items-center gap-3 text-lg font-medium text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300 px-8 py-4 rounded-full shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="h-5 w-5" />
            info@firstdibbs.ai
          </motion.a>
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
          className={`transition-colors ${currentSlide === 0 ? "text-black/30 cursor-not-allowed" : "text-black/70 hover:text-black cursor-pointer"}`}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="text-sm font-medium text-black/70">{currentSlide + 1}</span>
        <button disabled={true} className="text-black/30 cursor-not-allowed">
          <ChevronRight className="w-4 h-4" />
        </button>
      </motion.div>
    </div>
  )
}
