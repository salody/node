/**
 * 功能描述:
 * @author: liuguanbang
 * 2017/9/18
 */

console.log('Hello World');

console.log(left_pad('hello', 20, '1'));

function left_pad(rightStr, num, leftBaseStr) {
    return leftBaseStr.repeat(num) + rightStr;
}
