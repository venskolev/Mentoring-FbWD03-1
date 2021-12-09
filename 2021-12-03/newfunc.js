const colors = ["red", "blue", "green", "yellow", "yellow", "black"];

const printItem = (m) => console.log(m);
const printItemInParenthesis = (m) => console.log(`(${m})`);
const printFunctions = [printItem, printItemInParenthesis];

const processing = {
	location: "berlin",
	funcs: printFunctions,
	manager: "Alex Ashton"
};


// colors.forEach(printItem);
// colors.forEach(printItemInParenthesis);

processing.funcs.forEach(func => colors.forEach(func));

