/*----- constants -----*/
const questions = {
    Alpha: [
        {
            question: "Question 1 for Category Alpha",
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            correctAnswer: "Option 2"
        },
        {
            question: "Question 2 for Category Alpha",
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            correctAnswer: "Option 2"
        },
        {
            question: "Question 3 for Category Alpha",
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            correctAnswer: "Option 2"
        },
        {
            question: "Question 4 for Category Alpha",
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            correctAnswer: "Option 2"
        },
    ],
    Beta: [
        {
            question: "Question 1 for Category Beta",
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            correctAnswer: "Option 2"
        },
        {
            question: "Question 2 for Category Beta",
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            correctAnswer: "Option 2"
        },
        {
            question: "Question 3 for Category Beta",
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            correctAnswer: "Option 2"
        },
        {
            question: "Question 4 for Category Beta",
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            correctAnswer: "Option 2"
        },
    ],
    Gamma: [
        {
            question: "Question 1 for Category Gamma",
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            correctAnswer: "Option 2"
        },
        {
            question: "Question 2 for Category Gamma",
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            correctAnswer: "Option 2"
        },
        {
            question: "Question 3 for Category Gamma",
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            correctAnswer: "Option 2"
        },
        {
            question: "Question 4 for Category Gamma",
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            correctAnswer: "Option 2"
        },
    ],
    Delta: [
        {
            question: "Question 1 for Category Delta",
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            correctAnswer: "Option 2"
        },
        {
            question: "Question 2 for Category Delta",
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            correctAnswer: "Option 2"
        },
        {
            question: "Question 3 for Category Delta",
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            correctAnswer: "Option 2"
        },
        {
            question: "Question 4 for Category Delta",
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            correctAnswer: "Option 2"
        },
    ]
};

/*----- state variables -----*/
// Declare application-wide state variables
let gameData; // Object containing game state
let currentPlayer; // Variable to track current player
let currentQuestion; // Variable to track current question

/*----- cached elements  -----*/
const container = document.querySelector('.container');
const categoryElements = document.querySelectorAll('.category');
const questionTiles = document.querySelectorAll('.question-tile');

/*----- event listeners -----*/
// Register event listeners
function registerEventListeners() {
    // Event delegation for question selection
    document.querySelector('.categories').addEventListener('click', handleQuestionSelection);

    // Event delegation for answer submission
    document.querySelector('.question').addEventListener('submit', handleAnswerSubmission);
}

/*----- functions -----*/
// Initialize function to set up the game
function init() {
    gameData = {
        categories: Object.keys(questions), // Array to store category names
        players: [],    // Array to store player information
        // Other game state variables...
    };

    // Load categories and questions
    loadCategoriesAndQuestions();

    // Initialize other state variables...
}
// Function to render the game board with categories and question tiles
function render() {
    // Code to render the game board...
}

// Function to handle selecting a question
function handleQuestionSelection(event) {
    // Code to handle selecting a question...
}

// Function to handle submitting an answer
function handleAnswerSubmission(event) {
    // Code to handle submitting an answer...
}

// Initialize the game
init();

// Render the initial state to the DOM
render();

// Register event listeners
registerEventListeners();