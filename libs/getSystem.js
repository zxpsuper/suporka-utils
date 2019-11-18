"use strict";
exports.__esModule = true;
/**
 * 为判断当前系统 ios 或 android
 * @export
 * @return {boolean}
 */
function getSystem() {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1; //g
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) {
        //这个是安卓操作系统
        return "android";
    }
    if (isIOS) {
        //这个是ios操作系统
        return "ios";
    }
    return "not android and not ios";
}
exports["default"] = getSystem;
