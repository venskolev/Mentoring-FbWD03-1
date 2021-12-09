const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const colors = ["red", "blue", "green", "yellow", "orange"];
console.log(nums.length);

console.log(nums);

for (let x = 0; x <= 20; x = x + 2) {
	console.log(x);
}

for (let i = 0; i < nums.length; i++) {
	console.log(nums[i])
}

for (let i = 0; i < colors.length; i++) {
	console.log(i, colors[i])
}

for (const num of nums) {
	console.log(num);
}

for (const color of colors) {
	console.log(color);
}