const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(nums.join(' - '));

let r = '';
nums.forEach(num => r += `[${num}]`);
console.log(r);

console.log(nums.map(num => `[${num}]`).join(' - '));