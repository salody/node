### 让输出的文字带上颜色
"\033[30m 黑色字 \033[0m"

"\033[31m 红色字 \033[0m"

"\033[32m 绿色字 \033[0m"

"\033[33m 黄色字 \033[0m"

"\033[34m 蓝色字 \033[0m"

"\033[35m 紫色字 \033[0m"

"\033[36m 天蓝字 \033[0m"

"\033[37m 白色字 \033[0m"

"\033[90m 深灰字 \033[0m"

"\033[96m 青色字 \033[0m"

**举个列子** 一个红色的输出

console.log('  \033[31m No files to show!\033[m\n');

## 获取环境变量
process.env 是读取系统环境变量的，比如你在启动服务的时候，设置环境变量为production或者development，那么在程序里面就可以通过process.env.ENVNAME获取，因为你在node命令窗口启动时没有设置相关的环境变量，所以就没办法获取到了，你可以试一下NODE_ENV="development" node来启动命令窗口，然后应该就可以获取到了！

## Refusing to install connect as a dependency of itself
package.json中的name一项的名字起得和你要install的东西一样了