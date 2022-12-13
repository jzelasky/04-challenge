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

function init(){
    answerButton1.hidden = true;
    answerButton2.hidden = true;
    answerButton3.hidden = true;
    answerButton4.hidden = true;
}

init();

startButton.addEventListener("click", startGame);

function startGame(){
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
}

