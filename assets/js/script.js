/*
Make start button begin game function
    start timer
    start questions
    end when timer finish or done with questions
Make highscore button view high scores
    store highscores in local storage 
Varable for score 
Nested objects for questions
Maybe a loop to go through questions
    if correct add to score
    if incorrect subtract from time 
*/

var questions = {
    question1: {
        question: "Question 1",
        answerCorrect: "Correct Answer",
        answerIncorrect1: "Incorrect Answer 1",
        answerIncorrect2: "Incorrect Answer 2",
        answerIncorrect3: "Incorrect Answer 3"
    },
     question2: {
        question: "Question 1",
        answerCorrect: "Correct Answer",
        answerIncorrect1: "Incorrect Answer 1",
        answerIncorrect2: "Incorrect Answer 2",
        answerIncorrect3: "Incorrect Answer 3"
    },
     question3: {
        question: "Question 1",
        answerCorrect: "Correct Answer",
        answerIncorrect1: "Incorrect Answer 1",
        answerIncorrect2: "Incorrect Answer 2",
        answerIncorrect3: "Incorrect Answer 3"
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

var timer;
var timerCount;
var score = 0;

function init(){
    answerButton1.hidden = true;
    answerButton2.hidden = true;
    answerButton3.hidden = true;
    answerButton4.hidden = true;
}

init();

startButton.addEventListener("click", startQuiz);

function startQuiz(){
    timerCount = 60;
    startTimer();
    startButton.hidden =true;
    answerButton1.hidden = false;
    answerButton2.hidden = false;
    answerButton3.hidden = false;
    answerButton4.hidden = false;
    questionDisplay.textContent = questions.question1.question;
    answerButton1.textContent = questions.question1.answerCorrect;
    answerButton2.textContent = questions.question1.answerIncorrect1;
    answerButton3.textContent = questions.question1.answerIncorrect2;
    answerButton4.textContent = questions.question1.answerIncorrect3;

    //if user clicks on correct answer add 1 to score
    //if user click on incorrect answer subtract from timer
}

answerButton1.addEventListener("click", function(){
    score++;
    if (score > 1){
        scoreEl.textContent = score + " points";  
    } else if (score =1){
        scoreEl.textContent = score + " point";
    }
    endQuiz();
})

answerButton2.addEventListener("click",function(){
    if (timerCount > 15){
        timerCount = timerCount -15;
    } else if(timerCount <= 15){
        endQuiz();
    }
})

answerButton3.addEventListener("click",function(){
    if (timerCount > 15){
        timerCount = timerCount -15;
    } else if(timerCount <= 15){
        endQuiz();
    }
})

answerButton4.addEventListener("click",function(){
    if (timerCount > 15){
        timerCount = timerCount -15;
    } else if(timerCount <= 15){
        endQuiz();
    }
})

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
    } else if (score =1){
        scoreEl.textContent = score + " point";
    }
    clearInterval(timer);
    answerButton1.hidden = true;
    answerButton2.hidden = true;
    answerButton3.hidden = true;
    answerButton4.hidden = true;
    questionDisplay.hidden = true;
}
