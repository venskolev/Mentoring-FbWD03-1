const getNumberChanger = (kind) => {
	switch (kind) {
		case 'add':
			return (a, b) => a + b;
		case 'subtract':
			return (a, b) => a - b;
		default:
			return (x) => x;
	}
};

const processTestResult = (tr) => {
	// [345,232,'add']
	// const func = 
	console.log(getNumberChanger(tr[2])(tr[0],tr[1]));
};

const testResults = [
	[3, 6, 'add'],
	[13, 3, 'subtract'],
	[13, 9, 'subtract'],
	[113, 6, 'subtract'],
];


testResults.forEach(tr => processTestResult(tr));

// const x = 100;
// const y = 50;

// const numberChangerFunc = getNumberChanger('subtract');

// console.log(numberChangerFunc(x,y));