/**
 * 功能描述:
 * 2017/7/11
 * 作者：liuguanbang
 */

/*
* ES6的模块是引用传递
* CommonJS的模块是复制一个值传递
* */
const a = require('./module_a');

//const Person = require('./person');

console.log(a.name);
console.log(a.data);
console.log(a.getPrivate());
a.name = 8;
console.log(a.name);

/*
const person = new Person('John');
person.talk();*/
