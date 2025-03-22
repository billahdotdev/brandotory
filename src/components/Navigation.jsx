"use client"

import { motion, AnimatePresence } from "framer-motion"

const Navigation = ({ isOpen, navigateTo, currentSection }) => {
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav className="navigation" initial="closed" animate="open" exit="closed" variants={menuVariants}>
          <ul className="nav-list">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className={currentSection === item.id ? "active" : ""}
              >
                <button onClick={() => navigateTo(item.id)} className="nav-link">
                  {item.label}
                </button>
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="nav-footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a href="https://billah.dev" target="_blank" rel="noopener noreferrer" className="founder-link">
              billah.dev
            </a>
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

export default Navigation

