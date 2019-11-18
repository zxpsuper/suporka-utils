/**
 * @desc 数据类型检测
 * @param obj 待检测的数据
 * @return {String} 类型字符串
 */
export default function type(obj: any): string {
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
