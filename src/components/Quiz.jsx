import { useState } from "react";
import iconCorrect from "../assets/icon-correct.svg";
import iconIncorrect from "../assets/icon-incorrect.svg";

const letters = ['A', 'B', 'C', 'D'];

function Quiz({quiz, question, questionIndex, totalQuestions, onAnswerSubmit}) {

  const [selectedOption, setSelectedOption] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const progressPercentage = ((questionIndex) / totalQuestions) * 100;
  // const isCorrect = selectedOption === question.answer;
  // console.log(`Correct! ${isCorrect} - Selected: ${selectedOption}, Answer: ${question.answer}`);
  // ToDo: use isCorrect to conditionally render styles, messages, accessibility features
  // Call in handleSubmit
  // console.log(question.question, questionIndex, totalQuestions);

  function handleSelectedOption(option) {
    if (!hasSubmitted) {
      setSelectedOption(option);
      setFeedbackMessage('');
    } 
  }

  function handleSubmit() {
    if (selectedOption === null) {
      setFeedbackMessage('Please select an answer');
      return;
    }
    setHasSubmitted(true);
  }
  
  function handleNext() {
    onAnswerSubmit(selectedOption);
    setSelectedOption(null);
    setHasSubmitted(false);
  }

  // ToDo: use clsx library to conditionally render correct/incorrect styles
  // - button styles for incorrect/correct states
  // - remove hover and focus styles of option buttons after submit
  //    -- pointer-events: auto or none
  // ToDo: Add accessibility features
  // - aria-labels for buttons
  // - annouce correct/incorrect answers

  return (
    <section className="wrapper grid-columns">
      <h1 className="visually-hidden">{quiz} quiz</h1>
      <div className="quiz-info quiz-question-info">
        <div>
          {/* ToDo: add aria announcement for current question */}
          <p className="accent-text quiz-question-number">Question {questionIndex + 1} of {totalQuestions}</p>
          <h2 className="quiz-question">{question.question}</h2>
        </div>
        <div className="progress-bar-wrapper">
          <div 
            className="progress-bar"
            style={{ width: `${progressPercentage}%` }}
          >
          </div>
        </div>
      </div>
      <div className="selection-container multiple-choice-answers">
        {question.options.map((option, index) => {
          const isSelected = selectedOption === option;
          const isAnswer = option === question.answer;
          // ToDo: use clsx library to handle status class, pointer styles
          let status = '';
          if (hasSubmitted) {
            if (isAnswer) {
              status = 'correct';
            } else if (isSelected) {
              status = 'incorrect';
            }
          }

          // Testing/temp only - only handles hover effect, not focus
          const pointerStyles = hasSubmitted ? "none" : "auto";

          return (
            <button 
              key={`${option}-${index}`} 
              onClick={() => handleSelectedOption(option)} 
              className={`button option-button ${isSelected ? 'selected' : ''} ${status}`}
              style={{pointerEvents: pointerStyles}}
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
      </div>

      <div className="quiz-action-container">
        <button
          className="button submit-option-button"
          onClick={hasSubmitted ? handleNext : handleSubmit}
        >
          {hasSubmitted ? "Next Question" : "Submit Answer"}
        </button>

        {feedbackMessage && (
          <div className="feedback-message" role="alert" aria-live="polite">
            <img src={iconIncorrect} alt="" className="icon icon-feedback" />
            <p>{feedbackMessage}</p>
          </div>
        )}

      </div>
    </section>
  );
}

export default Quiz;