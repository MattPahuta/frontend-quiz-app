function CategoryButton({icon, category}) {
  // ToDo: create generic button component
  // ToDo: create generic icon-category badge component
  // ToDo: use clsx to conditionally add class names for button?
  // - component for icon
  return (
    <button className="button">
      <img 
        src={icon} 
        alt="" 
        className="category"
      />
      {category}
    </button>
  )
}

export default CategoryButton;