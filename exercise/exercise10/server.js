/*
/!**
 * 功能描述: babel变化太大 已经没法写了。回头考虑用redux尝试同构直出
 * @author: liuguanbang
 * 2017/9/28
 *!/

const express = require('express');
const app = express();

var React = require('react');
var ReactDOMServer = require('react-dom/server');
var DOM = React.DOM;
var body = DOM.body;
var div = DOM.div;
var script = DOM.script;

var browserify = require('browserify');
var babelify = require("babelify");

require('babel/register');

var TodoBox = require('./views/index.jsx');

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));

require('babel/reg')({
	ignore: false
});

app.use('/bundle.js', function (req, res) {
	res.setHeader('content-type', 'application/javascript');

	browserify({debug: true})
		.transform(babelify.configure({
			presets: ["react", "es2015"],
			compact: false
		}))
		.require("./app.js", {entry: true})
		.bundle()
		.pipe(res);
});

app.use('/', (req, res) => {
	let data = [
		{
			title: 'Shopping',
			detail: 'Mild'
		},
		{
			title: 'Hair cut',
			detail: '16:33'
		}
	]
	var initialData = JSON.stringify(data);
	var markup = ReactDOMServer.renderToString(React.createElement(TodoBox, {data: data}));

	res.setHeader('Content-Type', 'text/html');

	var html = ReactDOMServer.renderToStaticMarkup(body(null,
		div({id: 'app', dangerouslySetInnerHTML: {__html: markup}}),
		script({
			id: 'initial-data',
			type: 'text/plain',
			'data-json': initialData
		}),
		script({src: '/bundle.js'})
	));

	res.end(html);
});

app.listen(app.get('port'), function () {
	console.log('Express server is listening on port 3000');
});*/
