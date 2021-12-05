class Calculator {
	constructor(previousOperandTextElement, currentOperandTextElement) {
		this.previousOperandTextElement = previousOperandTextElement;
		this.currentOperandTextElement = currentOperandTextElement;
		this.clear();
	}

	clear() {
		this.currentOperand = "";
		this.previousOperand = "";
		this.operation = undefined;
	}

	delete() {
		this.currentOperand = this.currentOperand.toString().slice(0, -1);
	}

	appendNumber(number) {
		if (number === "." && this.currentOperand.includes(".")) return;
		this.currentOperand = this.currentOperand.toString() + number.toString();
	}

	chooseOperation(operation) {
		if (this.currentOperand === "") return;
		if (this.previousOperand !== "") {
			this.compute();
		}
		this.operation = operation;
		this.previousOperand = this.currentOperand;
		this.currentOperand = "";
	}

	percent() {
		this.currentOperand = this.previousOperand / (100 / this.currentOperand);
	}

	mc() {
		localStorage.clear();
		this.currentOperand = this.currentOperand;
	}

	mr() {
		this.currentOperand = localStorage.getItem("m");
	}

	mplus() {
		if (localStorage.getItem("m") === null) {
			localStorage.setItem("m", this.currentOperand);
		} else {
			console.log(parseFloat(localStorage.getItem("m")));
			console.log(this.currentOperand);
			this.currentOperand = parseFloat(localStorage.getItem("m")) + this.currentOperand;
			localStorage.setItem("m", this.currentOperand);
		}
	}

	mmoins() {
		this.currentOperand = this.currentOperand;
	}

	carre() {
		this.currentOperand *= this.currentOperand;
	}

	cube() {
		this.currentOperand = this.currentOperand ** 3;
	}

	ex() {
		this.currentOperand = Math.exp(1) ** this.currentOperand;
	}

	dixx() {
		this.currentOperand = 10 ** this.currentOperand;
	}

	unsurx() {
		this.currentOperand = 1 / this.currentOperand;
	}

	sqrt() {
		this.currentOperand = Math.sqrt(this.currentOperand);
	}

	troissqrt() {
		this.currentOperand = Math.cbrt(this.currentOperand);
	}
	ysqrt() {
		this.currentOperand = Math.sqrt(this.currentOperand);
	}

	ln() {
		this.currentOperand = Math.log(this.currentOperand);
	}

	log10() {
		this.currentOperand = Math.log10(this.currentOperand);
	}

	factorielle() {
		console.log("factorielle");
		console.log(this.currentOperand);
		let fact = 1;
		for (let i = 1; i <= this.currentOperand; i++) {
			fact = i * fact;
		}
		this.currentOperand = fact;
	}

	sin() {
		this.currentOperand = Math.sin(this.currentOperand);
	}

	cos() {
		this.currentOperand = Math.cos(this.currentOperand);
	}

	tan() {
		this.currentOperand = Math.tan(this.currentOperand);
	}

	e() {
		this.currentOperand = Math.exp(1);
	}

	EE() {
		this.currentOperand = Math.exp(1);
	}

	deg() {
		document.querySelector("[data-deg]").innerHTML === "Deg"
			? (document.querySelector("[data-deg]").innerHTML = "Rad")
			: (document.querySelector("[data-deg]").innerHTML = "Deg");
	}

	sinh() {
		this.currentOperand = Math.sin(this.currentOperand);
	}

	cosh() {
		this.currentOperand = Math.cos(this.currentOperand);
	}

	tanh() {
		this.currentOperand = Math.tan(this.currentOperand);
	}

	pi() {
		this.currentOperand = Math.PI;
	}

	rand() {
		this.currentOperand = Math.random();
	}

	signe() {
		this.currentOperand = -this.currentOperand;
	}

	compute() {
		let computation;
		const prev = parseFloat(this.previousOperand);
		const current = parseFloat(this.currentOperand);
		if (isNaN(prev) || isNaN(current)) return;
		switch (this.operation) {
			case "+":
				computation = prev + current;
				break;
			case "-":
				computation = prev - current;
				break;
			case "*":
				computation = prev * current;
				break;
			case "÷":
				computation = prev / current;
				break;
			case "xy":
				computation = prev ** current;
				break;
			default:
				return;
		}
		this.currentOperand = computation;
		this.operation = undefined;
		this.previousOperand = "";
	}

	getDisplayNumber(number) {
		const stringNumber = number.toString();
		const integerDigits = parseFloat(stringNumber.split(".")[0]);
		const decimalDigits = stringNumber.split(".")[1];
		let integerDisplay;
		if (isNaN(integerDigits)) {
			integerDisplay = "";
		} else {
			integerDisplay = integerDigits.toLocaleString("en", { maximumFractionDigits: 0 });
		}
		if (decimalDigits != null) {
			return `${integerDisplay}.${decimalDigits}`;
		} else {
			return integerDisplay;
		}
	}

	updateDisplay() {
		this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
		if (this.operation != null) {
			this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
		} else {
			this.previousOperandTextElement.innerText = "";
		}
	}
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const percentButton = document.querySelector("[data-percent]");
const carreButton = document.querySelector("[data-carre]");
const mcButton = document.querySelector("[data-mc]");
const mrButton = document.querySelector("[data-mr]");
const mplusButton = document.querySelector("[data-mplus]");
const mmoinsButton = document.querySelector("[data-mmoins]");
const cubeButton = document.querySelector("[data-cube]");
const puissanceButton = document.querySelector("[data-puissance]");
const exButton = document.querySelector("[data-ex]");
const dixxButton = document.querySelector("[data-dixx]");
const unsurxButton = document.querySelector("[data-unsurx]");
const sqrtButton = document.querySelector("[data-sqrt]");
const troissqrtButton = document.querySelector("[data-troissqrt]");
const ysqrtButton = document.querySelector("[data-ysqrt]");
const lnButton = document.querySelector("[data-ln]");
const log10Button = document.querySelector("[data-log10]");
const factorielleButton = document.querySelector("[data-factorielle]");
const sinButton = document.querySelector("[data-sin]");
const cosButton = document.querySelector("[data-cos]");
const tanButton = document.querySelector("[data-tan]");
const eButton = document.querySelector("[data-e]");
const EEButton = document.querySelector("[data-EE]");
const degButton = document.querySelector("[data-deg]");
const sinhButton = document.querySelector("[data-sinh]");
const coshButton = document.querySelector("[data-cosh]");
const tanhButton = document.querySelector("[data-tanh]");
const piButton = document.querySelector("[data-pi]");
const randButton = document.querySelector("[data-rand]");
const signeButton = document.querySelector("[data-signe]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
	button.addEventListener("click", () => {
		calculator.appendNumber(button.innerText);
		calculator.updateDisplay();
	});
});

