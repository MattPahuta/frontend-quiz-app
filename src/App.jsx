// import Quiz
import React from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Quiz from './components/Quiz';
import Results from './components/Results';
import axios from 'axios';
// import data from './data/data.json';

function App() {
  const [isQuizActive, setIsQuizActive] = React.useState(false);
  const [quizzes, setQuizzes] = React.useState([]);
  // legacy state - selectedQuiz replaced with currentQuiz
  // const [selectedQuiz, setSelectedQuiz] = React.useState(null);
  const [currentQuiz, setCurrentQuiz] = React.useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(null);
  const [userAnswers, setUserAnswers] = React.useState([]);

  console.log(currentQuiz)

  const fetchData = async () => {
    try {
      const response = await axios.get('/data.json');
      console.log(response.data);
      setQuizzes(response.data.quizzes);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  function startQuiz(selectedTitle) {
    console.log(`Starting ${selectedTitle} quiz.`)
    const quiz = quizzes.find(quiz => quiz.title === selectedTitle);
    setCurrentQuiz(quiz);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setIsQuizActive(true);
  }

  function handleAnswerSubmit(selected) {
    setUserAnswers(prevAnswers => [...prevAnswers, selected]);
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  }

  function resetQuiz() {
    setCurrentQuiz(null);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setIsQuizActive(false);
  }

  // return (
  //   <>
  //     <Header />
  //     {!selectedQuiz ? (
  //       <Welcome quizzes={quizzes} onQuizSelect={handleQuizSelection} />
  //     ) : (
  //       <Quiz quiz={selectedQuiz} />
  //     )}
  //   </>
  // )

  return (
    <>
      <Header currentQuiz={currentQuiz} />
      {
        !isQuizActive
          ? <Welcome quizzes={quizzes} onSelect={startQuiz} />
          : currentQuestionIndex < currentQuiz.questions.length
            ? <Quiz
                quiz={currentQuiz.title}
                question={currentQuiz.questions[currentQuestionIndex]}
                questionIndex={currentQuestionIndex}
                totalQuestions={currentQuiz.questions.length}
                onAnswerSubmit={handleAnswerSubmit}
              />
            : <Results 
                quiz={currentQuiz.title}
                answers={userAnswers}
                questions={currentQuiz.questions}
                onRestart={resetQuiz}
              />
      }
    </>
  )
}

export default App
