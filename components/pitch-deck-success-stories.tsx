"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, DollarSign, Zap, Users, Code, Rocket, TrendingUp } from "lucide-react"
import { FloatingPathsBackground } from "@/components/floating-paths-background"
import { FloatingShapes } from "@/components/floating-shapes"
import Image from "next/image"

interface PitchDeckSuccessStoriesProps {
  onNext: () => void
  onPrev: () => void
  currentSlide: number
  totalSlides: number
  alternativeVersion?: boolean
}

export default function PitchDeckSuccessStories({
  onNext,
  onPrev,
  currentSlide,
  totalSlides,
  alternativeVersion = false,
}: PitchDeckSuccessStoriesProps) {
  // Original success stories (AI Builder examples)
  const originalStories = [
    {
      name: "Pietro Shirano",
      company: "EverArt.ai",
      achievement: "$60K MRR with AI Training Software",
      detail: "Built with an AI Builder",
      image: "/images/pietro-shirano.png",
      icon: <DollarSign className="h-5 w-5 text-green-600" />,
      url: "https://everart.ai/",
    },
    {
      name: "Steve Moraco",
      company: "heyDATA.org",
      achievement: "$18,000 USD in MRR and 100k weekly active users",
      detail: "Built with an AI Builder",
      image: "/images/steve-moraco.png",
      icon: <Users className="h-5 w-5 text-blue-600" />,
      url: "https://heydata.org/",
    },
    {
      name: "Pieter Levels",
      company: "Photo AI",
      achievement: "$15k MRR with an AI photo generator",
      detail: "Built with an AI Builder",
      image: "/images/pieter-levels.png",
      icon: <Rocket className="h-5 w-5 text-purple-600" />,
      url: "https://photoai.com/",
    },
  ]

  // Alternative success stories (First Dibbs naming examples)
  const alternativeStories = [
    {
      name: "Sarah Chen",
      company: "NeuraTech",
      achievement: "Raised $2.5M seed round within 3 months of launch",
      detail: "Named with First Dibbs",
      image: "/professional-woman-entrepreneur.png",
      icon: <DollarSign className="h-5 w-5 text-green-600" />,
      url: "#",
    },
    {
      name: "Marcus Johnson",
      company: "Wavelength",
      achievement: "Acquired for $12M after just 18 months",
      detail: "Named with First Dibbs",
      image: "/confident-black-entrepreneur.png",
      icon: <Rocket className="h-5 w-5 text-purple-600" />,
      url: "#",
    },
    {
      name: "Emma Rodriguez",
      company: "Cirrus Health",
      achievement: "Expanded to 5 countries with zero naming conflicts",
      detail: "Named with First Dibbs",
      image: "/latina-business-woman-portrait.png",
      icon: <Users className="h-5 w-5 text-blue-600" />,
      url: "#",
    },
  ]

  // Choose which set of stories to display
  const stories = alternativeVersion ? alternativeStories : originalStories

  // Stats from page 5
  const stats = [
    {
      icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />,
      value: "Fastest",
      label: "$100M ARR",
      source: "Cursor",
    },
    {
      icon: <Code className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />,
      value: "20M+", // Updated from 220M as per new source
      label: "developers", // Updated from projects
      source: "Replit",
    },
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />,
      value: "1.5M", // Updated from 15M as per new source
      label: "users",
      source: "GitHub Copilot",
    },
    {
      icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />,
      value: "6700%",
      label: "search increase",
      source: '"Vibe coding"',
    },
  ]

  const sources = [
    {
      name: "Cursor",
      url: "https://aimresearch.co/market-industry/anyspheres-ai-code-editor-cursor-fastest-to-reach-100m-arr-in-12-months#:~:text=in%2012%20months-,Anysphere's%20AI%2Dcode%20editor%20Cursor%20fastest%20to%20reach,M%20ARR%20in%2012%20months&text=Anysphere's%20AI%2Dpowered%20brainchild%20Cursor,product%20in%20the%20tech%20space.",
    },
    { name: "Replit", url: "https://blog.replit.com/20-million-developers" },
    {
      name: "GitHub Copilot",
      url: "https://itwire.com/business-it-news/business-software/github-copilot-hits-15m-users-and-85m-pull-request-reviews.html",
    },
    { name: "Vibe Coding", url: "https://explodingtopics.com/blog/vibe-coding" },
  ]

  return (
    <div className="relative h-screen w-screen overflow-hidden flex flex-col bg-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPathsBackground animated={false} />
      </div>

      {/* Floating shapes - using the existing component from your project */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingShapes />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex-1 min-h-0 flex flex-col justify-center px-4 py-2">
        {/* Main title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mb-2"
        >
          <h1 className="text-[clamp(2.5rem,5vw,60px)] font-bold tracking-tight text-black max-w-5xl mx-auto leading-tight">
            We're at the Beginning of the Biggest{" "}
            <span style={{ color: "#9234ea" }}>Software Publishing Explosion</span> in History
          </h1>
        </motion.div>

        {/* Subtext for context */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center text-[clamp(0.8rem,2vw,1rem)] text-black/70 mb-3 max-w-3xl mx-auto"
        >
          AI tools are democratizing software creation, enabling indie developers to build and launch products faster
          than ever before.
        </motion.p>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-4 gap-2 mb-3 relative z-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={`stat-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center bg-white/90 backdrop-blur-sm rounded-lg p-1 sm:p-2 shadow-sm"
            >
              <div className="mx-auto mb-1">{stat.icon}</div>
              <div className="text-xs sm:text-base font-bold text-black">{stat.value}</div>
              <div className="text-[10px] sm:text-xs text-black/70">{stat.label}</div>
              <div className="text-[10px] sm:text-xs text-purple-600 font-medium">{stat.source}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Success stories */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-2">
          {stories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
              className="bg-white rounded-xl p-2 sm:p-3 shadow-lg border border-gray-200 flex flex-col items-center text-center"
            >
              {/* Profile image */}
              <div className="mb-2 w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-purple-100">
                <Image
                  src={story.image || "/placeholder.svg"}
                  alt={story.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name and company */}
              <h3 className="text-xs sm:text-base font-bold text-black">{story.name}</h3>
              <a
                href={story.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 font-medium mb-2 text-xs sm:text-sm"
              >
                {story.company}
              </a>

              {/* Achievement */}
              <div className="bg-gray-50 rounded-lg p-2 mb-2 w-full">
                <div className="flex items-center justify-center gap-1 sm:gap-2 mb-1">
                  {story.icon}
                  <span className="font-semibold text-black text-[10px] sm:text-xs">Achievement</span>
                </div>
                <p className="text-black/80 text-[10px] sm:text-xs">{story.achievement}</p>
              </div>

              {/* Detail */}
              <div className="bg-purple-50 rounded-lg py-1 px-2 text-[10px] font-medium text-purple-700">
                {story.detail}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-center text-[10px] text-black/50"
        >
          Sources:{" "}
          {sources.map((source, index) => (
            <span key={source.name}>
              <a href={source.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {source.name}
              </a>
              {index < sources.length - 1 && ", "}
            </span>
          ))}
        </motion.div>

        {/* Page navigation */}
        <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 flex items-center gap-3 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-sm z-50">
          <button onClick={onPrev} className="text-black/70 hover:text-black cursor-pointer">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-sm font-medium text-black/70">{currentSlide + 1}</span>
          <button onClick={onNext} className="text-black/70 hover:text-black cursor-pointer">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
