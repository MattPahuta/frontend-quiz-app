
function Quiz({quiz}) {

  console.log(quiz)

  return (
    <div className="wrapper grid-columns">
      <h1 className="visually-hidden">{quiz.title} quiz</h1>
      <div>

      </div>
      <div className="info">
        <p className="accent">Question 6 of 10</p>
        <p className="quiz-question"></p>
        <div className="quiz-progress-bar"></div>
      </div>
      <div className="selection-container">
        
      </div>
    </div>
  )
}

export default Quiz;