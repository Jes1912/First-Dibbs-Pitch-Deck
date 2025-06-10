"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Sparkles, Zap, Palette, PoundSterling, Check } from "lucide-react"
import { FloatingPathsBackground } from "@/components/floating-paths-background"

interface PitchDeckDemoPageProps {
  onNext: () => void
  onPrev: () => void
  currentSlide: number
  totalSlides: number
}

export default function PitchDeckDemoPage({ onNext, onPrev, currentSlide, totalSlides }: PitchDeckDemoPageProps) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      {/* Static background paths */}
      <FloatingPathsBackground animated={false} />

      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main title - UPDATED WITH 60PX FONT AND BLACK DIBBS */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center font-bold mb-8 tracking-tight"
            style={{ fontSize: "60px", lineHeight: "1.1" }}
          >
            <span style={{ color: "#9234ea" }}>First</span> <span style={{ color: "#000000" }}>Dibbs</span> an{" "}
            <span style={{ color: "#9234ea" }}>AI Branding Agency</span>
          </motion.h1>

          {/* Features in horizontal display below title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8"
          >
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 flex items-center gap-2"
            >
              <div className="bg-green-100 rounded-full p-1 flex-shrink-0">
                <Check className="h-4 w-4 text-green-600" />
              </div>
              <div className="bg-purple-100 rounded-full p-1 flex-shrink-0">
                <Sparkles className="h-4 w-4 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xs font-bold text-black">Agency Level Names</h3>
                <p className="text-xs text-purple-600 font-semibold">in Minutes</p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 flex items-center gap-2"
            >
              <div className="bg-green-100 rounded-full p-1 flex-shrink-0">
                <Check className="h-4 w-4 text-green-600" />
              </div>
              <div className="bg-purple-100 rounded-full p-1 flex-shrink-0">
                <Zap className="h-4 w-4 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xs font-bold text-black">Check Full Availability</h3>
                <p className="text-xs text-purple-600 font-semibold">in Seconds</p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 flex items-center gap-2"
            >
              <div className="bg-green-100 rounded-full p-1 flex-shrink-0">
                <Check className="h-4 w-4 text-green-600" />
              </div>
              <div className="bg-purple-100 rounded-full p-1 flex-shrink-0">
                <span className="text-purple-600 font-bold text-xs">⚖️</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xs font-bold text-black">Global TM Clearance</h3>
                <p className="text-xs font-semibold" style={{ color: "#9234ea" }}>
                  + AI Interpretation
                </p>
              </div>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 flex items-center gap-2"
            >
              <div className="bg-green-100 rounded-full p-1 flex-shrink-0">
                <Check className="h-4 w-4 text-green-600" />
              </div>
              <div className="bg-purple-100 rounded-full p-1 flex-shrink-0">
                <Palette className="h-4 w-4 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xs font-bold text-black">Complete Branding</h3>
                <p className="text-xs text-purple-600 font-semibold">Logos & Guides</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Centralized Price Comparison and Stats as one unified object */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex items-start gap-6 max-w-5xl"
            >
              {/* Stats on the left */}
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                  className="bg-purple-50 rounded-xl p-3 text-center w-32"
                >
                  <div className="text-lg font-bold text-purple-600 mb-1">300x</div>
                  <p className="text-xs text-black/70">Faster than agencies</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 2.0 }}
                  className="bg-purple-50 rounded-xl p-3 text-center w-32"
                >
                  <div className="text-lg font-bold text-purple-600 mb-1">200x</div>
                  <p className="text-xs text-black/70">More affordable</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 2.2 }}
                  className="bg-purple-50 rounded-xl p-3 text-center w-32"
                >
                  <div className="text-lg font-bold text-purple-600 mb-1">100%</div>
                  <p className="text-xs text-black/70">Legally cleared</p>
                </motion.div>
              </div>

              {/* Price comparison on the right */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-4 shadow-lg border border-purple-100"
              >
                <h2 className="text-lg font-bold text-black mb-4 text-center">Price Comparison</h2>

                <div className="grid grid-cols-3 gap-3">
                  {/* Branding Agency */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 2.0 }}
                    className="bg-white rounded-xl p-3 shadow-sm border border-gray-200 text-center"
                  >
                    <div className="bg-red-100 rounded-full p-1 w-8 h-8 flex items-center justify-center mx-auto mb-2">
                      <PoundSterling className="h-4 w-4 text-red-600" />
                    </div>
                    <h3 className="text-sm font-bold text-black mb-1">Branding Agency</h3>
                    <div className="text-lg font-bold text-red-600 mb-1">£10,000+</div>
                    <p className="text-xs text-black/70 mb-2">Professional naming + branding</p>
                    <div className="space-y-0.5 text-xs text-black/60">
                      <div>• 2-4 weeks timeline</div>
                      <div>• High-end creative work</div>
                      <div>• Limited revisions</div>
                    </div>
                  </motion.div>

                  {/* Legal Clearance */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 2.2 }}
                    className="bg-white rounded-xl p-3 shadow-sm border border-gray-200 text-center"
                  >
                    <div className="bg-orange-100 rounded-full p-1 w-8 h-8 flex items-center justify-center mx-auto mb-2">
                      <span className="text-orange-600 font-bold text-sm">⚖️</span>
                    </div>
                    <h3 className="text-sm font-bold text-black mb-1">Legal Clearance</h3>
                    <div className="text-lg font-bold text-orange-600 mb-1">£5,000+</div>
                    <p className="text-xs text-black/70 mb-2">Trademark search only</p>
                    <div className="space-y-0.5 text-xs text-black/60">
                      <div>• 1-2 weeks per region</div>
                      <div>• Legal expertise required</div>
                      <div>• No creative input</div>
                    </div>
                  </motion.div>

                  {/* First Dibbs */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 2.4 }}
                    className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-3 shadow-lg border-2 border-purple-300 text-center relative overflow-hidden"
                  >
                    {/* Highlight badge */}
                    <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-bold px-1 py-0.5 rounded-full transform rotate-12">
                      BEST VALUE
                    </div>

                    <div className="bg-purple-200 rounded-full p-1 w-8 h-8 flex items-center justify-center mx-auto mb-2">
                      <span className="text-purple-700 font-bold text-sm">🚀</span>
                    </div>
                    <h3 className="text-sm font-bold text-purple-700 mb-1">First Dibbs</h3>
                    <div className="text-lg font-bold text-purple-700 mb-1">£49.99</div>
                    <p className="text-xs text-purple-600 mb-2 font-semibold">Complete solution</p>
                    <div className="space-y-0.5 text-xs text-purple-700">
                      <div>• Instantaneous</div>
                      <div>• AI + Legal + Creative</div>
                      <div>• Unlimited use until name found</div>
                    </div>
                  </motion.div>
                </div>

                {/* Savings highlight */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 2.6 }}
                  className="mt-4 text-center"
                >
                  <div className="bg-green-50 rounded-xl p-2 border border-green-200">
                    <p className="text-sm font-bold text-green-700">
                      Save up to <span className="text-lg">£14,950</span> compared to traditional solutions
                    </p>
                    <p className="text-xs text-green-600 mt-1">Get the same quality results in 300x less time</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Page navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.8 }}
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
