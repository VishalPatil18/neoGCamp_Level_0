const inputs = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#checkarea-btn");
const outputBox = document.querySelector("#output");

function calculateArea() {
  if (Number(inputs[0].value) <= 0 || Number(inputs[1].value) <= 0) {
    outputBox.style.color = "red";
    outputBox.innerText =
      "Base or Height cannot be negative or zero, enter again";
  } else {
    const triArea = 0.5 * (Number(inputs[0].value) * Number(inputs[1].value));

    outputBox.innerText = "The area of the triangle is: " + triArea + " cm²";
  }
}

areaBtn.addEventListener("click", calculateArea);
