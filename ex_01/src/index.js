import './style.css';
import img from './chuifengshan.gif';


function component() {
	const element = document.createElement('div');

	// Lodash, currently included via a script, is required for this line to work
	// element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.innerHTML = '你好 world';

	element.classList.add('blue');

	// 将图像添加到我们现有的 div。
	var myIcon = new Image();
	myIcon.src = img;
	element.appendChild(myIcon);

	return element;
}

document.body.appendChild(component());