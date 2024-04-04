/* Constants */
const NEXT_CATEGORIES = {
  music: "musicians",
  musicians: null, /* ======================= add additional categories ===============*/
};


// Number of questions per round
const numQuestions = 4;

const numCategories = 2;

// Total Number of Questions
const totalQuestions = numQuestions * numCategories;

// Select elements from the DOM
const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const categoryButtons = document.querySelectorAll(".category-button");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

// Initialize variables for tracking game state
let shuffledQuestions, currentQuestionIndex, correctAnswersCount, selectedCategory;

// Set first category

startGame ();

// Add event listeners to start and next buttons
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", handleNext);


function handleNext() {
  // if (nextButton.innerText !== "Next") {
    
  // }
  if (currentQuestionIndex === shuffledQuestions.length - 1) { //Checking for last question within a category
    selectedCategory = NEXT_CATEGORIES[selectedCategory]; // Returns the value of the next category
    // Check if there is no next category:
    if (selectedCategory === null) {
      currentQuestionIndex++; // Move to the next question
      showResult();
    } else {
      setQuestions();
    }
    setNextQuestion(); // Set up the next question
  } else {
    currentQuestionIndex++; // Move to the next question
    setNextQuestion();
  } 
  styleCategoryBtns();
}

function styleCategoryBtns() {
  categoryButtons.forEach(function(btn) {
    const btnText = btn.innerText.toLowerCase();
    if (btnText === selectedCategory) {
      btn.classList.add("active-category");
    } else {
      btn.classList.remove("active-category");
    }
  });
  
}

function setQuestions() {
  shuffledQuestions = shuffle(allQuestions.filter(question => question.category === selectedCategory)); // Shuffle questions of the selected category
  shuffledQuestions = selectQuestionsSubset(shuffledQuestions, numQuestions); // Select a subset of questions for the round
  currentQuestionIndex = 0; // Initialize current question index
}

// Function to start the game
function startGame() {
  selectedCategory = "music";
  startButton.classList.add("hide"); // Hide the start button
  questionContainerElement.classList.remove("hide"); // Show the question container
  setQuestions();
  setNextQuestion(); // Set up the first question
  styleCategoryBtns();
  correctAnswersCount = 0; // Initialize correct answers count
}

// Function to shuffle an array
function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex); // Generate a random index
    currentIndex -= 1; // Decrement index
    temporaryValue = array[currentIndex]; // Swap elements
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array; // Return the shuffled array
}

// Function to select a subset of questions
function selectQuestionsSubset(array, num) {
  return array.slice(0, num); // Return a subset of the array
}

// Function to set up the next question
function setNextQuestion() {
  resetState(); // Reset the state for the next question
  if (currentQuestionIndex < shuffledQuestions.length) { // Check if there are more questions
    showQuestion(shuffledQuestions[currentQuestionIndex]); // Show the next question
  } else {
    showResult(); // Show the result if all questions have been answered
  }
}

// Function to display a question
function showQuestion(question) {
  questionElement.innerText = question.question; // Display the question text
  question.answers.forEach(answer => { // Iterate through answers
    const button = document.createElement("button"); // Create button element
    button.innerText = answer.text; // Set button text to answer text
    button.classList.add("button"); // Add button class
    if (answer.correct) { // Check if the answer is correct
      button.dataset.correct = answer.correct; // Set data attribute for correct answer
    }
    button.addEventListener("click", selectAnswer); // Add event listener to button
    answerButtonsElement.appendChild(button); // Append button to answer buttons container
  });
}

// Function to reset the game state
function resetState() {
  nextButton.classList.add("hide"); // Hide the next button
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild); // Remove all child nodes from answer buttons container
  }
  clearStatusClass(document.body); // Clear status classes from the body
}

// Function to handle answer selection
function selectAnswer(e) {
  const selectedButton = e.target; // Get the selected button
  const correct = selectedButton.dataset.correct === "true"; // Check if the selected answer is correct
  setStatusClass(selectedButton, correct); // Set status class for the selected answer
  if (correct) {
    correctAnswersCount++; // Increment correct answers count
  }
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct === "true"); // Set status classes for all answer buttons
  });
  nextButton.classList.remove("hide");
}

// Function to display the result
function showResult() {
  startButton.classList.remove("hide"); // Show the start button
  const resultMessage = `You answered ${correctAnswersCount} out of ${totalQuestions} questions correctly.`; // Generate result message
  if (correctAnswersCount / totalQuestions >= 0.6) { // Check if the player wins
    startButton.innerText = `You win! ${resultMessage} Restart`; // Display win message
  } else {
    startButton.innerText = `You lose! ${resultMessage} Restart`; // Display lose message
  }
}

// Function to set status class for an element
function setStatusClass(element, correct) {
  clearStatusClass(element); // Clear existing status classes
  if (correct) {
    element.classList.add("correct"); // Add correct class if the answer is correct
  } else {
    element.classList.add("wrong"); // Add wrong class if the answer is wrong
  }
}

// Function to clear status classes from an element
function clearStatusClass(element) {
  element.classList.remove("correct"); // Remove correct class
  element.classList.remove("wrong"); // Remove wrong class
}