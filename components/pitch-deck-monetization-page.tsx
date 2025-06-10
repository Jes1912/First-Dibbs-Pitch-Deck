"use client"

import { useState } from "react"
import type React from "react"
import { motion } from "framer-motion"
import {
  ChevronLeft,
  ChevronRight,
  Ticket,
  Users,
  Briefcase,
  ChevronDown,
  Search,
  Landmark,
  ShieldCheck,
  Phone,
  Globe,
  Gavel,
  MonitorSmartphone,
  Megaphone,
  FileText,
  Calculator,
} from "lucide-react"
import { FloatingPathsBackground } from "@/components/floating-paths-background"
import Modal from "@/components/ui/modal"

interface PitchDeckMonetizationPageProps {
  onNext: () => void
  onPrev: () => void
  currentSlide: number
  totalSlides: number
}

const leadPartners = [
  {
    name: "Banks",
    price: "£100",
    icon: <Landmark className="mx-auto h-5 w-5 text-blue-500" />,
    color: "border-blue-200 bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    name: "Insurance",
    price: "£100",
    icon: <ShieldCheck className="mx-auto h-5 w-5 text-green-500" />,
    color: "border-green-200 bg-green-50",
    textColor: "text-green-600",
  },
  {
    name: "VOIP",
    price: "£5",
    icon: <Phone className="mx-auto h-5 w-5 text-sky-500" />,
    color: "border-sky-200 bg-sky-50",
    textColor: "text-sky-600",
  },
  {
    name: "Domains + Hosting",
    price: "£15",
    icon: <Globe className="mx-auto h-5 w-5 text-indigo-500" />,
    color: "border-indigo-200 bg-indigo-50",
    textColor: "text-indigo-600",
  },
  {
    name: "Trademark Lawyer",
    price: "£50",
    icon: <Gavel className="mx-auto h-5 w-5 text-red-500" />,
    color: "border-red-200 bg-red-50",
    textColor: "text-red-600",
  },
  {
    name: "Websites",
    price: "£600",
    icon: <MonitorSmartphone className="mx-auto h-5 w-5 text-yellow-500" />,
    color: "border-yellow-200 bg-yellow-50",
    textColor: "text-yellow-600",
  },
  {
    name: "Marketing Agency",
    price: "£400",
    icon: <Megaphone className="mx-auto h-5 w-5 text-pink-500" />,
    color: "border-pink-200 bg-pink-50",
    textColor: "text-pink-600",
  },
  {
    name: "Business Registration",
    price: "£20",
    icon: <FileText className="mx-auto h-5 w-5 text-gray-500" />,
    color: "border-gray-200 bg-gray-50",
    textColor: "text-gray-600",
  },
  {
    name: "Accounting Services",
    price: "£150",
    icon: <Calculator className="mx-auto h-5 w-5 text-purple-500" />,
    color: "border-purple-200 bg-purple-50",
    textColor: "text-purple-600",
  },
]

const LeadItem = ({
  icon,
  name,
  price,
  color,
  textColor,
}: { icon: React.ReactNode; name: string; price: string; color: string; textColor: string }) => (
  <motion.div
    className={`p-3 rounded-lg border ${color} text-center shadow-sm flex flex-col justify-between min-h-[80px]`}
    whileHover={{ y: -2 }}
  >
    <div className="mb-1 flex justify-center">{icon}</div>
    <p className="text-xs font-medium text-black/80 mb-1" title={name}>
      {name}
    </p>
    <p className={`text-sm font-bold ${textColor}`}>{price}</p>
  </motion.div>
)

