const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach()
nums.forEach(num => console.log(num + 5));

// for-of
for (const num of nums) {
	console.log(num);
	if (num === 5) {
		break;
	}
}

// for
for (let i = 1; i <= 10; i++) {
	console.log(i);
}

// for-in
for (const index in nums) {
	console.log(nums[index]);
}
