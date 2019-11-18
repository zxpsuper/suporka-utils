import hasClass from "./hasClass";

/**
 * 为 dom 元素删除类名
 * @export
 * @param {*} ele dom 元素
 * @param {string} cls 类名
 */
export default function removeClass(ele: any, cls: string): void {
  if (hasClass(ele, cls)) {
    let reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
    ele.className = ele.className.replace(reg, " ");
  }
}
