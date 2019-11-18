"use strict";
exports.__esModule = true;
var hasClass_1 = require("./hasClass");
/**
 * 为 dom 元素添加类名
 * @export
 * @param {*} ele dom 元素
 * @param {string} cls 类名
 */
function addClass(ele, cls) {
    if (!hasClass_1["default"](ele, cls))
        ele.className += " " + cls;
}
exports["default"] = addClass;
