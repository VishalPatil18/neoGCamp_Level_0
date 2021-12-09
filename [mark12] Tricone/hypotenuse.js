const sides = document.querySelectorAll(".side-input");
const hypoBtn = document.querySelector("#hypo-btn");
const outputBox = document.querySelector("#output");

function calcSumOfSquares(a, b) {
    const sumOfSquares = a**2 + b**2;
    return sumOfSquares;
}

function calculateHypotenuse() {

    if(Number(sides[0].value) <= 0 || Number(sides[1].value) <= 0) {
        outputBox.style.color = "red";
        outputBox.innerText = "Side cannot be negative or zero, enter again"
    } else {
        const sumSq = calcSumOfSquares(Number(sides[0].value), Number(sides[1].value));
        const lenOfHypotenuse = Math.sqrt(sumSq);
        outputBox.innerText = "The length of the hypotenuse is: " + lenOfHypotenuse;
    }
    
}

hypoBtn.addEventListener("click", calculateHypotenuse);