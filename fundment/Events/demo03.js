/*
* The EventListener calls all listeners synchronously in the order in which they were registered. This is important to ensure the proper sequencing of events and to avoid race conditions or logic errors. When appropriate, listener functions can switch to an asynchronous mode of operation using the setImmediate() or process.nextTick() methods:
* */
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on('event', (a, b) => {
  setImmediate(() => {
    console.log('这个是异步的！')
  })
});

myEmitter.on('event', (a, b) => {
  setTimeout(() => {
    console.log('这个肯定最后一个触发')
  }, 0)
});

myEmitter.on('event', (a, b) => {
  console.log('同步的')
});

myEmitter.on('event', (a, b) => {
  setImmediate(() => {
    console.log('这个啥时候触发呢')
  })
});

myEmitter.on('event', (a, b) => {
  process.nextTick(() => {
    console.log('我猜这个也是异步的！')
  })
});

myEmitter.on('event', (a, b) => {
  process.nextTick(() => {
    console.log('嗯嗯，哈哈哈！')
  })
});

myEmitter.emit('event', '1', '2');

/*
* 先执行同步的
* 然后按顺序执行process.nextTick()的
* 然后按顺序执行setImmediate()的
* setTimeout()和setImmediate()优先级相同
* */