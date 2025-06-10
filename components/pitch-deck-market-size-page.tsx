"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Search, Users, TrendingUp } from "lucide-react"
import { FloatingPathsBackground } from "@/components/floating-paths-background"

interface PitchDeckMarketSizePageProps {
  onNext: () => void
  onPrev: () => void
  currentSlide: number
  totalSlides: number
}

const marketStats = [
  {
    value: "110M+",
    label: "Annual Searches",
    description: "For 'Business Name Generator' globally, indicating massive demand.",
    icon: <Search className="h-10 w-10 text-purple-600" />,
    color: "purple",
  },
  {
    value: "Software Creators",
    label: "Beachhead Market",
    description: "Focusing on the rapidly growing segment of indie developers and SaaS builders.",
    icon: <Users className="h-10 w-10 text-blue-600" />,
    color: "blue",
  },
  {
    value: "1.1M+",
    label: "Monthly Visitors",
    description: "To Namelix, a leading competitor, showcasing market engagement.",
    icon: <TrendingUp className="h-10 w-10 text-green-600" />,
    color: "green",
  },
]

export default function PitchDeckMarketSizePage({
  onNext,
  onPrev,
  currentSlide,
  totalSlides,
}: PitchDeckMarketSizePageProps) {
  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: "bg-purple-100 text-purple-700 border-purple-200",
      blue: "bg-blue-100 text-blue-700 border-blue-200",
      green: "bg-green-100 text-green-700 border-green-200",
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.purple
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      <FloatingPathsBackground animated={false} />
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center text-5xl sm:text-6xl font-bold mb-6 tracking-tight text-black"
          >
            The <span style={{ color: "#9234ea" }}>Market</span> Opportunity
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center text-xl text-black/70 mb-16 max-w-3xl mx-auto"
          >
            A vast and growing number of individuals and businesses are actively seeking naming solutions, with a
            significant surge from the software development community.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                className={`bg-white rounded-xl p-8 shadow-xl border ${getColorClasses(stat.color)} flex flex-col items-center text-center hover:scale-105 transition-transform duration-300`}
              >
                <div className={`p-4 rounded-full mb-6 ${getColorClasses(stat.color)}`}>{stat.icon}</div>
                <h3 className={`text-3xl font-bold mb-3 ${getColorClasses(stat.color).split(" ")[2]}`}>{stat.value}</h3>
                <p className="text-lg font-semibold text-black mb-3">{stat.label}</p>
                <p className="text-sm text-black/70">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
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
          <button
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            className={`transition-colors ${currentSlide === totalSlides - 1 ? "text-black/30 cursor-not-allowed" : "text-black/70 hover:text-black cursor-pointer"}`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </div>
  )
}
