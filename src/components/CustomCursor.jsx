"use client"

import { useEffect, useState } from "react"

const CustomCursor = ({ position, enlarged, text }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Short delay to prevent cursor flash on page load
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div
        className={`cursor-dot ${isVisible ? "visible" : ""} ${enlarged ? "enlarged" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`cursor-outline ${isVisible ? "visible" : ""} ${enlarged ? "enlarged" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      {text && (
        <div
          className={`cursor-text ${isVisible && enlarged ? "visible" : ""}`}
          style={{
            left: `${position.x}px`,
            top: `${position.y - 30}px`,
          }}
        >
          {text}
        </div>
      )}
    </>
  )
}

export default CustomCursor

