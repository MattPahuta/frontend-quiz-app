// ToDo: import Button component

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
                <img 
                  src={quiz.icon}
                  alt=""
                  className={`icon cat-${quiz.title.toLowerCase()}`}
                  loading="lazy"
                />
                {quiz.title}
              </button>
            )
          })}
        </div>
    </div>
  );
}

export default Welcome