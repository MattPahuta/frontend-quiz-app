function Results({ quiz, score, totalQuestions, onRestart}) {

  // props: quiz title (or category badge), score, total questions, onRestart function
  // ToDo: rename 'submit-option-button' to 'button-primary'

  return (
    <div className="wrapper grid-columns results-grid">
      <div className="quiz-info results-heading">
        <h1>Quiz completed</h1>
        <p>You scored...</p>
      </div>
      <div className="quiz-result">
        <div className="category-badge-wrapper">
          <img
            src={quiz.icon}
            alt=""
            className={`icon cat-${quiz.title.toLowerCase()}`}
          />
          <p>{quiz.title}</p>
        </div>
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