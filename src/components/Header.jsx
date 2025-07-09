import ThemeToggle from "./ThemeToggle";

function Header({ currentQuiz }) {
  return (
    <header>
      <div className="wrapper header-content">
        <div className="header-left">
          { currentQuiz && (
            <>
              <img src={currentQuiz.icon} alt='' className="header-icon" />
              <p>{currentQuiz.title}</p>
            </>
            )
          }
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header