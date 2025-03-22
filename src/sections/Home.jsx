"use client"

import { useRef, useEffect } from "react"
import SectionButton from "../components/SectionButton"
import { ArrowDownIcon } from "../components/CustomIcons"
import BrandLogo from "../components/BrandLogo"

const Home = ({ registerSection, onButtonHover, navigateTo }) => {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (sectionRef.current) {
      registerSection("home", sectionRef.current)
    }
  }, [registerSection])

  return (
    <section ref={sectionRef} className="section home-section" id="home">
      <div className="home-logo-top-left">
        <BrandLogo size="small" onHover={onButtonHover} />
      </div>

      <div className="section-content">
        <h1 className="section-title">
          <span className="title-line">Minimal.</span>
          <span className="title-line">Creative.</span>
          <span className="title-line">Unique.</span>
        </h1>

        <p className="section-description">
          A single-page experience with smooth transitions, unique navigation, and a curated collection of products and
          services.
        </p>

        <div className="button-group">
          <SectionButton onClick={() => navigateTo("services")} onHover={onButtonHover} hoverText="View Services">
            Discover More
          </SectionButton>

          <SectionButton
            onClick={() => navigateTo("shop")}
            onHover={onButtonHover}
            variant="secondary"
            hoverText="Browse Shop"
          >
            View Shop
          </SectionButton>
        </div>
      </div>

      <div className="scroll-indicator" onClick={() => navigateTo("about")}>
        <div className="scroll-text">Scroll Down</div>
        <ArrowDownIcon size={24} />
      </div>
    </section>
  )
}

export default Home

