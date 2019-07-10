

function component() {
	const element = document.createElement('div');

	// Lodash, currently included via a script, is required for this line to work
	// element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.innerHTML = '你好 world';

	element.classList.add('blue');	

	return element;
}

document.body.appendChild(component());