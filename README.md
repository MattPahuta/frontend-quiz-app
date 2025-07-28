# Frontend Mentor - Frontend quiz app

This is a solution to the [Frontend quiz app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/frontend-quiz-app-BE7xkzXQnU). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Project Notes](#project-notes)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Select a quiz subject
- Select a single answer from each question from a choice of four
- See an error message when trying to submit an answer without making a selection
- See if they have made a correct or incorrect choice when they submit an answer
- Move on to the next question after seeing the question result
- See a completed state with the score after the final question
- Play again to choose another subject
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Navigate the entire app only using their keyboard
- **Bonus**: Change the app's theme between light and dark

### Screenshot

![](./project-ss-01.png)
![](./project-ss-02.png)
![](./project-ss-03.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


- More componentized approach to the CSS


- Include further accessibility enhancements 


Nothing groundbreaking with my CSS for this project. In fact, if I were to restart this project, I would likely use Tailwind for most of the styling as the design comp is fairly straightforward. But as it is currently, this project features a basic pattern that I'm following for most projects where I write the CSS from scratch: layers to help organize styles, heavy use of custom utility classes to improve reusability, and leveraging newer CSS standards like nesting and simplified media query syntax.

```css
@layer layout {
  body {
    padding-inline: var(--spacing-150);

    @media (width > 37.5rem) {
      padding-inline: var(--spacing-400);
    }
  }
  .wrapper {
    max-width: var(--wrapper-max-width, 1160px);
    margin-inline: auto;
    padding-block: var(--wrapper-padding-block, var(--spacing-200));

    @media (width > 37.5rem) {
      --wrapper-padding-block: 0;
    }
  }

  .grid-columns {
    display: grid;

    @media (width > 64rem) {
      grid-template-columns: 1fr 1fr;
      gap: var(--spacing-200);
    }
  }

  .header-content {
    --wrapper-padding-block: var(--spacing-100);
    min-height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media (width > 37.5rem) {
      --wrapper-padding-block: var(--spacing-250);
    }

    @media (width > 64rem) {
      --wrapper-padding-block: var(--spacing-500);
    }
  }
```

My core rendering logic with my App file started off quite a bit more convoluted than where I ended up. I'm happy with what I feel like is a pretty easy to understand flow and dependencies with a minimal amount of prop drilling.

```js
  return (
    <>
      <Header currentQuiz={currentQuiz} />
      <main>
      {view === 'welcome' && (
        <Welcome quizzes={quizzes} onSelect={startQuiz} />
      )}

      {view === 'quiz' && currentQuiz && (
        <Quiz
          quizTitle={currentQuiz.title}
          question={currentQuiz.questions[currentQuestionIndex]}
          questionIndex={currentQuestionIndex}
          totalQuestions={currentQuiz.questions.length}
          onAnswerSubmit={handleAnswerSubmit}
          isLastQuestion={
            currentQuestionIndex === currentQuiz.questions.length - 1}
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
      </main>
    </>
  );
```

```js

```
### Continued development

Strictly speaking, this app did not need to be developed with React. In fact, this is the final project within the Frontend Masters JavaScript fundamentals path. But I've really come to enjoy working with React and didn't want to pass up an opportunity to keep experimenting and practicing. This was an extremely fun build and a project I'll certainly come back to and build upon in the future.

### Useful resources

- [clsx utility](https://www.npmjs.com/package/clsx) - A handy utility for handling className strings conditionally. I've used it in several projects now and now it's a go-to resource for me. 
- [Frontend Mentor Learning Pahts](https://www.frontendmentor.io/learning-paths/) - As noted in the intro, this is a Frontend Mentor design. I can speak highly enough about the quality of Frontend Mentor and think their learning paths are some of the best, most thoughtfully developed roadmaps and learning materials. 

## Author

- Website - [Matt Pahuta](https://www.mattpahuta.com)
- Frontend Mentor - [@mattpahuta](https://www.frontendmentor.io/profile/MattPahuta)
- Bluesky - [@mattpahuta](https://bsky.app/profile/mattpahuta.bsky.social)
- LinkedIn - [Matt Pahuta](www.linkedin.com/in/mattpahuta)

## Acknowledgments

There is no way to heap enough praise on [Bob Ziroll](https://scrimba.com/@bobziroll) and [Josh Comeau](https://www.joshwcomeau.com/). When it comes to learning React and some of the trickier parts of web development, there are no people I turn to more frequently. 
