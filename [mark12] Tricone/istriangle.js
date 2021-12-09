const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#check-triangle");
const outputBox = document.querySelector("#output");

function calcSumOfAngles(angle1, angle2, angle3) {
  const sumAngles = angle1 + angle2 + angle3;
  return sumAngles;
}

function checkIsTriangle() {
  if (
    Number(inputs[0].value) <= 0 ||
    Number(inputs[1].value) <= 0 ||
    Number(inputs[2].value) <= 0
  ) {
    outputBox.style.color = "red";
    outputBox.innerText =
      "Angles cannot be negative or zero, enter values again!";
  } else {
    const sumOfAngles = calcSumOfAngles(
      Number(inputs[0].value),
      Number(inputs[1].value),
      Number(inputs[2].value)
    );

    if (sumOfAngles === 180) {
      outputBox.innerText = "Yayy, the angles form a triangle!!";
    } else {
      outputBox.innerText = "Sorry, the angles don't form a triangle";
    }
  }
}

isTriangleBtn.addEventListener("click", checkIsTriangle);
