"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Clock, DollarSign } from "lucide-react"
import { FloatingPathsBackground } from "@/components/floating-paths-background"

interface PitchDeckFifthPageProps {
  onNext: () => void
  onPrev: () => void
  currentSlide: number
  totalSlides: number
}

export default function PitchDeckFifthPage({ onNext, onPrev, currentSlide, totalSlides }: PitchDeckFifthPageProps) {
  return (
    <div className="relative h-screen w-screen overflow-hidden flex flex-col bg-white">
      {/* Static background paths */}
      <FloatingPathsBackground animated={false} />

      {/* Content overlay */}
      <div className="relative z-10 flex-1 min-h-0 flex flex-col justify-center px-4 py-6">
        <div className="max-w-6xl mx-auto">
          {/* Main title - LARGE SIZE to match slide 1 */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center text-[clamp(2rem,5vw,3.5rem)] font-bold mb-[clamp(1rem,4vh,2rem)] tracking-tight text-black"
          >
            <span style={{ color: "#9234ea" }}>Software</span> Publishing is Exploding{" "}
            <span className="inline-block">🚀</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center text-[clamp(0.9rem,2.5vw,1.25rem)] text-black/70 mb-[clamp(1rem,3vh,2rem)] max-w-4xl mx-auto"
          >
            But You Can't Launch Software without a Name
          </motion.p>

          {/* Bottleneck diagram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="relative flex items-center justify-center flex-1 min-h-0"
          >
            {/* SVG for the bottleneck visualization */}
            <svg width="800" height="400" viewBox="0 0 800 400" className="w-full max-w-4xl">
              {/* Blue input flows */}
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.path
                  key={`input-${i}`}
                  d={`M50,${80 + i * 60} C200,${80 + i * 60} 250,200 350,200`}
                  stroke="#3b82f6"
                  strokeWidth="20"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1 + i * 0.2 }}
                />
              ))}

              {/* Green output flows */}
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.path
                  key={`output-${i}`}
                  d={`M450,200 C550,200 600,${80 + i * 60} 750,${80 + i * 60}`}
                  stroke="#10b981"
                  strokeWidth="15"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 2 + i * 0.2 }}
                />
              ))}

              {/* Arrow heads */}
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.polygon
                  key={`arrow-${i}`}
                  points={`760,${80 + i * 60} 740,${70 + i * 60} 740,${90 + i * 60}`}
                  fill="#10b981"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 3 + i * 0.1 }}
                />
              ))}

              {/* Bottleneck circle */}
              <motion.circle
                cx="400"
                cy="200"
                r="40"
                fill="url(#redGradient)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              />

              {/* Gradient definition */}
              <defs>
                <radialGradient id="redGradient" cx="30%" cy="30%">
                  <stop offset="0%" stopColor="#fca5a5" />
                  <stop offset="100%" stopColor="#dc2626" />
                </radialGradient>
              </defs>

              {/* Labels */}
              <text x="400" y="120" textAnchor="middle" className="text-sm font-bold fill-red-600">
                NAMING BOTTLENECK
              </text>
            </svg>

            {/* Options panel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 3.5 }}
              className="absolute right-0 top-1/4 bg-white rounded-xl p-6 shadow-lg border border-gray-200 w-80"
            >
              <h3 className="font-bold text-black mb-4 text-center">Naming Options</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
                  <Clock className="h-5 w-5 text-red-600 mt-1" />
                  <div>
                    <div className="font-semibold text-red-600">Manual Research</div>
                    <div className="text-sm text-black/70">Weeks of work, 4-5 hours per country</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
                  <DollarSign className="h-5 w-5 text-red-600 mt-1" />
                  <div>
                    <div className="font-semibold text-red-600">Legal Clearance</div>
                    <div className="text-sm text-black/70">£10-20k for global coverage</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Page navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4 }}
            className="fixed bottom-8 right-8 flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm z-50"
          >
            <button
              onClick={onPrev}
              disabled={currentSlide === 0}
              className={`transition-colors ${
                currentSlide === 0
                  ? "text-black/30 cursor-not-allowed"
                  : "text-black/70 hover:text-black cursor-pointer"
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
      </div>
    </div>
  )
}
