"use strict";
exports.__esModule = true;
/**
 * 判断是否为中国大陆手机
 * @param phone
 * @returns {boolean}
 */
function isPhone(phone) {
    return /^1[3|4|5|7|8][0-9]{9}$/.test(phone);
}
exports["default"] = isPhone;
