// +=

let age = 33;
// age += 1;
age = age + 1;

console.log(age);

// age -= 10;
age = age - 10;
console.log(age);

console.log(age === 23);

const firstName = "Niko";
const lastName = "Andersberg";
// const name = firstName + " " + lastName;
const name = `${firstName} ${lastName}`;
console.log(name);

const temp = 1;
// let feelsLike = '';
const feelsLike = temp > 30 ? 'hot' : temp > 20 ? 'warm' : temp > 0 ? 'cold' : 'freezing';
// if (temp > 30) {
// 	feelsLike = "hot";
// } else {
// 	feelsLike = "cold";
// }
// if (temp > 30) {
// 	feelsLike = "hot";
// } else {
// 	feelsLike = "cold";
// }
// if (temp > 30) {
// 	feelsLike = "hot";
// } else {
// 	feelsLike = "cold";
// }
console.log(feelsLike);

console.log(Math.floor(Math.random() * 100) + 1)