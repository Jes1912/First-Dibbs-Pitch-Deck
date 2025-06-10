"use client"

import { useState, useEffect } from "react"
import PitchDeckFirstPage from "@/components/pitch-deck-first-page"
import PitchDeckMarketPainPage from "@/components/pitch-deck-market-pain-page"
import PitchDeckSeventhPage from "@/components/pitch-deck-seventh-page"
import PitchDeckEighthPage from "@/components/pitch-deck-eighth-page"
import PitchDeckNinthPage from "@/components/pitch-deck-ninth-page"
import PitchDeckTenthPage from "@/components/pitch-deck-tenth-page"
import PitchDeckEleventhPage from "@/components/pitch-deck-eleventh-page"
import PitchDeckSuccessStories from "@/components/pitch-deck-success-stories"
import PitchDeckDemoPage from "@/components/pitch-deck-demo-page"
import PitchDeckVideoDemoPage from "@/components/pitch-deck-video-demo-page"
import PitchDeckMarketSizePage from "@/components/pitch-deck-market-size-page"
import PitchDeckTeamPage from "@/components/pitch-deck-team-page"
import GTMStrategyPage from "@/components/gtm-strategy-page"
import PitchDeckMonetizationPage from "@/components/pitch-deck-monetization-page"
import PitchDeckAskSlide from "@/components/pitch-deck-ask-slide"
import PitchDeckThankYouPage from "@/components/pitch-deck-thank-you-page"
import PitchDeckReverseEngineeringPage from "@/components/pitch-deck-reverse-engineering-page"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 17 // Updated from 16 to 17

  const goToNextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1))
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        goToNextSlide()
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        goToPrevSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const slides = [
    PitchDeckFirstPage, // Slide 1
    PitchDeckSeventhPage, // Slide 2 (Problem: Founders Struggle)
    PitchDeckEighthPage, // Slide 3 (Problem: Underserved/Outpriced)
    PitchDeckNinthPage, // Slide 4 (Problem: Getting it Wrong Hurts)
    PitchDeckTenthPage, // Slide 5 (Problem: Name Generators Failed)
    PitchDeckEleventhPage, // Slide 6 (Solution: Perfect Solution)
    PitchDeckDemoPage, // Slide 7 (Solution: Demo)
    PitchDeckVideoDemoPage, // Slide 8 (Video Demo)
    PitchDeckReverseEngineeringPage, // Slide 9 (NEW: Reverse Engineering)
    PitchDeckSuccessStories, // Slide 10 (Traction/Social Proof)
    PitchDeckMarketPainPage, // Slide 11 (Market Context: Naming Software Pain)
    PitchDeckMarketSizePage, // Slide 12 (Market Context: Market Opp)
    PitchDeckMonetizationPage, // Slide 13 (Monetization Strategy)
    PitchDeckAskSlide, // Slide 14 (Ask/Funding)
    PitchDeckTeamPage, // Slide 15 (Team)
    GTMStrategyPage, // Slide 16 (GTM)
    PitchDeckThankYouPage, // Slide 17 (Thank You)
  ]

  const CurrentSlideComponent = slides[currentSlide]

  return (
    <div className="h-screen w-screen overflow-hidden flex items-center justify-center bg-white">
      {CurrentSlideComponent && (
        <div className="max-h-full max-w-full w-full h-full">
          <CurrentSlideComponent
            onNext={goToNextSlide}
            onPrev={goToPrevSlide}
            currentSlide={currentSlide}
            totalSlides={totalSlides}
          />
        </div>
      )}
    </div>
  )
}
