// ToDo: import Button component
// - import data to render Button for each available subject
import htmlIcon from '../assets/icon-html.svg';
import cssIcon from '../assets/icon-css.svg';
import jsIcon from '../assets/icon-js.svg';
import a11yIcon from '../assets/icon-accessibility.svg';

function Welcome({ quizzes, onQuizSelect }) {
  return (
      <div className="wrapper grid-columns welcome-grid">
        <div>
          <h1 className="heading-welcome">
            Welcome to the <span>Frontend Quiz!</span>
          </h1>
          <p className="accent-text">Pick a subject to get started.</p>
        </div>
        <div>
          <form className="category-form">
            {/* ToDo: map over data to generate buttons */}
            {quizzes.map((quiz, index) => (
              <button 
                key={index} 
                className="button cat-button" 
                onClick={() => onQuizSelect(quiz.title)}
              >
                {/* <img src={quiz.icon} alt="" className={`icon category cat-${quiz.category.toLowerCase()}`} /> */}
                {quiz.title}
              </button>
            ))}
            {/* Example buttons, can be removed once data is mapped */}

            {/* <button className="button cat-button">
              <img src={htmlIcon} alt="" className="icon category cat-html" />
              HTML
            </button>
            <button className="button cat-button">
              <img src={cssIcon} alt="" className="icon category cat-css" />
              CSS
            </button>
            <button className="button cat-button">
              <img src={jsIcon} alt="" className="icon category cat-js" />
              JavaScript
            </button>
            <button className="button cat-button">
              <img src={a11yIcon} alt="" className="icon category cat-a11y" />
              Accessibility
            </button> */}
          </form>
        </div>
      </div>
  );
}

export default Welcome