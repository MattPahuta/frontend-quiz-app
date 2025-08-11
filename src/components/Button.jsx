function Button({ onClick, className, ariaDisabled, ariaLabel, children}) {
  return (
    <button type="button" className={className} onClick={onClick} aria-label={ariaLabel} aria-disabled={ariaDisabled}>
      {children}
    </button>
  )
}

export default Button;