export default function PitchDeckMonetizationPage({
  onNext,
  onPrev,
  currentSlide,
  totalSlides,
}: PitchDeckMonetizationPageProps) {
  const [showLeadsModal, setShowLeadsModal] = useState(false)

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 + 0.3, duration: 0.5, type: "spring", stiffness: 100 },
    }),
  }

  return (
    <div className="relative h-screen w-full bg-white flex flex-col">
      <FloatingPathsBackground animated={false} />
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 py-4 overflow-y-auto">
        <div className="max-w-6xl mx-auto w-full">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 100 }}
            className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 tracking-tight text-black"
          >
            How Much <span style={{ color: "#9234ea" }}>Money</span> Could We Make?
          </motion.h1>
          {/* REMOVED SUBTITLE */}

          {/* Top Block: Search Traffic - REDUCED LENGTH */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-purple-600 text-white p-3 sm:p-4 rounded-xl shadow-lg text-center mb-4 sm:mb-6 flex items-center justify-center gap-3 max-w-lg mx-auto"
          >
            <Search className="h-6 w-6 sm:h-8 sm:w-8" />
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">110M+</h2>
              <p className="text-sm sm:text-base">Annual Search Traffic</p>
            </div>
          </motion.div>

          {/* Connector */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-purple-400 my-2 sm:my-4 flex justify-center"
          >
            <ChevronDown className="h-8 w-8 sm:h-10 sm:w-10 animate-bounce" />
          </motion.div>

          {/* Three Revenue Channels - MADE SAME VERTICAL LENGTH */}
          <div className="flex justify-center w-full mb-4 sm:mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 max-w-5xl w-full items-stretch">
              {/* Paid Usage */}
              <motion.div
                custom={1}
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                className="bg-white/90 backdrop-blur-sm p-3 sm:p-6 rounded-xl shadow-xl border border-purple-300 flex flex-col items-center text-center"
              >
                <div className="flex-grow w-full flex flex-col items-center">
                  <div className="flex justify-center mb-2 sm:mb-3">
                    <Ticket className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-purple-600" />
                  </div>
                  <h3 className="text-sm sm:text-lg md:text-xl font-bold text-black mb-1 sm:mb-2">Paid Usage</h3>
                  <p className="text-lg sm:text-2xl md:text-3xl font-extrabold text-purple-600 mb-1 sm:mb-2">£49.99</p>
                  <p className="text-xs sm:text-sm text-black/70 mb-2 sm:mb-4">Per 3-Day Unlimited Pass</p>
                  <div className="bg-purple-100 p-2 sm:p-3 rounded-lg w-full mt-auto">
                    <p className="text-xs sm:text-sm font-semibold text-purple-800">
                      Annual Revenue: <br /> <span className="text-sm sm:text-xl font-bold">£5.49BN</span>
                    </p>
                  </div>
                </div>
                <div className="pt-3 w-full invisible">
                  <div className="bg-purple-600 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-semibold shadow-md w-full">
                    View Lead Details
                  </div>
                </div>
              </motion.div>

              {/* Referrals */}
              <motion.div
                custom={2}
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                className="bg-white/90 backdrop-blur-sm p-3 sm:p-6 rounded-xl shadow-xl border border-[#8F31E4] flex flex-col items-center text-center"
              >
                <div className="flex-grow w-full flex flex-col items-center">
                  <div className="flex justify-center mb-2 sm:mb-3">
                    <Users className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-purple-600" />
                  </div>
                  <h3 className="text-sm sm:text-lg md:text-xl font-bold text-black mb-1 sm:mb-2">Referrals</h3>
                  <p className="text-lg sm:text-2xl md:text-3xl font-extrabold text-purple-600 mb-1 sm:mb-2">£200</p>
                  <p className="text-xs sm:text-sm text-black/70 mb-2 sm:mb-4">Per Qualified Lead</p>
                  <div className="bg-purple-100 p-2 sm:p-3 rounded-lg w-full mt-auto">
                    <p className="text-xs sm:text-sm font-semibold text-purple-800">
                      Annual Revenue: <br /> <span className="text-sm sm:text-xl font-bold">£22BN</span>
                    </p>
                  </div>
                </div>
                <div className="pt-3 w-full">
                  <button
                    onClick={() => setShowLeadsModal(true)}
                    className="bg-purple-600 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-purple-700 transition-colors text-xs sm:text-sm font-semibold shadow-md w-full"
                  >
                    View Lead Details
                  </button>
                </div>
              </motion.div>

              {/* Logos */}
              <motion.div
                custom={3}
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                className="bg-white/90 backdrop-blur-sm p-3 sm:p-6 rounded-xl shadow-xl border border-purple-300 flex flex-col items-center text-center"
              >
                <div className="flex-grow w-full flex flex-col items-center">
                  <div className="flex justify-center mb-2 sm:mb-3">
                    <Briefcase className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-purple-600" />
                  </div>
                  <h3 className="text-sm sm:text-lg md:text-xl font-bold text-black mb-1 sm:mb-2">Logos</h3>
                  <p className="text-lg sm:text-2xl md:text-3xl font-extrabold text-purple-600 mb-1 sm:mb-2">£50</p>
                  <p className="text-xs sm:text-sm text-black/70 mb-2 sm:mb-4">Per Service Conversion</p>
                  <div className="bg-purple-100 p-2 sm:p-3 rounded-lg w-full mt-auto">
                    <p className="text-xs sm:text-sm font-semibold text-purple-800">
                      Annual Revenue: <br /> <span className="text-sm sm:text-xl font-bold">£5.55BN</span>
                    </p>
                  </div>
                </div>
                <div className="pt-3 w-full invisible">
                  <div className="bg-purple-600 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-semibold shadow-md w-full">
                    View Lead Details
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Modal for lead details */}
          {showLeadsModal && (
            <Modal onClose={() => setShowLeadsModal(false)} title="High-Value Lead Details">
              <p className="text-sm text-gray-700 mb-6">
                Founders starting out have none of the below. These leads are extremely valuable to vendors.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {leadPartners.map((partner) => (
                  <LeadItem key={partner.name} {...partner} />
                ))}
              </div>
            </Modal>
          )}

          {/* Page navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 flex items-center gap-3 bg-white/80 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2 rounded-full shadow-lg z-50"
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
