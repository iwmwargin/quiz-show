
var startCont = document.querySelector("#startCont");
var startBtnEl = document.querySelector("#startBtnEl");
var quizCont = document.querySelector("#quizCont");

// timer global variables 

var time = 75
var timerEl = document.querySelector("#timerEl");
var timer;

// questions array 

var myQuestions = [
    {
        question: "Which of the following function of Array object reverses the order of the elements of an array?",
        answers: {
            a: "reverse()",
            b: "push()",
            c: "reduce()",
            d: "reduceRight()"
        },
        correctAnswer: "a"
    },
    {
        question: "In JavaScript what can you store in arrays?",
        answers: {
            a: "numbers and strings",
            b: "booleans",
            c: "other arrays",
            d: "all of the above"
        },
        correctAnswer: "d"
    },
    {
        question: "Who invented JavaScript?",
        answers: {
            a: "Brendan Eich",
            b: "Sandy Wilson",
            c: "Jeff Samberg",
            d: "William Paxton"
        },
        correctAnswer: "a"
    },
    {
        question: "Which of the following is true about variable naming conventions in JavaScript?",
        answers: {
            a: "JavaScript variable names should not start with a numeral (0-9)",
            b: "You should not use any of the JavaScript reserved keyword as a variable name",
            c: "Both of the above",
            d: "None of the above"
        },
        correctAnswer: "c"
    },
    {
        question: "In what year was JavaScript created?",
        answers: {
            a: "1989",
            b: "2001",
            c: "2009",
            d: "1995"
        },
        correctAnswer: "d"
    },
    {
        question: "Which of the following is not a JavaScript primitive?",
        answers: {
            a: "number",
            b: "string",
            c: "float",
            d: "boolean"
        },
        correctAnswer: "c"
    },
    {
       question: "What does JSON stand for?",
       answers: {
           a: "JavaScript Objective Notation",
           b: "Java Set Object Notation",
           c: "Java Script Object Nomenclature",
           d: "Javascript Object Notation"
       },
       correctAnswer: "d"
   },
   {
       question: "What will the output of 'console.log(typeof NaN)' be?",
       answers: {
           a: "NaN",
           b: "number",
           c: "null",
           d: "undefined"
       },
       correctAnswer: "b"
   },
   {
       question: "What will the result of 'console.log(('b' + 'a' + + 'a' + 'a').toLowerCase())be?",
       answers: {
           a: "bananaa",
           b: "baaa",
           c: "banana",
           d: "ba+aa"
       },
       correctAnswer: "c"
   },
   {
       question: "How does a while loop start?",
       answers: {
           a: "while (i <= 10)",
           b: "while i = 1 to 10",
           c: "while (i = 0; i++ = 10)",
           d: "while (i <= 10; i++)"
       },
       correctAnswer: "a"
   },
// on start button click, start timer

function start () {
    timer = setInterval(clock, 1000);
    timerEl.textContent = time; 

    // hide start content

    startCont.className = "hide";

    // un-hide quiz content 

    quizCont.classList.remove("hide");

    // create quiz question text

    // create quiz buttons

    // loop through questions array 

}

startBtnEl.addEventListener('click', start);

function clock () {

    time--;
    timerEl.textContent = time;

    if (time <= 0) {
        endQuiz();

    }
}

function endQuiz() {}


// end quiz by either: timer run out or answered all questions

// display score and ask user to enter initials to save score

// save score in local storage

// include button option to clear high score(s)
