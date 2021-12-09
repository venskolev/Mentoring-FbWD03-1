const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const colors = ["red", "blue", "green", "yellow", "yellow", "black"];

console.log(nums);
console.log(colors);

for (let i = 0; i < nums.length; i++) {
	console.log(nums[i]);
}
for (let i = 0; i < colors.length; i++) {
	const color = colors[i];
	console.log(color);
}

for (const num of nums) {
	console.log(num);
}
for (const color of colors) {
	console.log(color);
}

for (const num in nums) {
	console.log(num);
}
for (const color in colors) {
	console.log(color);
}

const book = {
	title: "Sapiens",
	author: "Yuval Harari",
	pages: 234
};

for (const prop in book) {
	console.log(prop);
}

console.log(typeof book.title);
console.log(typeof book.author);
console.log(typeof book.pages);

console.log(typeof book);
console.log(typeof nums);
console.log(typeof colors);

console.log(Array.isArray(book));
console.log(Array.isArray(nums));

console.log(Object.keys(book));
console.log(Object.values(book));

console.log(Object.keys(nums));
console.log(Object.values(nums));

console.log(Object.keys(colors));
console.log(Object.values(colors));


const printItem = (m) => console.log(m);
const printItemInParenthesis = (m) => console.log(`(${m})`);
const printFunctions = [printItem, printItemInParenthesis];

nums.forEach(printItemInParenthesis);

const wrapInParentheses = m => `(${m})`;

console.log(nums.map(wrapInParentheses));
console.log(nums.filter(m => m >= 5 && m <=8).map(wrapInParentheses).join('-'));
console.log(colors.map(wrapInParentheses));

console.log(getFullName("Jim"));

function getFullName(firstName = 'unknown', lastName = 'unknown') {
	return `${firstName} ${lastName}`;
}

console.log(getFullName('Axel'));