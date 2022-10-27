const quizData = [
    {
        "title": "What is the past form of 'eat'?",
        "options": ["eat", "ate", "eaten", "have ate"],
        "answer": "ate"
    },
    {
        "title": "Which sentence is present continuous tense?",
        "options": [
            "I eat rice",
            "I am eating rice",
            "I have eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I am eating rice"
    },
    {
        "title": "Which sentence is present perfect tense?",
        "options": [
            "I eat rice",
            "I am eating rice",
            "I have eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I have eaten rice"
    },
    {
        "title": "Which sentence is present perfect continuous tense?",
        "options": [
            "I eat rice",
            "I am eating rice",
            "I have eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I have been eating rice for 1 year"
    },
    {
        "title": "Which sentence is past continuous tense?",
        "options": [
            "I eat rice",
            "I was eating rice",
            "I have eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I was eating rice"
    },
    {
        "title": "Which sentence is past perfect tense?",
        "options": [
            "I eat rice",
            "I was eating rice",
            "I have eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I have eaten rice"
    },
    {
        "title": "Which sentence is past perfect continuous tense?",
        "options": [
            "I eat rice",
            "I was eating rice",
            "I have eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I have been eating rice for 1 year"
    },
    {
        "title": "Which sentence is future continuous tense?",
        "options": [
            "I eat rice",
            "I will be eating rice",
            "I have eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I will be eating rice"
    },
    {
        "title": "Which sentence is future perfect tense?",
        "options": [
            "I eat rice",
            "I will be eating rice",
            "I will have eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I will have eaten rice"
    },
    {
        "title": "Which sentence is future perfect continuous tense?",
        "options": [
            "I eat rice",
            "I will be eating rice",
            "I will have eaten rice",
            "I will have been eating rice for 1 year"
        ],
        "answer": "I will have been eating rice for 1 year"
    }
];

//answer should be stored and fetched from a database for better security in a production level software

const answers = ['ate', 'I am eating rice', 'I have eaten rice', 'I have been eating rice for 1 year', 'I was eating rice', 'I have eaten rice', 'I have been eating rice for 1 year', 'I will be eating rice', 'I will have eaten rice', 'I will have been eating rice for 1 year']

//USER SCORE

let score = 0;

// SELECTORS

const quizContainer = document.getElementById("quizContainer");
const submitButton = document.getElementById("submitButton");
const timer = document.getElementById("counter");




//TIMER FUNCTIONALITY

let minute = 10;
let seconds = 0;

setInterval(function () {
    if (seconds < 0) {
        minute--;
        seconds = 59;
    }
    if (seconds <= 9) {
        seconds = "0" + seconds;
    }
    if (seconds == 0 && minute == 0) {
        localStorage.setItem("userScore", 0);
        window.location.href = "./timeout.html";
    }
    timer.innerHTML = minute + ":" + seconds;
    seconds--;
}, 1000);











// FUNCTIONS



const loadQuiz = () => {
    for (let i = 0; i < quizData.length; i++) {
        const quizDiv = document.createElement("div");
        quizDiv.className = 'quizWrapper'

        let quizFormat = `
        <h2 class="question">${i + 1}. ${quizData[i].title} ?</h2>
        <div class="answers">
            ${quizData[i].options.map((option) => `<div>
                <input type="radio" name="q${i + 1}"  value="${option}" >
                <label for="radio1">${option}</label>
            </div>
            `).join('')

            }
          
        </div>
        `


        quizDiv.innerHTML = quizFormat;
        quizContainer.appendChild(quizDiv)

    }

}



const handleSubmit = () => {
    score = 0;
    let userAnswers = [quizContainer.q1.value, quizContainer.q2.value, quizContainer.q3.value, quizContainer.q4.value, quizContainer.q5.value,
    quizContainer.q6.value, quizContainer.q7.value, quizContainer.q8.value,
    quizContainer.q9.value, quizContainer.q10.value

    ];

    console.log(userAnswers);

    userAnswers.forEach((answer, index) => {
        if (answer === answers[index]) {
            return score += 1;
        }
    });

    localStorage.setItem("userScore", score);
    window.location.href = "./results.html";


}










// TRIGGERS

loadQuiz()
submitButton.addEventListener("click", handleSubmit)
