"use client"

import { useState } from "react"
import { ArrowRight, MessageCircle, Phone, MessageSquare } from "react-feather"

const ServiceCard = ({ service, onHover }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const handleWhatsApp = (e) => {
    e.stopPropagation()
    const message = `Hi, I'm interested in your ${service.title} service.`
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleMessenger = (e) => {
    e.stopPropagation()
    window.open("https://m.me/brandotory", "_blank")
  }

  const handleCall = (e) => {
    e.stopPropagation()
    window.location.href = "tel:+1234567890"
  }

  return (
    <div
      className={`service-card ${isExpanded ? "active" : ""} ${isHovered ? "hovered" : ""}`}
      onClick={toggleExpand}
      onMouseEnter={() => {
        setIsHovered(true)
        onHover(true, service.title)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
        onHover(false, "")
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

      <div className={`service-features ${isExpanded ? "expanded" : ""}`}>
        <h4>Key Features</h4>
        <ul>
          {service.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className={`service-cta ${isExpanded ? "expanded" : ""}`}>
        <button
          className="service-cta-button whatsapp"
          onClick={handleWhatsApp}
          onMouseEnter={() => onHover(true, "WhatsApp")}
          onMouseLeave={() => onHover(true, service.title)}
        >
          <MessageCircle size={16} />
          <span>WhatsApp</span>
        </button>
        <button
          className="service-cta-button messenger"
          onClick={handleMessenger}
          onMouseEnter={() => onHover(true, "Messenger")}
          onMouseLeave={() => onHover(true, service.title)}
        >
          <MessageSquare size={16} />
          <span>Messenger</span>
        </button>
        <button
          className="service-cta-button call"
          onClick={handleCall}
          onMouseEnter={() => onHover(true, "Call Us")}
          onMouseLeave={() => onHover(true, service.title)}
        >
          <Phone size={16} />
          <span>Call</span>
        </button>
      </div>

      <div className="service-action">
        <span>{isExpanded ? "Show Less" : "Learn More"}</span>
        <ArrowRight size={16} className={isExpanded ? "rotate-down" : ""} />
      </div>
    </div>
  )
}

export default ServiceCard

