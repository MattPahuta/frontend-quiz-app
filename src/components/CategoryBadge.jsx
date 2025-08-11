function CategoryBadge({icon, category}) {

  return (
    <span className="category-badge">
      <img 
        src={icon} 
        alt="" 
        className={`icon cat-${category.toLowerCase()}`}
        loading="lazy"
      />
      <span aria-hidden="true">{category}</span>
    </span>
  )
}

export default CategoryBadge;