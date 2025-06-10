"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Clock, X, Check, PoundSterling } from "lucide-react"
import { FloatingPathsBackground } from "@/components/floating-paths-background"
import { useState } from "react"

interface PitchDeckEighthPageProps {
  onNext: () => void
  onPrev: () => void
  currentSlide: number
  totalSlides: number
}

export default function PitchDeckEighthPage({ onNext, onPrev, currentSlide, totalSlides }: PitchDeckEighthPageProps) {
  const [showProcess, setShowProcess] = useState(false)

  const processSteps = [
    {
      task: "Brainstorm",
      tools: "ChatGPT, Thesaurus, Name Generators",
      time: "30 mins",
    },
    {
      task: "Domain Check",
      tools: "GoDaddy, IONOS, NameCheap",
      time: "1 min",
    },
    {
      task: "Domain Adjust",
      tools: "Adjust name to get domains (remove vowel etc)",
      time: "10 mins",
    },
    {
      task: "Socials Check",
      tools: "Social handle check on 5+ platforms",
      time: "3 min",
    },
    {
      task: "Socials Adjust",
      tools: "Adjust name to get social media handles",
      time: "5 mins",
    },
    {
      task: "Registry Check",
      tools: "Check Companies House",
      time: "1 min",
    },
    {
      task: "Trademark Check",
      tools: "UKIPO, EUIPO, USPTO, TMView",
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
      <div className="relative z-10 flex-1 min-h-0 flex items-center justify-center px-4 py-6">
        <div className="max-w-5xl mx-auto">
          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-black"
          >
            Founders are <span style={{ color: "#9234ea" }}>Underserved</span> or{" "}
            <span style={{ color: "#9234ea" }}>Outpriced</span> by Naming Solutions
          </motion.h1>

          {/* Your Options title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mb-6"
          >
            <h2 className="text-xl font-bold text-black mb-2">Your Options:</h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Two options - SWAPPED ORDER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
          >
            {/* Option A - DIY (previously Option 2) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white rounded-xl p-5 shadow-lg border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                  <span className="text-purple-600 font-bold text-lg">A</span>
                </div>
                <h3 className="text-lg font-bold text-black">DIY with Multiple Tools</h3>
              </div>

              <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg mb-4 border border-orange-100">
                <Clock className="h-5 w-5 text-orange-600 flex-shrink-0" />
                <div>
                  <p className="text-lg font-bold text-orange-600">Weeks</p>
                  <p className="text-sm text-black/70">Using 10+ different tools</p>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Lower cost (time vs. money)</span>
                </li>
                <li className="flex items-center gap-2">
                  <X className="h-4 w-4 text-red-600" />
                  <span className="text-sm">Fragmented process</span>
                </li>
                <li className="flex items-center gap-2">
                  <X className="h-4 w-4 text-red-600" />
                  <span className="text-sm">No legal certainty</span>
                </li>
                <li className="flex items-center gap-2">
                  <X className="h-4 w-4 text-red-600" />
                  <span className="text-sm">High risk of missing something</span>
                </li>
              </ul>

              <motion.button
                onClick={() => setShowProcess(!showProcess)}
                className="w-full bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {showProcess ? "Hide Process" : "Show Process"}
              </motion.button>
            </motion.div>

            {/* Option B - Branding Agency (previously Option 1) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-white rounded-xl p-5 shadow-lg border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-100 rounded-full p-2 flex-shrink-0">
                  <span className="text-purple-600 font-bold text-lg">B</span>
                </div>
                <h3 className="text-lg font-bold text-black">Pay a Branding Agency</h3>
              </div>

              <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg mb-4 border border-red-100">
                <PoundSterling className="h-5 w-5 text-red-600 flex-shrink-0" />
                <div>
                  <p className="text-lg font-bold text-red-600">£10,000+</p>
                  <p className="text-sm text-black/70">For a professional naming process</p>
                </div>
              </div>

              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Professional quality names</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Legal clearance included</span>
                </li>
                <li className="flex items-center gap-2">
                  <X className="h-4 w-4 text-red-600" />
                  <span className="text-sm">Expensive for startups</span>
                </li>
                <li className="flex items-center gap-2">
                  <X className="h-4 w-4 text-red-600" />
                  <span className="text-sm">Still takes weeks to complete</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Process overlay */}
          {showProcess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={() => setShowProcess(false)}
            >
              <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-auto p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-black">The DIY Naming Process</h3>
                  <button
                    onClick={() => setShowProcess(false)}
                    className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors duration-200"
                  >
                    <X className="h-5 w-5 text-gray-600" />
                  </button>
                </div>

                {/* Process table */}
                <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-black/5 overflow-hidden">
                  {/* Table header - Tasks as columns */}
                  <div className="grid grid-cols-8 bg-black/[0.02] border-b border-black/5">
                    {processSteps.map((step) => (
                      <div
                        key={`header-${step.task}`}
                        className={`p-3 font-semibold text-black text-sm text-center border-r border-black/5 last:border-r-0 ${
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
                        className={`p-3 text-xs text-black/70 text-center border-r border-black/5 last:border-r-0 ${
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
                        className={`p-3 font-medium text-center border-r border-black/5 last:border-r-0 ${
                          step.isTotal
                            ? "bg-gradient-to-r from-red-50 to-orange-50 font-bold text-red-600"
                            : "text-black"
                        }`}
                      >
                        {step.time}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 text-center text-black/70">
                  <p>This process must be repeated for each potential name, making it extremely time-consuming.</p>
                </div>
              </motion.div>
            </motion.div>
          )}

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
