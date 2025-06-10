"use client"

import { motion } from "framer-motion"

export function FloatingShapes() {
  // Generate different types of shapes
  const circles = Array.from({ length: 12 }, (_, i) => ({
    id: `circle-${i}`,
    size: Math.random() * 40 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 20 + Math.random() * 15,
    opacity: Math.random() * 0.08 + 0.02,
    isPurple: Math.random() > 0.85, // Only a few purple shapes
  }))

  const rectangles = Array.from({ length: 8 }, (_, i) => ({
    id: `rect-${i}`,
    width: Math.random() * 60 + 20,
    height: Math.random() * 30 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 25 + Math.random() * 15,
    opacity: Math.random() * 0.06 + 0.02,
    borderRadius: Math.random() * 10 + 2,
    isPurple: Math.random() > 0.85, // Only a few purple shapes
  }))

  const lines = Array.from({ length: 15 }, (_, i) => ({
    id: `line-${i}`,
    length: Math.random() * 100 + 50,
    thickness: Math.random() * 1 + 0.5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    angle: Math.random() * 360,
    delay: Math.random() * 5,
    duration: 30 + Math.random() * 20,
    opacity: Math.random() * 0.08 + 0.02,
    isPurple: Math.random() > 0.85, // Only a few purple shapes
  }))

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating circles */}
      {circles.map((circle) => (
        <motion.div
          key={circle.id}
          className="absolute rounded-full"
          style={{
            width: circle.size,
            height: circle.size,
            left: `${circle.x}%`,
            top: `${circle.y}%`,
            backgroundColor: circle.isPurple ? "#9234ea" : "#000000",
            opacity: circle.opacity,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, circle.opacity, 0],
            scale: [0, 1, 0],
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: circle.duration,
            delay: circle.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating rectangles */}
      {rectangles.map((rect) => (
        <motion.div
          key={rect.id}
          className="absolute"
          style={{
            width: rect.width,
            height: rect.height,
            left: `${rect.x}%`,
            top: `${rect.y}%`,
            backgroundColor: rect.isPurple ? "#9234ea" : "#000000",
            opacity: rect.opacity,
            borderRadius: rect.borderRadius,
          }}
          initial={{ opacity: 0, rotate: 0 }}
          animate={{
            opacity: [0, rect.opacity, 0],
            rotate: [0, Math.random() > 0.5 ? 90 : -90, 0],
            x: [0, Math.random() * 150 - 75, 0],
            y: [0, Math.random() * 150 - 75, 0],
          }}
          transition={{
            duration: rect.duration,
            delay: rect.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating lines */}
      {lines.map((line) => (
        <motion.div
          key={line.id}
          className="absolute origin-center"
          style={{
            width: line.length,
            height: line.thickness,
            left: `${line.x}%`,
            top: `${line.y}%`,
            backgroundColor: line.isPurple ? "#9234ea" : "#000000",
            opacity: line.opacity,
            transform: `rotate(${line.angle}deg)`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, line.opacity, 0],
            scaleX: [0, 1, 0],
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            rotate: [line.angle, line.angle + (Math.random() > 0.5 ? 45 : -45), line.angle],
          }}
          transition={{
            duration: line.duration,
            delay: line.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* A few larger, more prominent shapes */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 120,
          height: 120,
          left: "15%",
          top: "70%",
          border: "1px solid rgba(0,0,0,0.03)",
          opacity: 0.04,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 0.04, 0],
          scale: [0, 1, 0],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 40,
          delay: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute"
        style={{
          width: 150,
          height: 2,
          left: "70%",
          top: "20%",
          backgroundColor: "#9234ea",
          opacity: 0.03,
          transform: "rotate(30deg)",
        }}
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{
          opacity: [0, 0.03, 0],
          scaleX: [0, 1, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 35,
          delay: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
