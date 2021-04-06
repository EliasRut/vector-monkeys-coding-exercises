// To get started, run "npm install" in the console in the repositories root directory.
// You can then execute the tests by running "npm run test" in the repositories root directory.
// To track all changed files with git, write "git add --all"
// To commit them, write "git commit -m 'YOUR COMMIT MESSAGE'"

const isEven = (number) => {
	return number % 2 === 0; // % is the so called modulo operator - it returns the rest of a division
};

const exercise1 = () => {
<<<<<<< HEAD
	// Return 42.
	return 42;
=======
	return 24;
>>>>>>> 980c96b47d8b451babb4a95f50f378da78c22f26
};

const exercise2 = () => {
	// Return the name of the author of Hitchhikers guide to the galaxy.
	return "Douglas Adams";
};

const exercise3 = (firstNumber, secondNumber) => {
	// Return the sum of firstNumber and secondNumber
	return firstNumber + secondNumber;
};

const exercise4 = (firstNumber, secondNumber) => {
	// Return the higher number of firstNumber or secondNumber
	if (secondNumber > firstNumber) {
		return secondNumber;
	} else {
		return firstNumber;
	}
};

const exercise5 = (number) => {
	// Return whether or not the passed number is even - true for even, false for odd
	 return (number % 2 == 0); 
};

const exercise6 = (author) => {
	// Return whether or not the passed name is the author of Hitchhiker guide to the galaxy
	return (author == "Douglas Adams");
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

const exercise9b = (attributes) => {
	// TODO: Return true if one of the attributes is "depressed", false if none of the attributes is "depressed"
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
	exercise9b,
	exercise10,
	exercise11,
	exercise12,
};
