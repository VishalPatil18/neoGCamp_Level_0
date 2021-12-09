const quizForm = document.querySelector(".quiz-form");
const submitAnsBtn = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output");

const ansKey = ["isosceles", "one obtuse angle", "right triangle", "Yes", "Yes", "25°", "120°", "scalene", "obtuse", "30, 45"];


function calculateScore(event) {
    event.preventDefault();
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()) {
        if(value === ansKey[index]) {
            score = score + 1;
        }
        index = index + 1; 
    }
                                
    outputBox.innerText = "Quiz over! Your final score is: " + score;
   
}

quizForm.addEventListener("submit", calculateScore);