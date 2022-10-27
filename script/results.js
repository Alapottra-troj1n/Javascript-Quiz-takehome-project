//SELECTORS
const scoreBoard = document.getElementById('scoreBoard');
const againButton = document.getElementById('startAgain');


//FETHCING SCORE FROM LOCAL STORAGE
const score = localStorage.getItem("userScore");


// DISPLAYING SCORE
scoreBoard.innerText = `You Got ${score} Score`;


againButton.addEventListener("click",() =>{

    localStorage.setItem("userScore", 0);
    window.location.href = "./mcq.html";

})

