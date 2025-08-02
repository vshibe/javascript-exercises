const repeatString = function(string, count) {
	let final_string = "";
	
	if (count < 0) {return "ERROR"};

	for(let i = 0; i < count; i++) {
		final_string += string;
	};

	return final_string;
};

// Do not edit below this line
module.exports = repeatString;
