import { useState } from "react";

function Quiz({quiz, question, questionIndex, totalQuestions, onAnswerSubmit}) {

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

  // ToDo: use clsx library to conditionally render correct/incorrect styles

  return (
    <div className="wrapper grid-columns">
      <div className="quiz-question-info">
        <h1 className="visually-hidden">{quiz} quiz</h1>
        <p className="accent-text">Question {questionIndex + 1} of {totalQuestions}</p>
        <h2 className="quiz-question">{question.question}</h2>
        <div className="quiz-progress-bar"></div>
      </div>
      <div className="selection-container multiple-choice-answers">
        {question.options.map((option) => (
          <button 
            key={option} 
            onClick={() => handleSelectedOption(option)} 
            className={`button option-button ${selectedOption === option ? 'selected' : ''}`}
          >
            <span className="option-letter">A</span>
            {option}
          </button>
        ))}
        <button
          className="button submit-option-button"
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