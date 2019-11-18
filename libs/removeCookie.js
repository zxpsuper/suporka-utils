"use strict";
exports.__esModule = true;
var setCookie_1 = require("./setCookie");
/**
 *
 * @desc 根据name删除cookie
 * @param  {String} name
 */
function removeCookie(name) {
    // 设置已过期，系统会立刻删除cookie
    setCookie_1["default"](name, "1", "-1");
}
exports["default"] = removeCookie;
