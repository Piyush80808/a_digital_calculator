const calculate = (modular) => {
	const inputOne = parseFloat(document.getElementById("num1").value);
	const inputTwo = parseFloat(document.getElementById("numTwo").value);
	if (isNaN(inputOne) || isNaN(inputTwo)) {
		document.getElementById("result").innerText =
			"Fill the number One and Two also";
		return;
	}
	let result;
	switch (modular) {
		case "+":
			result = inputOne + inputTwo;
			break;
		case "-":
			result = inputOne - inputTwo;
			break;
		case "*":
			result = inputOne * inputTwo;
			break;
		case "/":
			result =
				inputTwo !== 0 ? inputOne / inputTwo : "Cannot divide by zero";
			break;
		default:
			result =
				"Please press any button like plus minus multiply or divide";
	}
	document.getElementById("result").innerHTML = `result: ${result}`;
};
const clearAll = () => {
	document.getElementById("num1").value = "";
	document.getElementById("numTwo").value = "";
	document.getElementById("result").innerText = "Total:";
};
