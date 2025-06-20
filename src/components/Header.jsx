// import { useTheme } from '../ThemeContext';
import ThemeToggle from "./ThemeToggle";

// ToDo: add default prop? null?
function Header({ currentQuiz }) {

  // const { theme } = useTheme();

  return (
    <header>
      <div className="wrapper header-content">
        {/* if a quiz started/quiz category recieved, display it */}
        <div className="header-left">
          {/* Testing only, replace with && condition */}
          { currentQuiz ? (
            <>
              <img src={currentQuiz.icon} alt='' className="header-icon" />
              <p>{currentQuiz.title}</p>
            </>
          ) : (
            // Testing only
            <p>Frontend Quiz App</p>
          )}
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header