const palindromes = function (str) {
	const s = str.replace(/[^\w]/g, "").toLowerCase();
	return s === s.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