operationButtons.forEach(button => {
	button.addEventListener("click", () => {
		calculator.chooseOperation(button.innerText);
		calculator.updateDisplay();
	});
});

equalsButton.addEventListener("click", button => {
	calculator.compute();
	calculator.updateDisplay();
});

allClearButton.addEventListener("click", button => {
	calculator.clear();
	calculator.updateDisplay();
});
percentButton.addEventListener("click", button => {
	calculator.percent();
	calculator.updateDisplay();
});

mcButton.addEventListener("click", button => {
	calculator.mc();
	calculator.updateDisplay();
});

mrButton.addEventListener("click", button => {
	calculator.mr();
	calculator.updateDisplay();
});

mplusButton.addEventListener("click", button => {
	console.log("mplus");
	calculator.mplus();
	//	calculator.updateDisplay();
});

mmoinsButton.addEventListener("click", button => {
	calculator.mmoins();
	calculator.updateDisplay();
});

carreButton.addEventListener("click", button => {
	calculator.carre();
	calculator.updateDisplay();
});

cubeButton.addEventListener("click", button => {
	calculator.cube();
	calculator.updateDisplay();
});

exButton.addEventListener("click", button => {
	calculator.ex();
	calculator.updateDisplay();
});

dixxButton.addEventListener("click", button => {
	calculator.dixx();
	calculator.updateDisplay();
});

unsurxButton.addEventListener("click", button => {
	calculator.unsurx();
	calculator.updateDisplay();
});

sqrtButton.addEventListener("click", button => {
	calculator.sqrt();
	calculator.updateDisplay();
});
// a faire
troissqrtButton.addEventListener("click", button => {
	calculator.troissqrt();
	calculator.updateDisplay();
});

// a faire
ysqrtButton.addEventListener("click", button => {
	calculator.sqrt();
	calculator.updateDisplay();
});

lnButton.addEventListener("click", button => {
	calculator.ln();
	calculator.updateDisplay();
});

log10Button.addEventListener("click", button => {
	calculator.log10();
	calculator.updateDisplay();
});

factorielleButton.addEventListener("click", button => {
	calculator.factorielle();
	calculator.updateDisplay();
});

sinButton.addEventListener("click", button => {
	calculator.sin();
	calculator.updateDisplay();
});

cosButton.addEventListener("click", button => {
	calculator.cos();
	calculator.updateDisplay();
});

tanButton.addEventListener("click", button => {
	calculator.tan();
	calculator.updateDisplay();
});

eButton.addEventListener("click", button => {
	calculator.e();
	calculator.updateDisplay();
});

EEButton.addEventListener("click", button => {
	calculator.e();
	calculator.updateDisplay();
});

degButton.addEventListener("click", button => {
	calculator.deg();
	calculator.updateDisplay();
});

sinhButton.addEventListener("click", button => {
	calculator.sin();
	calculator.updateDisplay();
});

coshButton.addEventListener("click", button => {
	calculator.cos();
	calculator.updateDisplay();
});

tanhButton.addEventListener("click", button => {
	calculator.tan();
	calculator.updateDisplay();
});

piButton.addEventListener("click", button => {
	calculator.pi();
	calculator.updateDisplay();
});

randButton.addEventListener("click", button => {
	calculator.rand();
	calculator.updateDisplay();
});

signeButton.addEventListener("click", button => {
	calculator.signe();
	calculator.updateDisplay();
});

deleteButton.addEventListener("click", button => {
	calculator.delete();
	calculator.updateDisplay();
});
