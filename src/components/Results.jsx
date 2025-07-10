function Results({ quiz, score, totalQuestions, onRestart}) {

  // props: quiz title (or category badge), score, total questions, onRestart function
  // ToDo: rename 'submit-option-button' to 'button-primary'

  return (
    <div className="wrapper grid-columns">
      <div className="quiz-info">
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
      <button
        className="button submit-option-button"
        onClick={onRestart}>
        Play Again
      </button>
    </div>
  );
}

export default Results;