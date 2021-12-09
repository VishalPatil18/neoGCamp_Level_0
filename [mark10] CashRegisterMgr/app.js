const billAmnt = document.querySelector("#bill-amt");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#chk-btn");
const nextButton = document.querySelector("#next-btn");
const table = document.querySelector(".change-tbl");
const afterNext = document.querySelector(".after-next");

const msg = document.querySelector("#error-msg");

const noOfNotes = document.querySelectorAll(".num-notes");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

table.style.display = "none";
afterNext.style.display = "none";

nextButton.addEventListener("click", function validate() {
    table.style.display = "none";
    afterNext.style.display = "none";
    msg.style.display = "none";

    if(Number(billAmnt.value) > 0) {
        afterNext.style.display = "flex";        
        
    } else {
        showMsg("Invalid Bill Amount, cannot be negative or zero or string");
    }
});

checkButton.addEventListener("click", function validateInput() {
    table.style.display = "none";
    msg.style.display = "none";

    if(Number(billAmnt.value) > 0 && Number(cashGiven.value) > 0) {
        
        if(Number(cashGiven.value) > Number(billAmnt.value)) {
            const returnAmt = Number(cashGiven.value) - Number(billAmnt.value);
            calculateChange(returnAmt);
        } else if(Number(cashGiven.value) == Number(billAmnt.value)) {
            showMsg("No change is needed to be returned");
        }
        
        else {
            showMsg("Invalid Cash Given, must be equal to or more than Bill Amount");
        }

    } else {
        showMsg("Invalid Cash Given, cannot be negative or zero");
    }
});

function calculateChange(returnAmt) {
    table.style.display = "block";
    for(let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(
            returnAmt / availableNotes[i]
        );
        returnAmt %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function showMsg(message) {
    msg.style.display = "block";
    msg.style.color = "#E11D48";
    msg.style.fontSize = "1.1rem";
    msg.innerText = message;
}