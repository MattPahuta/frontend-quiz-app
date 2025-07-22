function CategoryBadge({icon, category}) {

  return (
    <div className="category-badge">
      <img 
        src={icon} 
        alt="" 
        className={`icon cat-${category.toLowerCase()}`}
        loading="lazy"
      />
      <span>{category}</span>
    </div>
  )
}

export default CategoryBadge;