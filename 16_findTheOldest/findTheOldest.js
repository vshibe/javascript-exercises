const findTheOldest = function(arr) {
	arr.sort((a, b) => {
		return getAge(a.yearOfBirth, a.yearOfDeath)-getAge(b.yearOfBirth, b.yearOfDeath);
	});
	return arr[arr.length-1];
};

const getAge = function(birth, death) {
	if(!death) {
		death = new Date().getFullYear();
	};

	return death-birth;
};

// Do not edit below this line
module.exports = findTheOldest;
