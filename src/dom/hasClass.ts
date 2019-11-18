/**
 * 判断 dom 元素是否含有该类名
 * @export
 * @param {*} ele dom 元素
 * @param {string} cls 类名
 * @returns {boolean}
 */
export default function hasClass(ele: any, cls: string): boolean {
  return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}
