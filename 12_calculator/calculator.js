const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	return arr.length > 0 ? arr.reduce((accumulator, numB) => {return accumulator+numB}) : 0;
};

const multiply = function(arr) {
	return arr.length > 0 ? arr.reduce((accumulator, numB) => {return accumulator*numB}) : 0;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(num) {
	let res = 1;

	for(let i = 2; i <= num; i++) {
		res *= i;
	};

	return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
