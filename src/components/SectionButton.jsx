"use client"

const SectionButton = ({ onClick, onHover, children, variant = "primary", hoverText = "" }) => {
  return (
    <button
      className={`section-button ${variant}`}
      onClick={onClick}
      onMouseEnter={() => onHover(true, hoverText || children)}
      onMouseLeave={() => onHover(false, "")}
    >
      {children}
    </button>
  )
}

export default SectionButton

