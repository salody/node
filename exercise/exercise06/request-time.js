/**
 * 功能描述: 对请求时间过长而进行提醒的中间件
 *
 * 选项：
 *   - 'time'('Number'):超时阈值(默认100)
 *
 * @param {Object} options
 * @api public
 *
 * @author: liuguanbang
 * 2017/9/26
 */

module.exports = function (options) {
	let time = options.time || 100;

	return function (req, res, next) {
		let timer = setTimeout(function () {
			console.log('\033[33m 请求响应时间过长! \033[0m' , req.method, req.url);
		}, time);

		// 保持对原函数的引用
		let end = res.end;
		// 构造自己的res.end
		res.end = function (chunk, encoding) {
			// 将原函数重新绑定回去
			res.end = end;
			// 执行原函数
			res.end(chunk, encoding);
			// 清除定时器
			clearTimeout(timer);
		};

		next();
	}
};