// 复制文件
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const originalFile = path.join(__dirname, 'tmp', 'original.txt');
const targetFile = path.join(__dirname, 'tmp', 'target.gz');

const readbleStream = fs.createReadStream(originalFile);

// 若目标文件不存在，则会创建目标文件
const writeableStream = fs.createWriteStream(targetFile);

//readbleStream.pipe(writeableStream);


// 将文件压缩
readbleStream
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream(targetFile));

// 将文件解压，并写入目标文件  
fs.createReadStream('original.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('original.txt'));


// const cp = (sourceFile, targetFile) => {
//   fs.createReadStream(sourceFile).pipe(fs.createWriteStream(targetFile))
// }

// cp(originalFile, targetFile)