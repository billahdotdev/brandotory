"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "react-feather"

const Home = ({ navigateTo }) => {
  return (
    <motion.div
      className="section home-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="content-wrapper">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Elevate Your Brand
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="tagline"
        >
          Digital solutions that transform your business
        </motion.p>

        <motion.div
          className="cta-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <button className="cta-button primary" onClick={() => navigateTo("services")}>
            Our Services <ArrowRight size={16} />
          </button>

          <button className="cta-button secondary" onClick={() => navigateTo("about")}>
            About Us
          </button>
        </motion.div>

        <motion.div
          className="service-highlights"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="service-pill" onClick={() => navigateTo("services")}>
            Web Development
          </div>
          <div className="service-pill" onClick={() => navigateTo("services")}>
            Brand Design
          </div>
          <div className="service-pill" onClick={() => navigateTo("services")}>
            Digital Marketing
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Home

