// Your code here

var questionsArr = [
    {
    question: 'The Big Apple is a nickname given to wich city?',  //0
    answer: 'New York',
    options: [
        'San Francisco',
        'New York',
        'Los Angeles',
        'Miami',
    ]
    },

    {
    question: 'Who discovered Penicillin?',  //1
    answer: 'Alexander Fleming',
    options: [
        'Alexander Fleming',
        'Marie Curie',
        'Louis Pasteur',
        'Karl Landsteiner',
    ]   
    },

    {
    question: 'What is the largest river in the world?',  //2
    answer: 'Nile',
    options: [
        'Amazon',
        'Mississippi',
        'Volga',
        'Nile',
    ] 
    },

    {
    question: 'Tesla is most often remembered for his pioneering work and innovations with regard to which electrical technology?',  //3
    answer: 'Alternating Current',
    options: [
        'Direct Current',
        'Indirect Current',
        'Alternating Current',
        'Nominal Current',
    ] 
    },

    {
    question: 'HTML is a...?',  //4
    answer: 'Markup Language',
    options: [
        'Machine Language',
        'Markup Language',
        'Programming Language',
        'Script Language',
    ] 
    }
    ]

var quizContainer = document.getElementById('quiz') // <div id="quiz"></div> from HTML where the quiz is going to load questions.
var score = 0
var currentQuestion = 0
var timeRemaining 
var timerId 


quizContainer.onclick = function(e){
    if(e.target.id === 'start-quiz'){
        drawQuestion()
    } else if(e.target.parentElement.id === 'choices' 
    && e.target.tagName === 'BUTTON'){
        if(e.target.textContent === questionsArr[currentQuestion].answer){
            score++
        }
    clearInterval(timerId)
    currentQuestion++

    if(currentQuestion < questionsArr.length){
        drawQuestion()
    } else {
        endGame()
    }
  }
}

function drawGameStart(){
score = 0
currentQuestion = 0
quizContainer.innerHTML = ""
var previousScore = localStorage.getItem('previous-score')

if(previousScore){
    var previousScoreEl = document.createElement('p')
    previousScoreEl.textContent = 'Previous Score: ' + previousScore 
    quizContainer.appendChild(previousScoreEl)
}

var startBtn = document.createElement('button')
startBtn.id = 'start-quiz'
startBtn.textContent = "Start Quiz!"
quizContainer.appendChild(startBtn)

}

function drawQuestion(){
var questionObj = questionsArr[currentQuestion]
quizContainer.innerHTML = ""

var questionTextEl = document.createElement('p')
questionTextEl.textContent = questionObj.question
quizContainer.appendChild(questionTextEl)

var choicesContainer = document.createElement('div')
choicesContainer.id = 'choices'
quizContainer.appendChild(choicesContainer)

questionObj.options.forEach(function(choice){
    var btn = document.createElement('button')
    btn.textContent = choice
    choicesContainer.appendChild(btn)
})

timeRemaining = 30
var timerEl = document.createElement('p')
timerEl.id = 'timer'
timerEl.textContent = timeRemaining
quizContainer.appendChild(timerEl)

startTimer()
}

function startTimer(){
    var timerEl = document.getElementById('timer')

    timerId = setInterval(function() {
        timeRemaining--

       if(timeRemaining >= 0) {
           timerEl.textContent = timeRemaining
       } else {
           clearInterval(timerId)

           currentQuestion++

           if(currentQuestion < questionsArr.length){
              drawQuestion()
           } else {
              endGame()
       }
    }

    }, 1000)
}

function endGame() {
    quizContainer.innerHTML = ""

    var percentage = Math.round(score / questionsArr.length * 100) + "%"
    localStorage.setItem('previous-score', percentage)
    drawGameStart()
}


drawGameStart()/length/length















