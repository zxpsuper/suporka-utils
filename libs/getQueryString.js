"use strict";
exports.__esModule = true;
/**
 * 获取地址栏参数
 * @param name 参数名
 */
function getQueryString(name) {
    var t = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var a = window.location.search.substr(1).match(t);
    if (a != null)
        return a[2].toString();
    return "";
}
exports["default"] = getQueryString;
