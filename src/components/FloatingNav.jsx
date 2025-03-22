"use client"

import { motion } from "framer-motion"

const FloatingNav = ({ activeSection, scrollToSection, onCursorChange }) => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "shop", label: "Shop" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <motion.nav
      className="floating-nav"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`nav-item ${activeSection === item.id ? "active" : ""}`}
          onClick={() => scrollToSection(item.id)}
          onMouseEnter={() => onCursorChange("button", item.label)}
          onMouseLeave={() => onCursorChange("default")}
        >
          <span className="nav-dot"></span>
          <span className="nav-label">{item.label}</span>
        </button>
      ))}
    </motion.nav>
  )
}

export default FloatingNav

