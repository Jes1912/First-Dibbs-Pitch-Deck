"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"
import {
  Search,
  ChevronLeft,
  ChevronRight,
  X,
  Target,
  MessageSquare,
  Users,
  Building,
  Eye,
  Zap,
  Briefcase,
  Share2,
  Cake,
  BarChart3,
  Layers,
} from "lucide-react"

interface GTMStrategy {
  id: string
  title: string
  category: string
  icon: React.ReactNode
  summary: string
  details: string[]
  metrics?: string
  color: string
  image?: string
}

interface GTMStrategyPageProps {
  onNext?: () => void
  onPrev?: () => void
  currentSlide?: number
  totalSlides?: number
}

export default function GTMStrategyPage({ onNext, onPrev, currentSlide, totalSlides }: GTMStrategyPageProps) {
  const [activePopup, setActivePopup] = useState<string | null>(null)

  const strategies: GTMStrategy[] = [
    {
      id: "seo-blog",
      title: "SEO Blog Content",
      category: "Content Marketing",
      icon: <Search className="h-6 w-6" />,
      summary: "Create industry-specific naming guides and verticalized content to attract organic traffic.",
      details: [
        "Develop comprehensive guides for naming businesses within specific industries (e.g., 'How to Name Your Beauty Studio').",
        "Target long-tail keywords with high intent and lower competition.",
        "Teach how to name different types of businesses with the long manual solution and then present our simple and fast solution.",
      ],
      color: "blue",
      image: "/images/seo-blog-content.png",
    },
    {
      id: "adwords",
      title: "Google Ads: Verticalized Strategy",
      category: "Paid Advertising",
      icon: <Target className="h-6 w-6" />,
      summary: "Target 181,500+ low-competition, industry-specific searches monthly with tailored landing pages.",
      details: [
        "Focus on low-competition, high-intent keywords like 'beauty studio name ideas' (50k searches/month).",
        "Create verticalized landing pages featuring name generators pre-set for specific industries.",
        "Optimize ad copy and landing pages for maximum conversion rates.",
        "Target industry-specific searches with minimal competition for cost-effective acquisition.",
      ],
      metrics:
        "Key Metrics: 181,500+ monthly low-competition industry specific searches (e.g., 'beauty studio name ideas' - 50k).",
      color: "green",
      image: "/images/google-ads-landing-page-correct.png",
    },
    {
      id: "reddit",
      title: "Reddit Engagement & Ads",
      category: "Community Marketing",
      icon: <MessageSquare className="h-6 w-6" />,
      summary: "Strategic comments in relevant subreddits and targeted advertising campaigns.",
      details: [
        "Actively participate in entrepreneur, startup, and small business subreddits.",
        "Provide genuine, valuable naming advice and subtly introduce First Dibbs where appropriate.",
        "Run targeted ad campaigns in relevant communities to reach aspiring founders.",
      ],
      color: "orange",
    },
    {
      id: "partnerships-influencers-incubators",
      title: "Strategic Partnerships",
      category: "Business Development",
      icon: <Users className="h-6 w-6" />,
      summary: "Collaborate with entrepreneur influencers and startup incubators like Y Combinator.",
      details: [
        "Build relationships with key entrepreneur influencers for authentic endorsements and content collaborations.",
        "Partner with startup incubators and accelerators (e.g., YC) to offer First Dibbs to their cohorts.",
        "Develop referral programs for business consultants and advisors.",
      ],
      color: "purple",
    },
    {
      id: "companies-house-api",
      title: "Companies House API Outreach",
      category: "Data-Driven Outreach",
      icon: <Building className="h-6 w-6" />,
      summary: "Target newly registered UK companies with multi-channel marketing campaigns.",
      details: [
        "Utilize the Companies House API to identify newly registered companies daily.",
        "Launch automated email campaigns to founders within 48 hours of registration.",
        "Follow up with personalized LinkedIn outreach and targeted direct mail campaigns.",
        "Focus on companies registered with generic or placeholder names.",
      ],
      color: "indigo",
    },
    {
      id: "display-ads-name-hooks",
      title: "HTML5 Ads: Verticalized Name Hooks",
      category: "Creative Advertising",
      icon: <Eye className="h-6 w-6" />,
      summary: "Compelling HTML5 display ads featuring high-quality, available names for specific verticals.",
      details: [
        "Continuously 'mine' for attractive, brandable, and legally available names in various industries.",
        "Create dynamic HTML5 display ads showcasing these names as irresistible 'hooks'.",
        "Click to check name is the reason to click.",
        "Target industry-specific websites, blogs, and forums with these ads.",
      ],
      color: "pink",
      image: "/images/html5-display-ads.png",
    },
    {
      id: "linkedin-ai-bots",
      title: "LinkedIn AI Automation",
      category: "Sales Automation",
      icon: <Zap className="h-6 w-6" />,
      summary: "Utilize AI-powered bots for personalized LinkedIn outreach at scale.",
      details: [
        "Leverage tools like LinkedIn Bots, Heyreach, and Weezly to automate outreach.",
        "Programmatically share personalized name ideas relevant to the prospect's industry or profile.",
        "Target Stealth Startups because they are pre-launch and naming is often left to the last minute.",
      ],
      color: "cyan",
    },
    {
      id: "fake-agency-guerrilla",
      title: "Guerrilla: The Fake Agency",
      category: "Guerrilla Marketing",
      icon: <Briefcase className="h-6 w-6" />,
      summary: "Create a parody branding agency on LinkedIn to generate buzz through outrage marketing.",
      details: [
        "Use outrage as a way of generating virality on LinkedIn with a fake branding agency account.",
        "Showcase terrible names that people will feel the need to correct.",
        "Clearly state in the profile bio that it's a parody account by First Dibbs.",
        "Include a link: 'For sensible, powerful naming solutions, try First Dibbs instead.'",
      ],
      color: "red",
      image: "/images/fake-branding-agency.png",
    },
    {
      id: "social-flywheel",
      title: "Social Flywheel: Give & Get Free",
      category: "Growth Hacking",
      icon: <Share2 className="h-6 w-6" />,
      summary:
        "Users get a link that gives 10x free day passes. If 10 people sign up then they get their pass for free. We then make money through referrals and logos.",
      details: [
        "Users get a link that gives 10x free day passes. If 10 people sign up then they get their pass for free. We then make money through referrals and logos.",
      ],
      color: "emerald",
    },
    {
      id: "name-cake-guerrilla",
      title: "Guerrilla: Name Cake Campaign",
      category: "Guerrilla Marketing",
      icon: <Cake className="h-6 w-6" />,
      summary:
        "Send custom celebration 'name cakes' to startups who find their name via First Dibbs, encouraging social media shares.",
      details: [
        "Identify startups with a strong social media presence who successfully use First Dibbs.",
        "Send them a custom-designed cake celebrating their new name (e.g., cake with their new logo/name).",
        "Include a friendly note encouraging them to share their 'name story' and cake on social media.",
        "High likelihood of organic, positive user-generated content and brand mentions.",
      ],
      color: "yellow",
      image: "/images/name-cake.png",
    },
    {
      id: "influencer-marketing-data",
      title: "Influencer Marketing: Dollars + Data",
      category: "Influencer Marketing",
      icon: <BarChart3 className="h-6 w-6" />,
      summary: "Empower influencers with premium names, a 50% revenue share, and valuable audience insights.",
      details: [
        "Provide influencers with a curated list of high-quality, pre-vetted names relevant to their audience.",
        "Offer a 50% revenue share for any conversions driven through their unique link/code.",
        "Share anonymized, aggregated data insights about their audience's naming preferences (e.g., popular industries, business models they search for names for).",
        "Help influencers tailor their content more effectively, fostering a mutually beneficial partnership.",
      ],
      color: "violet",
    },
    {
      id: "enterprise-sales",
      title: "Enterprise Sales: Product Teams",
      category: "B2B Sales",
      icon: <Layers className="h-6 w-6" />,
      summary: "Sell First Dibbs to large product teams (e.g., P&G) launching hundreds of products annually.",
      details: [
        "Target large corporations like P&G, Unilever, etc., that manage extensive product portfolios.",
        "Highlight massive cost and time savings compared to manual clearance (e.g., Accenture spent £30M clearing 3,000 name ideas before settling on Accenture).",
        "Offer enterprise licensing, custom integrations, and dedicated support.",
      ],
      color: "teal",
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "border-blue-200 bg-blue-50 text-blue-700",
      green: "border-green-200 bg-green-50 text-green-700",
      orange: "border-orange-200 bg-orange-50 text-orange-700",
      purple: "border-purple-200 bg-purple-50 text-purple-700",
      indigo: "border-indigo-200 bg-indigo-50 text-indigo-700",
      pink: "border-pink-200 bg-pink-50 text-pink-700",
      cyan: "border-cyan-200 bg-cyan-50 text-cyan-700",
      red: "border-red-200 bg-red-50 text-red-700",
      emerald: "border-emerald-200 bg-emerald-50 text-emerald-700",
      yellow: "border-yellow-200 bg-yellow-50 text-yellow-700",
      violet: "border-violet-200 bg-violet-50 text-violet-700",
      teal: "border-teal-200 bg-teal-50 text-teal-700",
    }

    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  const togglePopup = (id: string) => {
    if (activePopup === id) {
      setActivePopup(null)
    } else {
      setActivePopup(id)
    }
  }

  return (
    <div className="relative h-screen w-full bg-white">
      <div className="relative z-10 h-full flex flex-col py-4 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2 tracking-tight">
              <span style={{ color: "#9234ea" }}>First Dibbs</span> Go-to-Market Strategy
            </h1>
          </motion.div>

          {/* SCROLLABLE CONTAINER - ONLY FOR SLIDE 15 */}
          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-20">
              {strategies.map((strategy, index) => (
                <motion.div
                  key={strategy.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.05 }}
                  className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
                >
                  <div className="p-4 flex-grow">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-2 rounded-lg ${getColorClasses(strategy.color)}`}>{strategy.icon}</div>
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {strategy.category}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-black mb-2">{strategy.title}</h3>
                    <p className="text-black/70 text-sm mb-3 flex-grow">{strategy.summary}</p>
                    {strategy.metrics && (
                      <div
                        className={`rounded-lg p-2 mb-3 ${getColorClasses(strategy.color).replace("text-", "bg-").replace("bg-", "text-").split(" ")[0]} bg-opacity-20`}
                      >
                        <p className={`${getColorClasses(strategy.color).split(" ")[2]} font-semibold text-xs`}>
                          {strategy.metrics}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="p-4 border-t border-gray-100">
                    <button
                      onClick={() => togglePopup(strategy.id)}
                      className="w-full text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors duration-200 bg-purple-50 hover:bg-purple-100 py-2 px-4 rounded-lg"
                    >
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {activePopup && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={() => setActivePopup(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const strategy = strategies.find((s) => s.id === activePopup)
                  if (!strategy) return null

                  return (
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-lg ${getColorClasses(strategy.color)}`}>{strategy.icon}</div>
                          <div>
                            <h3 className="text-2xl font-bold text-black">{strategy.title}</h3>
                            <p className="text-gray-600">{strategy.category}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => setActivePopup(null)}
                          className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors duration-200"
                        >
                          <X className="h-5 w-5 text-gray-600" />
                        </button>
                      </div>

                      {strategy.image && strategy.id !== "enterprise-sales" && (
                        <div className="mb-6">
                          <img
                            src={strategy.image || "/placeholder.svg"}
                            alt={strategy.title}
                            className="w-full h-auto rounded-lg shadow-md"
                          />
                        </div>
                      )}
                      {strategy.id === "enterprise-sales" && strategy.image && (
                        <div className="mb-6">{/* Image specifically removed for enterprise sales popout */}</div>
                      )}

                      <div className="space-y-4">
                        <h4 className="font-semibold text-black mb-3">Implementation Details:</h4>
                        <ul className="space-y-3">
                          {strategy.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-black/80">
                              <div
                                className={`w-2 h-2 ${getColorClasses(strategy.color).split(" ")[1]} rounded-full mt-2 flex-shrink-0`}
                              />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {strategy.metrics && (
                        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold text-black mb-2">Key Metrics:</h4>
                          <p className="text-black/70">{strategy.metrics}</p>
                        </div>
                      )}
                    </div>
                  )
                })()}
              </motion.div>
            </motion.div>
          )}
        </div>

        {typeof currentSlide === "number" && typeof totalSlides === "number" && onPrev && onNext && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
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
        )}
      </div>
    </div>
  )
}
