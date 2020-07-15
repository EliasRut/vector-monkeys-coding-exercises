// You can execute the tests by running "npm run test" in the repositories root directory.

const exercise1 = () => {
	// TODO: Return 42.
	return 42;
};

const exercise2 = () => {
	// TODO: Return the name of the author of Hitchhikers guide to the galaxy.
	return "Douglas Adams";
};

const exercise3 = (firstNumber, secondNumber) => {
	// TODO: Return the sum of firstNumber and secondNumber
	return firstNumber + secondNumber;
};

const exercise4 = (firstNumber, secondNumber) => {
	// TODO: Return the higher number of firstNumber or secondNumber
	return Math.max(firstNumber, secondNumber);
}

const exercise5 = (number) => {
	// TODO: Return whether or not the passed number is even
	return number % 2 === 0;
}

const exercise6 = (author) => {
	// TODO: Return whether or not the passed name is the author of Hitchhiker guide to the galaxy
	return author === "Douglas Adams";
}

const exercise7 = (numbers) => {
	// TODO: Return the sum of all numbers in the passed list
	return numbers.reduce((sum, number) => sum + number, 0);
}

const exercise8 = (numbers) => {
	// TODO: Return true if all numbers in the list are even
	return numbers.every((number) => number % 2 === 0);
}

const exercise9 = (authors) => {
	// TODO: Return whether or not the author of Hitchhiker guide to the galaxy is in the list of authors
	return !!authors.find((author) => author === "Douglas Adams");
}

const exercise10 = (people) => {
	// TODO: Return the name of all people who's favouriteColor is blue
	return people.filter((person) => person.favouriteColor === 'blue').map((person) => person.name);
}

const exercise11 = (authors) => {
	// TODO: Return the average age of all passed authors. Return null if no authors are passed.
	if (!authors || !authors.length) return null;
	return authors.reduce((sum, cur) => sum + cur.age, 0) / authors.length;
}

const exercise12 = (authors, getColorForName) => {
	// TODO: Return all authors expanded with their favouriteColor, by using the getColorForName
	// The getColorForName takes the authors name as parameter
	return authors.map((author) => ({...author, favouriteColor: getColorForName(author.name)}));
}

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
}