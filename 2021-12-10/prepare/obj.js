const config = {
	theme: 'dark',
	display() {
		return `The theme is: ${this.theme}`
	}
};

console.log(config.theme);
console.log(config.display());