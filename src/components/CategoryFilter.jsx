"use client"

const CategoryFilter = ({ categories, activeCategory, setActiveCategory, onHover }) => {
  return (
    <div className="category-filter">
      <button
        className={`category-button ${activeCategory === "all" ? "active" : ""}`}
        onClick={() => setActiveCategory("all")}
        onMouseEnter={() => onHover(true, "All Products")}
        onMouseLeave={() => onHover(false, "")}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category}
          className={`category-button ${activeCategory === category ? "active" : ""}`}
          onClick={() => setActiveCategory(category)}
          onMouseEnter={() => onHover(true, category)}
          onMouseLeave={() => onHover(false, "")}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter

