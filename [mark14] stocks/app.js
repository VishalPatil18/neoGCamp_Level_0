const initPrice = document.querySelector("#init-price");
const stocksQuantity = document.querySelector("#quantity-stocks");
const currPrice = document.querySelector("#curr-price");
const checkBtn = document.querySelector("#check-btn");
const outputBox = document.querySelector("#output");

function calculateProfitAndLoss(initial, quantity, current) {
    var initVal = initial * quantity;
    var currVal = current * quantity;
    if(currVal > initVal) {
        var profit = currVal - initVal;
        var profitPerc = (profit/initVal) * 100;
        showOutput("🤑 Profit = " + profit + " 🤑 \n" + "🤑 Profit Percentage = " + profitPerc + "% 🤑", "PROFIT");
    } else if(currVal < initVal) {
        var loss = initVal - currVal;
        var lossPerc = (loss/initVal) * 100;

        if(lossPerc > 50){
            document.body.style.backgroundColor ="black";
        }
        showOutput("😰 Loss = " + loss + " 😰 \n" + "😰 Loss Percentage = " + lossPerc + "% 😰", "LOSS");
    } else {
        showOutput("👍🏻 No pain no gain and no gain no pain, you neither made any profit nor any loss 👍🏻", "EQUAL");
    }

}

function clickHandler() {
    var ip = Number(initPrice.value);
    var qty = Number(stocksQuantity.value);
    var currp = Number(currPrice.value);

    if(ip <= 0 || qty <= 0 || currp <= 0) {
        outputBox.style.color = "red";
        showOutput("Any of these values cannot be negative or zero, please recheck and enter again", "ERROR");
    } else {
        calculateProfitAndLoss(ip, qty, currp);
    }
    
}

function showOutput(msg, status) {
    switch (status) {
        case "PROFIT":
            outputBox.style.color = "green";
            outputBox.innerText = msg;
            break;

        case "LOSS":
            outputBox.style.color = "red"; 
            outputBox.innerText = msg;
            break;

        case "EQUAL":
            outputBox.innerText = msg;
            break;

        case "ERROR":
            outputBox.style.color = "red"; 
            outputBox.innerText = msg;
            break;
        default:
            break;
    }
    
}

checkBtn.addEventListener("click", clickHandler);