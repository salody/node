/*
*All objects that emit events are instances of the EventEmitter class. These objects expose an eventEmitter.on() function that allows one or more functions to be attached to named events emitted by the object. Typically, event names are camel-cased strings but any valid JavaScript property key can be used.

 When the EventEmitter object emits an event, all of the functions attached to that specific event are called synchronously. Any values returned by the called listeners are ignored and will be discarded.
* */

/*
* 所有能触发事件的对象都是 EventEmitter 类的实例。 这些对象开放了一个 eventEmitter.on() 函数，允许将一个或多个函数附加到会被对象触发的命名事件上。 事件名称通常是驼峰式的字符串，但也可以使用任何有效的 JavaScript 属性名。
 当 EventEmitter 对象触发一个事件时，所有附加在特定事件上的函数都被同步地调用。 被调用的监听器返回的值都会被忽略并丢弃。
* */

/*
* The following example shows a simple EventEmitter instance with a single listener. The eventEmitter.on() method is used to register listeners, while the eventEmitter.emit() method is used to trigger the event.
* */

const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('hahaha', () => {
  console.log('An event occurred!')
});

myEmitter.on('hahaha', () => {
  console.log('接收到了hahaha事件')
});

myEmitter.emit('hahaha');