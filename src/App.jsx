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
  // const [userAnswers, setUserAnswers] = React.useState([]);
  const [score, setScore] = React.useState(0);
  const [view, setView] = React.useState('welcome');

  // let userScore = userAnswers.filter((answer, index) => {
  //   return answer === currentQuiz?.questions[index].answer;
  // }).length;

  // console.log(currentQuiz);
  // console.log(`User score: ${score} out of ${currentQuiz?.questions.length}`);

  const fetchData = async () => {
    try {
      const response = await axios.get('/data.json');
      // console.log(response.data);
      setQuizzes(response.data.quizzes);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  function startQuiz(quizTitle) {
    console.log(`Starting ${quizTitle} quiz.`)
    const selectedQuiz = quizzes.find(quiz => quiz.title === quizTitle);
    setCurrentQuiz(selectedQuiz);
    setCurrentQuestionIndex(0);
    // setUserAnswers([]);
    setScore(0);
    // setIsQuizActive(true);
  }

  function handleAnswerSubmit(selectedAnswer) {
    const correctAnswer = currentQuiz.questions[currentQuestionIndex].answer;
    console.log('Correct answer: ', correctAnswer);
    console.log('Current question index: ', currentQuestionIndex);
    if (selectedAnswer === correctAnswer) setScore(prevScore => prevScore + 1);
    if (currentQuestionIndex + 1 < currentQuiz.questions.length) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      // Quiz completed, show results
      setIsQuizActive(false);
    }

    // setUserAnswers(prevAnswers => [...prevAnswers, selectedAnswer]);
    // setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  }

  function resetQuiz() {
    setCurrentQuiz(null);
    setCurrentQuestionIndex(0);
    // setUserAnswers([]);
    setIsQuizActive(false);
  }

  return (
    <>
      <Header currentQuiz={currentQuiz} />
      {!isQuizActive ? (
        <Welcome quizzes={quizzes} onSelect={startQuiz} />
      ) : currentQuestionIndex < currentQuiz.questions.length ? (
        <Quiz
          quiz={currentQuiz.title}
          question={currentQuiz.questions[currentQuestionIndex]}
          questionIndex={currentQuestionIndex}
          totalQuestions={currentQuiz.questions.length}
          onAnswerSubmit={handleAnswerSubmit}
        />
      ) : (
        <Results
          quiz={currentQuiz}
          score={score}
          totalQuestions={currentQuiz.questions.length}
          onRestart={resetQuiz}
        />
      )}
      {/* {!isQuizActive && (
        <Welcome quizzes={quizzes} onSelect={startQuiz} />
      )} */}

    </>
  );
}

export default App;