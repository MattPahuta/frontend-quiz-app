import CategoryBadge from "./CategoryBadge";

function Results({ quiz, score, totalQuestions, onRestart}) {
  
  // ToDo: rename 'submit-option-button' to 'button-primary'

  return (
    <div className="wrapper grid-columns results-grid">
      <div className="quiz-info results-heading">
        <h1>Quiz completed</h1>
        <p>You scored...</p>
      </div>
      <div className="quiz-result">
        <CategoryBadge 
          icon={quiz.icon}
          category={quiz.title}
        />
        <div className="score-summary">
          <p className="final-score">
            <strong>{score}</strong> out of {totalQuestions}
          </p>
        </div>
      </div>
      <div className="quiz-action-container">
        <button
          className="button submit-option-button"
          onClick={onRestart}>
          Play Again
        </button>
      </div>
    </div>
  );
}

export default Results;