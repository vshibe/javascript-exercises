const leapYears = function(year) {
	const divFour = year % 4 === 0;
	const divHundred = year % 100 === 0;
	const divFourHundred = year % 400 === 0;

	return (divFour && (!divHundred || divFourHundred));
};

// Do not edit below this line
module.exports = leapYears;
