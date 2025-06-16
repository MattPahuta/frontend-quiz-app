// import Quiz
import React from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Quiz from './components/Quiz';
import axios from 'axios';
// import data from './data/data.json';

function App() {
  // handle light/dark mode
  const [theme, setTheme] = React.useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  React.useEffect(() => {
    document.getElementsByTagName('body')[0].setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  }


  const [quizzes, setQuizzes] = React.useState([]);
  const [selectedQuiz, setSelectedQuiz] = React.useState(null);


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

  const handleQuizSelection = (quizTitle) => {
    console.log(`Selected quiz: ${quizTitle}`);
    // Here you can implement the logic to navigate to the quiz page or display the quiz
    const selectedQuiz = quizzes.find(quiz => quiz.title === quizTitle);
    setSelectedQuiz(selectedQuiz);
  }

  return (
    <>
      <Header currentTheme={theme} toggleTheme={toggleTheme} />
      {!selectedQuiz ? (
        <Welcome quizzes={quizzes} onQuizSelect={handleQuizSelection} />
      ) : (
        <Quiz quiz={selectedQuiz} />
      )}
    </>
  )
}

export default App
