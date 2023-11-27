const quizForm = document.querySelector("#quiz-form");
const resultDiv = document.createElement("div");
resultDiv.classList.add("result");

quizForm.addEventListener("submit", function(e) {
	e.preventDefault();

	let score = 0;
	const answers = ["b", "b", "a", "c", "a", "b", "b", "c", "a", "a", "c", "a", "a", "b", "b", ];

	for (let i = 1; i <= 15; i++) {
		const answer = quizForm[`q${i}`].value;
		if (answer === answers[i - 1]) {
			score++;
		}
	}

	resultDiv.innerHTML = `You scored ${score} out of 15.`;
	quizForm.appendChild(resultDiv);

	if (score >= 1) {
		const img = document.createElement("img");
		img.src = "/img/yes.png";
		img.alt = ">:(";
		img.style.width = "100%";
		img.style.height = "100%";
		quizForm.appendChild(img);

		const audio = new Audio("/sound/yes.mp3");
		audio.play();
	} else {
		const img = document.createElement("img");
		img.src = "/img/no.png";
		img.alt = ";)";
		img.style.width = "100%";
		img.style.height = "100%";
		quizForm.appendChild(img);

		const audio = new Audio("/sounds/no.mp3");
		audio.play();
	}
});