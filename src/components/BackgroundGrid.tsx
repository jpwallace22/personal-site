"use client"
import { useEffect, useState } from "react"

export const BackgroundGrid = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 }) // Default position

  // Update mouse position state
  const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
    const xPercent = (clientX / window.innerWidth) * 100
    const yPercent = (clientY / window.innerHeight) * 100
    setMousePosition({ x: xPercent, y: yPercent })
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  })

  const dynamicMaskStyle = {
    maskImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, transparent 5%, black 66%)`,
    WebkitMaskImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, transparent 5%, black 66%)`, // For Safari
  }

  return (
    <div className="fixed h-screen w-full opacity-30 bg-grid-common-black/[0.3] dark:bg-grid-gray-500/[0.2]">
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-common-white dark:bg-purple-950"
        style={dynamicMaskStyle}
      />
    </div>
  )
}
