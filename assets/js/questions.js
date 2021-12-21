// Page 1 - Start Quiz


// Question 1
// Commonly used data types DO NOT include:
// 1. Strings
// 2. Booleans
// 3. Alerts
// 4. Numbers


// Question 2
// The condition in an if / else statement is enclosed with _________.
// 1. Quotes
// 2. Curly Brackets
// 3. Parenthesis
// 4. Square Brackets


// Question 3
// Arrays in JavaScript can be used to store _______.
// 1. Numbers and Strings
// 2. Other arrays
// 3. Booleans
// 4. All of the above


// Question 4
// String values must be enclosed within ______ when bring assigned to variables.
// 1. Commas
// 2. Curly Brackets
// 3. Quotes
// 4. Parenthesis


// Question 5
// A very useful tool used during development and debugging for printing content to the debugger is:
// 1. JavaScript
// 2. Terminal/Bash
// 3. For Loops
// 4. console.log


// technique from https://www.youtube.com/watch?v=WUBhpSRS_fk&t=0s

let questions = [
  {
    numb: 1,
    question: "Commonly used data types DO NOT include:",
    answer: "Alerts",
    options: [
        "Strings",
        "Booleans",
        "Alerts",
        "Numbers"
    ]
  },
  {
    numb: 2,
    question: "The condition in an if / else statement is enclosed with _________.",
    answer: "Parenthesis",
    options: [
        "Quotes",
        "Curly Brackets",
        "Parenthesis",
        "Square Brackets"
    ]
  },
  {
    numb: 3,
    question: "Arrays in JavaScript can be used to store _______.",
    answer:  "All of the above",
    options: [
        "Numbers and Strings",
        "Other arrays",
        "Booleans",
        "All of the above"
    ]
  },
  {
    numb: 4,
    question: "String values must be enclosed within ______ when bring assigned to variables.",
    answer: "Quotes",
    options: [
        "Commas",
        "Curly Brackets",
        "Quotes",
        "Parenthesis"
    ]
  },
  {
    numb: 5,
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answer: "console.log",
    options: [
        "JavaScript",
        "Terminal/Bash",
        "For Loops",
        "console.log"
    ]
  }
];



//other technique
let questionsList = [
  { //1
    question: "Commonly used data types DO NOT include:",
    options: [
        {text: "Strings", correct: false},
        {text: "Booleans", correct: false},
        {text: "Alerts", correct: true },
        {text: "Numbers", correct: false}
    ]
  },
  { //2
    question: "The condition in an if / else statement is enclosed with _________.",
    options: [
        {text: "Quotes", correct: false},
        {text: "Curly Brackets", correct: false},
        {text: "Parenthesis", correct: true },
        {text: "Square Brackets", correct: false}
    ]
  },
  { //3
    question: "Arrays in JavaScript can be used to store _______.",
    options: [
        {text: "Number & Strings", correct: false},
        {text: "Other Arrays", correct: false},
        {text: "Booleans", correct: false },
        {text: "All Of The Above", correct: true}
    ]
  },
  { //4
    question: "String values must be enclosed within ______ when bring assigned to variables.",
    options: [
        {text: "Commas", correct: false},
        {text: "Curly Brackets", correct: false},
        {text: "Quotes", correct: true },
        {text: "Parenthesis", correct: false}
    ]
  },
  { //5
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
        {text: "JavaScript", correct: false},
        {text: "Terminal/Bash", correct: false},
        {text: "For Loops", correct: false },
        {text: "console.log", correct: true },
    ]
  }
];
