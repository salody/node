const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'tmp', 'target.txt');

// 判断是不是文件,判断是不是文件夹
fs.stat(file, (err, stat) => {
  console.log(stat);
  console.log(stat.isFile())
  console.log(stat.isDirectory())
});