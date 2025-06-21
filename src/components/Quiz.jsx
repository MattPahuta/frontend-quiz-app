import { useState } from "react";

function Quiz({question, questionIndex, totalQuestions, onAnswerSubmit}) {

  const [selectedOption, setSelectedOption] = useState(null);

  console.log(question.question, questionIndex, totalQuestions);

  function handleSelectedOption(option) {
    setSelectedOption(option)
  }

  function handleSubmit() {
    if (selectedOption === null) return;
    onAnswerSubmit(selectedOption);
    setSelectedOption(null); // reset for next questions/answer
  }

  /* 
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
  */

  return (
    <div className="wrapper grid-columns">
      <div className="info">
        <h1 className="visually-hidden"> frontend quiz</h1>
        <p className="accent-text">Question {questionIndex + 1} of {totalQuestions}</p>
        <p className="quiz-question">{question.question}</p>
        <div className="quiz-progress-bar"></div>
      </div>
      <div className="selection-container multiple-choice-answers">
        {question.options.map((option) => (
          <button 
            key={option} 
            onClick={() => handleSelectedOption(option)} 
            className="button option-btn"
          >
            {option}
          </button>
        ))}
        <button
          className="button submit-option-btn"
          onClick={handleSubmit}
          disabled={selectedOption === null}
        >
          Submit Answer
        </button>
      </div>
    </div>
  );
}

export default Quiz;