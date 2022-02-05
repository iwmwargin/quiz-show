var time = 75
var timerEl = document.getElementById("timerEl");
var timer;

var myQuestions = [
    {
        question: "Which of the following function of Array object reverses the order of the elements of an array?",
        answers: {
            a: "reverse()",
            b: "push()",
            c: "reduce()",
            d: "reduceRight()"
        },
        correctAnswer: "reverse()"
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
   
   
   ];
   var quizContainer = document.getElementById('quiz');
   var resultsContainer = document.getElementById('results');
   var startButton = document.getElementById('start-btn');
   var question = document.getElementById("question");
   var quest = document.getElementById("questions");
   var answerOne = document.getElementById("1");
   var answerTwo = document.getElementById("2");
   var answerThree = document.getElementById("3");
   var answerFour = document.getElementById("4");
   var next = document.getElementById("next-btn");
   var number = 0;
   
   function startQuiz() {
     timer = setInterval(function(){
       time = time - 1
       timerEl.textContent = time;
       if(time === 0){
         endQuiz();
       }
     }, 1000);
     
     question.textContent = myQuestions[number].question;
     quest.style.display = "block";
     answerOne.textContent = myQuestions[number].answers.a;
     answerTwo.textContent = myQuestions[number].answers.b;
     answerThree.textContent = myQuestions[number].answers.c;
     answerFour.textContent = myQuestions[number].answers.d;
     startButton.style.display = "none";

   }

   function displayNext(event) {
    
    next.style.display = "block";
    var answer = myQuestions[number].correctAnswer;
    console.log(event.target.innerHTML)
    console.log(answer)
    if(answer === event.target.innerHTML) {
      console.log(event)
     var correctAnswer = document.getElementById(event.target.id)
     correctAnswer.style.backgroundColor = "light-green";
     console.log(correctAnswer)
    }
    number = number + 1;
    if(number >= myQuestions.length) {
      endQuiz();
    }
    
    

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
    
  }

   startButton.addEventListener("click", startQuiz);
   answerOne.addEventListener("click", displayNext);
   answerTwo.addEventListener("click", displayNext);
   answerThree.addEventListener("click", displayNext);
   answerFour.addEventListener("click", displayNext);
   next.addEventListener("click", nextQuestion);


 
 
 
 
   //  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
   
  //  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
   
  //    function showQuestions(questions, quizContainer){
  //      // we'll need a place to store the output and the answer choices
  //      var output = [];
  //      var answers;
   
  //      // for each question...
  //      for(var i=0; i<questions.length; i++){
         
  //        // first reset the list of answers
  //        answers = [];
   
  //        // for each available answer...
  //        for(letter in questions[i].answers){
   
  //          // ...add an html radio button
  //          answers.push(
  //            '<label>'
  //              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
  //              + letter + ': '
  //              + questions[i].answers[letter]
  //            + '</label>'
  //          );
  //        }
   
  //        // add this question and its answers to the output
  //        output.push(
  //          '<div class="question">' + questions[i].question + '</div>'
  //          + '<div class="answers">' + answers.join('') + '</div>'
  //        );
  //      }
   
  //      // finally combine our output list into one string of html and put it on the page
  //      quizContainer.innerHTML = output.join('');
  //    }
   
  //   function timer() {
  //     setInterval()
  //   }
   
  //    function showResults(questions, quizContainer, resultsContainer){
       
  //      // gather answer containers from our quiz
  //      var answerContainers = quizContainer.querySelectorAll('.answers');
       
  //      // keep track of user's answers
  //      var userAnswer = '';
  //      var numCorrect = 0;
       
  //      // for each question...
  //      for(var i=0; i<questions.length; i++){
   
  //        // find selected answer
  //        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
         
  //        // if answer is correct
  //        if(userAnswer===questions[i].correctAnswer){
  //          // add to the number of correct answers
  //          numCorrect++;
           
  //          // color the answers green
  //          answerContainers[i].style.color = 'lightgreen';
  //        }
  //        // if answer is wrong or blank
  //        else{
  //          // color the answers red
  //          answerContainers[i].style.color = 'red';
  //        }
  //      }
   
  //      // show number of correct answers out of total
  //      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  //    }
   
  //    // show questions right away
  //    showQuestions(questions, quizContainer);
     
  //    // on submit, show results
  //    submitButton.onclick = function(){
  //      showResults(questions, quizContainer, resultsContainer);
  //      quizContainer.removeAttribute("class");
  //    }
   
  //  }



