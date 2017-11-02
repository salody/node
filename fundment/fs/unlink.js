// unlink 删除文件
const fs = require('fs');
const path = require('path');

// 用于连接路径。该方法的主要用途在于，
// 会正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\"。
const file = path.join(__dirname, 'tmp', 'hello.txt');

//在对文件进行删除操作时，先判断文件存在不存在
if (fs.existsSync(file)) {
  fs.unlink(file, (e) => {
    if (e) {
      console.log('删除文件失败');
    }
    console.log('删除文件成功');
  })
} else {
  console.log('要删除的文件不存在');
}
