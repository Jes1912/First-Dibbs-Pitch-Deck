"use client"

import { motion } from "framer-motion"
import { FloatingPathsBackground } from "@/components/floating-paths-background"
import { ChevronLeft, ChevronRight, PoundSterling, Clock } from "lucide-react"

interface PitchDeckFourthPageProps {
  onNext: () => void
  onPrev: () => void
  currentSlide: number
  totalSlides: number
}

export default function PitchDeckFourthPage({ onNext, onPrev, currentSlide, totalSlides }: PitchDeckFourthPageProps) {
  // Radar chart data points for each industry
  const industries = [
    {
      name: "Software",
      color: "#9234ea",
      data: [0.95, 0.9, 0.85, 0.4, 0.95, 0.9], // High across most dimensions
    },
    {
      name: "Healthcare",
      color: "#10b981",
      data: [0.6, 0.7, 0.3, 0.8, 0.5, 0.4],
    },
    {
      name: "Fashion",
      color: "#f59e0b",
      data: [0.5, 0.6, 0.7, 0.3, 0.6, 0.5],
    },
    {
      name: "Property",
      color: "#06b6d4",
      data: [0.4, 0.5, 0.4, 0.6, 0.3, 0.4],
    },
    {
      name: "Finance",
      color: "#84cc16",
      data: [0.6, 0.4, 0.3, 0.7, 0.4, 0.5],
    },
  ]

  const axes = [
    "Legal Clearance Costs",
    "Name Availability",
    "Language & Culture Risk",
    "Regulatory Requirements",
    "Trademark Saturation",
    "Global Distribution",
  ]

  // Generate radar chart paths
  const generateRadarPath = (data: number[], centerX: number, centerY: number, maxRadius: number) => {
    const angleStep = (2 * Math.PI) / data.length
    const points = data.map((value, index) => {
      const angle = index * angleStep - Math.PI / 2 // Start from top
      const radius = value * maxRadius
      const x = centerX + radius * Math.cos(angle)
      const y = centerY + radius * Math.sin(angle)
      return `${x},${y}`
    })
    return `M${points.join("L")}Z`
  }

  // Generate axis lines
  const generateAxisLines = (centerX: number, centerY: number, maxRadius: number) => {
    const angleStep = (2 * Math.PI) / axes.length
    return axes.map((_, index) => {
      const angle = index * angleStep - Math.PI / 2
      const endX = centerX + maxRadius * Math.cos(angle)
      const endY = centerY + maxRadius * Math.sin(angle)
      return { x1: centerX, y1: centerY, x2: endX, y2: endY }
    })
  }

  // Generate concentric circles
  const generateConcentricCircles = (centerX: number, centerY: number, maxRadius: number) => {
    return [0.2, 0.4, 0.6, 0.8, 1.0].map((scale) => ({
      cx: centerX,
      cy: centerY,
      r: maxRadius * scale,
    }))
  }

  const centerX = 200
  const centerY = 140
  const maxRadius = 100

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden bg-white">
      {/* Static background paths */}
      <FloatingPathsBackground animated={false} />

      {/* Content overlay */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 sm:px-6 py-4">
        <div className="max-w-5xl mx-auto w-full">
          {/* Main title with responsive sizing */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center text-[clamp(1.5rem,5vw,4rem)] font-bold mb-2 sm:mb-4 tracking-tight text-black"
          >
            <span style={{ color: "#9234ea" }}>Naming Software</span> is Most Painful
          </motion.h1>

          {/* Key points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-4 sm:mb-6"
          >
            {["Busiest Trademark Category", "Most Good Names Taken", "Global Distribution Means Global Clearance"].map(
              (point, index) => (
                <motion.div
                  key={`point-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-r from-purple-50 to-indigo-50 px-2 sm:px-4 py-1 sm:py-2 rounded-lg border border-purple-100 shadow-sm text-center"
                >
                  <span className="text-black/80 font-medium text-xs sm:text-sm">{point}</span>
                </motion.div>
              ),
            )}
          </motion.div>

          {/* Radar chart with cost highlight - constrained height */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-xl shadow-lg border border-black/5 p-3 sm:p-4 relative mx-auto max-w-3xl max-h-[60vh] overflow-hidden"
          >
            {/* Cost highlight - positioned in top left */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute top-2 sm:top-4 left-2 sm:left-4 z-10 flex items-center bg-gradient-to-r from-red-50 to-orange-50 rounded-lg px-2 sm:px-3 py-1 border border-red-100 shadow-sm"
            >
              <PoundSterling className="h-3 w-3 sm:h-4 sm:w-4 text-red-600 mr-1" />
              <div>
                <p className="text-xs sm:text-sm font-bold text-red-600">£10-20k</p>
                <p className="text-xs text-black/70 hidden sm:block">Global Legal Clearance</p>
              </div>
            </motion.div>

            {/* Time highlight - positioned in top right */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 flex items-center bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg px-2 sm:px-3 py-1 border border-orange-100 shadow-sm"
            >
              <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-orange-600 mr-1" />
              <div>
                <p className="text-xs sm:text-sm font-bold text-orange-600">~4-5hrs</p>
                <p className="text-xs text-black/70 hidden sm:block">per Country</p>
              </div>
            </motion.div>

            <h3 className="text-sm sm:text-base font-bold text-black mb-2 sm:mb-3 text-center pt-8 sm:pt-6">
              Naming Pain Quadrant
            </h3>

            <div className="flex flex-col items-center justify-center">
              {/* Radar Chart SVG - responsive and constrained */}
              <div className="flex-shrink-0">
                <svg width="350" height="240" viewBox="0 0 400 280" className="w-full h-auto max-w-sm sm:max-w-md">
                  {/* Concentric circles */}
                  {generateConcentricCircles(centerX, centerY, maxRadius).map((circle, index) => (
                    <circle
                      key={`circle-${index}`}
                      cx={circle.cx}
                      cy={circle.cy}
                      r={circle.r}
                      fill="none"
                      stroke="rgba(0,0,0,0.05)"
                      strokeWidth="1"
                    />
                  ))}

                  {/* Axis lines */}
                  {generateAxisLines(centerX, centerY, maxRadius).map((line, index) => (
                    <line
                      key={`axis-${index}`}
                      x1={line.x1}
                      y1={line.y1}
                      x2={line.x2}
                      y2={line.y2}
                      stroke="rgba(0,0,0,0.1)"
                      strokeWidth="1"
                    />
                  ))}

                  {/* Industry data paths */}
                  {industries.map((industry, industryIndex) => (
                    <motion.path
                      key={industry.name}
                      d={generateRadarPath(industry.data, centerX, centerY, maxRadius)}
                      fill={industry.color}
                      fillOpacity={industry.name === "Software" ? 0.15 : 0.05}
                      stroke={industry.color}
                      strokeWidth={industry.name === "Software" ? 3 : 2}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{
                        duration: 1.5,
                        delay: 1.2 + industryIndex * 0.2,
                        ease: "easeInOut",
                      }}
                    />
                  ))}

                  {/* Data points */}
                  {industries.map((industry, industryIndex) =>
                    industry.data.map((value, pointIndex) => {
                      const angleStep = (2 * Math.PI) / industry.data.length
                      const angle = pointIndex * angleStep - Math.PI / 2
                      const radius = value * maxRadius
                      const x = centerX + radius * Math.cos(angle)
                      const y = centerY + radius * Math.sin(angle)

                      return (
                        <motion.circle
                          key={`${industry.name}-point-${pointIndex}`}
                          cx={x}
                          cy={y}
                          r={industry.name === "Software" ? 3 : 2}
                          fill={industry.color}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: 1.5 + industryIndex * 0.2 + pointIndex * 0.1,
                          }}
                        />
                      )
                    }),
                  )}

                  {/* Axis labels */}
                  {axes.map((axis, index) => {
                    const angleStep = (2 * Math.PI) / axes.length
                    const angle = index * angleStep - Math.PI / 2
                    const labelRadius = maxRadius + 25
                    const x = centerX + labelRadius * Math.cos(angle)
                    const y = centerY + labelRadius * Math.sin(angle)

                    return (
                      <text
                        key={`label-${index}`}
                        x={x}
                        y={y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-xs fill-black/70 font-medium"
                        style={{ fontSize: "9px" }}
                      >
                        {axis}
                      </text>
                    )
                  })}
                </svg>
              </div>

              {/* Legend - responsive */}
              <div className="flex flex-row gap-2 sm:gap-3 mt-2 flex-wrap justify-center">
                {industries.map((industry, index) => (
                  <motion.div
                    key={industry.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                    className="flex items-center gap-1"
                  >
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full" style={{ backgroundColor: industry.color }} />
                    <span
                      className={`text-xs ${industry.name === "Software" ? "font-bold" : "font-medium"} text-black/80`}
                    >
                      {industry.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Page navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 flex items-center gap-3 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-sm z-50"
      >
        <button
          onClick={onPrev}
          disabled={currentSlide === 0}
          className={`transition-colors ${
            currentSlide === 0 ? "text-black/30 cursor-not-allowed" : "text-black/70 hover:text-black cursor-pointer"
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
  )
}
