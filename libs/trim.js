"use strict";
exports.__esModule = true;
/**
 * 去除多余空格,并返回处理过的str
 * @export
 * @param {string} str
 * @returns {string}
 */
function trim(str) {
    return str.replace(/^\s+|\s+$/g, "");
}
exports["default"] = trim;
