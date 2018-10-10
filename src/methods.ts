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
  typeArr.map((item, index) => {
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
export function isEmail(emailStr:string): boolean {
  return /^[a-zA-Z0-9]+([._-]*[a-zA-Z0-9]*)*@[a-zA-Z0-9]+.[a-zA-Z0-9{2,5}$]/.test(emailStr);
}


/**
 * 去除多余空格,并返回处理过的str
 * @export
 * @param {string} str
 * @returns {string}
 */
export function trim(str:string): string {
  return str.replace(/^\s+|\s+$/g, "");;
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