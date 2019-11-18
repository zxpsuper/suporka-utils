"use strict";
exports.__esModule = true;
/**
 * 兼容IE添加事件监听
 * @export
 * @param {string} type 事件名
 * @param {function} fn 处理函数
 */
function handleAddListener(type, fn) {
    if (window.addEventListener) {
        window.addEventListener(type, fn);
    }
    else {
        window.attachEvent("on" + type, fn);
    }
}
exports["default"] = handleAddListener;
