// var name = require('./js/a');


// require('./css/common/base.css')





// import './css/a.css';
// import './css/common/base.css';



// let myName = '熊炬辉'
// console.log(name);

// let arr = [1,2,3];

// let arr2 = arr.map(val => {
//     val + 1
// })

// console.log(arr2);


// let a = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         resolve('成功')
//     }, 3000);
// } )

// a.then( res => {

//     console.log(res)
// })


// class Person {
//     a = 1
// }

// console.log(new Person());


/*
 * expose-loader ：expose加载程序将模块添加到全局对象。 
 * 
 */

 //v1：
// 这里是将jQuery加载到了window对象下

// import $ from 'expose-loader?jQuery!jquery';



//v2:
//在webpack的配置项里配置

// //如果通过cdn引入的
// import $ from "jquery";


// console.log('$', $);
// console.log('window', window.$);


// //图片处理
// import img_src from "./butterfly.jpg";

// console.log('img_src', img_src);


// let img = new Image();
// img.width = 500;
// img.height = 300;

// img.src = img_src;

// document.body.append(img)

import  "./js/ajax";


