"use client"

import { useState, useEffect } from "react"
import { X, ArrowLeft, ArrowRight, ExternalLink, ShoppingBag } from "react-feather"
import { motion, AnimatePresence } from "framer-motion"

const ProductModal = ({ product, onClose, onHover }) => {
  const [activeImage, setActiveImage] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  // Exchange rate (approximate)
  const usdToBdt = 110

  // Format price in USD
  const formatUSD = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(price)
  }

  // Format price in BDT
  const formatBDT = (price) => {
    return new Intl.NumberFormat("bn-BD", {
      style: "currency",
      currency: "BDT",
      minimumFractionDigits: 0,
    }).format(price * usdToBdt)
  }

  // Generate additional images for the product
  const generateProductImages = () => {
    const baseImage = product.image
    // Create variations of the base image path for demo purposes
    const imageParts = baseImage.split(".")
    const ext = imageParts.pop()
    const basePath = imageParts.join(".")

    return [baseImage, `${basePath}-2.${ext}`, `${basePath}-3.${ext}`]
  }

  const images = generateProductImages()

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleWhatsAppClick = () => {
    const price = product.price || product.basePrice
    const message = `Hi, I'm interested in ${product.name} (${product.category}) for ${formatUSD(price)} / ${formatBDT(price)}`
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <AnimatePresence>
      <motion.div
        className="product-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="product-modal"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="modal-close-button"
            onClick={onClose}
            onMouseEnter={() => onHover(true, "Close")}
            onMouseLeave={() => onHover(false, "")}
          >
            <X size={24} />
          </button>

          <div className="product-modal-content">
            <div className="product-modal-gallery">
              <div className="product-main-image-container">
                {isLoading ? (
                  <div className="image-loading-placeholder"></div>
                ) : (
                  <motion.div
                    className="product-main-image"
                    key={activeImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ backgroundImage: `url(${images[activeImage]})` }}
                  ></motion.div>
                )}

                <button
                  className="gallery-nav prev"
                  onClick={prevImage}
                  onMouseEnter={() => onHover(true, "Previous")}
                  onMouseLeave={() => onHover(false, "")}
                >
                  <ArrowLeft size={20} />
                </button>

                <button
                  className="gallery-nav next"
                  onClick={nextImage}
                  onMouseEnter={() => onHover(true, "Next")}
                  onMouseLeave={() => onHover(false, "")}
                >
                  <ArrowRight size={20} />
                </button>

                <div className="gallery-indicators">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`gallery-indicator ${index === activeImage ? "active" : ""}`}
                      onClick={() => setActiveImage(index)}
                      onMouseEnter={() => onHover(true, `Image ${index + 1}`)}
                      onMouseLeave={() => onHover(false, "")}
                    ></button>
                  ))}
                </div>
              </div>

              <div className="product-thumbnails">
                {images.map((image, index) => (
                  <button
                    key={index}
                    className={`product-thumbnail ${index === activeImage ? "active" : ""}`}
                    onClick={() => setActiveImage(index)}
                    onMouseEnter={() => onHover(true, `Image ${index + 1}`)}
                    onMouseLeave={() => onHover(false, "")}
                  >
                    <div className="thumbnail-image" style={{ backgroundImage: `url(${image})` }}></div>
                  </button>
                ))}
              </div>
            </div>

            <div className="product-modal-info">
              <h2 className="product-modal-title">{product.name}</h2>
              <span className="product-modal-category">{product.category}</span>

              <div className="product-modal-price">
                <div className="price-usd">
                  {formatUSD(product.price || product.basePrice)}
                  <span className="currency-label">USD</span>
                </div>
                <div className="price-bdt">
                  {formatBDT(product.price || product.basePrice)}
                  <span className="currency-label">BDT</span>
                </div>
              </div>

              <div className="product-modal-description">
                <p>{product.description}</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu
                  sed erat molestie vehicula.
                </p>
              </div>

              {product.features && (
                <div className="product-modal-features">
                  <h3>Features</h3>
                  <ul>
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="product-modal-actions">
                <button
                  className="product-buy-button"
                  onClick={handleWhatsAppClick}
                  onMouseEnter={() => onHover(true, "Buy via WhatsApp")}
                  onMouseLeave={() => onHover(false, "")}
                >
                  <ShoppingBag size={18} />
                  <span>Contact to Buy</span>
                </button>

                {product.link && (
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-demo-link"
                    onMouseEnter={() => onHover(true, "View Demo")}
                    onMouseLeave={() => onHover(false, "")}
                  >
                    <ExternalLink size={18} />
                    <span>View Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProductModal

