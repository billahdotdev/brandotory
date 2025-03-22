"use client"

import { useRef, useEffect, useState } from "react"
import SectionButton from "../components/SectionButton"
import { ExternalLink, MessageCircle, Award, Code, Briefcase, Coffee, GitHub, Linkedin } from "react-feather"
import { XIcon } from "../components/CustomIcons"

const About = ({ registerSection, onButtonHover, navigateTo }) => {
  const sectionRef = useRef(null)
  const [activeTab, setActiveTab] = useState("story")

  useEffect(() => {
    if (sectionRef.current) {
      registerSection("about", sectionRef.current)
    }
  }, [registerSection])

  const handleWhatsApp = () => {
    const message = "Hi, I'm interested in joining your team!"
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section ref={sectionRef} className="section about-section" id="about">
      <div className="section-content">
        <h2 className="section-title">About</h2>

        <div className="about-tabs">
          <button
            className={`about-tab ${activeTab === "story" ? "active" : ""}`}
            onClick={() => setActiveTab("story")}
            onMouseEnter={() => onButtonHover(true, "Our Story")}
            onMouseLeave={() => onButtonHover(false, "")}
          >
            Our Story
          </button>
          <button
            className={`about-tab ${activeTab === "founder" ? "active" : ""}`}
            onClick={() => setActiveTab("founder")}
            onMouseEnter={() => onButtonHover(true, "Meet the Founder")}
            onMouseLeave={() => onButtonHover(false, "")}
          >
            Founder
          </button>
          <button
            className={`about-tab ${activeTab === "values" ? "active" : ""}`}
            onClick={() => setActiveTab("values")}
            onMouseEnter={() => onButtonHover(true, "Our Values")}
            onMouseLeave={() => onButtonHover(false, "")}
          >
            Values
          </button>
        </div>

        <div className="about-content">
          {activeTab === "story" && (
            <div className="about-story">
              <p className="about-lead">
                Brandotory was born from a passion for creating digital experiences that truly resonate.
              </p>
              <p>
                Founded in 2018, we've evolved from a one-person operation into a creative studio that pushes the
                boundaries of digital design and development. Our journey has been defined by a commitment to
                minimalism, functionality, and purpose.
              </p>
              <p>
                We believe that the most powerful digital experiences are those that strip away the unnecessary and
                focus on what truly matters. This philosophy guides everything we do, from the websites we build to the
                brands we help shape.
              </p>
              <div className="about-milestones">
                <div className="milestone">
                  <div className="milestone-year">2018</div>
                  <div className="milestone-content">
                    <h4>The Beginning</h4>
                    <p>Brandotory was founded with a focus on minimal web design</p>
                  </div>
                </div>
                <div className="milestone">
                  <div className="milestone-year">2020</div>
                  <div className="milestone-content">
                    <h4>Expanding Services</h4>
                    <p>Added brand identity and digital strategy to our offerings</p>
                  </div>
                </div>
                <div className="milestone">
                  <div className="milestone-year">2022</div>
                  <div className="milestone-content">
                    <h4>Product Launch</h4>
                    <p>Introduced our shop with digital products and merchandise</p>
                  </div>
                </div>
                <div className="milestone">
                  <div className="milestone-year">2023</div>
                  <div className="milestone-content">
                    <h4>Going Global</h4>
                    <p>Expanded our client base to serve customers worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "founder" && (
            <div className="founder-profile">
              <div className="founder-header">
                <div className="founder-image">
                  <img src="/images/founder.jpg" alt="Masum Billah" />
                </div>
                <div className="founder-intro">
                  <h3>Masum Billah</h3>
                  <p className="founder-title">Web Developer & Brand Consultant</p>
                  <div className="founder-social">
                    <a
                      href="https://github.com/masumbillah"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="founder-social-icon"
                      onMouseEnter={() => onButtonHover(true, "GitHub")}
                      onMouseLeave={() => onButtonHover(false, "")}
                    >
                      <GitHub size={16} />
                    </a>
                    <a
                      href="https://linkedin.com/in/masumbillah"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="founder-social-icon"
                      onMouseEnter={() => onButtonHover(true, "LinkedIn")}
                      onMouseLeave={() => onButtonHover(false, "")}
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href="https://x.com/masumbillah"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="founder-social-icon"
                      onMouseEnter={() => onButtonHover(true, "X")}
                      onMouseLeave={() => onButtonHover(false, "")}
                    >
                      <XIcon size={16} />
                    </a>
                  </div>
                  <a
                    href="https://billah.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="founder-link"
                    onMouseEnter={() => onButtonHover(true, "Visit Website")}
                    onMouseLeave={() => onButtonHover(false, "")}
                  >
                    billah.dev <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div className="founder-bio">
                <p className="about-lead">
                  "I believe in creating digital experiences that are both beautiful and functional."
                </p>
                <p>
                  With over 8 years of experience in web development and brand strategy, Masum has helped dozens of
                  businesses establish their digital presence and build memorable brand identities.
                </p>
                <p>
                  His approach combines technical expertise with a keen eye for design, resulting in solutions that not
                  only look great but also deliver results. Masum's background in both development and branding gives
                  him a unique perspective that bridges the gap between aesthetics and functionality.
                </p>

                <div className="founder-skills">
                  <div className="skill-category">
                    <Code size={18} />
                    <h4>Development</h4>
                    <ul>
                      <li>React & Next.js</li>
                      <li>Node.js</li>
                      <li>Responsive Design</li>
                      <li>Performance Optimization</li>
                    </ul>
                  </div>
                  <div className="skill-category">
                    <Briefcase size={18} />
                    <h4>Brand Strategy</h4>
                    <ul>
                      <li>Identity Design</li>
                      <li>Brand Positioning</li>
                      <li>Content Strategy</li>
                      <li>Market Research</li>
                    </ul>
                  </div>
                  <div className="skill-category">
                    <Coffee size={18} />
                    <h4>Process</h4>
                    <ul>
                      <li>User-Centered Design</li>
                      <li>Agile Development</li>
                      <li>Collaborative Approach</li>
                      <li>Continuous Improvement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "values" && (
            <div className="about-values">
              <p className="about-lead">
                Our values define who we are and how we work. They guide every decision we make.
              </p>

              <div className="values-grid">
                <div className="value-card">
                  <div className="value-icon">
                    <Award size={24} />
                  </div>
                  <h3>Excellence</h3>
                  <p>
                    We strive for excellence in everything we do, from the smallest details to the biggest projects.
                  </p>
                </div>
                <div className="value-card">
                  <div className="value-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="16"></line>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                  </div>
                  <h3>Simplicity</h3>
                  <p>We believe in the power of simplicity. Less is more when it's thoughtfully executed.</p>
                </div>
                <div className="value-card">
                  <div className="value-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      <line x1="6" y1="1" x2="6" y2="4"></line>
                      <line x1="10" y1="1" x2="10" y2="4"></line>
                      <line x1="14" y1="1" x2="14" y2="4"></line>
                    </svg>
                  </div>
                  <h3>Creativity</h3>
                  <p>We approach each project with fresh eyes and innovative thinking to create unique solutions.</p>
                </div>
                <div className="value-card">
                  <div className="value-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3>Collaboration</h3>
                  <p>We believe the best results come from working closely with our clients as true partners.</p>
                </div>
              </div>

              <div className="team-cta">
                <h3>Want to be part of our journey?</h3>
                <p>
                  We're always looking for talented individuals who share our values and passion for creating
                  exceptional digital experiences.
                </p>
                <button
                  className="join-team-button"
                  onClick={handleWhatsApp}
                  onMouseEnter={() => onButtonHover(true, "Join Our Team")}
                  onMouseLeave={() => onButtonHover(false, "")}
                >
                  <MessageCircle size={18} />
                  <span>Want to Join Our Team?</span>
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="button-group">
          <SectionButton onClick={() => navigateTo("services")} onHover={onButtonHover} hoverText="View Services">
            Explore Services
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
    </section>
  )
}

export default About

