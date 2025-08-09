import { useState, useRef, useEffect } from 'react';
import Button from './Button';
import iconCorrect from '../assets/icon-correct.svg';
import iconIncorrect from '../assets/icon-incorrect.svg';
import { clsx } from 'clsx';

const letters = ['A', 'B', 'C', 'D'];

function Quiz({
  quizTitle,
  question,
  questionIndex,
  totalQuestions,
  onAnswerSubmit,
  isLastQuestion,
}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [answeredCount, setAnsweredCount] = useState(questionIndex);
  const progressPercentage = (answeredCount / totalQuestions) * 100;

  const questionRef = useRef(null);

  useEffect(() => {
    if (questionRef.current) {
      questionRef.current.focus();
    }
  }, [questionIndex])

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
    setAnsweredCount((prevCount) => prevCount + 1);
  }

  function handleNext() {
    setSelectedOption(null);
    setHasSubmitted(false);
    onAnswerSubmit(selectedOption);
  }

  return (
    <section className="wrapper grid-columns">
      <h1 className="visually-hidden">{quizTitle} quiz</h1>
      <div className="quiz-info quiz-question-info">
        <div>
          <p className="accent-text quiz-question-number">
            Question {questionIndex + 1} of {totalQuestions}
          </p>
          <h2 
            ref={questionRef}
            tabIndex="-1"
            style={{ outline: 'none'}}
            className="quiz-question"
          >
              {question.question}
          </h2>
        </div>
        <div className="progress-bar-wrapper">
          <div
            className="progress-bar"
            style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </div>
      <div className="selection-container multiple-choice-answers">
        {question.options.map((option, index) => {
          const isSelected = selectedOption === option;
          const isAnswer = option === question.answer;
          const optionBtnClassName = clsx('button option-button', {
            selected: isSelected,
            correct: hasSubmitted && isAnswer,
            incorrect: hasSubmitted && !isAnswer && isSelected,
          });

          return (
            <Button
              key={`${option}-${index}`}
              onClick={() => handleSelectedOption(option)}
              ariaDisabled={hasSubmitted ? 'true' : 'false'}
              className={optionBtnClassName}>
              <span className="option-letter">{letters[index]}</span>
              <span className="option-text">{option}</span>
              {hasSubmitted && isSelected && !isAnswer && (
                <img
                  src={iconIncorrect}
                  alt=""
                  className="icon icon-feedback"
                />
              )}
              {hasSubmitted && isAnswer && (
                <img
                  src={iconCorrect}
                  alt=""
                  className="icon icon-feedback"
                />
              )}
            </Button>
          );
        })}
      </div>

      <div className="quiz-action-container">
        <Button
          className="button btn-primary"
          onClick={hasSubmitted ? handleNext : handleSubmit}
          ariaDisabled={'false'}
        >
          {hasSubmitted
            ? isLastQuestion
              ? 'View Results'
              : 'Next Question'
            : 'Submit Answer'}
        </Button>
        {feedbackMessage && (
          <div
            className="feedback-message"
            role="alert"
            aria-live="polite">
            <img
              src={iconIncorrect}
              alt=""
              className="icon icon-feedback"
            />
            <p>{feedbackMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Quiz;
