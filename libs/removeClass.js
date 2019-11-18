"use strict";
exports.__esModule = true;
var hasClass_1 = require("./hasClass");
/**
 * 为 dom 元素删除类名
 * @export
 * @param {*} ele dom 元素
 * @param {string} cls 类名
 */
function removeClass(ele, cls) {
    if (hasClass_1["default"](ele, cls)) {
        var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
        ele.className = ele.className.replace(reg, " ");
    }
}
exports["default"] = removeClass;
