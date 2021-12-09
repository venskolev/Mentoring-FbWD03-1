const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const colors = ["red", "green", "blue", "yellow"];

for (const num of nums) {
	console.log(num);
}

for (const num in nums) {
	console.log(num);
}

console.log(Object.keys(nums));
console.log(Object.values(nums));


for (const color in colors) {
	console.log(color);
}
console.log(Object.keys(colors));
console.log(Object.values(colors));

const book = {
	title: "Sapiens",
	author: "Yuval Harari",
	pages: 736
};

for (const prop in book) {
	console.log(prop);
}

console.log(typeof book);
console.log(typeof book.title)
console.log(typeof nums);

console.log(Array.isArray(book));
console.log(Array.isArray(nums));