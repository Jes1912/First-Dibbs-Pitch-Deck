"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { FloatingPathsBackground } from "@/components/floating-paths-background"

interface PitchDeckSeventhPageProps {
  onNext: () => void
  onPrev: () => void
  currentSlide: number
  totalSlides: number
}

export default function PitchDeckSeventhPage({ onNext, onPrev, currentSlide, totalSlides }: PitchDeckSeventhPageProps) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      {/* Static background paths */}
      <FloatingPathsBackground animated={false} />

      {/* Content overlay */}
      <div className="relative z-10 flex-1 min-h-0 flex items-center justify-center px-4 py-6">
        <div className="max-w-6xl mx-auto">
          {/* Main title - UPDATED TEXT */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-black"
          >
            <span style={{ color: "#9234ea" }}>Founders</span> Struggle with{" "}
            <span style={{ color: "#9234ea" }}>Naming</span>
          </motion.h1>

          {/* Rearranged layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col lg:flex-row gap-6 justify-center items-start"
          >
            {/* Left column - New image at top, naming difficulties below */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col gap-6 flex-shrink-0"
            >
              {/* New Reddit post at top left */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 transform hover:scale-[1.02] transition-transform duration-300 w-80">
                <img
                  src="/images/reddit-business-naming-question.png"
                  alt="Reddit post asking how to come up with a business name"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Naming difficulties post */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 transform hover:scale-[1.02] transition-transform duration-300 w-80">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-05-27-14-58-34-848_com.reddit.frontpage~2.jpg-ovLYgsCfdDCvRO1tYnoZPzsKjpcUMa.jpeg"
                  alt="Reddit discussion about naming difficulties"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Middle column - Naming process post at top, 3 months post below */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-col gap-6 flex-shrink-0"
            >
              {/* Naming process challenges post */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 transform hover:scale-[1.02] transition-transform duration-300 w-80">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-05-27-16-45-34-027_com.reddit.frontpage~2%20%281%29.jpg-niIn7QJekLyy8hrn4zNMTyc7U0lI3P.jpeg"
                  alt="Reddit discussion about naming process challenges"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* 3 months naming post moved here */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 transform hover:scale-[1.02] transition-transform duration-300 w-80">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-05-27-14-56-15-934_com.reddit.frontpage~3.jpg-nYDHSsuMMNCcr7RKWWU3YQnG7ZsWDR.jpeg"
                  alt="Reddit discussion about spending months on naming"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Right column - Visual balance element */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex-shrink-0 hidden lg:block"
            >
              {/* Subtle visual element for balance */}
              <div className="w-60 h-96 bg-gradient-to-b from-purple-50/30 to-transparent rounded-xl flex items-center justify-center">
                <div className="text-center text-purple-300">
                  <div className="text-6xl mb-4">💭</div>
                  <p className="text-sm font-medium">Real founder struggles</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Page navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="fixed bottom-8 right-8 flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm z-50"
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
