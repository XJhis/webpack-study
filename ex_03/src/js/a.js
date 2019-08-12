// var name = 'xjh';

// module.exports = name;

//图片处理
import img_src from "../img/girl.jpeg";

console.log('img_src', img_src);


let img = new Image();
img.width = 500;
img.height = 300;

img.src = img_src;

document.body.append(img)


