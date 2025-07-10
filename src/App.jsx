// import Quiz
import React from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Quiz from './components/Quiz';
import Results from './components/Results';
import axios from 'axios';

function App() {
  const [isQuizActive, setIsQuizActive] = React.useState(false);
  const [quizzes, setQuizzes] = React.useState([]);
  const [currentQuiz, setCurrentQuiz] = React.useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(null);
  const [userAnswers, setUserAnswers] = React.useState([]);

  let userScore = userAnswers.filter((answer, index) => {
    return answer === currentQuiz?.questions[index].answer;
  }).length;

  console.log(currentQuiz);
  console.log(`User score: ${userScore} out of ${currentQuiz?.questions.length}`);

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
                quiz={currentQuiz}
                score={userScore}
                totalQuestions={currentQuiz.questions.length}
                onRestart={resetQuiz}
              />
      }
    </>
  )
}

export default App;