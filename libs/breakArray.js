"use strict";
exports.__esModule = true;
/**
 * 打乱数组
 * @param a 数组
 */
function breakArray(a) {
    var _a;
    for (var i = a.length; i; i--) {
        var j = Math.floor(Math.random() * i);
        // es6语法
        _a = [a[j], a[i - 1]], a[i - 1] = _a[0], a[j] = _a[1];
    }
    return a;
}
exports["default"] = breakArray;
breakArray.prototype._functionName = "breakArray";
