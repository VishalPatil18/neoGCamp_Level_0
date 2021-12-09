let readlineSync = require('readline-sync');

console.log("\n CricQuiz me Aapka Swagat Hai!\n");
let userName= readlineSync.question("Enter your Name: ");
console.log("\n"+userName+", Chaliye Shuru Karte hai!")
console.log("Khel Ke Niyam\n 1) You will be awarded score 1 for every right answer \n 2) If you score more than 5 then you will reach level 2\n 3) Level 1 contain ten questions  \n 4) Level 2 contain 4 questions \n")

let score = 0;
let Q1 = {
  ques: "Who won the first ever Cricket World Cup in 1975?",
  A: "A) Australia",
  B: "B) England",
  C: "C) India",
  D: "D) West Indies",
  ans: 'D'
}


let Q2 = {
  ques: "How many ways are there of getting out?",
  A: "A) 7",
  B: "B) 9",
  C: "C) 8",
  D: "D) 10",
  ans: 'D'
}

let Q3 = {
  ques: "How long is the wicket on a cricket pitch?",
  A: "A) 18",
  B: "B) 22",
  C: "C) 20",
  D: "D) 24",
  ans: 'B'
}

let Q4 = {
  ques: "Who did England beat in the final of the 2019 Cricket World Cup?",
  A: "A) Australia",
  B: "B) India",
  C: "C) New Zealand",
  D: "D) South Africa",
  ans: 'C'
}

let Q5 = {
  ques: "Which fast bowler has taken the most test wickets?",
  A: "A) Stuart Broad",
  B: "B) Dale Steyn",
  C: "C) Glenn McGrath",
  D: "D) James Anderson",
  ans: 'D'
}

let Q6 = {
  ques: "The first official international match of cricket was held in 1844 between?",
  A: "A) England & Australia",
  B: "B) India & Pakistan",
  C: "C) USA & Canada",
  D: "D) England & India",
  ans: "C"
}

let Q7 = {
  ques: "Who is the only batsman to record 400 runs in an international Test match?",
  A: "A) Steve Smith",
  B: "B) Virendra Sehwag",
  C: "C) Don Bradman",
  D: "D) Brian Lara",
  ans: "D"
}

let Q8 = {
  ques: "Who is the first batsman to cross 10,000 runs in tests?",
  A: "A) Sunil Gavaskar",
  B: "B) Sachin Tendulkar",
  C: "C) Allan Border",
  D: "D) Don Bradman",
  ans: "A"
}

let Q9 = {
  ques: "Which player has scored the most ducks in international cricket?",
  A: "A) Muttiah Muralitharan",
  B: "B) James Anderson",
  C: "C) Courtney Walsh",
  D: "D) Bret Lee",
  ans: "A"
}
let Q10 = {
  ques: "Who bowled the fastest delivery ever of 100.2mph?",
  A: "A) Brett Lee",
  B: "B) Shoaib Akhtar",
  C: "C) Shaun Tait",
  D: "D) Jeffrey Thompson",
  ans: "B"
}

let Q11 = {
  ques: "What is the name of the cricket bible?",
  A: "A) Willsden Cricketers' Almanack",
  B: "B) Willsden Cricketers' Handbook",
  C: "C) Wisden Cricketers' Almanack",
  D: "D) Wisden Cricketers' Handbook",
  ans: "C"
}

let Q12 = {
  ques: "Which Australian player has scored the most test runs?",
  A: "A) Steve Waugh",
  B: "B) Don Bradman",
  C: "C) Ricky Ponting",
  D: "D) Matthew Hayden",
  ans: "C"
}

let Q13 = {
  ques: "Which has won most number of ICC World Cups?",
  A: "A) India",
  B: "B) Australia",
  C: "C) England",
  D: "D) Pakistan",
  ans: "B"
}

let Q14 = {
  ques: "What is the nickname of Sachin Tendulkar?",
  A: "A) The Little Genius",
  B: "B) The Little Master",
  C: "C) The Sir of Cricket",
  D: "D) Master Blaster",
  ans: "D"
}

let levelOneQuestions = [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10];

let levelTwoQuestions = [Q11, Q12, Q13, Q14];

for (let i = 0; i < levelOneQuestions.length; i++) {
  Level1(levelOneQuestions[i].ques, levelOneQuestions[i].ans, levelOneQuestions[i].A, levelOneQuestions[i].B, levelOneQuestions[i].C, levelOneQuestions[i].D);
}

function Level1(Ques, Ans, A, B, C, D) {
  console.log(Ques + "\n");
  console.log(A + "\n");
  console.log(B + "\n");
  console.log(C + "\n");
  console.log(D + "\n");

  let userAns = readlineSync.question("Give your answers Option: ");

  if (userAns.toUpperCase() === Ans.toUpperCase()) {
    console.log("\nAdbhut! Sahi Jawab");
    score++;
  }
  else {
    console.log("\nYeh Galat Jawab hai!");
    console.log("Right option is:" + Ans)
  }
  console.log("Your score is:" + score + "\n");
}

if (score >= 5) {
  console.log("\n");
  console.log("** Congratulations You've Qualified for Level 2 **\n");
  console.log("\n ")

  for (let i = 0; i < levelTwoQuestions.length; i++) {
    Level1(levelTwoQuestions[i].ques, levelTwoQuestions[i].ans, levelTwoQuestions[i].A, levelTwoQuestions[i].B, levelTwoQuestions[i].C, levelTwoQuestions[i].D);
  }
}
console.log("\n")
console.log("------------Game Over-------------\n");

console.log("Your Final score is :" + score)

console.log("\n------------Aapka Bahot Bahot Shukriya-------------\n");
