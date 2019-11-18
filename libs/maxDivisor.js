"use strict";
exports.__esModule = true;
/**
 * 获取最大公约数
 * @export
 * @param num1 数字1
 * @param num2 数字2
 * @return {number}
 */
function maxDivisor(num1, num2) {
    var max = num1 > num2 ? num1 : num2, min = num1 > num2 ? num2 : num1;
    for (var i = min; i >= 1; i--) {
        if (max % i == 0 && min % i == 0) {
            return i;
        }
    }
}
exports["default"] = maxDivisor;
