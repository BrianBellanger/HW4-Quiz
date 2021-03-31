//Establish variables for elements
var timerEl = document.querySelector(".timer");
var questionText = document.getElementById("questionText");
var responseA = document.getElementById("responseA");
var responseB = document.getElementById("responseB");
var responseC = document.getElementById("responseC");
var responseD = document.getElementById("responseD");
var result = document.getElementById("result");

//Establish Global variables
var secondsLeft = 100;
var correct=0;
var incorrect=0;
var i=0;
var finalScore = 0;

//Array to hold question Objects
var questions = [

  {text:"An Object can contain which of the following?",
  A:"A - Strings",
  B:"B - Functions",
  C:"C - Arrays",
  D:"D - All of the above",
  answer:"D"
},

  {text:"What is the command to add text to an HTML element?",
  A:"A - setAttribue",
  B:"B - createElement",
  C:"C - textContent",
  D:"D - appendChild",
  answer:"C"
},

  {text:"What is the JavaScript function to return a random number?",
  A:"A - Math.floor",
  B:"B - Math.random",
  C:"C - querySelector",
  D:"D - window.confirm",
  answer:"B"
},

{text:"What is the JavaScript function to return a random number?",
A:"A - Math.floor",
B:"B - Math.random",
C:"C - querySelector",
D:"D - window.confirm",
answer:"B"
},

  {text:"What is the JavaScript function to store into local storage?",
  A:"A - localStorage.setItem",
  B:"B - localStorage.getItem",
  C:"C - init",
  D:"D - JSON",
  answer:"A"
},

{text:"What is the JavaScript function to store into local storage?",
A:"A - localStorage.setItem",
B:"B - localStorage.getItem",
C:"C - init",
D:"D - JSON",
answer:"A"
},

{text:"Which actor played Vincent Vega in the movie Pulp Fiction?",
A:"A - Bruce Willis",
B:"B - Samuel L Jackson",
C:"C - Quentin Tarantino",
D:"D - John Travolta",
answer:"D"
},

  {text:"Which actor played Vincent Vega in the movie Pulp Fiction?",
  A:"A - Bruce Willis",
  B:"B - Samuel L Jackson",
  C:"C - Quentin Tarantino",
  D:"D - John Travolta",
  answer:"D"
}
];


//Function to start timer and questions
function startQuiz() {

  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds left!";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      endQuiz();
      ;};
    }, 1000);

  startQuestions();
}

//Function to present questions and responses
function startQuestions() {
    //console.log("i = " + i);
    //console.log(questions.length);
    //End the Quiz if the last question is done
    if(i>questions.length) {endQuiz()};

    //Blank out result
    result.textContent = "";

    //Present the question
    questionText.textContent = questions[i].text;

    //Present response A with listener
    responseA.textContent = questions[i].A;
    var answA = questions[i].answer;
    responseA.addEventListener("click", function() {
      if (answA=="A") {
          result.textContent = "Correct!";
          correct=correct+10;
          i++;
          setTimeout(startQuestions, 3000);
      } else {
        result.textContent = "Wrong!";
        incorrect=incorrect+10;
        i++;
        secondsLeft = secondsLeft - 10;
        setTimeout(startQuestions, 3000);
      };
    });

    //Present response B with listener
    responseB.textContent = questions[i].B;
    var answB = questions[i].answer;
    responseB.addEventListener("click", function() {
      if (answB=="B") {
          result.textContent = "Correct!";
          correct=correct+10;
          i++;
          setTimeout(startQuestions, 3000);
      } else {
        result.textContent = "Wrong!";
        incorrect=incorrect+10;
        secondsLeft = secondsLeft - 10;
        i++;
        setTimeout(startQuestions, 3000);
      };
    });

    //Present response C with listener
    responseC.textContent = questions[i].C;
    var answC = questions[i].answer;
    responseC.addEventListener("click", function() {
      if (answC=="C") {
          result.textContent = "Correct!";
          correct=correct+10;
          i++;
          setTimeout(startQuestions, 3000);
      } else {
        result.textContent = "Wrong!";
        incorrect=incorrect+10;
        secondsLeft = secondsLeft - 10;
        i++;
        setTimeout(startQuestions, 3000);
      };
    });

    //Present response D with listener
    responseD.textContent = questions[i].D;
    var answD = questions[i].answer;
    responseD.addEventListener("click", function() {
      if (answD=="D") {
          result.textContent = "Correct!";
          correct=correct+10;
          i++;
          setTimeout(startQuestions, 3000);
      } else {
        result.textContent = "Wrong!";
        incorrect=incorrect+10;
        secondsLeft = secondsLeft - 10;
        i++;
        setTimeout(startQuestions, 3000);
      };
    });

};  //End startQuestions() Function


function endQuiz(){

  finalScore=secondsLeft+correct-incorrect

  questionText.textContent = "All Done!";
  responseA.textContent = "Your final score is " + finalScore;
  responseB.textContent = "";
  responseC.textContent = "";
  responseD.textContent = "";
  result.textContent = "";

  localStorage.setItem("score", finalScore);
  

  return;
};  //End endQuiz() Function


function highScores() {  
  var scores = localStorage.getItem("score");
  console.log(scores);
  
};  //End highScores