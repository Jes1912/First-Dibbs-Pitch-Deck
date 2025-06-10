"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Megaphone, Users, Settings, Shield } from "lucide-react"
import { FloatingPathsBackground } from "@/components/floating-paths-background"

interface PitchDeckAskSlideProps {
  onNext: () => void
  onPrev: () => void
  currentSlide: number
  totalSlides: number
}

export default function PitchDeckAskSlide({ onNext, onPrev, currentSlide, totalSlides }: PitchDeckAskSlideProps) {
  const [activeDetail, setActiveDetail] = useState<string | null>(null)

  const personnelCost = 56160
  const marketingCost = 135000
  const oneOffCost = 45000
  const totalAskAmount = personnelCost + marketingCost + oneOffCost // New total: 236,160

  const fundingBreakdown = [
    {
      id: "marketing",
      category: "Marketing",
      amount: marketingCost,
      percentage: (marketingCost / totalAskAmount) * 100,
      color: "#9234ea", // Purple brand color
      icon: <Megaphone className="h-6 w-6" />,
      details: [
        { label: "Facebook Ads (Monthly: £1,000)", value: "£18,000" },
        { label: "Google Ads (Monthly: £2,500)", value: "£45,000" },
        { label: "Influencer Marketing (Monthly: £1,000)", value: "£18,000" },
        { label: "LinkedIn Bots (Monthly: £3,000)", value: "£54,000" },
      ],
    },
    {
      id: "personnel",
      category: "Personnel",
      amount: personnelCost,
      percentage: (personnelCost / totalAskAmount) * 100,
      color: "#3b82f6", // Blue
      icon: <Users className="h-6 w-6" />,
      details: [
        { label: "Jack (Monthly: £1,040)", value: "£18,720" },
        { label: "Jes (Monthly: £1,040)", value: "£18,720" },
        { label: "Third Co-Founder (Monthly: £1,040)", value: "£18,720" },
        { label: "All salaries below NI and Income Tax Threshold", value: "" },
      ],
    },
    {
      id: "oneoff",
      category: "One-off Costs",
      amount: oneOffCost,
      percentage: (oneOffCost / totalAskAmount) * 100,
      color: "#10b981", // Green
      icon: <Settings className="h-6 w-6" />,
      details: [
        { label: "AI Server Setup", value: "£20,000" },
        { label: "Legal Costs", value: "£10,000" },
        { label: "Pen Testing", value: "£5,000" },
        { label: "LinkedIn Bots Setup", value: "£10,000" },
      ],
    },
    {
      id: "buffer",
      category: "Buffer",
      amount: 0, // Buffer is now 0 as total is sum of itemized costs
      percentage: 0,
      color: "#f59e0b", // Amber
      icon: <Shield className="h-6 w-6" />,
      details: [{ label: "Contingency Fund", value: "£0" }],
    },
  ]

  // Filter out buffer if amount is 0, unless it's the only item (edge case)
  const displayFundingBreakdown = fundingBreakdown.filter(
    (item) => item.amount > 0 || (fundingBreakdown.length === 1 && item.id === "buffer"),
  )

  // Generate SVG donut chart
  const generateDonutChart = () => {
    const centerX = 150
    const centerY = 150
    const outerRadius = 120
    const innerRadius = 70 // Creates the donut hole
    let currentAngle = -90 // Start from top

    return displayFundingBreakdown.map((item, index) => {
      if (item.percentage === 0) return null // Don't draw segment for 0%
      const angle = (item.percentage / 100) * 360
      const startAngle = currentAngle
      const endAngle = currentAngle + angle

      const startAngleRad = (startAngle * Math.PI) / 180
      const endAngleRad = (endAngle * Math.PI) / 180

      const x1Outer = centerX + outerRadius * Math.cos(startAngleRad)
      const y1Outer = centerY + outerRadius * Math.sin(startAngleRad)
      const x2Outer = centerX + outerRadius * Math.cos(endAngleRad)
      const y2Outer = centerY + outerRadius * Math.sin(endAngleRad)

      const x1Inner = centerX + innerRadius * Math.cos(startAngleRad)
      const y1Inner = centerY + innerRadius * Math.sin(startAngleRad)
      const x2Inner = centerX + innerRadius * Math.cos(endAngleRad)
      const y2Inner = centerY + innerRadius * Math.sin(endAngleRad)

      const largeArcFlag = angle > 180 ? 1 : 0

      const pathData = [
        `M ${x1Outer} ${y1Outer}`,
        `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x2Outer} ${y2Outer}`,
        `L ${x2Inner} ${y2Inner}`,
        `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x1Inner} ${y1Inner}`,
        "Z",
      ].join(" ")

      currentAngle += angle

      return (
        <motion.path
          key={item.category}
          d={pathData}
          fill={item.color}
          stroke="white"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
          onClick={() => setActiveDetail(item.id)}
          className="cursor-pointer hover:opacity-90 transition-opacity"
        />
      )
    })
  }

  const toggleDetail = (id: string) => {
    if (activeDetail === id) setActiveDetail(null)
    else setActiveDetail(id)
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      <FloatingPathsBackground animated={false} />

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center text-5xl sm:text-6xl font-bold mb-12 tracking-tight text-black"
          >
            We're Raising <span style={{ color: "#9234ea" }}>£{totalAskAmount.toLocaleString()}</span> for 18mo Runway
          </motion.h1>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* Donut Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex-shrink-0"
            >
              <svg width="300" height="300" viewBox="0 0 300 300" className="drop-shadow-lg">
                {generateDonutChart()}
                <text x="150" y="140" textAnchor="middle" className="text-lg font-bold fill-black">
                  Use of Funds
                </text>
                <text x="150" y="165" textAnchor="middle" className="text-2xl font-bold" style={{ fill: "#9234ea" }}>
                  £{totalAskAmount.toLocaleString()}
                </text>
              </svg>
            </motion.div>

            {/* Funding Categories */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="space-y-4"
            >
              {displayFundingBreakdown.map((item, index) => (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="bg-white rounded-xl p-5 shadow-lg border border-gray-200 min-w-[400px] relative"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="p-3 rounded-full"
                        style={{ backgroundColor: `${item.color}20`, color: item.color }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-black">{item.category}</h3>
                        <p className="text-sm font-medium" style={{ color: item.color }}>
                          {item.percentage.toFixed(1)}% of total funding (£{item.amount.toLocaleString()})
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleDetail(item.id)}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-sm"
                    >
                      {activeDetail === item.id ? "Hide Details" : "View Details"}
                    </button>
                  </div>

                  <AnimatePresence>
                    {activeDetail === item.id && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-10 right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-gray-200 p-5 w-72 lg:left-full lg:top-0 lg:mt-0 lg:ml-4"
                        style={{ borderColor: item.color }}
                      >
                        <div className="relative">
                          <h4 className="font-semibold text-sm mb-3" style={{ color: item.color }}>
                            Detailed Breakdown (18 Months Total)
                          </h4>
                          <div className="space-y-2">
                            {item.details.map((detail, detailIndex) => (
                              <div
                                key={detailIndex}
                                className="flex justify-between items-center text-sm text-gray-600"
                              >
                                <span>{detail.label}</span>
                                {detail.value && <span className="font-medium">{detail.value}</span>}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Page navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
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
