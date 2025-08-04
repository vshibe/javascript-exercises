const sumAll = function(...args) {
	// its probably inefficient to have these seperated instead of as a single call, but who cares for an excersize
	const isNumber = args.every(arg => typeof(arg) === "number");
	const isNegative = args.some(arg => arg < 0);	
	const isInteger = args.every(arg => arg === Math.floor(arg)); // turns out Number.isInteger exists lol
	args.sort();

	if (!isNumber || isNegative || !isInteger) {
		return "ERROR";
	}
	
	let count = 0;

	for(let i = args[0]; i <= args[args.length-1]; i++) {
		count += i;
	}

	return count;
};

// Do not edit below this line
module.exports = sumAll;
