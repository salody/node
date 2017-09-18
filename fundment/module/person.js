/**
 * 功能描述:
 * 2017/7/11
 * 作者：liuguanbang
 */

const Person = function(name) {
	this.name = name;
};

Person.prototype.talk = function () {
	console.log('我的名字是' + this.name);
};

module.exports = Person;
