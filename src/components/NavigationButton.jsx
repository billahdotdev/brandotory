"use client"

const NavigationButton = ({ onClick, active, onHover, label }) => {
  return (
    <button
      className={`nav-button ${active ? "active" : ""}`}
      onClick={onClick}
      onMouseEnter={() => onHover(true, label)}
      onMouseLeave={() => onHover(false, "")}
    >
      <span className="nav-button-text">{label}</span>
      <span className="nav-button-indicator"></span>
    </button>
  )
}

export default NavigationButton

