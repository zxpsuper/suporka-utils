"use strict";
exports.__esModule = true;
/**
 * 判断是否为邮箱
 * @export
 * @param {string} emailStr
 * @returns {boolean}
 */
function isEmail(emailStr) {
    return /^[a-zA-Z0-9]+([._-]*[a-zA-Z0-9]*)*@[a-zA-Z0-9]+.[a-zA-Z0-9{2,5}$]/.test(emailStr);
}
exports["default"] = isEmail;
