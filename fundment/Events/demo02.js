/*
* The eventEmitter.emit() method allows an arbitrary set of arguments to be passed to the listener functions. It is important to keep in mind that when an ordinary listener function is called by the EventEmitter, the standard this keyword is intentionally set to reference the EventEmitter to which the listener is attached.
* */
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', function (a, b) {
  console.log('1*****', a, b, this)
});

myEmitter.emit('event', 'a', 'b');

/*
* It is possible to use ES6 Arrow Functions as listeners, however, when doing so, the this keyword will no longer reference the EventEmitter instance:
* 使用箭头函数，this指向发生变化
* */
const myEmitter2 = new MyEmitter();
myEmitter2.on('click', (a, b) => {
  console.log('2*****', a, b, this)
});

myEmitter2.emit('click', '2', 'heur');
