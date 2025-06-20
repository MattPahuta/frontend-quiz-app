// ToDo: import Button component


function Welcome({ quizzes, startQuiz }) {
  // Helper function to resolve icon paths

  // function resolveIconUrl(relativePath) {
  //   const filePath = relativePath.split('/').pop(); // Get the file name
  //   console.log('Resolving icon path for:', filePath);
  //   const matchedEntry = Object.entries(icons).find(([key]) =>
  //     key.endsWith(filePath)
  //   );
  //   console.log('Matched entry:', matchedEntry);
  //   return matchedEntry ? matchedEntry[1] : null; // Return the URL if found
  // }
 
  return (
    <div className="wrapper grid-columns">
      <div className="info">
        <h1 className="heading-welcome">
          Welcome to the <span>Frontend Quiz!</span>
        </h1>
        <p className="accent-text">Pick a subject to get started.</p>
      </div>

        <div className="selection-container categories">
            {quizzes.map((quiz) => {
              return (
                <button 
                  key={quiz.title} 
                  className="button cat-button" 
                  onClick={() => startQuiz(quiz.title)}
                >
                  <img 
                    src={quiz.icon}
                    alt=""
                    className={`icon cat-${quiz.title.toLowerCase()}`}
                    loading="lazy"
                  />
                  {quiz.title}
                </button>
              )
            })}
          </div>

    </div>
  );
}

export default Welcome