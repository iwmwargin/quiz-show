const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
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

];





function buildQuiz() {

}

function showResults() {

}

//display quiz right away
buildQuiz();

//on submit, show results
submitButton.addEventListener('click', showResults);