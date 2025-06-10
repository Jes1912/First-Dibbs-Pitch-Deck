"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Check, Sparkles, Shield, BadgeCheck } from "lucide-react"
import { FloatingPathsBackground } from "@/components/floating-paths-background"

interface PitchDeckEleventhPageProps {
  onNext: () => void
  onPrev: () => void
  currentSlide: number
  totalSlides: number
}

export default function PitchDeckEleventhPage({
  onNext,
  onPrev,
  currentSlide,
  totalSlides,
}: PitchDeckEleventhPageProps) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      {/* Static background paths */}
      <FloatingPathsBackground animated={false} />

      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Main title - UPDATED WITH CLAMP FOR RESPONSIVE SIZE */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center font-bold mb-8 tracking-tight text-black text-[clamp(2.5rem,5vw,60px)] leading-tight"
        >
          What Would the <span style={{ color: "#9234ea" }}>Perfect Solution</span> Look Like?
        </motion.h1>

        {/* Three key features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 flex flex-col items-center"
          >
            <div className="bg-purple-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-black mb-3">1. Branding Agency Quality</h3>
            <p className="text-black/70 mb-4 text-sm">
              Generates creative, memorable, and industry-appropriate names that reflect brand values.
            </p>
            <ul className="space-y-2 text-left text-black/80 w-full">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span className="text-sm">AI-powered creativity</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span className="text-sm">Industry-specific suggestions</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span className="text-sm">Memorable & distinctive</span>
              </li>
            </ul>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 flex flex-col items-center"
          >
            <div className="bg-purple-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-black mb-3">2. Complete Legal Clearance</h3>
            <p className="text-black/70 mb-4 text-sm">
              Runs all 7 necessary checks including trademark clearance to ensure legal safety.
            </p>
            <ul className="space-y-2 text-left text-black/80 w-full">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span className="text-sm">Trademark database search</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span className="text-sm">Domain & social availability</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span className="text-sm">Company registry check</span>
              </li>
            </ul>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 flex flex-col items-center"
          >
            <div className="bg-purple-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
              <BadgeCheck className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-black mb-3">3. Guaranteed Results</h3>
            <p className="text-black/70 mb-4 text-sm">
              Guarantees a name you like for less than £50, making quality naming accessible to all founders.
            </p>
            <ul className="space-y-2 text-left text-black/80 w-full">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span className="text-sm">Affordable fixed price</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span className="text-sm">Money-back guarantee</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span className="text-sm">Unlimited iterations</span>
              </li>
            </ul>
          </motion.div>
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
  )
}
