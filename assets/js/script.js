/*
T0-DO:
-Make the view highscores button bring up saved scores
-M
*/

var questions = {
    question1: {
        question: "Commonly used data types data types DO NOT include:",
        answerCorrect: "Alerts",
        answerIncorrect1: "Strings",
        answerIncorrect2: "Booleans",
        answerIncorrect3: "Numbers"
    },
     question2: {
        question: "String values must be enclosed by ___ when being assigned variables.",
        answerCorrect: "Quotation marks",
        answerIncorrect1: "Curly brackets",
        answerIncorrect2: "Parentheses",
        answerIncorrect3: "None of the above"
    },
     question3: {
        question: "Arrays in JavaScript can be used to store:",
        answerCorrect: "All of the above",
        answerIncorrect1: "Numbers",
        answerIncorrect2: "Strings",
        answerIncorrect3: "Other arrays"
    }
}

var startButton = document.getElementById("startButton");
var questionDisplay = document.querySelector("h2");
var answerButton1 = document.getElementById("answerButton1");
var answerButton2 = document.getElementById("answerButton2");
var answerButton3 = document.getElementById("answerButton3");
var answerButton4 = document.getElementById("answerButton4");
var timerEl = document.getElementById("timer");
var scoreEl = document.getElementById("score");
var nameInput = document.getElementById("nameInput");
var highscoreBtn = document.getElementById("highscores");
var highscoreHeader = document.querySelector("h3");
var scoreDisplay = document.querySelector("h4");

var timer;
var timerCount;
var score = 0;
var scoreSaved= [];

function init(){
    answerButton1.hidden = true;
    answerButton2.hidden = true;
    answerButton3.hidden = true;
    answerButton4.hidden = true;
    nameInput.hidden = true;
}

init();

startButton.addEventListener("click", startQuiz);

function startQuiz(){
    timerCount = 60;
    timerEl.textContent = timerCount + " seconds left";
    startTimer();
    startButton.hidden =true;
    answerButton1.hidden = false;
    answerButton2.hidden = false;
    answerButton3.hidden = false;
    answerButton4.hidden = false;
    scoreEl.textContent = score + " points";
    question1();
}

function question1(){
    questionDisplay.textContent = questions.question1.question;
    answerButton1.textContent = questions.question1.answerCorrect;
    answerButton2.textContent = questions.question1.answerIncorrect1;
    answerButton3.textContent = questions.question1.answerIncorrect2;
    answerButton4.textContent = questions.question1.answerIncorrect3;
    answerButton1.addEventListener("click", function(){
        score++;
        if (score > 1){
        scoreEl.textContent = score + " points";  
        } else if (score =1){
        scoreEl.textContent = score + " point";
        }
        question2();
    });
    answerButton2.addEventListener("click", function(){
        if (timerCount > 15){
            timerCount = timerCount -15;
        } else if(timerCount <= 15){
            endQuiz();
        }
        question2();
    });
    answerButton3.addEventListener("click", function(){
        if (timerCount > 15){
            timerCount = timerCount -15;
        } else if(timerCount <= 15){
            endQuiz();
        }
        question2();
    });
    answerButton4.addEventListener("click", function(){
        if (timerCount > 15){
            timerCount = timerCount -15;
        } else if(timerCount <= 15){
            endQuiz();
        }
        question2();
    });
}

function question2(){
    questionDisplay.textContent = questions.question2.question;
    answerButton1.textContent = questions.question2.answerIncorrect2;
    answerButton2.textContent = questions.question2.answerIncorrect1;
    answerButton3.textContent = questions.question2.answerCorrect;
    answerButton4.textContent = questions.question2.answerIncorrect3;
    answerButton1.addEventListener("click", function(){
        if (timerCount > 15){
            timerCount = timerCount -15;
        } else if(timerCount <= 15){
            endQuiz();
        }
        question3();
    });
    answerButton2.addEventListener("click", function(){
        if (timerCount > 15){
            timerCount = timerCount -15;
        } else if(timerCount <= 15){
            endQuiz();
        }
        question3();
    });
    answerButton3.addEventListener("click", function(){
        score++;
        if (score > 1){
        scoreEl.textContent = score + " points";  
        } else if (score =1){
        scoreEl.textContent = score + " point";
        }
        question3();
    });
    answerButton4.addEventListener("click", function(){
        if (timerCount > 15){
            timerCount = timerCount -15;
        } else if(timerCount <= 15){
            endQuiz();
        }
        question3();
    });
}

function question3(){
    questionDisplay.textContent = questions.question3.question;
    answerButton1.textContent = questions.question3.answerIncorrect3;
    answerButton2.textContent = questions.question3.answerIncorrect1;
    answerButton3.textContent = questions.question3.answerIncorrect2;
    answerButton4.textContent = questions.question3.answerCorrect;
    answerButton1.addEventListener("click", function(){
        if (timerCount > 15){
            timerCount = timerCount -15;
        } else if(timerCount <= 15){
            endQuiz();
        }
        endQuiz();
    });
    answerButton2.addEventListener("click", function(){
        if (timerCount > 15){
            timerCount = timerCount -15;
        } else if(timerCount <= 15){
            endQuiz();
        }
        endQuiz();
    });
    answerButton3.addEventListener("click", function(){
        if (timerCount > 15){
            timerCount = timerCount -15;
        } else if(timerCount <= 15){
            endQuiz();
        }
        endQuiz();
    });
    answerButton4.addEventListener("click", function(){
        score++;
        if (score > 1){
        scoreEl.textContent = score + " points";  
        } else if (score =1){
        scoreEl.textContent = score + " point";
        }
        endQuiz();
    });
}

function startTimer(){
    timer = setInterval(function(){
        timerCount--;
        timerEl.textContent = timerCount + " seconds left";
        if(timerCount === 0){
            endQuiz();
        }
    }, 1000)
}

function endQuiz(){
    timerEl.textContent = "Quiz finished"
    if (score > 1 || score === 0){
        scoreEl.textContent = score + " points";  
    } else {
        scoreEl.textContent = score + " point";
    }
    clearInterval(timer);
    answerButton1.hidden = true;
    answerButton2.hidden = true;
    answerButton3.hidden = true;
    answerButton4.hidden = true;
    questionDisplay.hidden = true;
    nameInput.hidden = false 
}

document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
    if (score === 1){
        var nameAndScore = nameInput.value + ": " + score + " point";
    } else{
        var nameAndScore = nameInput.value + ": " + score + " points";
    }
    localStorage.setItem("nameAndScore", JSON.stringify(nameAndScore));
    displayScores();
})

highscoreBtn.addEventListener("click", displayScores);

function displayScores(){
    answerButton1.hidden = true;
    answerButton2.hidden = true;
    answerButton3.hidden = true;
    answerButton4.hidden = true;
    nameInput.hidden = true;
    startButton.hidden = true;
    highscoreBtn.hidden = true;
    timerEl.hidden = true;
    scoreEl.hidden = true;
    highscoreHeader.textContent = "Highscores:"
    scoreDisplay.textContent = JSON.parse(localStorage.getItem('nameAndScore'));
}
