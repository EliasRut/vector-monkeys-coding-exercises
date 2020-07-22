// To get started, run "npm install" in the console in the repositories root directory.
// You can then execute the tests by running "npm run test" in the repositories root directory.
// To track all changed files with git, write "git add --all"
// To commit them, write "git commit -m 'YOUR COMMIT MESSAGE'"

const isEven = (number) => {
	return number%2 === 0;
}

const exercise1 = () => {
	// TODO: Return 42.
	return 42;
};

const authorHitchhikersGuide = 'Douglas Adams';
const exercise2 = () => {
	// TODO: Return the name of the author of Hitchhikers guide to the galaxy.
	return authorHitchhikersGuide
};

const exercise3 = (firstNumber, secondNumber) => {
	// TODO: Return the sum of firstNumber and secondNumber
	return firstNumber + secondNumber;
};

const exercise4 = (firstNumber, secondNumber) => {
	// TODO: Return the higher number of firstNumber or secondNumber
	if (firstNumber > secondNumber) {
		return firstNumber;
	}
	else {
		return secondNumber
	}
}

const exercise5 = (number) => {
	// TODO: Return whether or not the passed number is even
	return isEven(number);
}

const exercise6 = (author) => {
	// TODO: Return whether or not the passed name is the author of Hitchhiker guide to the galaxy
	return authorHitchhikersGuide === author;
};

const exercise7 = (numbers) => {
	// TODO: Return the sum of all numbers in the passed list
	let summeNumber = 0;
	for (var i = 0; i < numbers.length; i++) {
		summeNumber = summeNumber + numbers[i];
	}
	return summeNumber;
};

const exercise8 = (numbers) => {
	// TODO: Return true if all numbers in the list are even
	for (var i = 0; i<numbers.length; i++) {
		if (isEven(numbers[i]) === false) {
			return false;
		}
	}
	return true
};

const exercise9 = (authors) => {
	// TODO: Return whether or not the author of Hitchhiker guide to the galaxy is in the list of authors
	for (var i = 0; i<authors.length; i++) {
		if (authors[i] === authorHitchhikersGuide) {
			return true;
		}
	}
	return false;
};

const exercise10 = (people) => {
	// TODO: Return the name of all people who's favouriteColor is blue
	const bluegroup = [];
	for (var i=0; i<people.length; i++) {
		if (people[i].favouriteColor === 'blue') {
			bluegroup.push(people[i].name);
		}
	}
	return bluegroup;
};

const exercise11 = (authors) => {
	// TODO: Return the average age of all passed authors. Return null if no authors are passed.
	let ageSum = 0;
	for (var i=0; i<authors.length; i++) {
		ageSum = ageSum + authors[i].age;
	}
	if (authors.length === 0) {
		return null;
	}
	const averageAge = ageSum/authors.length;
	return averageAge;
};

const exercise12 = (authors, getColorForName) => {
	// TODO: Return all authors expanded with their favouriteColor, by using the getColorForName
	// The getColorForName takes the authors name as parameter
	const authorList = [];
	for (var i=0; i<authors.length; i++) {
		const authorWithColor = {
			...authors[i],
			favouriteColor : getColorForName(authors[i].name)
		};
		authorList.push(authorWithColor); 
	}
	return authorList;
};

module.exports = {
	exercise1,
	exercise2,
	exercise3,
	exercise4,
	exercise5,
	exercise6,
	exercise7,
	exercise8,
	exercise9,
	exercise10,
	exercise11,
	exercise12,
};