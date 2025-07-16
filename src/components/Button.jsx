function Button({ onClick, className, ariaDisabled, children}) {
  return (
    <button className={className} onClick={onClick} aria-disabled={ariaDisabled}>
      {children}
    </button>
  )
}

export default Button;