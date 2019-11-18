"use strict";
exports.__esModule = true;
/**
 *
 * @desc  设置Cookie
 * @param {String} name
 * @param {String} value
 * @param {Number} days
 */
function setCookie(name, value, days) {
    var date = new Date();
    date.setDate(date.getDate() + Number(days));
    document.cookie = name + "=" + value + ";expires=" + date;
}
exports["default"] = setCookie;
