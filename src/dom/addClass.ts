import hasClass from "./hasClass";
/**
 * 为 dom 元素添加类名
 * @export
 * @param {*} ele dom 元素
 * @param {string} cls 类名
 */
export default function addClass(ele: any, cls: string): void {
  if (!hasClass(ele, cls)) ele.className += " " + cls;
}
