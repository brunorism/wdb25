
const p1Btn = document.querySelector("#p1Btn");
const p2Btn = document.querySelector("#p2Btn");
const resetBtn = document.querySelector("#resetBtn");

const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");

const gameType = document.querySelector("#gameType");
const winner = document.querySelector("p");

let gameScore = parseInt(gameType.value);
let isGameOver = false;

const resetGame = () => {
    if (winner.textContent !== "") {
	winner.textContent = "";
	winner.classList.remove ("winner");
	winner.classList.add("hidden");
	isGameOver = !isGameOver;
    }
}

gameType.addEventListener("change", () => {
    gameScore = parseInt(gameType.value);
})

p1Btn.addEventListener("click", () => {
    let p1 = parseInt(p1Score.textContent) + 1;
    if (!isGameOver) {
	p1Score.textContent = p1;
    }
    if (p1 === gameScore) {
	winner.textContent = `P1 is the winner!`
	winner.classList.add("winner");
	winner.classList.remove("hidden");
	isGameOver = !isGameOver;
    }
})

p2Btn.addEventListener("click", () => {
    let p2 = parseInt(p2Score.textContent) + 1;
    if (!isGameOver) {
	p2Score.textContent = p2;
    }
    if (p2 === gameScore) {
	resetGame();
	winner.textContent = `P2 is the winner!`
	winner.classList.add("winner");
	winner.classList.remove("hidden");
	isGameOver = !isGameOver;
    }
})

resetBtn.addEventListener("click", () => {
    p1Score.innerText = "0";
    p2Score.innerText = "0";
    resetGame();
})
