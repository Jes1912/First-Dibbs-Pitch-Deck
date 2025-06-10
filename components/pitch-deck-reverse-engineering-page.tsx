"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"
import { FloatingPathsBackground } from "@/components/floating-paths-background"

interface PitchDeckReverseEngineeringPageProps {
  onNext: () => void
  onPrev: () => void
  currentSlide: number
  totalSlides: number
}

export default function PitchDeckReverseEngineeringPage({
  onNext,
  onPrev,
  currentSlide,
  totalSlides,
}: PitchDeckReverseEngineeringPageProps) {
  const processSteps = [
    {
      task: "Brainstorm",
      tools: "ChatGPT, Generators",
      time: "30 mins",
    },
    {
      task: "Domain Check",
      tools: "GoDaddy, etc.",
      time: "1 min",
    },
    {
      task: "Domain Adjust",
      tools: "Adjust name for domains",
      time: "10 mins",
    },
    {
      task: "Socials Check",
      tools: "Check 5+ platforms",
      time: "3 min",
    },
    {
      task: "Socials Adjust",
      tools: "Adjust for socials",
      time: "5 mins",
    },
    {
      task: "Registry Check",
      tools: "Check Companies House",
      time: "1 min",
    },
    {
      task: "Trademark Check",
      tools: "UKIPO, USPTO, etc.",
      time: "3-5 hrs",
    },
    {
      task: "Total per Name",
      tools: "10+ Tools",
      time: "~5 hrs",
      isTotal: true,
    },
  ]

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      {/* Static background paths */}
      <FloatingPathsBackground animated={false} />

      {/* Content overlay */}
      <div className="relative z-10 flex-1 min-h-0 flex flex-col justify-center px-4 py-6">
        <div className="max-w-6xl mx-auto">
          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight text-black"
          >
            Reverse Engineering a <span style={{ color: "#9234ea" }}>Human Process</span>
          </motion.h1>

          {/* Before and After sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* BEFORE - Manual Process */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
            >
              <div className="bg-red-50 p-4 border-b border-red-100">
                <h3 className="text-xl font-bold text-red-700 text-center">Before: Manual Process</h3>
              </div>

              <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-black/5 overflow-hidden">
                {/* Table header */}
                <div className="grid grid-cols-8 bg-black/[0.02] border-b border-black/5">
                  {processSteps.map((step) => (
                    <div
                      key={`header-${step.task}`}
                      className={`p-2 font-semibold text-black text-xs text-center border-r border-black/5 last:border-r-0 ${
                        step.isTotal ? "bg-gradient-to-r from-red-50 to-orange-50" : ""
                      }`}
                    >
                      {step.task}
                    </div>
                  ))}
                </div>

                {/* Tools row */}
                <div className="grid grid-cols-8 border-b border-black/5">
                  {processSteps.map((step) => (
                    <div
                      key={`tools-${step.task}`}
                      className={`p-2 text-xs text-black/70 text-center border-r border-black/5 last:border-r-0 ${
                        step.isTotal ? "bg-gradient-to-r from-red-50 to-orange-50 font-semibold text-black" : ""
                      }`}
                    >
                      {step.tools}
                    </div>
                  ))}
                </div>

                {/* Time row */}
                <div className="grid grid-cols-8">
                  {processSteps.map((step) => (
                    <div
                      key={`time-${step.task}`}
                      className={`p-2 font-medium text-center border-r border-black/5 last:border-r-0 ${
                        step.isTotal ? "bg-gradient-to-r from-red-50 to-orange-50 font-bold text-red-600" : "text-black"
                      }`}
                    >
                      {step.time}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* AFTER - First Dibbs Process */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
            >
              <div className="bg-green-50 p-4 border-b border-green-100">
                <h3 className="text-xl font-bold text-green-700 text-center">After: First Dibbs</h3>
              </div>

              <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-black/5 overflow-hidden">
                {/* Table header */}
                <div className="grid grid-cols-8 bg-black/[0.02] border-b border-black/5">
                  {processSteps.map((step) => (
                    <div
                      key={`header-${step.task}`}
                      className={`p-2 font-semibold text-black text-xs text-center border-r border-black/5 last:border-r-0 ${
                        step.isTotal ? "bg-gradient-to-r from-green-50 to-emerald-50" : ""
                      }`}
                    >
                      {step.task}
                    </div>
                  ))}
                </div>

                {/* Tools row */}
                <div className="grid grid-cols-8 border-b border-black/5">
                  <div className="col-span-7 p-2 text-xs text-black/70 text-center border-r border-black/5">
                    First Dibbs AI
                  </div>
                  <div
                    className={`p-2 text-xs text-center border-r border-black/5 last:border-r-0 bg-gradient-to-r from-green-50 to-emerald-50 font-semibold text-black`}
                  >
                    1 Tool
                  </div>
                </div>

                {/* Time row */}
                <div className="grid grid-cols-8">
                  <div className="col-span-7 p-2 font-medium text-center border-r border-black/5 text-black">
                    &lt;1 min
                  </div>
                  <div
                    className={`p-2 font-medium text-center border-r border-black/5 last:border-r-0 bg-gradient-to-r from-green-50 to-emerald-50 font-bold text-green-600`}
                  >
                    &lt;1 min
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Three horizontal tick statements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 bg-green-50 rounded-xl px-6 py-4 border border-green-200 shadow-sm">
              <Check className="h-6 w-6 text-green-600" />
              <span className="text-lg font-bold text-green-700">Fastest</span>
            </div>
            <div className="flex items-center gap-3 bg-green-50 rounded-xl px-6 py-4 border border-green-200 shadow-sm">
              <Check className="h-6 w-6 text-green-600" />
              <span className="text-lg font-bold text-green-700">Most Affordable</span>
            </div>
            <div className="flex items-center gap-3 bg-green-50 rounded-xl px-6 py-4 border border-green-200 shadow-sm">
              <Check className="h-6 w-6 text-green-600" />
              <span className="text-lg font-bold text-green-700">Highest Quality</span>
            </div>
          </motion.div>

          {/* Page navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
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
