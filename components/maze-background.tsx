"use client"

import { motion } from "framer-motion"

export function MazeBackground() {
  // Complex winding maze paths
  const mazePaths = [
    // Main winding paths
    "M50,50 C100,50 100,100 150,100 S200,150 250,150 C300,150 300,100 350,100 S400,50 450,50 C500,50 500,100 550,100 S600,150 650,150",
    "M50,200 C100,200 100,250 150,250 S200,300 250,300 C300,300 300,250 350,250 S400,200 450,200 C500,200 500,250 550,250 S600,300 650,300",
    "M150,50 C150,100 200,100 200,150 S150,200 150,250 C150,300 200,300 200,350",
    "M350,50 C350,100 300,100 300,150 S350,200 350,250 C350,300 300,300 300,350",
    "M500,50 C500,100 550,100 550,150 S500,200 500,250 C500,300 550,300 550,350",

    // Connecting paths
    "M100,150 C125,150 125,175 150,175 S175,200 200,200",
    "M300,200 C325,200 325,175 350,175 S375,150 400,150",
    "M500,200 C525,200 525,175 550,175 S575,150 600,150",

    // Dead ends
    "M200,75 C225,75 225,50 250,50 C275,50 275,75 250,75 C225,75 225,100 200,100",
    "M400,325 C425,325 425,300 450,300 C475,300 475,325 450,325 C425,325 425,350 400,350",
    "M550,200 C575,200 575,225 600,225 C625,225 625,200 600,200 C575,200 575,175 550,175",

    // Complex junctions
    "M250,150 C250,175 275,175 275,200 S250,225 250,250",
    "M450,150 C450,175 425,175 425,200 S450,225 450,250",

    // Additional winding paths
    "M75,300 C100,275 125,300 150,275 S175,300 200,275 C225,300 250,275 275,300",
    "M325,75 C350,100 375,75 400,100 S425,75 450,100 C475,75 500,100 525,75",
  ]

  // Dead end markers
  const deadEnds = [
    { x: 250, y: 50, size: 6 },
    { x: 450, y: 325, size: 6 },
    { x: 600, y: 225, size: 6 },
    { x: 150, y: 175, size: 5 },
    { x: 400, y: 150, size: 5 },
    { x: 550, y: 175, size: 5 },
  ]

  // Animated dots moving through the maze
  const animatedDots = [
    {
      id: 1,
      path: "M50,50 C100,50 100,100 150,100 S200,150 250,150 C300,150 300,100 350,100 S400,50 450,50 C500,50 500,100 550,100 S600,150 650,150 C650,200 600,200 550,200 S500,250 450,250 C400,250 400,300 350,300 S300,350 250,350 C200,350 200,300 150,300 S100,250 50,250",
      duration: 60,
      delay: 0,
      size: 4,
    },
    {
      id: 2,
      path: "M350,50 C350,100 300,100 300,150 S350,200 350,250 C350,300 300,300 300,350 C250,350 250,300 200,300 S150,250 150,200 C150,150 200,150 200,100 S150,50 150,50",
      duration: 45,
      delay: 10,
      size: 3,
    },
    {
      id: 3,
      path: "M500,50 C500,100 550,100 550,150 S500,200 500,250 C500,300 550,300 550,350 C600,350 600,300 650,300 C650,250 600,250 600,200 S650,150 650,150",
      duration: 50,
      delay: 5,
      size: 3.5,
    },
  ]

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 700 400" fill="none">
        {/* Subtle grid background */}
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(0,0,0,0.01)" strokeWidth="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Main maze paths */}
        {mazePaths.map((path, index) => (
          <motion.path
            key={`maze-${index}`}
            d={path}
            stroke="rgba(0,0,0,0.03)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: index % 3 === 0 ? [0, 0.04, 0.02] : 0.03,
            }}
            transition={{
              pathLength: {
                duration: 8 + Math.random() * 4,
                delay: index * 0.2,
                ease: "easeInOut",
              },
              opacity: {
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          />
        ))}

        {/* Accent paths with brand color */}
        {[0, 3, 8, 12].map((index) => (
          <motion.path
            key={`accent-${index}`}
            d={mazePaths[index]}
            stroke="rgba(146,52,234,0.03)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="5,10"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0, 0.04, 0.02],
            }}
            transition={{
              pathLength: {
                duration: 10,
                delay: index * 0.3,
                ease: "easeInOut",
              },
              opacity: {
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          />
        ))}

        {/* Dead end markers */}
        {deadEnds.map((deadEnd, index) => (
          <motion.circle
            key={`deadend-${index}`}
            cx={deadEnd.x}
            cy={deadEnd.y}
            r={deadEnd.size}
            fill="rgba(0,0,0,0.01)"
            stroke="rgba(146,52,234,0.02)"
            strokeWidth="0.5"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0.8, 1],
              opacity: [0, 0.03, 0.01, 0.03],
            }}
            transition={{
              duration: 8,
              delay: index * 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Animated dots moving through the maze */}
        {animatedDots.map((dot) => (
          <motion.circle
            key={`dot-${dot.id}`}
            r={dot.size}
            fill={dot.id === 1 ? "rgba(146,52,234,0.1)" : "rgba(0,0,0,0.06)"}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, dot.id === 1 ? 0.1 : 0.06, 0] }}
            transition={{
              duration: 4,
              delay: dot.delay,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <motion.animateMotion path={dot.path} dur={`${dot.duration}s`} repeatCount="indefinite" rotate="auto" />
          </motion.circle>
        ))}

        {/* Frustration indicators - small zigzags */}
        {[
          { path: "M150,75 L155,70 L160,75 L165,70 L170,75", delay: 3 },
          { path: "M450,325 L455,320 L460,325 L465,320 L470,325", delay: 7 },
          { path: "M300,200 L305,195 L310,200 L315,195 L320,200", delay: 5 },
        ].map((frustration, index) => (
          <motion.path
            key={`frustration-${index}`}
            d={frustration.path}
            stroke="rgba(146,52,234,0.04)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.04, 0],
            }}
            transition={{
              duration: 3,
              delay: frustration.delay,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Maze junction points */}
        {[
          { x: 150, y: 100 },
          { x: 250, y: 150 },
          { x: 350, y: 100 },
          { x: 450, y: 50 },
          { x: 550, y: 100 },
          { x: 150, y: 250 },
          { x: 250, y: 300 },
          { x: 350, y: 250 },
          { x: 450, y: 200 },
          { x: 550, y: 250 },
        ].map((junction, index) => (
          <motion.circle
            key={`junction-${index}`}
            cx={junction.x}
            cy={junction.y}
            r="2"
            fill="rgba(0,0,0,0.02)"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0] }}
            transition={{
              duration: 5,
              delay: index * 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  )
}
