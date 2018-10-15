"use strict";
exports.__esModule = true;
/**
 * @desc 数据类型检测
 * @param obj 待检测的数据
 * @return {String} 类型字符串
 */
function type(obj) {
    var toString = Object.prototype.toString;
    var toType = {};
    var typeArr = [
        "Undefined",
        "Null",
        "Boolean",
        "Number",
        "String",
        "Object",
        "Array",
        "Function",
        "Date",
        "RegExp",
        "Error",
        "Arguments"
    ];
    typeArr.map(function (item, index) {
        toType["[object " + item + "]"] = item.toLowerCase();
    });
    return typeof obj !== "object" ? typeof obj : toType[toString.call(obj)];
}
exports.type = type;
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
exports.formatDate = formatDate;
/**
 * 深拷贝
 * @export
 * @param {*} data
 * @returns {*}
 */
function deepClone(data) {
    if (!data || !(data instanceof Object) || typeof data === "function") {
        return data;
    }
    var constructor = data.constructor;
    var result = new constructor();
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            result[key] = deepClone(data[key]);
        }
    }
    return result;
}
exports.deepClone = deepClone;
/**
 * 判断是否为邮箱
 * @export
 * @param {string} emailStr
 * @returns {boolean}
 */
function isEmail(emailStr) {
    return /^[a-zA-Z0-9]+([._-]*[a-zA-Z0-9]*)*@[a-zA-Z0-9]+.[a-zA-Z0-9{2,5}$]/.test(emailStr);
}
exports.isEmail = isEmail;
/**
 * 去除多余空格,并返回处理过的str
 * @export
 * @param {string} str
 * @returns {string}
 */
function trim(str) {
    return str.replace(/^\s+|\s+$/g, "");
    ;
}
exports.trim = trim;
/**
 * 判断 dom 元素是否含有该类名
 * @export
 * @param {*} ele dom 元素
 * @param {string} cls 类名
 * @returns {boolean}
 */
function hasClass(ele, cls) {
    return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}
exports.hasClass = hasClass;
/**
 * 为 dom 元素添加类名
 * @export
 * @param {*} ele dom 元素
 * @param {string} cls 类名
 */
function addClass(ele, cls) {
    if (!hasClass(ele, cls))
        ele.className += " " + cls;
}
exports.addClass = addClass;
/**
 * 为 dom 元素删除类名
 * @export
 * @param {*} ele dom 元素
 * @param {string} cls 类名
 */
function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
        ele.className = ele.className.replace(reg, " ");
    }
}
exports.removeClass = removeClass;
