const url = "https://api.adviceslip.com/advice";
const adviceNumber = document.querySelector(".advice-generator-num");
const adviceSlot = document.querySelector(".advice");
const btn = document.querySelector(".btn");

const getAdvice = async () => {
	const response = await fetch(url);
	const advice = await response.json();
	console.log(advice);
	return advice;
};

const renderAdvice = (adviceObject) => {
	const { id, advice } = adviceObject;
	adviceNumber.textContent = `ADVICE #${id}`;
	adviceSlot.textContent = `${advice}`;
};

const getNewAdvice = async () => {
	const data = await getAdvice();
	const advice = data.slip;
	renderAdvice(advice);
};

window.addEventListener("DOMContentLoaded", () => {
	btn.addEventListener("click", getNewAdvice);
});