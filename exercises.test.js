const {
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
} = require('./exercises');


describe.only('Exercise 1', () => {
	test('Returns 42', () => {
		expect(exercise1()).toBe(42);
	});
});

describe('Exercise 2', () => {
	test('Returns "Douglas Adams"', () => {
		expect(exercise2()).toBe("Douglas Adams");
	});
});

describe('Exercise 3', () => {
	test('Returns 28 for 10, 18', () => {
		expect(exercise3(10, 18)).toBe(28);
	});

	test('Returns -4 for 10, -14', () => {
		expect(exercise3(10, -14)).toBe(-4);
	});
});

describe('Exercise 4', () => {
	test('Returns 18 for 10, 18', () => {
		expect(exercise4(10, 18)).toBe(18);
	});

	test('Returns -4 for -10, -4', () => {
		expect(exercise4(-10, -4)).toBe(-4);
	});
});

describe('Exercise 5', () => {
	test('Returns true for 16', () => {
		expect(exercise5(16)).toBe(true);
	});

	test('Returns true for -4', () => {
		expect(exercise5(-4)).toBe(true);
	});

	test('Returns false for 11', () => {
		expect(exercise5(11)).toBe(false);
	});
});

describe('Exercise 6', () => {
	test('Returns true for "Douglas Adams"', () => {
		expect(exercise6("Douglas Adams")).toBe(true);
	});

	test('Returns false for "J.R.R. Tolkin"', () => {
		expect(exercise6("J.R.R. Tolkin")).toBe(false);
	});
});

describe('Exercise 7', () => {
	test('Returns 20 for [2, 4, 6, 8]', () => {
		expect(exercise7([2, 4, 6, 8])).toBe(20);
	});

	test('Returns 0 for -2, -1, 0, 1, 2', () => {
		expect(exercise7([-2, -1, 0, 1, 2])).toBe(0);
	});
});

describe('Exercise 8', () => {
	test('Returns true for [2, 4, 6, 8]', () => {
		expect(exercise8([2, 4, 6, 8])).toBe(true);
	});

	test('Returns false for -2, -1, 0, 1, 2', () => {
		expect(exercise8([-2, -1, 0, 1, 2])).toBe(false);
	});
});

describe('Exercise 9', () => {
	test('Returns true for ["Douglas Adams", "Brandon Sanderson"]', () => {
		expect(exercise9(["Douglas Adams", "Brandon Sanderson"])).toBe(true);
	});

	test('Returns false for []', () => {
		expect(exercise9([])).toBe(false);
	});

	test('Returns false for ["Brandon Sanderson", "Wolfgang Hohlbein"]', () => {
		expect(exercise9(["Brandon Sanderson", "Wolfgang Hohlbein"])).toBe(false);
	});
});

describe('Exercise 9b', () => {
	test('Returns true for ["weird", "annoyed", "depressed"]', () => {
		expect(exercise9b(["weird", "annoyed", "depressed"])).toBe(true);
	});

	test('Returns false for ["happy", "social", "creative"]', () => {
		expect(exercise9b(["happy", "social", "creative"])).toBe(false);
	});

	test('Returns false for empty list', () => {
		expect(exercise9b([])).toBe(false);
	});
});


const authorTestSet = [
	{
		name: "Douglas Adams",
		age: 42,
		favouriteColor: "blue"
	},
	{
		name: "Wolfgang Hohlbein",
		age: 101,
		favouriteColor: "red"
	},
	{
		name: "Brandon Sanderson",
		age: 55,
		favouriteColor: "blue"
	}
];

describe('Exercise 10', () => {
	test('Returns ["Douglas Adams", "Brandon Sanderson"] for the author test set', () => {
		expect(exercise10(authorTestSet)).toStrictEqual(["Douglas Adams", "Brandon Sanderson"]);
	});

	test('Returns [] for an empty test set', () => {
		expect(exercise10([])).toStrictEqual([]);
	});
});

describe('Exercise 11', () => {
	test('Returns 66 for the author test set', () => {
		expect(exercise11(authorTestSet)).toBe(66);
	});

	test('Returns null for an empty test set', () => {
		expect(exercise11([])).toBe(null);
	});

	test('Returns the single authors age if only one author is passed', () => {
		expect(exercise11([authorTestSet[0]])).toBe(42);
	});
});

const getColorForName = (name) => name.startsWith('D') || name.startsWith('B') ? "blue" : "red";

describe('Exercise 12', () => {
	test('Returns correctly set colors for the author test set', () => {
		const colorStrippedAuthors = authorTestSet.map((author) => ({
			name: author.name,
			age: author.age,
		}));
		expect(exercise12(colorStrippedAuthors, getColorForName)).toStrictEqual(authorTestSet);
	});

	test('Returns [] for an empty test set', () => {
		expect(exercise12([])).toStrictEqual([]);
	});
});
