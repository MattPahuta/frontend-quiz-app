function CategoryBadge({icon, category}) {

  // ToDo: use clsx to conditionally add class names?

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