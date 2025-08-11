import Button from "./Button";
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
              <Button
                key={quiz.title}
                onClick={() => onSelect(quiz.title)}
                className="button cat-button"
                ariaLabel={`Select ${quiz.title} category`}>
                <CategoryBadge
                  icon={quiz.icon}
                  category={quiz.title}
                />
              </Button>
            );
          })}
        </div>
    </div>
  );
}

export default Welcome