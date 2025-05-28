// ToDo: import Button component
// The glob option "as" has been deprecated in favour of "query". 
//    Please update `as: 'url'` to `query: '?url', import: 'default'`.
// Dynamically import svg icons
// Load all SVGs from src
// const icons = import.meta.glob("../assets/*.svg", { as: "url" });
const icons = import.meta.glob('../assets/images/*.svg', {
  query: '?url',
  import: 'default',
});


function Welcome({ quizzes, onQuizSelect }) {
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
  const resolveIconUrl = (fileName) => {
    const matchedEntry = Object.entries(icons).find(([key]) =>
      key.endsWith(fileName)
    );
    console.log(`Resolving icon path for: ${fileName}`);
    console.log('Matched entry:', matchedEntry);
    return matchedEntry ? matchedEntry[1] : null;
  };
  


  return (
    <div className="wrapper grid-columns welcome-grid">
      <div>
        <h1 className="heading-welcome">
          Welcome to the <span>Frontend Quiz!</span>
        </h1>
        <p className="accent-text">Pick a subject to get started.</p>
      </div>
      <div>
        <div className="quiz-categories">
            {quizzes.map((quiz, index) => {
              const iconUrl = resolveIconUrl(quiz.icon);
              console.log(`Icon URL for ${quiz.title}:`, iconUrl);
              return (
                <button 
                  key={index} 
                  className="button cat-button" 
                  onClick={() => onQuizSelect(quiz.title)}
                >
                  {iconUrl && (
                    <img 
                      src={iconUrl} 
                      alt="" 
                      className={`icon category`} 
                      loading="lazy"
                    />
                  )}        
                  {quiz.title}
                </button>
              )
            })}
          </div>
      </div>
    </div>
  );
}

export default Welcome