/**
 * 功能描述: User 数据模型
 * @author: liuguanbang
 * 2017/9/27
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
	name: String,
	email: String,
	password: String
});
mongoose.model('User', UserSchema);

// Once we define a model through mongoose.model('ModelName', mySchema), we can access it through the same function
const User = mongoose.model('User');

module.exports = User;