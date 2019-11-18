"use strict";
exports.__esModule = true;
/**
 * 时间格式化
 * @export
 * @param {*} date Date对象，string 或 number 的毫秒事件数
 * @param {string} [fmt="yyyy-MM-dd hh:mm:ss"]
 * @returns {string}
 */
function formatDate(date, fmt) {
    if (fmt === void 0) { fmt = "yyyy-MM-dd hh:mm:ss"; }
    if (!date) {
        return "--";
    }
    if (typeof date === "string" && !/-/.test(date))
        date = Number(date);
    date = new Date(date);
    var o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        S: date.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
    return fmt;
}
exports["default"] = formatDate;
