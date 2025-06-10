"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Briefcase, Zap } from "lucide-react"
import { FloatingPathsBackground } from "@/components/floating-paths-background"
import Image from "next/image"

interface PitchDeckTeamPageProps {
  onNext: () => void
  onPrev: () => void
  currentSlide: number
  totalSlides: number
}

const teamMembers = [
  {
    name: "Jes Oliphant",
    imageSrc: "/images/jes-oliphant.jpeg",
    achievements: [
      "Bootstrapped company from £300 investment to £2M+ revenue",
      "Started 'WiseWords' a book summary site with tens of thousands of visitors",
      "Resident Naming Expert",
    ],
    icon: <Briefcase className="h-6 w-6 text-purple-600" />,
  },
  {
    name: "Jack Gibbons",
    imageSrc: "/images/jack-gibbons.jpeg",
    achievements: [
      "Quit 6 figure salaried AI role for startup",
      "Built 'Hyper', an AI assistant for ADHD",
      "Built 'AutoAgent', an AI assistant for the automotive market",
    ],
    icon: <Zap className="h-6 w-6 text-purple-600" />,
  },
]

export default function PitchDeckTeamPage({ onNext, onPrev, currentSlide, totalSlides }: PitchDeckTeamPageProps) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      <FloatingPathsBackground animated={false} />
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center text-5xl sm:text-6xl font-bold mb-16 tracking-tight text-black"
          >
            Our <span style={{ color: "#9234ea" }}>Team</span>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 flex flex-col items-center"
              >
                <div className="relative w-36 h-36 rounded-full overflow-hidden mb-6 border-4 border-purple-200">
                  <Image
                    src={member.imageSrc || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">{member.name}</h3>
                <div className="mb-6 text-purple-600">{member.icon}</div>
                <ul className="space-y-3 text-left text-black/80 w-full">
                  {member.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-purple-500 mr-2 mt-1">&#8226;</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="fixed bottom-8 right-8 flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm z-50"
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
    </div>
  )
}
