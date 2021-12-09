let readlineSync = require("readline-sync");

/* Current Score */
let score = 0;

/* High Scores */
let highScores = [
	{
		name: "Vishal",
		score: 5,
	},

	{
		name: "Tejas",
		score: 4,
	},
];

/* Questions stored in an Array as Objects */
let questions = [
	{
		questionNum: "pehla",
		question: "What is my Name?",
		answer: "vishal",
	},
	{
		questionNum: "doosra",
		question: "Am I alive?",
		answer: "yes",
	},
	{
		questionNum: "teesra",
		question: "Where do I study currently?",
		answer: "vjti",
	},
	{
		questionNum: "chautha",
		question: "Which sport I like to play?",
		answer: "cricket",
	},
	{
		questionNum: "panchva",
		question: "Where do I live?",
		answer: "nashik",
	},
];

/* Program Initializer */
function welcome() {
	let userName = readlineSync.question(
		"Hello there! May I know your sweet Name?"
	);

	console.log(
		"Namaskar " +
		userName +
		"! Aao Quiz kare me aapka Swagat hai! Chaliye Shuru Karte Hai"
	);
}

/* Asking the question and getting the answer */
function play(question, answer, questionNum) {
	console.log("Ye raha aapka ", questionNum, " sawal!")
	let userAnswer = readlineSync.question(question);

	if (userAnswer.toLowerCase() === answer.toLowerCase()) {
		console.log("Adbhut! Sahi Jawab");
		score++;
	} else {
		console.log("Yeh Galat Jawab Hai!");
	}

	console.log("Your Score: ", score);
	console.log("========================");
}

/* Starting the Game */
function game() {
	for (let i = 0; i < questions.length; i++) {
		let currentQuestion = questions[i];
		play(currentQuestion.question, currentQuestion.answer, currentQuestion.questionNum);
	}
}

/* Showing the Highscore at the end of the game */
function showScores() {
	console.log(
		"Badhai Ho! Aap Jeet Chuke hai ",
		score * 100000,
		"₹. Aapka Score raha ",
		score,
		"/5."
	);

	console.log(
		"Check out the high scores, if you've higher score then ping me and I'll update it"
	);

	highScores.map((score) => console.log(score.name, " : ", score.score));
	console.log("Dhanyawad Hamare Saath Aao Quiz Kare khelneke liye!");
}

welcome();
game();
showScores();
