"use strict";
exports.__esModule = true;
/**
 * @param {number} value 距顶部的距离
 * @desc 设置滚动条距顶部的距离
 */
function setScrollTop(value) {
    window.scrollTo(0, value);
    return value;
}
exports["default"] = setScrollTop;
