import fs from 'fs';

const args = process.argv.slice(2);
const siteName = args[0]; // e.g. "test001"
let kind = args[1]; // e.g. "simple", "complex"

// validate and sanitize arguments
if (kind === undefined) {
	kind = 'simple';
}
if (siteName === undefined || !['simple', 'complex'].includes(kind)) {
	console.log('');
	console.log('COMMAND SYNTAX:');
	console.log('node create-site.js [sitename] [kind: simple (default), complex]');
	console.log('');
	console.log('VALID EXAMPLES:');
	console.log('node create-site.js test001')
	console.log('node create-site.js test001 simple')
	console.log('node create-site.js test001 complex')
	console.log('node create-site.js "Berlin MongoDB Conference" complex')
	process.exit();
}
const directoryName = siteName.split('').filter(char => {
	if (char != ' ') {
		return char;
	}
}).join('').trim();

// create site directory
if (!fs.existsSync(directoryName)) {
	fs.mkdirSync(directoryName);
}

// create pages
switch (kind) {
	case "simple":
		fs.writeFileSync(`${directoryName}/index.html`, `<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible"
		  content="IE=edge">
	<meta name="viewport"
		  content="width=device-width, initial-scale=1.0">
	<title>${siteName}</title>
</head>
<body>
<h1>${siteName.toUpperCase()}</h1>
<p>Welcome to this site.</p>
</body>
</html>`);
		break;
	case "complex":
		fs.writeFileSync(`${directoryName}/index.html`, `<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible"
		  content="IE=edge">
	<meta name="viewport"
		  content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="main.css">
	<title>${siteName}</title>
</head>
<body>
<h1>${siteName.toUpperCase()}</h1>
	<p class="message"
	   style="display:none">Welcome to this styled and interactive site.</p>
	<button class="buttonShowMessage">Show Message</button>

	<script>
		const messageElem = document.querySelector('.message');
		const buttonElem = document.querySelector('.buttonShowMessage');
		buttonElem.onclick = () => {
			messageElem.style.display = 'block';
			buttonElem.style.display = 'none';
		}
	</script>
</body>
</html>`);
		fs.writeFileSync(`${directoryName}/main.css`, `body {
	background-color: #333;
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	font-size: 1.6rem;
	padding: 20px;
	color: #ccc;
}`);
}