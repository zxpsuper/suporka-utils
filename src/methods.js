"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    typeArr.map(function (item) {
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
 * 判断是否为中国大陆手机
 * @param phone
 * @returns {boolean}
 */
function isPhone(phone) {
    return /^1[3|4|5|7|8][0-9]{9}$/.test(phone);
}
exports.isPhone = isPhone;
/**
 * 去除多余空格,并返回处理过的str
 * @export
 * @param {string} str
 * @returns {string}
 */
function trim(str) {
    return str.replace(/^\s+|\s+$/g, "");
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
/**
 * 为 判断是否为PC端
 * @export
 * @return {boolean}
 */
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = [
        "Android",
        "iPhone",
        "SymbianOS",
        "Windows Phone",
        "iPad",
        "iPod"
    ];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
exports.IsPC = IsPC;
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
}
exports.getSystem = getSystem;
/**
 * 兼容IE添加事件监听
 * @export
 * @param {string} type 事件名
 * @param {function} fn 处理函数
 */
function handleAddListener(type, fn) {
    if (window.addEventListener) {
        window.addEventListener(type, fn);
    }
    else {
        window.attachEvent("on" + type, fn);
    }
}
exports.handleAddListener = handleAddListener;
/**
 * 获取最小公倍数
 * @export
 * @param num1 数字1
 * @param num2 数字2
 * @return {number}
 */
function minDivisor(num1, num2) {
    var max = num1 > num2 ? num1 : num2, min = num1 > num2 ? num2 : num1;
    for (var i = max; i >= max; i++) {
        if (i % max == 0 && i % min == 0) {
            return i;
        }
    }
}
exports.minDivisor = minDivisor;
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
exports.maxDivisor = maxDivisor;
/**
 * 打印页面加载解析时间
 * @export
 */
function getTiming() {
    try {
        var time = performance.timing;
        var timingObj = {};
        var loadTime = (time.loadEventEnd - time.loadEventStart) / 1000;
        if (loadTime < 0) {
            setTimeout(function () {
                getTiming();
            }, 200);
            return;
        }
        timingObj['重定向时间'] =
            (time.redirectEnd - time.redirectStart) / 1000;
        timingObj['DNS解析时间'] =
            (time.domainLookupEnd - time.domainLookupStart) / 1000;
        timingObj['TCP完成握手时间'] =
            (time.connectEnd - time.connectStart) / 1000;
        timingObj['HTTP请求响应完成时间'] =
            (time.responseEnd - time.requestStart) / 1000;
        timingObj['DOM开始加载前所花费时间'] =
            (time.responseEnd - time.navigationStart) / 1000;
        timingObj['DOM加载完成时间'] =
            (time.domComplete - time.domLoading) / 1000;
        timingObj['DOM结构解析完成时间'] =
            (time.domInteractive - time.domLoading) / 1000;
        timingObj['脚本加载时间'] =
            (time.domContentLoadedEventEnd - time.domContentLoadedEventStart) /
                1000;
        timingObj['onload事件时间'] =
            (time.loadEventEnd - time.loadEventStart) / 1000;
        timingObj['页面完全加载时间'] =
            timingObj['重定向时间'] +
                timingObj['DNS解析时间'] +
                timingObj['TCP完成握手时间'] +
                timingObj['HTTP请求响应完成时间'] +
                timingObj['DOM结构解析完成时间'] +
                timingObj['DOM加载完成时间'];
        for (var item in timingObj) {
            console.log(item + ':' + timingObj[item] + '毫秒(ms)');
        }
        console.log('performance.timing=' + performance.timing);
    }
    catch (e) {
        console.log(e);
    }
}
exports.getTiming = getTiming;
/**
 * 获取地址栏参数
 * @param name 参数名
 */
function getQueryString(name) {
    var t = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    var a = window.location.search.substr(1).match(t);
    if (a != null)
        return a[2].toString();
    return '';
}
exports.getQueryString = getQueryString;
;
