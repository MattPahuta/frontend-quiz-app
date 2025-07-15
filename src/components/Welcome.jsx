// ToDo: import Button component
import CategoryBadge from "./CategoryBadge";

function Welcome({ quizzes, onSelect }) {
  return (
    <div className="wrapper grid-columns">
      <div className="quiz-info">
        <h1 className="heading-welcome">
          Welcome to the <span>Frontend Quiz!</span>
        </h1>
        <p className="accent-text">Pick a subject to get started.</p>
      </div>
      <div className="selection-container categories">
          {quizzes.map((quiz) => {
            return (
              <button 
                key={quiz.title} 
                className="button cat-button" 
                onClick={() => onSelect(quiz.title)}
              >
                <CategoryBadge 
                  icon={quiz.icon} 
                  category={quiz.title}
                />
              </button>
            )
          })}
        </div>
    </div>
  );
}

export default Welcome