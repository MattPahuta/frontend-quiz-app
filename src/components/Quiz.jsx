import { useState } from "react";
import iconCorrect from "../assets/icon-correct.svg";
import iconIncorrect from "../assets/icon-incorrect.svg";

const letters = ['A', 'B', 'C', 'D'];

function Quiz({quiz, question, questionIndex, totalQuestions, onAnswerSubmit}) {

  const [selectedOption, setSelectedOption] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const isCorrect = selectedOption === question.answer;
  console.log(question.question, questionIndex, totalQuestions);

  function handleSelectedOption(option) {
    if (!hasSubmitted) setSelectedOption(option);
  }

  function handleSubmit() {
    if (selectedOption === null) return;
    setHasSubmitted(true);
  }
  
  function handleNext() {
    onAnswerSubmit(selectedOption);
    setSelectedOption(null);
    setHasSubmitted(false);
  }

  // ToDo: use clsx library to conditionally render correct/incorrect styles
  // - button styles for incorrect/correct states

  return (
    <section className="wrapper grid-columns">
      <div className="quiz-question-info">
        <h1 className="visually-hidden">{quiz} quiz</h1>
        <p className="accent-text">Question {questionIndex + 1} of {totalQuestions}</p>
        <h2 className="quiz-question">{question.question}</h2>
        <div className="quiz-progress-bar"></div>
      </div>
      <div className="selection-container multiple-choice-answers">
        {question.options.map((option, index) => {
          const isSelected = selectedOption === option;
          const isAnswer = option === question.answer;
          // const isCorrect = selectedOption === question.answer;
          // console.log(`isCorrect: ${isCorrect}`)
          let status = '';
          if (hasSubmitted) {
            if (isAnswer) {
              status = 'correct';
            } else if (isSelected) {
              status = 'incorrect';
            }

          }

          return (
            <button 
              key={`${option}-${index}`} 
              onClick={() => handleSelectedOption(option)} 
              className={`button option-button ${isSelected ? 'selected' : ''} ${status}`}
            >
              <span className="option-letter">{letters[index]}</span>
              <span className="option-text">{option}</span>

              {/* correct/incorrect icon */}
              {hasSubmitted && isSelected && !isAnswer && (
                <img src={iconIncorrect} alt="" className="icon icon-feedback" />
              )}
              {hasSubmitted && isAnswer && (
                <img src={iconCorrect} alt="" className="icon icon-feedback" />
              )}
            </button>
          );
        })}
        
        <div className="quiz-submit">
          <button
            className="button submit-option-button"
            onClick={hasSubmitted ? handleNext : handleSubmit}
            // ToDo: add validation instead of disabling button
            disabled={selectedOption === null}
          >
            {hasSubmitted ? "Next Question" : "Submit Answer"}
          </button>

        </div>

      </div>
    </section>
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