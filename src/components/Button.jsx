function Button({ onClick, className, isDisabled, ariaLabel, children}) {
  return (
    <button 
      type="button" 
      className={className} 
      onClick={onClick} 
      aria-label={ariaLabel} 
      disabled={isDisabled} 
    >
      {children}
    </button>
  )
}

export default Button;
