/**
 * 功能描述: 一个网络小爬虫
 * @author: liuguanbang
 * 2017/9/26
 */

/*
* jquery中的each方法中使用到了$(this)。这里千万不能用箭头函数，this的改变会坑死你的
* */
const http = require('http');
const cheerio = require('cheerio');
const url = 'http://www.imooc.com/learn/75';

function filterChapter(html) {
	const $ = cheerio.load(html);
	let chapters = $('.chapter');
	//console.log(chapters.children());
	// [{
	// 	chapterTitle: '',
	// 	videos: [{
	// 		title: '',
	// 		id: ''
	// 	}]
	// }]
	const courseData = [];
	chapters.each(function(item) {
		let chapter = $(this);
		let chapterTitle = chapter.find('strong').text().split(chapter.find('.chapter-content').text())[0].trim();
		let videos = chapter.find('.video').children('li');
		let chapterData = {
			chapterTitle,
			videos: []
		};

		videos.each(function(item) {
			let video = $(this).find('.J-media-item');
			let videoTitle = video.text();
			let id = video.attr('href').split('video/')[1];
			chapterData.videos.push({
				title: videoTitle.trim().replace(/\s+\n/, ''),
				id
			})
		});
		courseData.push(chapterData);
	});
	return courseData;
}

function printInfo(courseData) {
	courseData.forEach((item) => {
		let chapterTitle = item.chapterTitle;
		console.log(chapterTitle);
		item.videos.forEach((video) => {
			console.log(`    [${video.id}]: ${video.title}`)
		})
	})
}

http.get(url, (res) => {
	let html = '';
	res.on('data', (data) => { html += data});
	res.on('end', () => {
		let courseData = filterChapter(html);
		printInfo(courseData);
	});
}).on('error', () => console.log("获取出错"));
