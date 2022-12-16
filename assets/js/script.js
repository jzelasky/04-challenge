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
var answerButton11 = document.getElementById("answerButton11");
var answerButton12 = document.getElementById("answerButton12");
var answerButton13 = document.getElementById("answerButton13");
var answerButton14 = document.getElementById("answerButton14");
var answerButton21 = document.getElementById("answerButton21");
var answerButton22 = document.getElementById("answerButton22");
var answerButton23 = document.getElementById("answerButton23");
var answerButton24 = document.getElementById("answerButton24");
var answerButton31 = document.getElementById("answerButton31");
var answerButton32 = document.getElementById("answerButton32");
var answerButton33 = document.getElementById("answerButton33");
var answerButton34 = document.getElementById("answerButton34");
var timerEl = document.getElementById("timer");
var scoreEl = document.getElementById("score");
var initialsInput = document.getElementById("initialsInput");
var highscoreBtn = document.getElementById("highscores");
var highscoreHeader = document.querySelector("h3");
var scoreDisplay = document.querySelector("h4");

var timer;
var timerCount;
var score = 0;
var scoreSaved= [];

function init(){
    initialsInput.hidden = true;
    hideQ1Buttons();
    hideQ2Buttons();
    hideQ3Buttons();
}

init();

startButton.addEventListener("click", startQuiz);

function hideQ1Buttons(){
    answerButton11.hidden = true;
    answerButton12.hidden = true;
    answerButton13.hidden = true;
    answerButton14.hidden = true;
}

function hideQ2Buttons(){
    answerButton21.hidden = true;
    answerButton22.hidden = true;
    answerButton23.hidden = true;
    answerButton24.hidden = true;
}

function hideQ3Buttons(){
    answerButton31.hidden = true;
    answerButton32.hidden = true;
    answerButton33.hidden = true;
    answerButton34.hidden = true;
}

function startQuiz(){
    timerCount = 60;
    timerEl.textContent = timerCount + " seconds left";
    startTimer();
    startButton.hidden =true;
    answerButton11.hidden = false;
    answerButton12.hidden = false;
    answerButton13.hidden = false;
    answerButton14.hidden = false;
    scoreEl.textContent = score + " points";
    question1();
}

function rightAnswer(){
    score++;
    if (score > 1){
    scoreEl.textContent = score + " points";  
    } else if (score =1){
    scoreEl.textContent = score + " point";
    }
}

function wrongAnswer(){
    if (timerCount > 15){
        timerCount = timerCount -15;
    } else if(timerCount <= 15){
        endQuiz();
    }
}

function question1(){
    questionDisplay.textContent = questions.question1.question;
    answerButton11.textContent = questions.question1.answerCorrect;
    answerButton12.textContent = questions.question1.answerIncorrect1;
    answerButton13.textContent = questions.question1.answerIncorrect2;
    answerButton14.textContent = questions.question1.answerIncorrect3;
    answerButton11.addEventListener("click", function(){
        rightAnswer();
        question2();
    });
    answerButton12.addEventListener("click", function(){
        wrongAnswer();
        question2();
    });
    answerButton13.addEventListener("click", function(){
        wrongAnswer();
        question2();
    });
    answerButton14.addEventListener("click", function(){
        wrongAnswer();
        question2();
    });
}

function question2(){
    hideQ1Buttons();
    answerButton21.hidden = false;
    answerButton22.hidden = false;
    answerButton23.hidden = false;
    answerButton24.hidden = false;
    questionDisplay.textContent = questions.question2.question;
    answerButton21.textContent = questions.question2.answerIncorrect2;
    answerButton22.textContent = questions.question2.answerIncorrect1;
    answerButton23.textContent = questions.question2.answerCorrect;
    answerButton24.textContent = questions.question2.answerIncorrect3;
    answerButton21.addEventListener("click", function(){
        wrongAnswer();
        question3();
    });
    answerButton22.addEventListener("click", function(){
        wrongAnswer();
        question3();
    });
    answerButton23.addEventListener("click", function(){
        rightAnswer();
        question3();
    });
    answerButton24.addEventListener("click", function(){
        wrongAnswer();
        question3();
    });
}

function question3(){
    hideQ2Buttons();
    answerButton31.hidden = false;
    answerButton32.hidden = false;
    answerButton33.hidden = false;
    answerButton34.hidden = false;
    questionDisplay.textContent = questions.question3.question;
    answerButton31.textContent = questions.question3.answerIncorrect3;
    answerButton32.textContent = questions.question3.answerIncorrect1;
    answerButton33.textContent = questions.question3.answerIncorrect2;
    answerButton34.textContent = questions.question3.answerCorrect;
    answerButton31.addEventListener("click", function(){
        wrongAnswer();
        endQuiz();
    });
    answerButton32.addEventListener("click", function(){
        wrongAnswer();
        endQuiz();
    });
    answerButton33.addEventListener("click", function(){
        wrongAnswer();
        endQuiz();
    });
    answerButton34.addEventListener("click", function(){
        rightAnswer();
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
    hideQ1Buttons();
    hideQ2Buttons();
    hideQ3Buttons();
    questionDisplay.hidden = true;
    initialsInput.hidden = false;
}

document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
    if (score === 1){
        var nameAndScore = initialsInput.value + ": " + score + " point";
    } else{
        var nameAndScore = initialsInput.value + ": " + score + " points";
    }
    localStorage.setItem("nameAndScore", JSON.stringify(nameAndScore));
    displayScores();
})

highscoreBtn.addEventListener("click", displayScores);

function displayScores(){
    hideQ1Buttons();
    hideQ2Buttons();
    hideQ3Buttons();
    initialsInput.hidden = true;
    startButton.hidden = true;
    highscoreBtn.hidden = true;
    timerEl.hidden = true;
    scoreEl.hidden = true;
    highscoreHeader.textContent = "Highscores:"
    scoreDisplay.textContent = JSON.parse(localStorage.getItem('nameAndScore'));
}
