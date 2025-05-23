// import Quiz
import React from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import axios from 'axios';
// import data from './data/data.json';

function App() {
  const [quizzes, setQuizzes] = React.useState([]);


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


  return (
    <>
      <Header />
      <Welcome />
      {/* <ul>
        {quizData.map((quiz, index) => (
          <li key={index}>{quiz.title}</li>
        ))}
      </ul> */}
    </>
  )
}

export default App
