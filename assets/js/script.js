var myQuestions = [
  {
    question:
      "Which of the following function of Array object reverses the order of the elements of an array?",
    answers: {
      a: "reverse()",
      b: "push()",
      c: "reduce()",
      d: "reduceRight()",
    },
    correctAnswer: "reverse()",
  },
  {
    question: "In JavaScript what can you store in arrays?",
    answers: {
      a: "numbers and strings",
      b: "booleans",
      c: "other arrays",
      d: "all of the above",
    },
    correctAnswer: "all of the above",
  },
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Brendan Eich",
      b: "Sandy Wilson",
      c: "Jeff Samberg",
      d: "William Paxton",
    },
    correctAnswer: "Brendan Eich",
  },
  {
    question:
      "Which of the following is true about variable naming conventions in JavaScript?",
    answers: {
      a: "JavaScript variable names should not start with a numeral (0-9)",
      b: "You should not use any of the JavaScript reserved keyword as a variable name",
      c: "Both of the above",
      d: "None of the above",
    },
    correctAnswer: "Both of the above",
  },
  {
    question: "In what year was JavaScript created?",
    answers: {
      a: "1989",
      b: "2001",
      c: "2009",
      d: "1995",
    },
    correctAnswer: "1995",
  },
  {
    question: "Which of the following is not a JavaScript primitive?",
    answers: {
      a: "number",
      b: "string",
      c: "float",
      d: "boolean",
    },
    correctAnswer: "float",
  },
  {
    question: "What does JSON stand for?",
    answers: {
      a: "JavaScript Objective Notation",
      b: "Java Set Object Notation",
      c: "Java Script Object Nomenclature",
      d: "Javascript Object Notation",
    },
    correctAnswer: "Javascript Object Notation",
  },
  {
    question: "What will the output of 'console.log(typeof NaN)' be?",
    answers: {
      a: "NaN",
      b: "number",
      c: "null",
      d: "undefined",
    },
    correctAnswer: "number",
  },
  {
    question:
      "What will the result of 'console.log(('b' + 'a' + + 'a' + 'a').toLowerCase())be?",
    answers: {
      a: "bananaa",
      b: "baaa",
      c: "banana",
      d: "ba+aa",
    },
    correctAnswer: "banana",
  },
  {
    question: "What is 2 + 2?",
    answers: {
      a: "4",
      b: "0",
      c: "Canada Goose",
      d: "Salacious Crumb",
    },
    correctAnswer: "4",
  },
];

// global variables
var timerEl = document.getElementById("timerEl");
var startOver = document.getElementById("end-game");
var startButton = document.getElementById("start-btn");
var question = document.getElementById("question");
var quest = document.getElementById("questions");
var answerOne = document.getElementById("1");
var answerTwo = document.getElementById("2");
var answerThree = document.getElementById("3");
var answerFour = document.getElementById("4");
var next = document.getElementById("next-btn");
var end = document.getElementById("end");
var start = document.getElementById("text");
var highScore = document.getElementById("");
var submit = document.getElementById("submitInitialBtn");
var btn = document.getElementById("btn");

var time = 75;
var timer;
var correctAnswer = 0;
var number = 0;
var score = 0;

// Function that starts quiz, timer and will end quiz at 0 seconds
function startQuiz() {
  text.style.display = "none";
  end.style.display = "none";
  timerEl.style.display = "block";
  timer = setInterval(function () {
    time = time - 1;
    timerEl.textContent = time;
    if (time <= 0) {
      endQuiz();
    }
  }, 1000);

  // will display appropriate question and corresponding potential answers on buttons
  question.textContent = myQuestions[number].question;
  quest.style.display = "block";
  answerOne.textContent = myQuestions[number].answers.a;
  answerTwo.textContent = myQuestions[number].answers.b;
  answerThree.textContent = myQuestions[number].answers.c;
  answerFour.textContent = myQuestions[number].answers.d;
  startButton.style.display = "none";
}

// function that determines what happens when the next button is hit to cycle through questions
function displayNext(event) {
  console.log(event);
  next.style.display = "none";
  var answer = myQuestions[number].correctAnswer;
  if (answer === event.target.innerHTML) {
    var correctAnswer = document.getElementById(event.target.id);
    // keeps track of score
    score = score + 5;
    correctAnswer.classList.add("correct");
  }
  else {
      time = time - 10;
  }
  
  number = number + 1;
  
  // quiz ends when you run out of questions
  if (number >= myQuestions.length) {
    endQuiz();
  }
  else(nextQuestion()); 
}

function nextQuestion() {
  question.textContent = myQuestions[number].question;
  quest.style.display = "block";
  answerOne.textContent = myQuestions[number].answers.a;
  answerTwo.textContent = myQuestions[number].answers.b;
  answerThree.textContent = myQuestions[number].answers.c;
  answerFour.textContent = myQuestions[number].answers.d;
}

function endQuiz() {
  quest.style.display = "none";
  next.style.display = "none";
  end.style.display = "block";
  timerEl.style.display = "none";
  finalScore.textContent = score;

}

function storeHighScores(event) {
  event.preventDefault();

  if(initialInput.value === "") {
    alert("Please enter your initials!");
    return;
  }
  quest.style.display = "none";
  next.style.display = "none";
  end.style.display = "block";
  timerEl.style.display = "none";
  finalScore.textContent = score;


}


function highScore() {
    localStorage.setItem("initialInput", "score");
}

startButton.addEventListener("click", startQuiz);
answerOne.addEventListener("click", displayNext);
answerTwo.addEventListener("click", displayNext);
answerThree.addEventListener("click", displayNext);
answerFour.addEventListener("click", displayNext);
next.addEventListener("click", nextQuestion);
submit.addEventListener("click", highScore);

