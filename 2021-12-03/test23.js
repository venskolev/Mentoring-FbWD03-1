const temp = 40;
let feelsLike = '';
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
if (temp > 30) {
	feelsLike = "hot";
} else {
	feelsLike = "cold";
}

console.log(feelsLike);
console.log(temp);
console.log(nums.map(m => m * 5));
console.log(nums.map(m => {
	if (m > 9) {
		return 'too high';
	} else {
		return m * 6;
	}
}));
