/**
 * 功能描述: 图片转base64
 * @author: liuguanbang
 * 2017/9/27
 */

const fs = require('fs');

const bData = fs.readFileSync('./img01.jpeg');
const base64Str = bData.toString('base64');
const datauri = 'data:image/jpeg;base64,' + base64Str;

console.log(datauri);

/*
* <img src='datauri' />
* */