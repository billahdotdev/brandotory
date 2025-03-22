"use client"

import { useState } from "react"
import { ShoppingBag, ExternalLink, Eye } from "react-feather"
import ProductModal from "./ProductModal"

const ProductCard = ({ product, onHover }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [showModal, setShowModal] = useState(false)

  // Exchange rate (approximate)
  const usdToBdt = 110

  const handleWhatsAppClick = (e) => {
    e.stopPropagation()
    const price = product.price || product.basePrice
    const message = `Hi, I'm interested in ${product.name} (${product.category}) for $${price} / ৳${Math.round(price * usdToBdt)}`
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleCardClick = () => {
    setShowModal(true)
  }

  return (
    <>
      <div
        className={`product-card ${isHovered ? "hovered" : ""}`}
        onClick={handleCardClick}
        onMouseEnter={() => {
          setIsHovered(true)
          onHover(true, "View Details")
        }}
        onMouseLeave={() => {
          setIsHovered(false)
          onHover(false, "")
        }}
      >
        <div className="product-image-container">
          <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}></div>
          <div className="product-overlay">
            <button
              className="product-action view"
              onMouseEnter={() => onHover(true, "View Details")}
              onMouseLeave={() => onHover(true, "View Details")}
            >
              <Eye size={18} />
              <span>View Details</span>
            </button>
            <button
              className="product-action buy"
              onClick={handleWhatsAppClick}
              onMouseEnter={() => onHover(true, "Buy via WhatsApp")}
              onMouseLeave={() => onHover(true, "View Details")}
            >
              <ShoppingBag size={18} />
              <span>Buy Now</span>
            </button>
          </div>
        </div>

        <div className="product-info">
          <div className="product-header">
            <h3>{product.name}</h3>
            <span className="product-category">{product.category}</span>
          </div>

          <div className="product-details">
            <div className="product-price-container">
              {product.price ? (
                <>
                  <span className="product-price">${product.price}</span>
                  <span className="product-price-bdt">৳{Math.round(product.price * usdToBdt)}</span>
                </>
              ) : (
                <>
                  <span className="product-price">From ${product.basePrice}</span>
                  <span className="product-price-bdt">From ৳{Math.round(product.basePrice * usdToBdt)}</span>
                </>
              )}
            </div>

            {product.link && (
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="product-link"
                onClick={(e) => e.stopPropagation()}
                onMouseEnter={() => onHover(true, "Visit Demo")}
                onMouseLeave={() => onHover(true, "View Details")}
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>

      {showModal && <ProductModal product={product} onClose={() => setShowModal(false)} onHover={onHover} />}
    </>
  )
}

export default ProductCard

