/**
 * 功能描述: process以及node cli
 * 2017/9/18
 * @author: salody
 */

const fs = require('fs');
const {stdin, stdout} = process;

// The process.cwd() method returns the current working directory of the Node.js process.
fs.readdir(process.cwd(), (err, files) => {
    // 保存file的stat
    const stats = [];

    // 输入你的选择
    const read = function () {
        console.log('');
        stdout.write('  \033[33mEnter your choice: \033[39m');
        stdin.resume();
        stdin.setEncoding('utf8');
        stdin.on('data', option)
    };

    // 输入选择后的回调函数
    const option = function (data) {
        const filename = files[Number(data)];
        if (!filename) {
            stdout.write('  \033[31mEnter your choice: \033[39m')
        } else {
            stdin.pause();
            if (stats[Number(data)].isDirectory()) {
                fs.readdir(__dirname + '/' + filename, (err, files) => {
                    if (err) throw err;
                    console.log('');
                    console.log('  (' + files.length + ' files)');
                    files.forEach((file) => {
                        console.log('    -  ' + file);
                    })
                })
            } else {
                fs.readFile(__dirname + '/' + filename, 'utf-8', (err, data) => {
                    if (err) {
                        throw new Error('读取文件错误');
                    }
                    // .匹配除换行符 \n 之外的任何单字符
                    // *匹配前面的子表达式零次或多次
                    // $n 假如第一个参数是 RegExp对象，并且 n 是个小于100的非负整数，那么插入第 n 个括号匹配的字符串
                    console.log('\033[90m' + data.replace(/(.*)/g, '    $1') + '\033[39m');
                })
            }
        }
    };

    console.log('');

    if (!files.length) {
        console.log('  \033[36m No files to show!\033[39m\n');
    }

    console.log('  Select witch file or directory you want to see\n');

    const file = (i) => {
        const filename = files[i];
        fs.stat(__dirname + '/' + filename, (err, stat) => {
            stats.push(stat);
            if (stat.isDirectory()) {
                console.log('    ' + i + '  \033[36m' + filename + '\033[39m');
            } else {
                console.log('    ' + i + '  \033[32m' + filename + '\033[39m');
            }

            if (++i === files.length) {
                read();
            } else {
                file(i);
            }
        })
    };

    file(0);
});