"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, AlertTriangle } from "lucide-react"
import { FloatingPathsBackground } from "@/components/floating-paths-background"

interface PitchDeckNinthPageProps {
  onNext: () => void
  onPrev: () => void
  currentSlide: number
  totalSlides: number
}

export default function PitchDeckNinthPage({ onNext, onPrev, currentSlide, totalSlides }: PitchDeckNinthPageProps) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      {/* Static background paths */}
      <FloatingPathsBackground animated={false} />

      {/* Content overlay */}
      <div className="relative z-10 flex-1 min-h-0 flex items-center justify-center px-4 py-6">
        <div className="max-w-5xl mx-auto">
          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-12 tracking-tight text-black"
          >
            Getting it <span style={{ color: "#9234ea" }}>Wrong</span> Hurts
          </motion.h1>

          {/* Cost highlights - same style as page 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10 max-w-4xl mx-auto"
          >
            {/* Cease & Desist Cost */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center bg-gradient-to-r from-red-50 to-orange-50 rounded-xl px-5 py-4 border border-red-100 shadow-sm hover:shadow-md transition-shadow duration-300 w-full md:w-64"
            >
              <div className="p-2 rounded-full bg-red-100/70 mr-4">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <p className="text-xl font-bold text-red-600 mb-1">£2,000</p>
                <p className="text-sm text-black/70">Avg Cost - Cease & Desist letter</p>
              </div>
            </motion.div>

            {/* Rebrand Costs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center bg-gradient-to-r from-orange-50 to-red-50 rounded-xl px-5 py-4 border border-orange-100 shadow-sm hover:shadow-md transition-shadow duration-300 w-full md:w-64"
            >
              <div className="p-2 rounded-full bg-orange-100/70 mr-4">
                <span className="text-orange-600 font-bold text-lg">£</span>
              </div>
              <div>
                <p className="text-xl font-bold text-orange-600 mb-1">£5,000-£50,000</p>
                <p className="text-sm text-black/70">Total rebrand & relaunch costs</p>
              </div>
            </motion.div>

            {/* Legal Damages - New */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex items-center bg-gradient-to-r from-red-50 to-red-100 rounded-xl px-5 py-4 border border-red-200 shadow-sm hover:shadow-md transition-shadow duration-300 w-full md:w-64"
            >
              <div className="p-2 rounded-full bg-red-100/70 mr-4">
                <span className="text-red-600 font-bold text-lg">⚖️</span>
              </div>
              <div>
                <p className="text-xl font-bold text-red-600 mb-1">£XX,XXX</p>
                <p className="text-sm text-black/70">Getting sued for lost profits/damages</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Additional consequences */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 max-w-3xl mx-auto"
          >
            <h3 className="text-lg font-bold text-black mb-4 text-center">Beyond Financial Costs</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <h4 className="font-semibold text-black mb-2">Lost Momentum</h4>
                <p className="text-black/70 text-sm">
                  Rebranding disrupts growth and marketing efforts, causing loss of momentum at critical stages.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <h4 className="font-semibold text-black mb-2">Customer Confusion</h4>
                <p className="text-black/70 text-sm">
                  Name changes confuse existing customers and prospects, potentially losing hard-earned trust.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <h4 className="font-semibold text-black mb-2">SEO & Discoverability</h4>
                <p className="text-black/70 text-sm">
                  Losing established search rankings and online presence when forced to change names.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <h4 className="font-semibold text-black mb-2">Founder Stress</h4>
                <p className="text-black/70 text-sm">
                  The psychological toll of legal threats and having to rebuild brand identity from scratch.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Page navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="fixed bottom-4 right-4 flex items-center gap-3 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm z-50"
          >
            <button onClick={onPrev} className="text-black/70 hover:text-black cursor-pointer">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-sm font-medium text-black/70">{currentSlide + 1}</span>
            <button onClick={onNext} className="text-black/70 hover:text-black cursor-pointer">
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
