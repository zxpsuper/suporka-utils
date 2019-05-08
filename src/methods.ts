/**
 * @desc 数据类型检测
 * @param obj 待检测的数据
 * @return {String} 类型字符串
 */
export function type(obj: any): string {
  var toString = Object.prototype.toString;
  var toType: any = {};
  var typeArr: Array<string> = [
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
  typeArr.map(item => {
    toType["[object " + item + "]"] = item.toLowerCase();
  });

  return typeof obj !== "object" ? typeof obj : toType[toString.call(obj)];
}

/**
 * 时间格式化
 * @export
 * @param {*} date Date对象，string 或 number 的毫秒事件数
 * @param {string} [fmt="yyyy-MM-dd hh:mm:ss"]
 * @returns {string}
 */
export function formatDate(
  date: any,
  fmt: string = "yyyy-MM-dd hh:mm:ss"
): string {
  if (!date) {
    return "--";
  }
  if (typeof date === "string" && !/-/.test(date)) date = Number(date);
  date = new Date(date);
  var o: any = {
    "M+": date.getMonth() + 1, // 月份
    "d+": date.getDate(), // 日
    "h+": date.getHours(), // 小时
    "m+": date.getMinutes(), // 分
    "s+": date.getSeconds(), // 秒
    "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  }
  return fmt;
}

/**
 * 深拷贝
 * @export
 * @param {*} data
 * @returns {*}
 */
export function deepClone(data: any): any {
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

/**
 * 判断是否为邮箱
 * @export
 * @param {string} emailStr
 * @returns {boolean}
 */
export function isEmail(emailStr: string): boolean {
  return /^[a-zA-Z0-9]+([._-]*[a-zA-Z0-9]*)*@[a-zA-Z0-9]+.[a-zA-Z0-9{2,5}$]/.test(
    emailStr
  );
}

/**
 * 判断是否为中国大陆手机
 * @param phone
 * @returns {boolean}
 */
export function isPhone(phone: string): boolean {
  return /^1[3|4|5|7|8][0-9]{9}$/.test(phone);
}

/**
 * 去除多余空格,并返回处理过的str
 * @export
 * @param {string} str
 * @returns {string}
 */
export function trim(str: string): string {
  return str.replace(/^\s+|\s+$/g, "");
}

/**
 * 判断 dom 元素是否含有该类名
 * @export
 * @param {*} ele dom 元素
 * @param {string} cls 类名
 * @returns {boolean}
 */
export function hasClass(ele: any, cls: string): boolean {
  return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}

/**
 * 为 dom 元素添加类名
 * @export
 * @param {*} ele dom 元素
 * @param {string} cls 类名
 */
export function addClass(ele: any, cls: string): void {
  if (!hasClass(ele, cls)) ele.className += " " + cls;
}

/**
 * 为 dom 元素删除类名
 * @export
 * @param {*} ele dom 元素
 * @param {string} cls 类名
 */
export function removeClass(ele: any, cls: string): void {
  if (hasClass(ele, cls)) {
    let reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
    ele.className = ele.className.replace(reg, " ");
  }
}

/**
 * 为 判断是否为PC端
 * @export
 * @return {boolean}
 */
export function IsPC(): boolean {
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

/**
 * 为判断当前系统 ios 或 android
 * @export
 * @return {boolean}
 */
export function getSystem(): string {
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

/**
 * 兼容IE添加事件监听
 * @export
 * @param {string} type 事件名
 * @param {function} fn 处理函数
 */
export function handleAddListener(type: string, fn: any): void {
  if (window.addEventListener) {
    window.addEventListener(type, fn);
  } else {
    (<any>window).attachEvent("on" + type, fn);
  }
}

/**
 * 获取最小公倍数
 * @export
 * @param num1 数字1
 * @param num2 数字2
 * @return {number}
 */
export function minDivisor(num1: number, num2: number): number {
  let max = num1 > num2 ? num1 : num2,
    min = num1 > num2 ? num2 : num1;
  for (var i = max; i >= max; i++) {
    if (i % max == 0 && i % min == 0) {
      return i;
    }
  }
}

/**
 * 获取最大公约数
 * @export
 * @param num1 数字1
 * @param num2 数字2
 * @return {number}
 */
export function maxDivisor(num1: number, num2: number): number {
  let max = num1 > num2 ? num1 : num2,
    min = num1 > num2 ? num2 : num1;
  for (var i = min; i >= 1; i--) {
    if (max % i == 0 && min % i == 0) {
      return i;
    }
  }
}

/**
 * 打印页面加载解析时间
 * @export
 */
export function getTiming(): void {
  try {
    var time = performance.timing;
    var timingObj: any = {};

    var loadTime = (time.loadEventEnd - time.loadEventStart) / 1000;

    if (loadTime < 0) {
      setTimeout(function() {
        getTiming();
      }, 200);
      return;
    }

    timingObj["重定向时间"] = (time.redirectEnd - time.redirectStart) / 1000;
    timingObj["DNS解析时间"] =
      (time.domainLookupEnd - time.domainLookupStart) / 1000;
    timingObj["TCP完成握手时间"] = (time.connectEnd - time.connectStart) / 1000;
    timingObj["HTTP请求响应完成时间"] =
      (time.responseEnd - time.requestStart) / 1000;
    timingObj["DOM开始加载前所花费时间"] =
      (time.responseEnd - time.navigationStart) / 1000;
    timingObj["DOM加载完成时间"] = (time.domComplete - time.domLoading) / 1000;
    timingObj["DOM结构解析完成时间"] =
      (time.domInteractive - time.domLoading) / 1000;
    timingObj["脚本加载时间"] =
      (time.domContentLoadedEventEnd - time.domContentLoadedEventStart) / 1000;
    timingObj["onload事件时间"] =
      (time.loadEventEnd - time.loadEventStart) / 1000;
    timingObj["页面完全加载时间"] =
      timingObj["重定向时间"] +
      timingObj["DNS解析时间"] +
      timingObj["TCP完成握手时间"] +
      timingObj["HTTP请求响应完成时间"] +
      timingObj["DOM结构解析完成时间"] +
      timingObj["DOM加载完成时间"];

    for (let item in timingObj) {
      console.log(item + ":" + timingObj[item] + "毫秒(ms)");
    }
    console.log("performance.timing=" + performance.timing);
  } catch (e) {
    console.log(e);
  }
}

/**
 * 获取地址栏参数
 * @param name 参数名
 */
export function getQueryString(name: string): string {
  let t = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let a = window.location.search.substr(1).match(t);
  if (a != null) return a[2].toString();
  return "";
}

/**
 * 判断两个变量值是否完全相同
 * @param a 任何类型变量
 * @param b 任何类型变量
 */
export function isEquals(a: any, b: any): boolean {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date)
    return a.getTime() === b.getTime();
  if (!a || !b || (typeof a !== "object" && typeof b !== "object"))
    return a === b;
  if (a.prototype !== b.prototype) return false;
  if (Array.isArray(a) && Array.isArray(b)) a.sort(), b.sort();

  let keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every(k => isEquals(a[k], b[k]));
}

/**
 * 打乱数组
 * @param a 数组
 */
export function breakArray(a: Array<any>): Array<any> {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    // es6语法
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  return a;
}
