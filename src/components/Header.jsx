import ThemeToggle from "./ThemeToggle";
import CategoryBadge from "./CategoryBadge";

function Header({ currentQuiz }) {
  return (
    <header>
      <div className="wrapper header-content">
        {currentQuiz && (
          <CategoryBadge 
            icon={currentQuiz.icon} 
            category={currentQuiz.title}
          />
        )}
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header