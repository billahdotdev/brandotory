"use client"

import { useState, useEffect, useRef } from "react"
import "./App.css"
import CustomCursor from "./components/CustomCursor"
import SocialBar from "./components/SocialBar"
import Home from "./sections/Home"
import About from "./sections/About"
import Services from "./sections/Services"
import Shop from "./sections/Shop"
import Contact from "./sections/Contact"
import NavigationButton from "./components/NavigationButton"

function App() {
  const [activeSection, setActiveSection] = useState("home")
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [cursorEnlarged, setCursorEnlarged] = useState(false)
  const [cursorText, setCursorText] = useState("")
  const [isMobile, setIsMobile] = useState(false)
  const sectionsRef = useRef({})

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      // Find which section is currently in view
      Object.entries(sectionsRef.current).forEach(([id, element]) => {
        const rect = element.getBoundingClientRect()
        const topPosition = rect.top + window.scrollY
        const bottomPosition = topPosition + rect.height

        if (scrollPosition >= topPosition && scrollPosition < bottomPosition) {
          setActiveSection(id)
        }
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", checkMobile)
    window.addEventListener("scroll", handleScroll)

    // Initial check
    checkMobile()
    handleScroll()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", checkMobile)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleCursorChange = (enlarged, text = "") => {
    setCursorEnlarged(enlarged)
    setCursorText(text)
  }

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const section = sectionsRef.current[sectionId]
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const registerSection = (id, ref) => {
    sectionsRef.current[id] = ref
  }

  return (
    <div className="app">
      {!isMobile && <CustomCursor position={cursorPosition} enlarged={cursorEnlarged} text={cursorText} />}

      <SocialBar onButtonHover={handleCursorChange} />

      <div className="floating-nav">
        <NavigationButton
          onClick={() => scrollToSection("home")}
          active={activeSection === "home"}
          onHover={handleCursorChange}
          label="Home"
        />
        <NavigationButton
          onClick={() => scrollToSection("about")}
          active={activeSection === "about"}
          onHover={handleCursorChange}
          label="About"
        />
        <NavigationButton
          onClick={() => scrollToSection("services")}
          active={activeSection === "services"}
          onHover={handleCursorChange}
          label="Services"
        />
        <NavigationButton
          onClick={() => scrollToSection("shop")}
          active={activeSection === "shop"}
          onHover={handleCursorChange}
          label="Shop"
        />
        <NavigationButton
          onClick={() => scrollToSection("contact")}
          active={activeSection === "contact"}
          onHover={handleCursorChange}
          label="Contact"
        />
      </div>

      <div className="content">
        <Home registerSection={registerSection} onButtonHover={handleCursorChange} navigateTo={scrollToSection} />
        <About registerSection={registerSection} onButtonHover={handleCursorChange} navigateTo={scrollToSection} />
        <Services registerSection={registerSection} onButtonHover={handleCursorChange} navigateTo={scrollToSection} />
        <Shop registerSection={registerSection} onButtonHover={handleCursorChange} navigateTo={scrollToSection} />
        <Contact registerSection={registerSection} onButtonHover={handleCursorChange} />
      </div>
    </div>
  )
}

export default App

