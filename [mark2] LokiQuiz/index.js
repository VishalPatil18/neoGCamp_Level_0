const chalk = require('chalk');
var readLineSync = require('readline-sync');

var userName = readLineSync.question("What is your name? ");
var score = 0;
var level = 0;
var highscore = [{
    name: "Bhavya",
    score: 10,
}, {
    name: "Kruti",
    score: 7,
}]

var welcomeMsg = "Welcome to the Loki quiz " + userName + "! Let's start!";
console.log(chalk.bold(welcomeMsg));

function playQuiz(question, answer) {
    var userAns = readLineSync.question(question);

    if (userAns.toUpperCase() === answer.toUpperCase()) {
        console.log(chalk.green("Right Answer!"));
        score = score + 1;
    } else {
        console.log(chalk.red("Wrong Answer!"));
    }

    console.log("Your current score: " + score);
    if (score === 3) {
        if (level != 1) {
            level = level + 1;
            console.log(chalk.blue("Congrats! You have reached level 1"));
        }
    }
    if (score === 6) {
        if (level != 2) {
            level = level + 1;
            console.log(chalk.blue("Congrats! You have reached level 2"));
        }
    }
    if (score === 9) {
        if (level != 3) {
            level = level + 1;
            console.log(chalk.blue("Congrats! You have reached last level"));
        }
    }

    console.log("--------------");
}

function checkHighscore(score) {
    for (var i = 0; i < highscore.length; i++) {
        if (highscore[i].score < score) {
            console.log(chalk.green("CONGRATULATIONS! YOU HAVE BEATEN A HIGH SCORE. Send me a screenshot so I can add you to the highscores"));
        }
    }
}


var questions = [{
    question: `
  What is Loki's full name? 
  a. loki laufeyson
  b. loki odin
  `,
    answer: "a"
}, {
    question: `
    What is Loki's race? 
    a. human
    b. frost giant
    `,
    answer: "b"
}, {
    question: `
    What is Loki the god of? 
    a. thunder
    b. sorcery
    c. mischief
    `,
    answer: "c"
}, {
    question: `
    What is Loki's gender? 
    a. male
    b. female
    c. fluid
    `,
    answer: "c"
}, {
    question: `
    Where was Loki born? 
    a. jotunheim
    b. asgard
    `,
    answer: "a"
}, {
    question: `
    What is his main power? 
    a. sorcery
    b. mischief
    `,
    answer: "a"
}, {
    question: `
    What is his variant number? 
    a. l1140
    b. l1130
    `,
    answer: "b"
}, {
    question: `
    Who is his best friend? 
    a. mobius
    b. thor
    c. valkeyrie
    `,
    answer: "a"
}, {
    question: `
    Which avenger scares him the most? 
    a. iron man
    b. black widow
    c. hulk
    `,
    answer: "c"
}, {
    question: `
    Does he truly enjoy hurting people?
    a. yes
    b. no
    `,
    answer: "b"
}];

for (var i = 0; i < questions.length; i++) {
    playQuiz(questions[i].question, questions[i].answer);
}

console.log("Quiz over, here are the current high scores!");

for (var i = 0; i < highscore.length; i++) {
    console.log(highscore[i].name + " : " + chalk.green(highscore[i].score));
}
console.log("Let's see how you did: ");
console.log(chalk.red("Your final score is: " + score + "/10"));
checkHighscore(score);

console.log(chalk.red("Your final level is: " + level + "/3"));