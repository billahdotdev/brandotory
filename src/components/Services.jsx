"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Search, TrendingUp, Feather, Server } from "react-feather"

const Services = ({ navigateTo }) => {
  const [activeService, setActiveService] = useState(null)

  const services = [
    {
      id: "web",
      title: "Web Development",
      icon: <Code />,
      description:
        "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      features: ["Responsive Design", "E-commerce Solutions", "CMS Integration", "Web Applications"],
    },
    {
      id: "seo",
      title: "SEO",
      icon: <Search />,
      description: "Improve your online visibility and drive organic traffic with our comprehensive SEO strategies.",
      features: ["Keyword Research", "On-page Optimization", "Technical SEO", "Content Strategy"],
    },
    {
      id: "marketing",
      title: "Digital Marketing",
      icon: <TrendingUp />,
      description: "Reach your target audience and grow your business with data-driven digital marketing campaigns.",
      features: ["Social Media Marketing", "Email Campaigns", "PPC Advertising", "Analytics & Reporting"],
    },
    {
      id: "brand",
      title: "Brand Design",
      icon: <Feather />,
      description:
        "Create a memorable brand identity that resonates with your audience and sets you apart from competitors.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
    },
    {
      id: "linux",
      title: "Linux Migration",
      icon: <Server />,
      description:
        "Seamlessly transition your systems to Linux for improved security, stability, and cost-effectiveness.",
      features: ["Server Migration", "System Configuration", "Training & Support", "Performance Optimization"],
    },
  ]

  const toggleService = (id) => {
    setActiveService(activeService === id ? null : id)
  }

  return (
    <motion.div
      className="section services-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="content-wrapper">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Our Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="section-intro"
        >
          Comprehensive digital solutions tailored to your business needs
        </motion.p>

        <motion.div
          className="services-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`service-card ${activeService === service.id ? "active" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              onClick={() => toggleService(service.id)}
            >
              <div className="service-header">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
              </div>

              <AnimatePresence>
                {activeService === service.id && (
                  <motion.div
                    className="service-details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{service.description}</p>
                    <ul>
                      {service.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="section-nav"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <button className="nav-button" onClick={() => navigateTo("about")}>
            About Us
          </button>
          <button className="nav-button" onClick={() => navigateTo("contact")}>
            Contact
          </button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Services

