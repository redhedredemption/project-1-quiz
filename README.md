# SEBpardy! 👾


SEBpardy! is a browser-based trivia game that challenges players' knowledge of music and musicians. With a variety of questions spanning different genres and eras of music, players can test their expertise while having fun.

## Screenshot(s)

![SEBpardy! Screenshot](screenshot.png)

## Technologies Used

- **HTML**: HTML was used to structure the layout of the game interface, including elements such as the question container, answer buttons, and category selection buttons. Important HTML elements include `<div>`, `<button>`, and `<script>` tags to link external JavaScript files.

- **CSS**: CSS was employed to style the game interface, enhancing its visual appeal and user experience. Important CSS properties include `display`, `font-family`, `background-color`, `border-radius`, and `padding` to customize the appearance of various elements and create a cohesive design.

- **JavaScript**: JavaScript served as the backbone of the game, providing interactivity and functionality. Important JavaScript functions and methods include:
  - Event listeners: Used to handle user interactions such as clicking on category buttons, selecting answers, and progressing through the game.
  - Array methods (`forEach`, `filter`, `slice`): Utilized to manipulate and manage arrays containing questions and answers, enabling dynamic question selection and shuffling.
  - DOM manipulation: Employed to dynamically create and modify HTML elements, updating the game interface based on user actions and game progression.
  - Randomization: Implemented to shuffle arrays of questions, ensuring each game session presents questions in a different order for increased replayability.
  - Conditional statements: Used to control the flow of the game, determining actions based on user input and game state.

## Getting Started

To play SEBpardy!, simply follow [this link](https://redhedredemption.github.io/project-1-quiz/) to the deployed game. Once the game loads, click on a category button to select a category, then hit the "Start" button to begin. Answer the questions by selecting the correct option, and see how many you can answer correctly!

The game data is stored in a separate `questions.js` file to keep the codebase organized and maintainable. Having a larger array of questions allows players to enjoy multiple rounds with different questions, enhancing replayability and variety in each game session.
