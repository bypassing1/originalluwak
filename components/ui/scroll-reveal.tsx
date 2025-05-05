"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
  once?: boolean
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  className,
  once = true,
}: ScrollRevealProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: "-100px 0px" })
  const [hasAnimated, setHasAnimated] = useState(false)

  // Set initial animation states based on direction
  let initial = {}
  switch (direction) {
    case "up":
      initial = { opacity: 0, y: 50 }
      break
    case "down":
      initial = { opacity: 0, y: -50 }
      break
    case "left":
      initial = { opacity: 0, x: 50 }
      break
    case "right":
      initial = { opacity: 0, x: -50 }
      break
    case "none":
      initial = { opacity: 0 }
      break
  }

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start({ opacity: 1, y: 0, x: 0 })
      if (once) {
        setHasAnimated(true)
      }
    }
    if (!inView && !once && hasAnimated) {
      controls.start({ ...initial })
    }
  }, [controls, inView, once, hasAnimated])

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={controls}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
