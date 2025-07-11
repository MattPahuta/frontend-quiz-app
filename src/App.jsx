// import Quiz
import React from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Quiz from './components/Quiz';
import Results from './components/Results';
import axios from 'axios';

function App() {
  const [quizzes, setQuizzes] = React.useState([]);
  const [currentQuiz, setCurrentQuiz] = React.useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(null);
  const [score, setScore] = React.useState(0);
  const [view, setView] = React.useState('welcome');

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
    setScore(0);
    setView('quiz');
  }

  function handleAnswerSubmit(selectedAnswer) {
    const correctAnswer = currentQuiz.questions[currentQuestionIndex].answer;
    console.log('Correct answer: ', correctAnswer);
    console.log('Current question index: ', currentQuestionIndex);
    if (selectedAnswer === correctAnswer) setScore(prevScore => prevScore + 1);

    if (currentQuestionIndex + 1 < currentQuiz.questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setView('results');
      console.log(`Quiz completed. Your score: ${score} out of ${currentQuiz.questions.length}`);
    }

  }

  function resetQuiz() {
    setCurrentQuiz(null);
    setCurrentQuestionIndex(0);
    setScore(0);
    setView('welcome');
  }

  return (
    <>
      <Header currentQuiz={currentQuiz} />

      {view === 'welcome' && (
        <Welcome quizzes={quizzes} onSelect={startQuiz} />
      )}

      {view === 'quiz' && currentQuiz && (
        <Quiz
          quiz={currentQuiz.title}
          question={currentQuiz.questions[currentQuestionIndex]}
          questionIndex={currentQuestionIndex}
          totalQuestions={currentQuiz.questions.length}
          onAnswerSubmit={handleAnswerSubmit}
          isLastQuestion={currentQuestionIndex === currentQuiz.questions.length - 1}
        />
      )}

      {view === 'results' && currentQuiz && (
        <Results
          quiz={currentQuiz}
          score={score}
          totalQuestions={currentQuiz.questions.length}
          onRestart={resetQuiz}
        />
      )}
    </>
  );
}

export default App;