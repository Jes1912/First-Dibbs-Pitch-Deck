"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Search, X, AlertTriangle, Eye } from "lucide-react"
import { FloatingPathsBackground } from "@/components/floating-paths-background"
import { useState } from "react"

interface PitchDeckTenthPageProps {
  onNext: () => void
  onPrev: () => void
  currentSlide: number
  totalSlides: number
}

export default function PitchDeckTenthPage({ onNext, onPrev, currentSlide, totalSlides }: PitchDeckTenthPageProps) {
  const [activePopup, setActivePopup] = useState<string | null>(null)

  const processSteps = [
    {
      task: "Brainstorm",
      tools: "ChatGPT, Thesaurus, Name Generators",
      time: "30 mins",
      covered: true,
    },
    {
      task: "Domain Check",
      tools: "GoDaddy, IONOS, NameCheap",
      time: "1 min",
      covered: true,
    },
    {
      task: "Domain Adjust",
      tools: "Adjust name to get domains (remove vowel etc)",
      time: "10 mins",
      covered: false,
    },
    {
      task: "Socials Check",
      tools: "Social handle check on 5+ platforms",
      time: "3 min",
      covered: false,
    },
    {
      task: "Socials Adjust",
      tools: "Adjust name to get social media handles",
      time: "5 mins",
      covered: false,
    },
    {
      task: "Registry Check",
      tools: "Check Companies House",
      time: "1 min",
      covered: false,
    },
    {
      task: "Trademark Check",
      tools: "UKIPO, EUIPO, USPTO, TMView",
      time: "3-5 hrs",
      covered: false,
    },
    {
      task: "Total per Name",
      tools: "10+ Tools",
      time: "~5 hrs",
      isTotal: true,
      covered: false,
    },
  ]

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      {/* Static background paths */}
      <FloatingPathsBackground animated={false} />

      {/* Content overlay */}
      <div className="relative z-10 flex-1 min-h-0 flex flex-col justify-center px-4 py-6">
        <div className="max-w-5xl mx-auto">
          {/* Main title - UPDATED */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight text-black"
          >
            <span style={{ color: "#9234ea" }}>Name Generators</span> Failed
          </motion.h1>

          {/* Enhanced search volume highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-4 border border-purple-100 shadow-lg max-w-3xl mx-auto mb-6 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <Search className="h-6 w-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-black">110 Million</h2>
            </div>
            <p className="text-base text-black/80 mb-1">Annual searches for "business name generator" globally</p>
            <p className="text-sm text-purple-600 font-semibold">
              That's 300,000+ searches every single day seeking naming solutions
            </p>
          </motion.div>

          {/* Three main problems */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
          >
            {/* Problem 1 - Low Quality Names */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="bg-white rounded-xl p-4 shadow-lg border border-gray-200"
            >
              <div className="bg-red-100 rounded-full p-2 w-10 h-10 flex items-center justify-center mb-3">
                <X className="h-5 w-5 text-red-600" />
              </div>
              <h3 className="text-base font-bold text-black mb-2">Low Quality Names</h3>
              <p className="text-black/70 mb-3 text-sm">
                Most generators produce generic, uninspiring names that don't reflect brand values or stand out.
              </p>
              <button
                onClick={() => setActivePopup("quality")}
                className="w-full bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium py-2 px-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 text-sm"
              >
                <Eye className="h-4 w-4" />
                Show Me
              </button>
            </motion.div>

            {/* Problem 2 - Availability Only Partially Checked */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="bg-white rounded-xl p-4 shadow-lg border border-gray-200"
            >
              <div className="bg-orange-100 rounded-full p-2 w-10 h-10 flex items-center justify-center mb-3">
                <div className="relative">
                  <div className="h-5 w-5 rounded-full border-2 border-orange-600"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2 w-2 bg-orange-600 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-base font-bold text-black mb-2">Doesn't Check Availability</h3>
              <p className="text-black/70 mb-3 text-sm">
                Only check 1-2 of 7 necessary availability checks, leaving founders exposed to future problems.
              </p>
              <button
                onClick={() => setActivePopup("availability")}
                className="w-full bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium py-2 px-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 text-sm"
              >
                <Eye className="h-4 w-4" />
                Show Me
              </button>
            </motion.div>

            {/* Problem 3 - Legally Risky */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="bg-white rounded-xl p-4 shadow-lg border border-gray-200"
            >
              <div className="bg-red-100 rounded-full p-2 w-10 h-10 flex items-center justify-center mb-3">
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
              <h3 className="text-base font-bold text-black mb-2">Requires Trademark Lawyer</h3>
              <p className="text-black/70 mb-3 text-sm">
                Suggested names are often already trademarked or legally protected, creating serious risks for founders.
              </p>
              <button
                onClick={() => setActivePopup("legal")}
                className="w-full bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium py-2 px-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 text-sm"
              >
                <Eye className="h-4 w-4" />
                Show Me
              </button>
            </motion.div>
          </motion.div>

          {/* Popups */}
          {activePopup && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={() => setActivePopup(null)}
            >
              <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-auto p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-black">
                    {activePopup === "quality" && "Low Quality Name Examples"}
                    {activePopup === "availability" && "Incomplete Availability Checking"}
                    {activePopup === "legal" && "Legally Risky Name Examples"}
                  </h3>
                  <button
                    onClick={() => setActivePopup(null)}
                    className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors duration-200"
                  >
                    <X className="h-5 w-5 text-gray-600" />
                  </button>
                </div>

                {activePopup === "quality" && (
                  <div className="space-y-4">
                    <p className="text-black/70 mb-4">
                      Here are typical examples of low-quality names generated by popular name generators:
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-black mb-2">Generic Tech Names</h4>
                        <ul className="space-y-1 text-sm text-black/70">
                          <li>• TechFlow</li>
                          <li>• DataSync</li>
                          <li>• CloudBase</li>
                          <li>• AppCore</li>
                          <li>• WebTech</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-black mb-2">Meaningless Combinations</h4>
                        <ul className="space-y-1 text-sm text-black/70">
                          <li>• Zyntex</li>
                          <li>• Qorex</li>
                          <li>• Vextra</li>
                          <li>• Nexify</li>
                          <li>• Zypher</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                      <p className="text-red-700 font-medium">
                        These names lack personality, meaning, and memorability - key ingredients for successful
                        branding.
                      </p>
                    </div>
                  </div>
                )}

                {activePopup === "availability" && (
                  <div className="space-y-4">
                    <p className="text-black/70 mb-4">
                      Most name generators only check 1-2 steps of the complete naming process, leaving you vulnerable:
                    </p>
                    <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-black/5 overflow-hidden">
                      <div className="grid grid-cols-8 bg-black/[0.02] border-b border-black/5">
                        {processSteps.map((step) => (
                          <div
                            key={`header-${step.task}`}
                            className={`p-3 font-semibold text-black text-sm text-center border-r border-black/5 last:border-r-0 ${
                              step.isTotal ? "bg-gradient-to-r from-red-50 to-orange-50" : ""
                            } ${!step.covered ? "bg-red-50" : ""}`}
                          >
                            {step.task}
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-8 border-b border-black/5">
                        {processSteps.map((step) => (
                          <div
                            key={`coverage-${step.task}`}
                            className={`p-3 text-center border-r border-black/5 last:border-r-0 ${
                              step.isTotal ? "bg-gradient-to-r from-red-50 to-orange-50" : ""
                            } ${!step.covered ? "bg-red-50" : ""}`}
                          >
                            {step.covered ? (
                              <div className="text-green-600 font-bold">✓</div>
                            ) : (
                              <div className="text-red-600 font-bold">✗</div>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-8 border-b border-black/5">
                        {processSteps.map((step) => (
                          <div
                            key={`tools-${step.task}`}
                            className={`p-3 text-xs text-black/70 text-center border-r border-black/5 last:border-r-0 ${
                              step.isTotal ? "bg-gradient-to-r from-red-50 to-orange-50 font-semibold text-black" : ""
                            } ${!step.covered ? "bg-red-50" : ""}`}
                          >
                            {step.tools}
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-8">
                        {processSteps.map((step) => (
                          <div
                            key={`time-${step.task}`}
                            className={`p-3 font-medium text-center border-r border-black/5 last:border-r-0 ${
                              step.isTotal
                                ? "bg-gradient-to-r from-red-50 to-orange-50 font-bold text-red-600"
                                : "text-black"
                            } ${!step.covered ? "bg-red-50" : ""}`}
                          >
                            {step.time}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                      <p className="text-orange-700 font-medium">
                        Name generators typically only cover the first 2 steps, leaving 6 critical checks undone.
                      </p>
                    </div>
                  </div>
                )}

                {activePopup === "legal" && (
                  <div className="space-y-4">
                    <p className="text-black/70 mb-4">
                      Popular name generators often suggest names that are legally risky due to trademark similarities:
                    </p>
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-27%20at%2018.02.43-RG9h4ikuemsTPMFwJafhK2Tokyv6r4.png"
                        alt="Examples of legally risky names from popular generators"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                        <h4 className="font-semibold text-red-700 mb-2">SpotifySpot</h4>
                        <p className="text-sm text-red-600">
                          Clearly derivative of Spotify - high trademark infringement risk
                        </p>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                        <h4 className="font-semibold text-red-700 mb-2">Bingify</h4>
                        <p className="text-sm text-red-600">Too similar to Microsoft's Bing - potential legal action</p>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                        <h4 className="font-semibold text-red-700 mb-2">DineDash Delivery</h4>
                        <p className="text-sm text-red-600">
                          Confusingly similar to DoorDash - trademark conflict likely
                        </p>
                      </div>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                      <p className="text-red-700 font-medium">
                        Using these names could result in cease & desist letters, legal fees, and forced rebranding -
                        costing thousands of pounds.
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}

          {/* Page navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.0 }}
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
