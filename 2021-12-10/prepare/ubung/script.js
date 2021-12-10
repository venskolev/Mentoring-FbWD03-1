const getRange = (start, end) => {
	const arr = [];
	for (let x = start; x <= end; x++) {
		arr.push(x);
	}
	return arr;
}

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num = getRange(1, 100);

num.forEach(num => {
	if (num > 3) {
		console.log(num);
	}
});