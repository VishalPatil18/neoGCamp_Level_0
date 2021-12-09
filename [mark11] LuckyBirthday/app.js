const dateOfBirth = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-num"); 
const checkLucky = document.querySelector("#check-btn");
const outputBox = document.querySelector("#output");

function compareValues(dsum, lnum) {
    if(dsum % lnum === 0) {
        outputBox.innerText = "Your birthday is lucky 🎉🎉";
    } else {
        outputBox.innerText = "Your birthday is not lucky 😭😭";
    }
}

function calculateDigitSum(bdate) {
    bdate = bdate.replaceAll("-", "");
    let dsum = 0;
    for(let i = 0; i < bdate.length; i++) {
        dsum = dsum + Number(bdate.charAt(i));
    }
    return dsum;
}

function checkLuckyBirthday () {
    
    if(luckyNumber.value <= 0) {
        outputBox.innerText = "Please enter a positive lucky number";
    } else {
        const bdate = dateOfBirth.value;
        const dsum = calculateDigitSum(bdate);
        if(dsum && bdate && !(luckyNumber.value == "")){
            compareValues(dsum, luckyNumber.value);
        } else {
            outputBox.innerText = "Please enter both the values properly";
        }  
    }
    
    
}



checkLucky.addEventListener("click", checkLuckyBirthday)