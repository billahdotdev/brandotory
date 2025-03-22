"use client"

import { useRef, useEffect, useState } from "react"
import SectionButton from "../components/SectionButton"
import { Code, Search, TrendingUp, Feather, Server, ArrowRight } from "react-feather"

const Services = ({ registerSection, onButtonHover, navigateTo }) => {
  const sectionRef = useRef(null)
  const [activeService, setActiveService] = useState(null)
  const [hoveredService, setHoveredService] = useState(null)

  useEffect(() => {
    if (sectionRef.current) {
      registerSection("services", sectionRef.current)
    }
  }, [registerSection])

  const services = [
    {
      id: "web",
      title: "Web Development",
      icon: <Code size={24} />,
      description:
        "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      features: ["Responsive Design", "E-commerce Solutions", "CMS Integration", "Web Applications"],
      color: "#6366f1",
    },
    {
      id: "seo",
      title: "SEO",
      icon: <Search size={24} />,
      description: "Improve your online visibility and drive organic traffic with our comprehensive SEO strategies.",
      features: ["Keyword Research", "On-page Optimization", "Technical SEO", "Content Strategy"],
      color: "#f59e0b",
    },
    {
      id: "marketing",
      title: "Digital Marketing",
      icon: <TrendingUp size={24} />,
      description: "Reach your target audience and grow your business with data-driven digital marketing campaigns.",
      features: ["Social Media Marketing", "Email Campaigns", "PPC Advertising", "Analytics & Reporting"],
      color: "#10b981",
    },
    {
      id: "brand",
      title: "Brand Design",
      icon: <Feather size={24} />,
      description:
        "Create a memorable brand identity that resonates with your audience and sets you apart from competitors.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
      color: "#ec4899",
    },
    {
      id: "linux",
      title: "Linux Migration",
      icon: <Server size={24} />,
      description:
        "Seamlessly transition your systems to Linux for improved security, stability, and cost-effectiveness.",
      features: ["Server Migration", "System Configuration", "Training & Support", "Performance Optimization"],
      color: "#8b5cf6",
    },
  ]

  const toggleService = (id) => {
    setActiveService(activeService === id ? null : id)
  }

  return (
    <section ref={sectionRef} className="section services-section" id="services">
      <div className="section-content">
        <h2 className="section-title">Services</h2>

        <p className="section-description">
          We offer a range of services to help your business thrive in the digital landscape. Click on each service to
          learn more.
        </p>

        <div className="services-container">
          <div className="services-grid">
            {services.map((service) => (
              <div
                key={service.id}
                className={`service-card ${activeService === service.id ? "active" : ""} ${hoveredService === service.id ? "hovered" : ""}`}
                onClick={() => toggleService(service.id)}
                onMouseEnter={() => {
                  onButtonHover(true, service.title)
                  setHoveredService(service.id)
                }}
                onMouseLeave={() => {
                  onButtonHover(false, "")
                  setHoveredService(null)
                }}
                style={{
                  "--service-color": service.color,
                }}
              >
                <div className="service-icon" style={{ backgroundColor: `${service.color}10` }}>
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-brief">{service.description}</p>

                <div className="service-features">
                  <h4>Key Features</h4>
                  <ul>
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="service-action">
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>

          <div className="services-info">
            <div className="info-card">
              <h3>Custom Solutions</h3>
              <p>
                Don't see exactly what you need? We specialize in creating custom solutions tailored to your specific
                requirements.
              </p>
              <SectionButton onClick={() => navigateTo("contact")} onHover={onButtonHover} hoverText="Get in Touch">
                Contact Us
              </SectionButton>
            </div>
          </div>
        </div>

        <div className="button-group">
          <SectionButton onClick={() => navigateTo("shop")} onHover={onButtonHover} hoverText="Browse Shop">
            View Shop
          </SectionButton>
        </div>
      </div>
    </section>
  )
}

export default Services

