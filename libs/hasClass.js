"use strict";
exports.__esModule = true;
/**
 * 判断 dom 元素是否含有该类名
 * @export
 * @param {*} ele dom 元素
 * @param {string} cls 类名
 * @returns {boolean}
 */
function hasClass(ele, cls) {
    return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}
exports["default"] = hasClass;
