"use client"

import { useRef, useEffect, useState } from "react"
import SectionButton from "../components/SectionButton"
import ProductCard from "../components/ProductCard"
import CategoryFilter from "../components/CategoryFilter"
import { MessageCircle } from "react-feather"

const Shop = ({ registerSection, onButtonHover, navigateTo }) => {
  const sectionRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState("all")

  useEffect(() => {
    if (sectionRef.current) {
      registerSection("shop", sectionRef.current)
    }
  }, [registerSection])

  const handleCustomSolution = () => {
    const message = "Hi, I'm interested in discussing a custom solution for my business."
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const products = [
    {
      id: 1,
      name: "Portfolio Website",
      category: "Websites",
      basePrice: 499,
      description: "Custom portfolio website with minimalist design",
      image: "/images/portfolio-website.jpg",
      link: "#",
    },
    {
      id: 2,
      name: "E-commerce Site",
      category: "Websites",
      basePrice: 999,
      description: "Full-featured online store with payment integration",
      image: "/images/ecommerce-website.jpg",
      link: "#",
    },
    {
      id: 3,
      name: "Brand Identity Package",
      category: "Designs",
      basePrice: 349,
      description: "Complete brand identity including logo and style guide",
      image: "/images/brand-identity.jpg",
      link: "#",
    },
    {
      id: 4,
      name: "UI/UX Design System",
      category: "Designs",
      basePrice: 599,
      description: "Comprehensive design system for digital products",
      image: "/images/design-system.jpg",
      link: "#",
    },
    {
      id: 5,
      name: "Minimal Desk Lamp",
      category: "Gadgets",
      price: 89,
      description: "Sleek, adjustable desk lamp with USB charging",
      image: "/images/desk-lamp.jpg",
    },
    {
      id: 6,
      name: "Wireless Charger",
      category: "Gadgets",
      price: 49,
      description: "Minimalist wireless charging pad for smartphones",
      image: "/images/wireless-charger.jpg",
    },
    {
      id: 7,
      name: "Minimal Typography Tee",
      category: "T-shirts",
      price: 29,
      description: "Premium cotton t-shirt with minimalist typography",
      image: "/images/typography-tee.jpg",
    },
    {
      id: 8,
      name: "Geometric Pattern Tee",
      category: "T-shirts",
      price: 32,
      description: "Soft cotton t-shirt featuring geometric patterns",
      image: "/images/geometric-tee.jpg",
    },
  ]

  const categories = [...new Set(products.map((product) => product.category))]

  const filteredProducts =
    activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory)

  return (
    <section ref={sectionRef} className="section shop-section" id="shop">
      <div className="section-content">
        <h2 className="section-title">Shop</h2>

        <p className="section-description">
          Browse our curated collection of products and services. Contact us via WhatsApp to complete your purchase.
        </p>

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          onHover={onButtonHover}
        />

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onHover={onButtonHover} />
          ))}
        </div>

        <div className="custom-solution-cta">
          <h3>Need a Custom Solution?</h3>
          <p>
            Don't see exactly what you're looking for? We can create custom solutions tailored to your specific needs.
          </p>
          <button
            className="custom-solution-button"
            onClick={handleCustomSolution}
            onMouseEnter={() => onButtonHover(true, "Custom Solution")}
            onMouseLeave={() => onButtonHover(false, "")}
          >
            <MessageCircle size={18} />
            <span>Need Custom Solution?</span>
          </button>
        </div>

        <div className="shop-note">
          <p>
            <strong>Note:</strong> All purchases are handled manually through WhatsApp. Click on any product to initiate
            a conversation with our team. We'll provide payment instructions and complete your order personally.
          </p>
        </div>

        <div className="button-group">
          <SectionButton onClick={() => navigateTo("contact")} onHover={onButtonHover} hoverText="Get in Touch">
            Contact Us
          </SectionButton>
        </div>
      </div>
    </section>
  )
}

export default Shop

