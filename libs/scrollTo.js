"use strict";
exports.__esModule = true;
var setScrollTop_1 = require("./setScrollTop");
var getScrollTop_1 = require("./getScrollTop");
var requestAnimationFrame = (function () {
    return (window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        });
})();
/**
 *
 * @desc  在${duration}时间内，滚动条平滑滚动到${to}指定位置
 * @param {Number} to 指定位置
 * @param {Number} duration 滚动时间
 */
function scrollTo(to, duration) {
    if (duration === void 0) { duration = 1000; }
    if (duration < 0) {
        setScrollTop_1["default"](to);
        return;
    }
    var diff = to - getScrollTop_1["default"]();
    if (diff === 0)
        return;
    var step = (diff / duration) * 10;
    requestAnimationFrame(function () {
        if (Math.abs(step) > Math.abs(diff)) {
            setScrollTop_1["default"](getScrollTop_1["default"]() + diff);
            return;
        }
        setScrollTop_1["default"](getScrollTop_1["default"]() + step);
        if ((diff > 0 && getScrollTop_1["default"]() >= to) ||
            (diff < 0 && getScrollTop_1["default"]() <= to)) {
            return;
        }
        scrollTo(to, duration - 16);
    });
}
exports["default"] = scrollTo;
