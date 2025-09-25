const findTheOldest = function(arr) {
	return arr.reduce((a, b) => {
		const oldAge = getAge(a.yearOfBirth, a.yearOfDeath);
		const newAge = getAge(b.yearOfBirth, b.yearOfDeath);
		return oldAge > newAge ? a : b;
	});
};

const getAge = function(birth, death) {
	if(!death) {
		death = new Date().getFullYear();
	};

	return death-birth;
};

// Do not edit below this line
module.exports = findTheOldest;
