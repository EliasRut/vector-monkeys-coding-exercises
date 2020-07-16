// To get started, run "npm install" in the console in the repositories root directory.
// You can then execute the tests by running "npm run test" in the repositories root directory.
// To track all changed files with git, write "git add --all"
// To commit them, write "git commit -m 'YOUR COMMIT MESSAGE'"

const exercise1 = () => {
	// TODO: Return 42.
	return 42;
};

const author = 'Douglas Adams';

const exercise2 = () => {
	// TODO: Return the name of the author of Hitchhikers guide to the galaxy.
	return author
};

const exercise3 = (firstNumber, secondNumber) => {
	// TODO: Return the sum of firstNumber and secondNumber
	return firstNumber + secondNumber;
};

const firstNumber = 12;
const secondNumber = 6;

const exercise4 = (firstNumber, secondNumber) => {
	// TODO: Return the higher number of firstNumber or secondNumber
	if (firstNumber > secondNumber) {
		return firstNumber;
	}
	else {
		return secondNumber
	}
}

const number = 5;

const exercise5 = (number) => {
	// TODO: Return whether or not the passed number is even
	if (number%2 == 0) {
		return true;
	}
	else {
		return false;
	}
}

const exercise6 = (author) => {
	// TODO: Return whether or not the passed name is the author of Hitchhiker guide to the galaxy
};

const exercise7 = (numbers) => {
	// TODO: Return the sum of all numbers in the passed list
};

const exercise8 = (numbers) => {
	// TODO: Return true if all numbers in the list are even
};

const exercise9 = (authors) => {
	// TODO: Return whether or not the author of Hitchhiker guide to the galaxy is in the list of authors
};

const exercise10 = (people) => {
	// TODO: Return the name of all people who's favouriteColor is blue
};

const exercise11 = (authors) => {
	// TODO: Return the average age of all passed authors. Return null if no authors are passed.
};

const exercise12 = (authors, getColorForName) => {
	// TODO: Return all authors expanded with their favouriteColor, by using the getColorForName
	// The getColorForName takes the authors name as parameter
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